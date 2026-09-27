import { createFileRoute } from "@tanstack/react-router";
import { PageCta, Photo } from "@/components/ui";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Our Journey | tipntoe" },
      {
        name: "description",
        content: "How tipntoe began as a small nail studio in Bandra West, Mumbai.",
      },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <>
      <section className="wrap hero-grid">
        <div>
          <p className="eyebrow">Our journey</p>
          <h1 className="display display-xl mt-4">
            How this
            <span className="script script-line spaced">studio began</span>
          </h1>
          <p className="lede mt-5">
            tipntoe started as a single chair in Bandra West. The work was the same then as it is now: extensions and nail art, done slowly, with the shape decided together.
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{ ["--hero-mask" as string]: "url(/images/opt/hero-satin.webp)" }}>
            <Photo src="/images/hero-satin.png" alt="A finished set on brown satin" width={520} height={480} sizes="(max-width: 980px) 88vw, 520px" priority single />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="story-grid">
          <div className="frame clip-salon zoom aspect-[16/11]">
            <Photo src="/images/salon.jpg" alt="The tipntoe studio lounge" sizes="(max-width: 980px) 92vw, 560px" />
          </div>
          <div>
            <p className="eyebrow">The room</p>
            <h2 className="display display-lg mt-3">A chair, then a studio</h2>
            <p className="lede mt-4">
              The first appointments were friends and neighbours. The sets held, so the book filled. The studio grew by one chair at a time, not by adding a rush between guests.
            </p>
            <p className="lede mt-4">
              Today the same artists still do the work. Tools are sterilised between visits, files are single-use, and the price is agreed before the set begins.
            </p>
          </div>
        </div>
      </section>

      <PageCta title="Book a chair" script="and see it" text="The studio is open Monday to Saturday, 11 to 8, and Sunday until 6." />
    </>
  );
}
