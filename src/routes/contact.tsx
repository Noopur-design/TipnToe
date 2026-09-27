import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { ContactForm } from "@/components/contact-form";
import { SocialIcon } from "@/components/icons";
import { ArrowButton, PageCta, Photo } from "@/components/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | tipntoe" },
      {
        name: "description",
        content: "Visit tipntoe at 14, Turner Road, Bandra West, Mumbai, or write to us. Call +91 22 4893 2160.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="wrap hero-grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="display display-xl mt-4">
            We’d Love
            <br />
            to Hear From <span className="script">You</span>
          </h1>
          <p className="lede mt-5">Have a question, want to book an appointment, or simply want to say hello? We’re here for you.</p>
          <div className="contact-methods mt-8">
            <a href={site.phoneHref} className="method">
              <span className="method-icon"><Phone size={16} /></span>
              <span className="font-semibold text-heading">Call Us</span>
              <span className="text-sm text-muted">{site.phoneDisplay}</span>
            </a>
            <a href={site.emailHref} className="method">
              <span className="method-icon"><Mail size={16} /></span>
              <span className="font-semibold text-heading">Email Us</span>
              <span className="text-sm text-muted">{site.email}</span>
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="method">
              <span className="method-icon"><MapPin size={16} /></span>
              <span className="font-semibold text-heading">Visit Us</span>
              <span className="text-sm text-muted">{site.street}, {site.cityLine}</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-glitter.webp)" }}>
            <Photo src="/images/hero-glitter.png" alt="French manicure with fine gold lines on burgundy velvet" width={520} height={480} sizes="(max-width: 980px) 88vw, 520px" priority single />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="contact-grid">
          <div className="relative">
            <div className="frame clip-salon zoom aspect-[16/11]">
              <Photo src="/images/salon.jpg" alt="The tipntoe reception and styling floor" sizes="(max-width: 980px) 92vw, 560px" />
            </div>
            <p className="absolute bottom-6 left-6 max-w-xs text-xs font-semibold tracking-[0.18em] text-heading">BANDRA WEST, MUMBAI</p>
          </div>
          <div>
            <p className="eyebrow">Send us a message</p>
            <h2 className="display display-lg mt-3">
              Let’s <span className="script">Connect</span>
            </h2>
            <p className="lede mt-3">Write to us. We reply the same day, during studio hours.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section" aria-label="Location">
        <div className="locate-grid">
          <div className="map-frame">
            <Photo src="/images/map.jpg" alt="Map with the studio pin in Bandra West, Mumbai" sizes="(max-width: 700px) 92vw, 360px" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Our location</p>
            <h2 className="display mt-3 text-5xl">Find Us Here</h2>
            <p className="mt-4 flex gap-2 text-muted">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                {site.street}
                <br />
                {site.cityLine}
                <br />
                {site.country}
              </span>
            </p>
            <a className="btn btn-outline mt-6 w-fit" href={site.mapsUrl} target="_blank" rel="noreferrer">
              Get Directions <span className="arrow">→</span>
            </a>
          </div>
          <div className="frame clip-portrait zoom min-h-60">
            <Photo src="/images/storefront.jpg" alt="Evening exterior of the tipntoe studio" className="h-full min-h-60 w-full object-cover" sizes="(max-width: 980px) 92vw, 420px" />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="info-grid">
          <article className="soft-card p-5">
            <Clock size={18} />
            <h2 className="mt-3 font-serif text-3xl text-heading">Business Hours</h2>
            <ul className="hours-list mt-3">
              {site.hours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="soft-card p-5">
            <Calendar size={18} />
            <h2 className="mt-3 font-serif text-3xl text-heading">Book an Appointment</h2>
            <p className="mt-2 text-sm text-muted">Skip the wait and secure your preferred time with our experts.</p>
            <ArrowButton to="/book" variant="outline" className="mt-5">
              Book Now
            </ArrowButton>
          </article>
          <article className="soft-card p-5">
            <Mail size={18} />
            <h2 className="mt-3 font-serif text-3xl text-heading">Follow Us</h2>
            <p className="mt-2 text-sm text-muted">Stay connected for the latest designs, offers, and nail inspiration.</p>
            <div className="socials mt-4">
              {site.socials.map((social) => (
                <a key={social.id} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <SocialIcon id={social.id} />
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <PageCta
        title="We’re here"
        script="to help"
        text={
          <>
            Write to <a href={site.emailHref}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>. We reply the same day, during studio hours.
          </>
        }
      />

      <section id="faq" className="wrap section">
        <h2 className="display display-lg">Questions, answered</h2>
        <div className="mt-4">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className="faq-item">
                <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
                  {item.q}
                  <Plus size={18} className={expanded ? "rotate-45" : ""} />
                </button>
                {expanded ? <p className="pb-4 text-muted">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
