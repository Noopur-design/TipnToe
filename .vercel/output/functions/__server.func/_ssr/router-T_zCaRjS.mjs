import { i as __toESM } from "../_runtime.mjs";
import { C as useRouter, X as require_react, _ as Outlet, b as createRootRoute, d as require_react_dom, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, w as require_jsx_runtime, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, a as Sparkles, c as Play, d as Menu, m as Instagram, r as TriangleAlert, t as X, v as Facebook, w as Calendar } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-T_zCaRjS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var site = {
	name: "Luxe Nails",
	phoneDisplay: "+1 (555) 123-4567",
	phoneHref: "tel:+15551234567",
	email: "hello@luxenails.com",
	emailHref: "mailto:hello@luxenails.com",
	street: "123 Beauty Lane",
	cityLine: "New York, NY 10001",
	country: "United States",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=123+Beauty+Lane,+New+York,+NY+10001",
	hours: [
		{
			days: "Monday – Friday",
			time: "10:00 AM – 8:00 PM"
		},
		{
			days: "Saturday",
			time: "9:00 AM – 7:00 PM"
		},
		{
			days: "Sunday",
			time: "10:00 AM – 5:00 PM"
		}
	],
	socials: [
		{
			id: "instagram",
			label: "Instagram",
			href: "https://www.instagram.com/luxenails"
		},
		{
			id: "pinterest",
			label: "Pinterest",
			href: "https://www.pinterest.com/luxenails"
		},
		{
			id: "tiktok",
			label: "TikTok",
			href: "https://www.tiktok.com/@luxenails"
		},
		{
			id: "facebook",
			label: "Facebook",
			href: "https://www.facebook.com/luxenails"
		}
	]
};
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var timeGroups = [
	{
		label: "Morning",
		slots: [
			"9:00 AM",
			"10:00 AM",
			"11:00 AM"
		]
	},
	{
		label: "Afternoon",
		slots: [
			"12:00 PM",
			"1:00 PM",
			"2:00 PM",
			"3:00 PM",
			"4:00 PM"
		]
	},
	{
		label: "Evening",
		slots: [
			"5:00 PM",
			"6:00 PM",
			"7:00 PM"
		]
	}
];
var allTimes = timeGroups.flatMap((group) => [...group.slots]);
var inquiryTypes = [
	"General Inquiry",
	"Appointment",
	"Service Question",
	"Pricing",
	"Other"
];
function SocialIcon({ id }) {
	if (id === "instagram") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
		size: 16,
		"aria-hidden": true
	});
	if (id === "facebook") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
		size: 16,
		"aria-hidden": true
	});
	if (id === "pinterest") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.1-.1-.8-.2-2 0-2.8.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8-3 0-4.9 2.3-4.9 4.8 0 .9.3 1.8.7 2.4.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.3-.5-1.9-2-1.9-3.6 0-2.7 2.3-5.9 6.8-5.9 3.6 0 6 2.6 6 5.4 0 3.7-2.1 6.4-5.1 6.4-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 3c.4 2.6 1.8 4.4 3.8 5.2-1.5.1-2.6-.4-3.5-1.3v7.6c0 4.3-3.2 7.4-7.1 6.6-2.4-.5-4.1-2.6-4.2-5.1-.1-3.4 2.6-6.2 6-6.2.4 0 .8 0 1.2.1v2.6c-.4-.2-.8-.3-1.2-.3-1.9 0-3.3 1.6-3.2 3.4.1 1.6 1.5 2.9 3.1 2.8 1.8-.1 3.1-1.5 3.1-3.3V3h2z" })
	});
}
function ShapeDefs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "shape-defs",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-hero",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.16,0.08 C0.34,0.00 0.52,0.12 0.70,0.03 C0.88,0.00 1.04,0.14 0.97,0.34 C0.90,0.54 1.02,0.74 0.86,0.90 C0.66,1.06 0.38,0.96 0.18,0.98 C0.02,0.92 -0.04,0.70 0.06,0.48 C0.12,0.28 0.00,0.14 0.16,0.08 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-salon",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.02,0.24 C0.12,0.04 0.28,0.14 0.46,0.04 C0.66,-0.02 0.80,0.16 0.94,0.08 C1.06,0.16 1.02,0.40 0.94,0.58 C0.86,0.78 1.00,0.90 0.82,1.00 C0.58,1.06 0.34,0.90 0.16,0.98 C0.02,0.96 -0.04,0.74 0.04,0.52 C0.08,0.34 -0.02,0.32 0.02,0.24 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-portrait",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.22,0.02 C0.46,-0.02 0.68,0.10 0.86,0.04 C1.04,0.10 1.02,0.32 0.92,0.52 C0.84,0.74 0.98,0.92 0.76,1.00 C0.50,1.06 0.24,0.92 0.10,0.78 C-0.02,0.62 0.04,0.36 0.08,0.18 C0.10,0.06 0.08,0.04 0.22,0.02 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-card-a",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.08,0.20 C0.20,0.04 0.42,0.10 0.62,0.02 C0.84,-0.02 1.06,0.16 0.96,0.40 C0.88,0.62 1.02,0.80 0.84,0.96 C0.62,1.08 0.34,0.94 0.14,1.00 C-0.02,0.98 -0.06,0.72 0.06,0.50 C0.14,0.32 -0.02,0.28 0.08,0.20 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-card-b",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.28,0.02 C0.52,-0.04 0.74,0.12 0.92,0.06 C1.08,0.14 0.98,0.40 0.90,0.60 C0.84,0.82 0.98,0.98 0.72,1.02 C0.46,1.04 0.22,0.86 0.10,0.70 C-0.02,0.52 0.08,0.24 0.16,0.10 C0.18,0.04 0.16,0.04 0.28,0.02 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-card-c",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.12,0.14 C0.30,0.00 0.55,0.10 0.76,0.02 C0.98,-0.02 1.08,0.20 0.96,0.42 C0.86,0.66 1.02,0.84 0.80,0.98 C0.54,1.08 0.26,0.94 0.08,0.88 C-0.06,0.74 0.02,0.46 0.04,0.28 C0.05,0.16 0.02,0.18 0.12,0.14 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-card-d",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.24,0.06 C0.48,0.00 0.70,0.14 0.88,0.04 C1.06,0.10 1.00,0.36 0.88,0.58 C0.78,0.82 0.96,1.00 0.70,1.02 C0.42,1.02 0.16,0.84 0.08,0.64 C0.00,0.44 0.10,0.18 0.18,0.08 C0.20,0.04 0.16,0.06 0.24,0.06 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-wave",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.00,0.26 C0.12,0.04 0.20,0.22 0.36,0.08 C0.52,-0.02 0.60,0.20 0.76,0.06 C0.90,0.00 0.96,0.16 1.00,0.22 L1.00,0.72 C0.86,0.98 0.72,0.64 0.56,0.90 C0.40,1.08 0.26,0.68 0.12,0.94 C0.02,1.04 0.00,0.80 0.00,0.66 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-team",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.20,0.04 C0.42,0.00 0.64,0.12 0.84,0.04 C1.02,0.10 1.00,0.34 0.90,0.56 C0.82,0.80 0.98,0.96 0.74,1.02 C0.48,1.04 0.22,0.88 0.08,0.72 C-0.02,0.54 0.06,0.26 0.14,0.12 C0.16,0.06 0.12,0.05 0.20,0.04 Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "clip-blob-note",
				clipPathUnits: "objectBoundingBox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.22,0.08 C0.48,0.00 0.72,0.14 0.90,0.08 C1.04,0.16 1.00,0.42 0.88,0.64 C0.78,0.86 0.92,1.00 0.66,1.02 C0.40,1.02 0.16,0.84 0.08,0.66 C0.00,0.46 0.08,0.20 0.16,0.10 C0.18,0.06 0.12,0.08 0.22,0.08 Z" })
			})
		] })
	});
}
function Flourish({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 220 90",
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 70C36 18 62 78 98 36C124 8 150 62 214 22",
			stroke: "currentColor",
			strokeWidth: "0.8"
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ArrowButton({ to, children, variant = "solid", className, search, type = "button", onClick, disabled }) {
	const cls = cn("btn", variant === "solid" && "btn-solid", variant === "light" && "btn-light", variant === "outline" && "btn-outline", className);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
		className: "arrow",
		size: 16,
		"aria-hidden": true
	})] });
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		search: to === "/book" ? search : void 0,
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cls,
		onClick,
		disabled,
		children: inner
	});
}
function RingBadge({ text, label, onClick, light = false }) {
	const pathId = `ring-${(0, import_react.useId)().replace(/:/g, "")}`;
	const repeated = `${text} · ${text} · `;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "ring-spin",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			id: pathId,
			d: "M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			fill: "currentColor",
			fontSize: "6.4",
			letterSpacing: "1.6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
				href: `#${pathId}`,
				children: repeated
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "ring-core",
		children: onClick ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
			size: 16,
			fill: "currentColor",
			"aria-hidden": true
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			size: 16,
			"aria-hidden": true
		})
	})] });
	if (onClick) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("ring-badge", light && "light"),
		onClick,
		"aria-label": label,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("ring-badge", light && "light"),
		"aria-hidden": true,
		children: inner
	});
}
function Stars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "stars",
		"aria-label": "5 stars",
		children: "★★★★★"
	});
}
function Modal({ open, onClose, label, children }) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
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
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-root",
		onMouseDown: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-card",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": label,
			onMouseDown: (event) => event.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "modal-close",
				onClick: onClose,
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
			}), children]
		})
	}), document.body);
}
var VideoContext = (0, import_react.createContext)({ openVideo: () => {} });
function useVideo() {
	return (0, import_react.useContext)(VideoContext);
}
function VideoProvider({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const api = (0, import_react.useMemo)(() => ({ openVideo: () => setOpen(true) }), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VideoContext.Provider, {
		value: api,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			open,
			onClose: () => setOpen(false),
			label: "Watch our nail transformations",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src: "/video/process.mp4",
				poster: "/images/floral.jpg",
				controls: true,
				autoPlay: true,
				playsInline: true,
				className: "aspect-video w-full bg-black"
			})
		})]
	});
}
function PillRow({ options, value, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pill-row",
		role: "tablist",
		"aria-label": label,
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "tab",
			"aria-selected": value === option.id,
			className: "pill",
			onClick: () => onChange(option.id),
			children: option.label
		}, option.id))
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "logo",
		"aria-label": "Luxe Nails home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "logo-word",
			children: "LUXE"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "logo-script",
			children: "Nails"
		})]
	});
}
function Header() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("site-header", scrolled && "scrolled"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "desktop-nav",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"data-active": pathname === item.to ? "true" : "false",
						activeOptions: { exact: true },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "header-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book",
						className: "btn btn-solid header-book",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
								size: 15,
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "short",
								children: "Book"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "long",
								children: "Book Appointment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "arrow",
								size: 15,
								"aria-hidden": true
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						"aria-label": "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "drawer-root",
			onMouseDown: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "drawer",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Menu",
				onMouseDown: (event) => event.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "icon-btn",
							"aria-label": "Close menu",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col",
						"aria-label": "Mobile",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "nav-link",
							"data-active": pathname === item.to ? "true" : "false",
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book",
						className: "btn btn-solid mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
							size: 16,
							"aria-hidden": true
						}), "Book Appointment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-auto pt-8 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								children: site.phoneDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.emailHref,
								children: site.email
							})
						]
					})
				]
			})
		}) : null]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap footer-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-4",
					children: "Premium nail extensions, artistic designs, and luxurious self-care."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						children: item.label
					}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						children: "Book Appointment"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							children: site.phoneDisplay
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.emailHref,
							children: site.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							site.street,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							site.cityLine
						] })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Follow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "socials mt-3",
					children: site.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: social.href,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": social.label,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, { id: social.id })
					}, social.id))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap mt-10 flex flex-col gap-2 border-t border-line pt-4 text-sm text-muted sm:flex-row sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Luxe Nails. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "New York" })]
		})]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VideoProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapeDefs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#main",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
var styles_default = "/assets/styles-BfY4M_OT.css";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Luxe Nails | Premium Nail Extensions & Nail Art" },
			{
				name: "description",
				content: "Luxury nail extensions, custom nail art, and premium self-care experiences crafted by expert nail artists."
			},
			{
				name: "theme-color",
				content: "#F7F2EB"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "wrap section text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-4 text-6xl",
				children: "This page isn’t on the books"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede mx-auto mt-4",
				children: "The page you wanted has moved. Let’s take you back to the studio."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "btn btn-solid mt-8",
				children: "Return home"
			})
		]
	})
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-C9-85m1Y.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "Luxe Nails | Premium Nail Extensions & Nail Art" }, {
			name: "description",
			content: "Luxury nail extensions, custom nail art, and premium self-care experiences crafted by expert nail artists."
		}],
		links: [{
			rel: "preload",
			as: "image",
			href: "/images/hero.jpg"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-C3eRqudY.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | Luxe Nails" }, {
		name: "description",
		content: "Meet the artists behind Luxe Nails, a premium New York studio for extensions, nail art, and self-care."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./book-CJi4KWEm.mjs");
var Route$3 = createFileRoute("/book")({
	validateSearch: (search) => ({
		service: typeof search.service === "string" ? search.service : void 0,
		date: typeof search.date === "string" ? search.date : void 0,
		time: typeof search.time === "string" ? search.time : void 0
	}),
	head: () => ({ meta: [{ title: "Book Appointment | Luxe Nails" }, {
		name: "description",
		content: "Book a Luxe Nails appointment. Choose a service, date, and time with our nail artists in New York."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-CmqSS38X.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | Luxe Nails" }, {
		name: "description",
		content: "Visit Luxe Nails at 123 Beauty Lane, New York, or send a note. Call +1 (555) 123-4567."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./gallery-BRrgJwPk.mjs");
var Route$1 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery | Luxe Nails" }, {
		name: "description",
		content: "Explore real nail sets from Luxe Nails — classic, gel, acrylic, bridal, and seasonal nail art."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-DmSJgshl.mjs");
var Route = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | Luxe Nails" }, {
		name: "description",
		content: "Classic, gel, and acrylic extensions, custom nail art, and care treatments at Luxe Nails in New York."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	BookRoute: Route$3.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	GalleryRoute: Route$1.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		scrollRestoration: true
	});
}
//#endregion
export { PillRow as a, useVideo as c, allTimes as d, inquiryTypes as f, Modal as i, Flourish as l, timeGroups as m, Route$3 as n, RingBadge as o, site as p, ArrowButton as r, Stars as s, router_exports as t, SocialIcon as u };
