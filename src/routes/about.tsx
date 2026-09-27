import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Flower2, Gem, Heart, Shield } from "lucide-react";
import { useState } from "react";
import { team, testimonials } from "@/data/team";
import { ArrowButton, PageCta, Photo, RingBadge, Stars } from "@/components/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | tipntoe" },
      {
        name: "description",
        content: "Meet the artists at tipntoe, a nail studio in Bandra West, Mumbai, for extensions, nail art, and hand care.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [quote, setQuote] = useState(0);
  const story = testimonials[quote];

  return (
    <>
      <section className="wrap hero-grid">
        <div>
          <p className="eyebrow">About us</p>
          <h1 className="display display-xl mt-4 about-hero-title">
            More Than
            <br />
            Nails
            <span className="script script-line">A Feeling</span>
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <ArrowButton to="/book">Book Appointment</ArrowButton>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-satin.webp)" }}>
            <Photo src="/images/hero-satin.png" alt="French manicure with gold glitter on brown satin" width={520} height={480} sizes="(max-width: 980px) 88vw, 520px" priority single />
          </div>
          <div className="absolute right-4 bottom-4">
            <RingBadge text="TIPNTOE MUMBAI" label="tipntoe Mumbai" light />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="pillar-grid">
          <article className="text-center">
            <span className="feature-icon mx-auto"><Flower2 size={18} /></span>
            <h2 className="mt-3 font-serif text-3xl text-heading">Our Mission</h2>
            <p className="mt-2 text-sm text-muted">Extensions and nail art, with clean tools and enough time for the set.</p>
          </article>
          <article className="text-center">
            <span className="feature-icon mx-auto"><Gem size={18} /></span>
            <h2 className="mt-3 font-serif text-3xl text-heading">Our Vision</h2>
            <p className="mt-2 text-sm text-muted">A Bandra studio people book again because the work holds up.</p>
          </article>
          <article className="text-center">
            <span className="feature-icon mx-auto"><Heart size={18} /></span>
            <h2 className="mt-3 font-serif text-3xl text-heading">Our Promise</h2>
            <p className="mt-2 text-sm text-muted">The price is clear before we start, and the chair is not rushed.</p>
          </article>
        </div>
      </section>

      <section className="wrap section">
        <div className="story-grid">
          <div className="relative">
            <div className="frame clip-salon zoom aspect-[16/11]">
              <Photo src="/images/salon.jpg" alt="Warm salon interior with velvet seating" sizes="(max-width: 980px) 92vw, 560px" />
            </div>
          </div>
          <div className="relative">
            <p className="eyebrow">Our story</p>
            <h2 className="display display-lg mt-3">How this studio began</h2>
            <p className="lede mt-4">
              What began as a small studio is now tipntoe — a room in Bandra for extensions and nail art, built on patience and a close eye for detail.
            </p>
            <Link to="/journey" className="btn btn-outline mt-6">
              Our Journey <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="team-grid">
          <div>
            <p className="eyebrow">Meet our team</p>
            <h2 className="display mt-3 text-5xl">The artists</h2>
            <p className="lede mt-4">Extensions, nail art, and repairs, done by the same small team.</p>
          </div>
          {team.map((artist) => (
            <article key={artist.id} className="team-card">
              <Photo src={artist.image} alt={`${artist.name}, ${artist.role}`} sizes="(max-width: 700px) 88vw, 280px" />
              <div className="team-meta">
                <p className="script text-5xl text-cream">{artist.name}</p>
                <p className="role-pill">{artist.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <div className="frame clip-portrait zoom aspect-[4/3]">
            <Photo src="/images/tools.jpg" alt="Gold-capped polish and professional nail tools" sizes="(max-width: 980px) 92vw, 560px" />
          </div>
          <div>
            <p className="eyebrow">Why tipntoe</p>
            <h2 className="display display-lg mt-3">
              It’s in the <span className="script">Details</span>
            </h2>
            <div className="detail-grid mt-6">
              {[
                { title: "Products we use", text: "Gels and polishes chosen for wear, not just colour", Icon: Gem },
                { title: "Sterilised tools", text: "Cleaned between guests. Files are single-use", Icon: Shield },
                { title: "Made for you", text: "Length and shape decided with you", Icon: Heart },
                { title: "The artists", text: "The same people you meet at the chair", Icon: Flower2 },
              ].map((item) => (
                <div key={item.title}>
                  <item.Icon size={18} />
                  <h3 className="mt-2 font-semibold text-heading">{item.title}</h3>
                  <p className="text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="wine-shell clip-wave on-wine quote-panel">
          <div className="quote-layout">
            <div className="quote-stats">
              {[
                ["Bandra", "West, Mumbai"],
                ["11 to 8", "Monday to Saturday"],
                ["2–3 wks", "Between fills"],
                ["By hand", "Every set"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="stat">{stat}</p>
                  <p className="text-sm text-cream/80">{label}</p>
                </div>
              ))}
            </div>
            <figure className="quote-figure">
              <blockquote>“{story.quote}”</blockquote>
              <figcaption>
                <span className="flex items-center gap-3">
                  {story.name === "Priya S." ? (
                    <Photo src="/images/priya.jpg" alt="" className="h-11 w-11 rounded-full object-cover" sizes="44px" />
                  ) : (
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-sm font-bold text-heading">
                      {story.name.slice(0, 1)}
                    </span>
                  )}
                  <span>
                    <span className="block font-semibold">{story.name}</span>
                    <Stars />
                  </span>
                </span>
                <span className="flex gap-2">
                  <button type="button" className="icon-btn" aria-label="Previous testimonial" onClick={() => setQuote((current) => (current + testimonials.length - 1) % testimonials.length)}>
                    <ChevronLeft size={16} />
                  </button>
                  <button type="button" className="icon-btn" aria-label="Next testimonial" onClick={() => setQuote((current) => (current + 1) % testimonials.length)}>
                    <ChevronRight size={16} />
                  </button>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <PageCta title="Be a part of" script="our story" text="Book a chair and see the work for yourself." />
    </>
  );
}
