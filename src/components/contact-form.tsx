import { Mail, Phone, User } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { inquiryTypes } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "phone" | "topic", string>>;

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!validEmail(email)) next.email = "Enter a valid email address.";
    if (phone.trim()) {
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 15) next.phone = "Enter a valid phone number or leave it blank.";
    }
    if (!topic) next.topic = "Choose how we can help.";
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="soft-card p-8" role="status">
        <p className="eyebrow">Message sent</p>
        <h3 className="display mt-3 text-4xl">Thank you, {name.trim().split(" ")[0]}.</h3>
        <p className="lede mt-3">We received your note and will reply at {email.trim()} as soon as the studio opens.</p>
        <button
          type="button"
          className="btn btn-outline mt-6"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setTopic("");
            setMessage("");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <Field id="contact-name" label="Full Name" icon={<User size={16} />} value={name} error={errors.name} onChange={setName} autoComplete="name" />
      <Field id="contact-email" label="Email Address" icon={<Mail size={16} />} value={email} error={errors.email} onChange={setEmail} autoComplete="email" inputMode="email" />
      <Field id="contact-phone" label="Phone Number" icon={<Phone size={16} />} value={phone} error={errors.phone} onChange={setPhone} autoComplete="tel" inputMode="tel" />
      <TopicSelect value={topic} error={errors.topic} onChange={setTopic} />
      <label className="field-wrap area block">
        <span className="sr-only">Your message</span>
        <textarea className="field" placeholder="Your Message (Optional)" value={message} maxLength={800} onChange={(event) => setMessage(event.target.value)} />
      </label>
      {status === "error" ? <p className="field-error">Please fix the highlighted fields.</p> : null}
      <button type="submit" className="btn btn-solid w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
        {status === "loading" ? null : <span className="arrow" aria-hidden>→</span>}
      </button>
    </form>
  );
}

function TopicSelect({ value, error, onChange }: { value: string; error?: string; onChange: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(item: string) {
    onChange(item);
    setOpen(false);
  }

  function onKeyDown(event: ReactKeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActive((current) => {
        const delta = event.key === "ArrowDown" ? 1 : -1;
        return (current + delta + inquiryTypes.length) % inquiryTypes.length;
      });
    } else if (open && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      choose(inquiryTypes[active]!);
    }
  }

  return (
    <div className={`client-field${open ? " open" : ""}`} ref={ref}>
      <button
        type="button"
        className={`field field-select${error ? " invalid" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={error ? true : undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onKeyDown}
      >
        <Mail size={16} aria-hidden />
        <span className={value ? "" : "is-placeholder"}>{value || "How can we help you?"}</span>
      </button>
      {open ? (
        <ul className="client-menu tall" role="listbox" aria-label="How can we help you?">
          {inquiryTypes.map((item, index) => (
            <li key={item}>
              <button
                type="button"
                role="option"
                aria-selected={value === item || (!value && index === active)}
                onMouseEnter={() => setActive(index)}
                onClick={() => choose(item)}
              >
                {item}
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
  id,
  label,
  icon,
  value,
  onChange,
  error,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel";
}) {
  return (
    <label className="field-wrap block" htmlFor={id}>
      <span className="sr-only">{label}</span>
      <span className="field-icon">{icon}</span>
      <input
        id={id}
        className={`field${error ? " invalid" : ""}`}
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
