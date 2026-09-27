import { createFileRoute } from "@tanstack/react-router";
import { Clock, Flower2, Gem, Heart, Shield } from "lucide-react";
import { BookingWizard } from "@/components/booking-wizard";
import { Photo, RingBadge } from "@/components/ui";

type BookSearch = {
  service?: string;
  date?: string;
  time?: string;
};

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): BookSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
    date: typeof search.date === "string" ? search.date : undefined,
    time: typeof search.time === "string" ? search.time : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book Appointment | tipntoe" },
      {
        name: "description",
        content: "Book a tipntoe appointment in Bandra West. Choose a service, date, and time.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const search = Route.useSearch();
  return (
    <>
      <section className="wrap book-hero">
        <div>
          <p className="eyebrow">Book appointment</p>
          <h1 className="display display-xl mt-4">
            Your Next
            <span className="script script-line">Look Awaits</span>
          </h1>
          <p className="lede mt-5">
            Book your appointment and let our expert nail artists take care of the rest. Beautiful nails, a more confident you.
          </p>
          <ul className="feature-row">
            <li>
              <span className="feature-icon"><Gem size={18} /></span>
              <span><strong>Premium Experience</strong></span>
            </li>
            <li>
              <span className="feature-icon"><Shield size={18} /></span>
              <span><strong>Hygienic & Safe</strong></span>
            </li>
            <li>
              <span className="feature-icon"><Flower2 size={18} /></span>
              <span><strong>Expert Nail Artists</strong></span>
            </li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-bloom.webp)" }}>
            <Photo src="/images/hero-bloom.png" alt="Burgundy floral manicure with gold jewelry" width={520} height={480} sizes="(max-width: 980px) 88vw, 520px" priority single />
          </div>
          <div className="absolute right-2 bottom-6">
            <RingBadge text="BEAUTY IN EVERY DETAIL" label="Beauty in every detail" />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <BookingWizard preset={search} />
      </section>

      <section className="wrap section">
        <div className="cta-stage">
          <div className="wine-shell clip-wave on-wine book-why">
            <div className="frame clip-salon overflow-hidden">
              <Photo src="/images/salon.jpg" alt="The studio lounge" className="aspect-[16/10] w-full object-cover" sizes="(max-width: 980px) 92vw, 520px" />
            </div>
            <div>
              <h2 className="display light book-why-title">Why book with us?</h2>
              <ul className="feature-row">
              <li>
                <span className="feature-icon"><Shield size={18} /></span>
                <span>
                  <strong>Book online</strong>
                  <small>Pick a service, a day, and a time.</small>
                </span>
              </li>
              <li>
                <span className="feature-icon"><Heart size={18} /></span>
                <span>
                  <strong>Your set</strong>
                  <small>Tell us the length, shape, and occasion.</small>
                </span>
              </li>
              <li>
                <span className="feature-icon"><Clock size={18} /></span>
                <span>
                  <strong>Studio hours</strong>
                  <small>Monday to Saturday, 11 to 8. Sunday until 6.</small>
                </span>
              </li>
              <li>
                <span className="feature-icon"><Flower2 size={18} /></span>
                <span>
                  <strong>The room</strong>
                  <small>Quiet, and the chair is yours for the full appointment.</small>
                </span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
