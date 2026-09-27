import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Flower2, Gem, Heart, Paintbrush, Shield, Sparkles, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { featuredServices, filterServices, priceLabel, serviceFilters, services, type ServiceFilter } from "@/data/services";
import { PageCta, Photo, PillRow } from "@/components/ui";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | tipntoe" },
      {
        name: "description",
        content: "Classic, gel, and acrylic extensions, nail art, and hand care at tipntoe, Bandra West, Mumbai.",
      },
    ],
  }),
  component: ServicesPage,
});

const extraIcons = {
  "nail-repair": Shield,
  "french-tips": Paintbrush,
  "chrome-finish": Sparkles,
  "matte-finish": SunMedium,
  "nail-removal": Droplets,
  "paraffin-treatment": Flower2,
} as const;

function ServicesPage() {
  const [filter, setFilter] = useState<ServiceFilter>("all");
  const [saved, setSaved] = useState<string[]>([]);
  const shown = filter === "all" ? featuredServices : filterServices(filter);
  const extras = services.filter((service) => !service.featured && (filter === "all" || service.category === filter));

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("luxe-favs") || "[]");
      if (Array.isArray(raw)) setSaved(raw.filter((item) => typeof item === "string"));
    } catch {
      setSaved([]);
    }
  }, []);

  function toggle(id: string) {
    setSaved((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      localStorage.setItem("luxe-favs", JSON.stringify(next));
      return next;
    });
  }

  return (
    <>
      <section className="wrap hero-grid">
        <div>
          <p className="eyebrow">Our services</p>
          <h1 className="display display-xl mt-4">
            More Than
            <span className="script script-line spaced">Nail Extensions</span>
          </h1>
          <p className="lede mt-5">Extensions, nail art, and hand care, finished with the same care on every visit.</p>
          <ul className="feature-row">
            <li>
              <span className="feature-icon"><Gem size={18} /></span>
              <span><strong>Premium Products</strong></span>
            </li>
            <li>
              <span className="feature-icon"><Flower2 size={18} /></span>
              <span><strong>Hygienic & Safe</strong></span>
            </li>
            <li>
              <span className="feature-icon"><Heart size={18} /></span>
              <span><strong>Expert Nail Artists</strong></span>
            </li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-petal.webp)" }}>
            <Photo src="/images/hero-petal.png" alt="French manicure with floral gold detail on velvet" width={520} height={480} sizes="(max-width: 980px) 88vw, 520px" priority single />
          </div>
        </div>
      </section>

      <section className="wrap pb-8" aria-label="Service categories">
        <div className="svc-feature-grid">
          {featuredServices.map((service) => (
            <Link key={service.id} to="/book" search={{ service: service.id }} className="svc-feature">
              <Photo src={service.image} alt="" sizes="(max-width: 700px) 42vw, 240px" />
              <span className="svc-name">{service.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <div className="relative">
            <div className="frame clip-salon zoom aspect-[16/11]">
              <Photo src="/images/artist.jpg" alt="A nail artist finishing a burgundy manicure" sizes="(max-width: 980px) 92vw, 560px" />
            </div>
          </div>
          <div className="relative">
            <p className="eyebrow">Our services</p>
            <h2 className="display display-lg mt-3">
              Services Designed
              <span className="script script-line spaced">Around You</span>
            </h2>
            <p className="lede mt-4">
              Classic, gel, or nail art. Each one is shaped for your nail and the way you use your hands.
            </p>
          </div>
        </div>
      </section>

      <section id="signature" className="wrap section">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display display-lg">Our Signature Services</h2>
          <PillRow options={serviceFilters} value={filter} onChange={setFilter} label="Filter services" />
        </div>
        <div className="service-grid">
          {shown.map((service) => (
            <article key={service.id} className="sig-card lift">
              <div className="relative overflow-hidden">
                <Photo src={service.image} alt={service.name} sizes="(max-width: 700px) 92vw, 280px" />
                {service.popular ? <span className="chip absolute top-3 left-3">Most Popular</span> : null}
                <button
                  type="button"
                  className={saved.includes(service.id) ? "heart on absolute top-3 right-3" : "heart absolute top-3 right-3"}
                  aria-pressed={saved.includes(service.id)}
                  aria-label={saved.includes(service.id) ? `Unsave ${service.name}` : `Save ${service.name}`}
                  onClick={() => toggle(service.id)}
                >
                  <Heart size={16} fill={saved.includes(service.id) ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-serif text-2xl text-heading">{service.name}</h3>
                <p className="mt-1 text-sm text-muted">{service.description}</p>
                <p className="mt-3 text-sm">
                  <span className="price">{priceLabel(service.price)}</span>
                  <span className="text-muted"> · {service.duration}</span>
                </p>
                <Link to="/book" search={{ service: service.id }} className="btn btn-outline mt-4">
                  Book Now <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {shown.length === 0 ? <p className="mt-4 text-muted">No services in this category.</p> : null}
      </section>

      {extras.length ? (
        <section className="wrap section" aria-label="Additional services">
          <h2 className="display display-lg">Additional Services</h2>
            <p className="lede mt-2">Finishes and care you can add to a set.</p>
            <div className="extra-grid mt-6">
              {extras.map((service) => {
                const Icon = extraIcons[service.id as keyof typeof extraIcons] ?? Sparkles;
                return (
                  <Link key={service.id} to="/book" search={{ service: service.id }} className="lift p-3 text-center no-underline">
                    <span className="feature-icon mx-auto">
                      <Icon size={18} />
                    </span>
                    <span className="mt-3 block font-semibold text-heading">{service.name}</span>
                    <span className="price text-sm">{priceLabel(service.price)}</span>
                  </Link>
                );
              })}
            </div>
        </section>
      ) : null}

      <PageCta title="Ready for your" script="next look?" text="Choose a service and a time. We will have the chair ready." />
    </>
  );
}
