import { Mail, Phone, User } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
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
      <label className="field-wrap block">
        <span className="sr-only">How can we help you?</span>
        <Mail size={16} className="field-icon" aria-hidden />
        <select className={`field field-select${errors.topic ? " invalid" : ""}`} value={topic} onChange={(event) => setTopic(event.target.value)} aria-invalid={errors.topic ? true : undefined}>
          <option value="">How can we help you?</option>
          {inquiryTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.topic ? <p className="field-error">{errors.topic}</p> : null}
      </label>
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
