import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Photo, r as PageCta } from "./ui-CfSGqP4J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journey-BOVQFa0z.js
var import_jsx_runtime = require_jsx_runtime();
function JourneyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap hero-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Our journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4",
					children: ["How this", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "script script-line spaced",
						children: "studio began"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "tipntoe started as a single chair in Bandra West. The work was the same then as it is now: extensions and nail art, done slowly, with the shape decided together."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-visual",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-photo",
					style: { ["--hero-mask"]: "url(/images/opt/hero-satin.webp)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/hero-satin.png",
						alt: "A finished set on brown satin",
						width: 520,
						height: 480,
						sizes: "(max-width: 980px) 88vw, 520px",
						priority: true,
						single: true
					})
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "frame clip-salon zoom aspect-[16/11]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/salon.jpg",
						alt: "The tipntoe studio lounge",
						sizes: "(max-width: 980px) 92vw, 560px"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The room"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display display-lg mt-3",
						children: "A chair, then a studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-4",
						children: "The first appointments were friends and neighbours. The sets held, so the book filled. The studio grew by one chair at a time, not by adding a rush between guests."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-4",
						children: "Today the same artists still do the work. Tools are sterilised between visits, files are single-use, and the price is agreed before the set begins."
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageCta, {
			title: "Book a chair",
			script: "and see it",
			text: "The studio is open Monday to Saturday, 11 to 8, and Sunday until 6."
		})
	] });
}
//#endregion
export { JourneyPage as component };
