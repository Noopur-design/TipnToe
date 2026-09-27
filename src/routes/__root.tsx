import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PageShell } from "@/components/layout";
// Self-hosted fonts (no external CDN dependency, no render-blocking, no FOUT).
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/eb-garamond/500-italic.css";
import "@fontsource/eb-garamond/600-italic.css";
import "@fontsource/allura/400.css";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "tipntoe | Nail Extensions & Nail Art in Mumbai" },
      {
        name: "description",
        content: "Luxury nail extensions, custom nail art, and premium self-care experiences crafted by expert nail artists.",
      },
      { name: "theme-color", content: "#F7F2EB" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  shellComponent: RootShell,
  component: () => (
    <PageShell>
      <Outlet />
    </PageShell>
  ),
  notFoundComponent: () => (
    <div className="wrap section text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="display mt-4 text-6xl">This page isn’t on the books</h1>
      <p className="lede mx-auto mt-4">The page you wanted has moved. Let’s take you back to the studio.</p>
      <Link to="/" className="btn btn-solid mt-8">
        Return home
      </Link>
    </div>
  ),
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>{children}</AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
