import { Link, useRouterState } from "@tanstack/react-router";
import { Calendar, Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { nav, site } from "@/data/site";
import { SocialIcon } from "@/components/icons";
import { ShapeDefs } from "@/components/shapes";
import { cn } from "@/lib/cn";

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Tipntoe home">
      <span className="logo-word">tipn</span>
      <span className="logo-script">toe</span>
    </Link>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={cn("site-header", scrolled && "scrolled")}>
      <div className="wrap header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} data-active={pathname === item.to ? "true" : "false"} activeOptions={{ exact: true }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/book" className="btn btn-solid header-book">
            <Calendar size={15} aria-hidden />
            <span className="short">Book</span>
            <span className="long">Book Appointment</span>
            <ArrowRight className="arrow" size={15} aria-hidden />
          </Link>
          <button type="button" className="icon-btn menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open
        ? createPortal(
            <div className="drawer-root" onMouseDown={() => setOpen(false)}>
              <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu" onMouseDown={(event) => event.stopPropagation()}>
                <div className="mb-6 flex items-center justify-between">
                  <Logo />
                  <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
                    <X size={18} />
                  </button>
                </div>
                <nav className="flex flex-col" aria-label="Mobile">
                  {nav.map((item) => (
                    <Link key={item.to} to={item.to} className="nav-link" data-active={pathname === item.to ? "true" : "false"}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link to="/book" className="btn btn-solid mt-8">
                  <Calendar size={16} aria-hidden />
                  Book Appointment
                </Link>
                <p className="mt-auto pt-8 text-sm text-muted">
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                  <br />
                  <a href={site.emailHref}>{site.email}</a>
                </p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="lede mt-4">Nail extensions, nail art, and unhurried appointments in Bandra West.</p>
        </div>
        <div>
          <p className="eyebrow">Visit</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/book">Book Appointment</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Studio</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={site.emailHref}>{site.email}</a>
            </li>
            <li>
              {site.street}
              <br />
              {site.cityLine}
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Follow</p>
          <div className="socials mt-3">
            {site.socials.map((social) => (
              <a key={social.id} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <SocialIcon id={social.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap mt-10 flex flex-col gap-2 border-t border-line pt-4 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© 2026 tipntoe. All rights reserved.</p>
        <p>Mumbai</p>
      </div>
    </footer>
  );
}

function useScrollReveal(pathname: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    // Wait a frame so the fresh route has painted before we measure/observe.
    const raf = window.requestAnimationFrame(() => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("#main .section"));
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      const fold = window.innerHeight * 0.9;
      for (const node of nodes) {
        // Never hide content already on screen — avoids any first-paint flash.
        if (node.getBoundingClientRect().top < fold) {
          node.classList.add("reveal", "in");
        } else {
          node.classList.add("reveal");
          io.observe(node);
        }
      }
      revealCleanup = () => io.disconnect();
    });
    let revealCleanup: (() => void) | undefined;
    return () => {
      window.cancelAnimationFrame(raf);
      revealCleanup?.();
    };
  }, [pathname]);
}

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useScrollReveal(pathname);
  return (
    <>
      <ShapeDefs />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
