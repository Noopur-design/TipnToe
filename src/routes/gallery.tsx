import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { categoryLabel, filterGallery, galleryFilters, type GalleryFilter } from "@/data/gallery";
import { Modal, PageCta, Photo, PillRow, RingBadge } from "@/components/ui";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | tipntoe" },
      {
        name: "description",
        content: "Nail sets from tipntoe in Mumbai — classic, gel, acrylic, bridal, and seasonal nail art.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [index, setIndex] = useState<number | null>(null);
  const items = filterGallery(filter);
  const active = index != null ? items[index] : null;

  useEffect(() => {
    if (index == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setIndex((current) => (current == null ? current : (current + 1) % items.length));
      if (event.key === "ArrowLeft") setIndex((current) => (current == null ? current : (current - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  return (
    <>
      <section className="wrap hero-grid">
        <div>
          <p className="eyebrow">Our gallery</p>
          <h1 className="display display-xl mt-4">
            Nail Art
            <span className="script script-line spaced">Speaks Louder</span>
          </h1>
          <p className="lede mt-5">
            Explore our collection of real work, real clients, and endless inspiration. Every set tells a unique story of beauty, creativity, and confidence.
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-stone.webp)" }}>
            <Photo src="/images/hero-stone.png" alt="Floral manicure on stone and satin" width={520} height={480} sizes="(max-width: 980px) 88vw, 520px" priority single />
          </div>
          <div className="absolute bottom-2 right-2 hidden md:block">
            <RingBadge text="BEAUTY IN EVERY DETAIL" label="Beauty in every detail" light />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <PillRow options={galleryFilters} value={filter} onChange={(value) => { setFilter(value); setIndex(null); }} label="Gallery categories" />
        <div className={filter === "all" ? "gallery-grid mt-6" : "gallery-grid flat mt-6"}>
          {items.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-card span-${item.span}`}
              style={{ borderRadius: item.shape }}
              onClick={() => setIndex(itemIndex)}
            >
              <Photo src={item.image} alt={item.title} sizes="(max-width: 700px) 92vw, 280px" />
              <span className="shade" />
              <span className="label">{item.title}</span>
              <span className="go" aria-hidden>
                <ArrowUpRight size={16} />
              </span>
            </button>
          ))}
        </div>
        {items.length === 0 ? <p className="mt-6 text-muted">No sets in this edit yet.</p> : null}
      </section>

      <section className="wrap section">
        <div className="split">
          <div className="relative">
            <div className="frame clip-salon zoom aspect-[16/10]">
              <Photo src="/images/salon.jpg" alt="The tipntoe studio interior" sizes="(max-width: 700px) 92vw, 420px" />
            </div>
            <p className="script-overlay bottom-16 left-6 text-5xl">
              Real People
              <br />
              Real Confidence
            </p>
            <p className="absolute bottom-6 left-6 max-w-[16rem] text-[0.68rem] font-semibold tracking-[0.18em] text-cream">OUR CLIENTS, OUR INSPIRATION</p>
          </div>
          <blockquote>
            <p className="quote-mark" aria-hidden>“</p>
            <p className="font-serif text-3xl leading-snug text-heading">These are sets made in the studio. Classic, bridal, and the ones clients ask for again.</p>
            <div className="avatar-stack mt-6" aria-hidden>
              <Photo src="/images/priya.jpg" alt="" sizes="44px" />
              <Photo src="/images/ava.jpg" alt="" sizes="44px" />
              <Photo src="/images/mia.jpg" alt="" sizes="44px" />
            </div>
          </blockquote>
        </div>
      </section>

      <PageCta title="See a set" script="you want?" text="Book a time and tell us which one." />

      <Modal open={active != null} onClose={() => setIndex(null)} label={active ? active.title : "Gallery image"}>
        {active ? (
          <div>
            <Photo src={active.image} alt={active.title} className="max-h-[70vh] w-full object-cover" sizes="100vw" />
            <div className="flex items-center justify-between gap-3 p-4">
              <div>
                <p className="eyebrow">{categoryLabel(active.category)}</p>
                <h2 className="font-serif text-3xl text-heading">{active.title}</h2>
              </div>
              <div className="flex gap-2">
                <button type="button" className="icon-btn" aria-label="Previous image" onClick={() => setIndex((current) => (current == null ? 0 : (current - 1 + items.length) % items.length))}>
                  <ChevronLeft size={18} />
                </button>
                <button type="button" className="icon-btn" aria-label="Next image" onClick={() => setIndex((current) => (current == null ? 0 : (current + 1) % items.length))}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
