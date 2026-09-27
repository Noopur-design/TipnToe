import { Link } from "@tanstack/react-router";
import { Calendar, Check, ChevronLeft, ChevronRight, Clock, Mail, MapPin, Phone, Shield, User } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { allTimes, site, timeGroups } from "@/data/site";
import { getService, priceLabel, serviceFilters, filterServices, type ServiceFilter } from "@/data/services";
import { buildMonth, formatLong, isSlotOpen, parseISODate, parseTimeLabel, startOfDay, toIcsStamp, toISODate } from "@/lib/dates";
import { Photo, PillRow } from "@/components/ui";

const DRAFT_KEY = "luxe-nails-draft-v1";
const CONFIRM_KEY = "luxe-nails-confirmed-v1";

type Step = 1 | 2 | 3 | 4;
type ClientType = "" | "first" | "returning";

type Draft = {
  serviceId: string | null;
  date: string | null;
  time: string | null;
  name: string;
  phone: string;
  email: string;
  clientType: ClientType;
  notes: string;
  step: Step;
};

type Confirmation = {
  id: string;
  serviceName: string;
  price: string;
  duration: string;
  minutes: number;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
};

type FieldErrors = Partial<Record<"service" | "date" | "time" | "name" | "phone" | "email" | "clientType", string>>;

const emptyDraft: Draft = {
  serviceId: null,
  date: null,
  time: null,
  name: "",
  phone: "",
  email: "",
  clientType: "",
  notes: "",
  step: 1,
};

const steps: { id: Step; label: string }[] = [
  { id: 1, label: "Service" },
  { id: 2, label: "Date & Time" },
  { id: 3, label: "Your Details" },
  { id: 4, label: "Confirm" },
];

function isKnownTime(value: string) {
  return (allTimes as readonly string[]).includes(value);
}

function bookingCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint32Array(6);
  crypto.getRandomValues(bytes);
  return `TN-${Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("")}`;
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function sanitize(value: unknown): Draft | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Partial<Draft>;
  const step = raw.step === 2 || raw.step === 3 || raw.step === 4 ? raw.step : 1;
  const serviceId = typeof raw.serviceId === "string" && getService(raw.serviceId) ? raw.serviceId : null;
  const date = typeof raw.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.date) ? raw.date : null;
  const time = typeof raw.time === "string" && isKnownTime(raw.time) ? raw.time : null;
  return {
    serviceId,
    date,
    time,
    name: typeof raw.name === "string" ? raw.name.slice(0, 80) : "",
    phone: typeof raw.phone === "string" ? raw.phone.slice(0, 24) : "",
    email: typeof raw.email === "string" ? raw.email.slice(0, 120) : "",
    clientType: raw.clientType === "first" || raw.clientType === "returning" ? raw.clientType : "",
    notes: typeof raw.notes === "string" ? raw.notes.slice(0, 500) : "",
    step,
  };
}

function validate(draft: Draft, step: Step): FieldErrors {
  const errors: FieldErrors = {};
  if (step >= 1 && !draft.serviceId) errors.service = "Choose a service to continue.";
  if (step >= 2) {
    if (!draft.date) errors.date = "Choose a date.";
    else if (!draft.time || !isSlotOpen(draft.date, draft.time)) errors.time = "Choose an available time.";
  }
  if (step >= 3) {
    if (draft.name.trim().length < 2) errors.name = "Please enter your full name.";
    if (!validPhone(draft.phone)) errors.phone = "Enter a valid phone number.";
    if (!validEmail(draft.email)) errors.email = "Enter a valid email address.";
    if (!draft.clientType) errors.clientType = "Let us know if this is your first visit.";
  }
  return errors;
}

function downloadIcs(item: Confirmation) {
  const parsed = parseTimeLabel(item.time);
  if (!parsed) return;
  const start = parseISODate(item.date);
  start.setHours(parsed.hours, parsed.minutes, 0, 0);
  const end = new Date(start.getTime() + item.minutes * 60 * 1000);
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//tipntoe//Booking//EN",
    "BEGIN:VEVENT",
    `UID:${item.id}@tipntoe.in`,
    `DTSTAMP:${toIcsStamp(new Date())}`,
    `DTSTART:${toIcsStamp(start)}`,
    `DTEND:${toIcsStamp(end)}`,
    `SUMMARY:tipntoe — ${item.serviceName}`,
    `LOCATION:${site.street}\\, ${site.cityLine}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([body], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${item.id}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

export function BookingWizard({
  preset,
}: {
  preset: { service?: string; date?: string; time?: string };
}) {
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [filter, setFilter] = useState<ServiceFilter>("all");
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const [pending, setPending] = useState(false);
  const [month, setMonth] = useState(() => new Date(2026, 8, 1));

  useEffect(() => {
    const now = new Date();
    setMonth(new Date(now.getFullYear(), now.getMonth(), 1));
    let confirmed: Confirmation | null = null;
    if (!preset.service && !preset.date && !preset.time) {
      try {
        const stored = sessionStorage.getItem(CONFIRM_KEY);
        if (stored) confirmed = JSON.parse(stored) as Confirmation;
      } catch {
        confirmed = null;
      }
    }
    if (confirmed?.id && confirmed.serviceName) {
      setConfirmation(confirmed);
      setReady(true);
      return;
    }
    let next = emptyDraft;
    try {
      const saved = sanitize(JSON.parse(localStorage.getItem(DRAFT_KEY) || "null"));
      if (saved) next = saved;
    } catch {
      next = emptyDraft;
    }
    if (preset.service && getService(preset.service)) next = { ...next, serviceId: preset.service };
    if (preset.date && /^\d{4}-\d{2}-\d{2}$/.test(preset.date) && isSlotOpen(preset.date, "11:00 AM", new Date(0))) {
      const day = parseISODate(preset.date);
      if (startOfDay(day) >= startOfDay(now)) next = { ...next, date: preset.date };
    }
    if (preset.time && isKnownTime(preset.time)) next = { ...next, time: preset.time };
    if (next.date && next.time && !isSlotOpen(next.date, next.time, now)) next = { ...next, time: null };
    if (next.serviceId && next.date && next.time) next.step = 3;
    else if (next.serviceId && (next.date || next.time)) next.step = 2;
    else if (preset.service) next.step = 1;
    setDraft(next);
    if (next.date) {
      const day = parseISODate(next.date);
      setMonth(new Date(day.getFullYear(), day.getMonth(), 1));
    }
    setReady(true);
  }, [preset.service, preset.date, preset.time]);

  useEffect(() => {
    if (!ready || confirmation) return;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  }, [draft, ready, confirmation]);

  const today = useMemo(() => startOfDay(new Date()), [ready]);
  const cells = buildMonth(month.getFullYear(), month.getMonth());
  const visible = filterServices(filter);
  const service = getService(draft.serviceId);

  function patch(partial: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...partial }));
  }

  function focusStep(step: Step) {
    document.getElementById(`book-step-${step}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function go(step: Step) {
    if (step <= draft.step) {
      patch({ step });
      setErrors({});
      focusStep(step);
      return;
    }
    for (let index = 1 as Step; index < step; index = (index + 1) as Step) {
      const found = validate({ ...draft, step: index }, index);
      if (Object.keys(found).length) {
        patch({ step: index });
        setErrors(found);
        focusStep(index);
        return;
      }
    }
    patch({ step });
    setErrors({});
    focusStep(step);
  }

  function next() {
    const found = validate(draft, draft.step);
    if (Object.keys(found).length) {
      setErrors(found);
      focusStep(draft.step);
      return;
    }
    setErrors({});
    const step = Math.min(4, draft.step + 1) as Step;
    patch({ step });
    focusStep(step);
  }

  async function confirm() {
    const found = validate(draft, 4);
    if (Object.keys(found).length || !service || !draft.date || !draft.time) {
      const failing = (Object.keys(found).length ? found : { service: "Complete each step before confirming." }) as FieldErrors;
      setErrors(failing);
      if (failing.service) {
        patch({ step: 1 });
        focusStep(1);
      } else if (failing.date || failing.time) {
        patch({ step: 2 });
        focusStep(2);
      } else {
        patch({ step: 3 });
        focusStep(3);
      }
      return;
    }
    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    const record: Confirmation = {
      id: bookingCode(),
      serviceName: service.name,
      price: priceLabel(service.price),
      duration: service.duration,
      minutes: service.minutes,
      date: draft.date,
      time: draft.time,
      name: draft.name.trim(),
      phone: draft.phone.trim(),
      email: draft.email.trim(),
    };
    sessionStorage.setItem(CONFIRM_KEY, JSON.stringify(record));
    localStorage.removeItem(DRAFT_KEY);
    setConfirmation(record);
    setPending(false);
  }

  if (!ready) {
    return (
      <div className="soft-card p-8" aria-busy="true">
        <p className="eyebrow">Book appointment</p>
        <p className="display mt-3 text-4xl">Preparing your visit</p>
      </div>
    );
  }

  if (confirmation) {
    return (
      <div className="soft-card mx-auto max-w-xl p-8 text-center" aria-live="polite">
        <p className="eyebrow">Booking confirmed</p>
        <h2 className="display mt-3 text-5xl">Your appointment is booked.</h2>
        <p className="mt-4 text-muted">
          Booking ID <strong className="text-heading">{confirmation.id}</strong>
        </p>
        <dl className="mt-6 space-y-2 text-left">
          <Row label="Service" value={`${confirmation.serviceName} · ${confirmation.price}`} />
          <Row label="Duration" value={confirmation.duration} />
          <Row label="Date" value={formatLong(confirmation.date)} />
          <Row label="Time" value={confirmation.time} />
          <Row label="Guest" value={confirmation.name} />
          <Row label="Studio" value={`${site.street}, ${site.cityLine}`} />
        </dl>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" className="btn btn-solid" onClick={() => downloadIcs(confirmation)}>
            <Calendar size={16} aria-hidden /> Add to Calendar
          </button>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              sessionStorage.removeItem(CONFIRM_KEY);
              setConfirmation(null);
              setDraft(emptyDraft);
            }}
          >
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="soft-card mb-8 px-4 py-3">
        <div className="progress" aria-label="Booking progress">
          {steps.map((step, index) => (
            <div key={step.id} className="step-item">
              <button type="button" className={draft.step === step.id ? "step-btn on" : "step-btn"} onClick={() => go(step.id)} aria-current={draft.step === step.id ? "step" : undefined}>
                <span className="step-num">{step.id}</span>
                <span>{step.label}</span>
              </button>
              {index < steps.length - 1 ? <span className="step-line" /> : null}
            </div>
          ))}
        </div>
      </div>

      <section id="book-step-1" aria-labelledby="step-service">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 id="step-service" className="display text-4xl md:text-5xl">
                1. Select a Service
              </h2>
              <p className="lede mt-2">Choose the service that suits your style and let us know your preferences.</p>
            </div>
            <PillRow options={serviceFilters} value={filter} onChange={setFilter} label="Service categories" />
          </div>
          {errors.service ? <p className="field-error mb-3">{errors.service}</p> : null}
          <div className="service-grid">
            {visible.map((item) => {
              const selected = draft.serviceId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={selected ? "pick on" : "pick"}
                  aria-pressed={selected}
                  onClick={() => {
                    patch({ serviceId: item.id });
                    setErrors((current) => ({ ...current, service: undefined }));
                  }}
                >
                  <Photo src={item.image} alt="" sizes="(max-width: 700px) 92vw, 320px" />
                  <span className="flex items-start justify-between gap-3 px-4 pt-3">
                    <span>
                      <span className="block font-serif text-2xl leading-none text-heading">{item.name}</span>
                      <span className="mt-1 block text-sm text-muted">{item.description}</span>
                      <span className="mt-2 block text-sm">
                        <span className="price">{priceLabel(item.price)}</span>
                        <span className="text-muted"> · {item.duration}</span>
                      </span>
                    </span>
                    <span className="radio">{selected ? <Check size={12} /> : null}</span>
                  </span>
                </button>
              );
            })}
          </div>
          {visible.length === 0 ? <p className="mt-4 text-muted">Nothing in this category yet.</p> : null}
        </section>

      <div className="book-lower mt-12">
        <section id="book-step-2" aria-labelledby="step-date">
          <h2 id="step-date" className="display text-3xl md:text-4xl">
            2. Select Date & Time
          </h2>
          <p className="lede mt-2">Pick a date and time that works for you.</p>
          <div className="mt-4 grid gap-3 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="soft-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <button type="button" className="icon-btn" aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} disabled={month.getFullYear() === today.getFullYear() && month.getMonth() === today.getMonth()}>
                  <ChevronLeft size={18} />
                </button>
                <p className="font-serif text-2xl text-heading">
                  {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
                <button type="button" className="icon-btn" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="cal">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <span key={day} className="cal-dow">
                    {day}
                  </span>
                ))}
                {cells.map((day, index) =>
                  day ? (
                    <button
                      key={toISODate(day)}
                      type="button"
                      className={`cal-day${draft.date === toISODate(day) ? " on" : ""}${toISODate(day) === toISODate(today) ? " today" : ""}`}
                      disabled={startOfDay(day) < today}
                      onClick={() => {
                        patch({ date: toISODate(day), time: draft.time && isSlotOpen(toISODate(day), draft.time) ? draft.time : null });
                        setErrors((current) => ({ ...current, date: undefined }));
                      }}
                    >
                      {day.getDate()}
                    </button>
                  ) : (
                    <span key={`e-${index}`} />
                  ),
                )}
              </div>
              {errors.date ? <p className="field-error">{errors.date}</p> : null}
            </div>
            <div className="soft-card p-4">
              {timeGroups.map((group) => (
                <div key={group.label} className="mb-4">
                  <p className="mb-2 text-sm font-semibold text-muted">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.slots.map((slot) => {
                      const open = draft.date ? isSlotOpen(draft.date, slot) : false;
                      return (
                        <button
                          key={slot}
                          type="button"
                          className={draft.time === slot ? "slot on" : "slot"}
                          disabled={!draft.date || !open}
                          onClick={() => {
                            patch({ time: slot });
                            setErrors((current) => ({ ...current, time: undefined }));
                          }}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {!draft.date ? <p className="text-sm text-muted">Select a date to see open times.</p> : null}
              {errors.time ? <p className="field-error">{errors.time}</p> : null}
            </div>
          </div>
        </section>

        <section id="book-step-3" aria-labelledby="step-details">
          <h2 id="step-details" className="display text-3xl md:text-4xl">
            3. Your Details
          </h2>
          <p className="lede mt-2">Tell us a bit about yourself.</p>
          <div className="mt-6 space-y-3">
            <Field icon={<User size={16} />} label="Full Name" value={draft.name} error={errors.name} onChange={(name) => patch({ name })} autoComplete="name" />
            <Field icon={<Phone size={16} />} label="Phone Number" value={draft.phone} error={errors.phone} onChange={(phone) => patch({ phone })} autoComplete="tel" inputMode="tel" prefix="+91" />
            <Field icon={<Mail size={16} />} label="Email Address" value={draft.email} error={errors.email} onChange={(email) => patch({ email })} autoComplete="email" inputMode="email" />
            <ClientField value={draft.clientType} error={errors.clientType} onChange={(clientType) => patch({ clientType })} />
            <label className="field-wrap area block">
              <span className="sr-only">Special requests</span>
              <textarea className="field" placeholder="Any special requests? (Optional)" value={draft.notes} maxLength={500} onChange={(event) => patch({ notes: event.target.value })} />
            </label>
          </div>
        </section>

        <section id="book-step-4" aria-labelledby="step-confirm">
          <h2 id="step-confirm" className="display text-3xl md:text-4xl">
            4. Confirm Booking
          </h2>
          <p className="lede mt-2">Review your appointment details.</p>
          <div className="confirm-card mt-4">
            <div className="flex gap-3">
              <Photo src={service?.image ?? "/images/gel.jpg"} alt="" className="h-16 w-16 rounded-2xl object-cover" sizes="64px" />
              <div>
                <p className="font-serif text-2xl leading-none text-heading">{service?.name ?? "Select a service"}</p>
                <p className="price mt-1">{service ? priceLabel(service.price) : "—"}</p>
                <p className="text-sm text-muted">{service?.duration ?? "Duration appears here"}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-heading">
              <li className="flex items-start gap-2"><Calendar size={15} className="mt-0.5 text-muted" /> {draft.date ? formatLong(draft.date) : "Choose a date"}</li>
              <li className="flex items-start gap-2"><Clock size={15} className="mt-0.5 text-muted" /> {draft.time ?? "Choose a time"}</li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 text-muted" /> {site.street}, {site.cityLine}</li>
            </ul>
            {errors.service || errors.date || errors.time || errors.name || errors.phone || errors.email || errors.clientType ? (
              <p className="field-error">Complete the highlighted steps before confirming.</p>
            ) : null}
            <button type="button" className="btn btn-solid mt-5 w-full" onClick={confirm} disabled={pending}>
              {pending ? "Confirming…" : "Confirm Appointment"}
            </button>
            <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-muted">
              <Shield size={14} aria-hidden /> Your information is secure with us.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {draft.step > 1 ? (
          <button type="button" className="btn btn-outline" onClick={() => go((draft.step - 1) as Step)}>
            <ChevronLeft size={16} aria-hidden /> Back
          </button>
        ) : null}
        {draft.step < 4 ? (
          <button type="button" className="btn btn-outline" onClick={next}>
            Continue
          </button>
        ) : null}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line py-2 text-sm">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-semibold text-heading">{value}</dd>
    </div>
  );
}

function ClientField({ value, error, onChange }: { value: ClientType; error?: string; onChange: (value: ClientType) => void }) {
  const [open, setOpen] = useState(false);
  const options: { value: Exclude<ClientType, "">; label: string }[] = [
    { value: "first", label: "First Time Client" },
    { value: "returning", label: "Returning Client" },
  ];
  const current = options.find((item) => item.value === value);

  return (
    <div className={`client-field${open ? " open" : ""}`}>
      <button
        type="button"
        className={`field field-select${error ? " invalid" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((currentOpen) => !currentOpen)}
      >
        <User size={16} aria-hidden />
        <span className={current ? "" : "is-placeholder"}>{current?.label ?? "First Time or Returning Client?"}</span>
      </button>
      {open ? (
        <ul className="client-menu" role="listbox" aria-label="First time or returning client">
          {options.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                role="option"
                aria-selected={value === item.value}
                onClick={() => {
                  onChange(item.value);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

function Field({
  icon,
  label,
  value,
  onChange,
  error,
  autoComplete,
  inputMode,
  prefix,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
  inputMode?: "tel" | "email";
  prefix?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="field-wrap block" htmlFor={id}>
      <span className="sr-only">{label}</span>
      <span className="field-icon">{icon}</span>
      {prefix ? <span className="phone-prefix">{prefix}</span> : null}
      <input
        id={id}
        className={`field${prefix ? " with-prefix" : ""}${error ? " invalid" : ""}`}
        placeholder={label}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="field-error">{error}</p> : null}
    </label>
  );
}
