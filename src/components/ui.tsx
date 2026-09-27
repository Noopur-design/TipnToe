import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Play, Sparkles, X } from "lucide-react";
import { useEffect, useId, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export function Photo({
  src,
  alt,
  className,
  width,
  height,
  sizes = "(max-width: 700px) 92vw, 480px",
  priority = false,
  single = false,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  single?: boolean;
  style?: CSSProperties;
}) {
  const stem = src.replace(/^\/images\//, "").replace(/\.(jpe?g|png|webp)$/i, "");
  const large = `/images/opt/${stem}.webp`;
  const small = `/images/opt/${stem}-480.webp`;
  return (
    <img
      src={large}
      srcSet={single ? undefined : `${small} 480w, ${large} 960w`}
      sizes={single ? undefined : sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

export function ArrowButton({
  to,
  children,
  variant = "solid",
  className,
  search,
  type = "button",
  onClick,
  disabled,
}: {
  to?: "/" | "/services" | "/gallery" | "/about" | "/contact" | "/book" | "/journey";
  children: ReactNode;
  variant?: "solid" | "light" | "outline";
  className?: string;
  search?: { service?: string; date?: string; time?: string };
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const cls = cn(
    "btn",
    variant === "solid" && "btn-solid",
    variant === "light" && "btn-light",
    variant === "outline" && "btn-outline",
    className,
  );
  const inner = (
    <>
      {children}
      <ArrowRight className="arrow" size={16} aria-hidden />
    </>
  );
  if (to) {
    return (
      <Link to={to} search={to === "/book" ? search : undefined} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}

export function PageCta({ title, script, text }: { title: string; script: string; text: ReactNode }) {
  return (
    <section className="wrap section">
      <div className="wine-shell clip-wave band">
        <div>
          <h2 className="band-title">
            {title}
            <span className="script">{script}</span>
          </h2>
          <p>{text}</p>
        </div>
        <ArrowButton to="/book" variant="light">
          Book Appointment
        </ArrowButton>
      </div>
    </section>
  );
}

export function RingBadge({
  text,
  label,
  onClick,
  light = false,
  play = false,
}: {
  text: string;
  label: string;
  onClick?: () => void;
  light?: boolean;
  play?: boolean;
}) {
  const raw = useId().replace(/:/g, "");
  const pathId = `ring-${raw}`;
  const repeated = `${text} · ${text} · `;
  const inner = (
    <>
      <svg viewBox="0 0 100 100" className="ring-spin" aria-hidden>
        <defs>
          <path id={pathId} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text fill="currentColor" fontSize="6.4" letterSpacing="1.6">
          <textPath href={`#${pathId}`}>{repeated}</textPath>
        </text>
      </svg>
      <span className="ring-core">
        {onClick || play ? <Play size={20} fill="currentColor" aria-hidden /> : <Sparkles size={16} aria-hidden />}
      </span>
    </>
  );
  if (onClick) {
    return (
      <button type="button" className={cn("ring-badge", light && "light")} onClick={onClick} aria-label={label}>
        {inner}
      </button>
    );
  }
  return (
    <div className={cn("ring-badge", light && "light")} aria-hidden>
      {inner}
    </div>
  );
}

export function Stars() {
  return (
    <span className="stars" aria-label="5 stars">
      ★★★★★
    </span>
  );
}

export function Modal({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;
  return createPortal(
    <div className="modal-root" onMouseDown={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function PillRow<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  label: string;
}) {
  return (
    <div className="pill-row" role="tablist" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="tab"
          aria-selected={value === option.id}
          className="pill"
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function CheckDot() {
  return (
    <span className="radio" aria-hidden>
      <Check size={12} />
    </span>
  );
}

export function CircleArrow() {
  return (
    <span className="card-arrow" aria-hidden>
      <ArrowUpRight size={16} />
    </span>
  );
}
