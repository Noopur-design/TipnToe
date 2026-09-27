import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Flower2, Gem, Heart, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { featuredServices } from "@/data/services";
import { site } from "@/data/site";
import { Flourish } from "@/components/shapes";
import { ArrowButton, Photo, RingBadge, Stars } from "@/components/ui";
import { toISODate } from "@/lib/dates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tipntoe | Nail Extensions & Nail Art in Mumbai" },
      {
        name: "description",
        content: "Nail extensions, custom nail art, and careful hand care at tipntoe, Bandra West, Mumbai.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/images/opt/hero-bloom.webp" }],
  }),
  component: HomePage,
});

const studio = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: site.name,
  telephone: "+91-22-4893-2160",
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400050",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Sa 11:00-20:00", "Su 11:00-18:00"],
};

function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(studio) }} />
      <section className="wrap hero-grid pt-4">
        <div>
          <p className="eyebrow">More than a manicure</p>
          <h1 className="display display-xl mt-4">
            Nail
            <span className="script script-line">Extensions</span>
          </h1>
          <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.32em] text-muted">ART · CARE · CONFIDENCE</p>
          <p className="lede mt-4">Premium nail extensions crafted with precision, designed to make you feel extraordinary.</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <ArrowButton to="/book">Book Appointment</ArrowButton>
            <div className="flex items-center gap-3">
              <div className="avatar-stack" aria-hidden>
                <Photo src="/images/priya.jpg" alt="" sizes="44px" />
                <Photo src="/images/ava.jpg" alt="" sizes="44px" />
                <Photo src="/images/mia.jpg" alt="" sizes="44px" />
              </div>
              <div>
                <p className="text-sm font-bold text-heading">
                  4.9/5 <Stars />
                </p>
                <p className="text-xs text-muted">Trusted by 10K+ Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-bloom.webp)" }}>
            <Photo
              src="/images/hero-bloom.png"
              alt="Burgundy floral manicure with gold jewelry"
              width={520}
              height={480}
              sizes="(max-width: 980px) 88vw, 520px"
              priority
              single
            />
          </div>
          <Flourish className="flourish right-[6%] bottom-[10%]" />
          <span className="scroll-cue">Scroll</span>
        </div>
      </section>

      <section className="wrap section" aria-label="Signature looks">
        <div className="card-grid">
          {featuredServices.map((service) => (
            <a key={service.id} href={`/book?service=${service.id}`} className={`organic-card ${service.shape} ${service.tone === "dark" ? "on-dark" : "on-light"}`}>
                <Photo src={service.image} alt={service.name} sizes="(max-width: 700px) 88vw, 280px" />
                <span className="shade" />
                <span className="copy">
                  <span className="card-head">
                    <span className="card-title">{service.name}</span>
                    <span className="card-arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </span>
                  <span className="card-tag">{service.tagline}</span>
                </span>
              </a>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="home-about">
          <div className="relative">
            <div className="frame clip-salon zoom aspect-[16/11]">
              <Photo src="/images/salon.jpg" alt="tipntoe studio with arched mirrors and burgundy chairs" sizes="(max-width: 980px) 92vw, 560px" style={{ objectPosition: "center 60%" }} />
            </div>
            <div className="absolute top-6 right-[-10px] hidden md:block">
              <RingBadge text="LUXURIOUS BEAUTY SELF CARE" label="Luxurious beauty and self care" />
            </div>
          </div>
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="display home-title mt-3">
              <span className="block">Where Art Meets</span>
              <span className="script">Care</span>
            </h2>
            <p className="lede mt-5">
              A studio in Bandra West for extensions, nail art, and appointments that are not rushed. The shape, the colour, and the finish are decided with you.
            </p>
            <ul className="feature-row home-features">
              <li>
                <span className="feature-icon">
                  <Gem size={18} />
                </span>
                <span>
                  <strong>Studio products</strong>
                </span>
              </li>
              <li>
                <span className="feature-icon">
                  <Heart size={18} />
                </span>
                <span>
                  <strong>Sterilised tools</strong>
                </span>
              </li>
              <li>
                <span className="feature-icon">
                  <Flower2 size={18} />
                </span>
                <span>
                  <strong>Nail artists</strong>
                </span>
              </li>
            </ul>
            <div className="home-story">
              <ArrowButton to="/about" variant="outline">
                Our Story
              </ArrowButton>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="book-panel">
          <div>
            <p className="eyebrow light">Book now</p>
            <h2 className="display light book-title">
              Your Next
              <span className="script light">Look Awaits</span>
            </h2>
            <p className="book-note">Choose your service, pick a time, and let us take care of the rest.</p>
          </div>
          <MiniBook />
        </div>
        <p className="sr-only">{site.name}</p>
      </section>
    </>
  );
}

function PickField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const current = options.find((item) => item.value === value);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [open]);

  return (
    <div className={`client-field${open ? " open" : ""}`} ref={root}>
      <button type="button" className="field field-select" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((currentOpen) => !currentOpen)}>
        <Calendar size={16} aria-hidden />
        <span className={current ? "" : "is-placeholder"}>{current?.label ?? label}</span>
      </button>
      {open ? (
        <ul className={`client-menu${options.length > 6 ? " tall" : ""}`} role="listbox" aria-label={label}>
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
    </div>
  );
}

function MiniBook() {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [slot, setSlot] = useState("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const times = ["11:00 AM", "1:00 PM", "4:00 PM", "6:00 PM"];
    const start = new Date();
    start.setDate(start.getDate() + 1);
    const next: { value: string; label: string }[] = [];
    for (let day = 0; day < 10; day += 1) {
      const date = new Date(start);
      date.setDate(start.getDate() + day);
      const iso = toISODate(date);
      const label = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      times.forEach((time) => {
        const weekday = date.getDay();
        if (weekday === 0 && (time === "6:00 PM" || time === "4:00 PM")) return;
        next.push({ value: `${iso}|${time}`, label: `${label} · ${time}` });
      });
    }
    setOptions(next);
  }, []);

  return (
    <form
      className="relative z-10 space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        const [date, time] = slot.split("|");
        navigate({
          to: "/book",
          search: {
            service: service || undefined,
            date: date || undefined,
            time: time || undefined,
          },
        });
      }}
    >
      <PickField
        label="Select Service"
        value={service}
        options={featuredServices.map((item) => ({ value: item.id, label: item.name }))}
        onChange={setService}
      />
      <PickField label="Select Date & Time" value={slot} options={options} onChange={setSlot} />
      <button type="submit" className="btn btn-light w-full">
        Book Appointment <span className="arrow">→</span>
      </button>
    </form>
  );
}
