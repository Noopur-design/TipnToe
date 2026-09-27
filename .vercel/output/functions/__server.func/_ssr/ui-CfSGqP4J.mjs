import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, d as require_react_dom, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, a as Sparkles, c as Play, t as X } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-avF-vMbE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-CfSGqP4J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function Photo({ src, alt, className, width, height, sizes = "(max-width: 700px) 92vw, 480px", priority = false, single = false, style }) {
	const stem = src.replace(/^\/images\//, "").replace(/\.(jpe?g|png|webp)$/i, "");
	const large = `/images/opt/${stem}.webp`;
	const small = `/images/opt/${stem}-480.webp`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: large,
		srcSet: single ? void 0 : `${small} 480w, ${large} 960w`,
		sizes: single ? void 0 : sizes,
		alt,
		width,
		height,
		className,
		style,
		loading: priority ? "eager" : "lazy",
		decoding: "async",
		fetchPriority: priority ? "high" : "auto"
	});
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
function PageCta({ title, script, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "wrap section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wine-shell clip-wave band",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "band-title",
				children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "script",
					children: script
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
				to: "/book",
				variant: "light",
				children: "Book Appointment"
			})]
		})
	});
}
function RingBadge({ text, label, onClick, light = false, play = false }) {
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
		children: onClick || play ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
			size: 20,
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
//#endregion
export { PillRow as a, Photo as i, Modal as n, RingBadge as o, PageCta as r, Stars as s, ArrowButton as t };
