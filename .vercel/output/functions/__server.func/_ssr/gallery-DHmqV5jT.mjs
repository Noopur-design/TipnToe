import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, T as ArrowUpRight, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as PillRow, i as Photo, n as Modal, o as RingBadge, r as PageCta } from "./ui-DMRWTPDc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DHmqV5jT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var galleryFilters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "classic",
		label: "Classic"
	},
	{
		id: "gel",
		label: "Gel"
	},
	{
		id: "acrylic",
		label: "Acrylic"
	},
	{
		id: "nail-art",
		label: "Nail Art"
	},
	{
		id: "seasonal",
		label: "Seasonal"
	},
	{
		id: "bridal",
		label: "Bridal"
	},
	{
		id: "celeb",
		label: "Celeb Looks"
	}
];
var galleryItems = [
	{
		id: "classic-elegance",
		title: "Classic Elegance",
		category: "classic",
		image: "/images/look-bow.jpg",
		span: 2,
		shape: "2rem 3rem 2.2rem 2.6rem"
	},
	{
		id: "timeless-french",
		title: "Timeless French",
		category: "classic",
		image: "/images/look-swirl.jpg",
		span: 2,
		shape: "2.6rem 1.8rem 2.8rem 2rem"
	},
	{
		id: "custom-nail-art",
		title: "Custom Nail Art",
		category: "nail-art",
		image: "/images/look-wine.jpg",
		span: 2,
		shape: "2rem 2.4rem 3rem 1.8rem"
	},
	{
		id: "soft-glam",
		title: "Soft Glam",
		category: "celeb",
		image: "/images/look-stars.jpg",
		span: 3,
		shape: "3rem 2rem 2.4rem 2.8rem"
	},
	{
		id: "bridal-special",
		title: "Bridal Special",
		category: "bridal",
		image: "/images/look-almond.jpg",
		span: 2,
		shape: "2.2rem 2.8rem 2rem 3rem"
	},
	{
		id: "acrylic-perfection",
		title: "Acrylic Perfection",
		category: "acrylic",
		image: "/images/look-navy.jpg",
		span: 3,
		shape: "2.8rem 2rem 2.4rem 3.2rem"
	},
	{
		id: "minimal-luxury",
		title: "Minimal Luxury",
		category: "gel",
		image: "/images/look-sage.jpg",
		span: 2,
		shape: "2rem 3.2rem 2.4rem 2rem"
	},
	{
		id: "seasonal-inspo",
		title: "Seasonal Inspo",
		category: "seasonal",
		image: "/images/look-olive.jpg",
		span: 2,
		shape: "3rem 2.2rem 2.8rem 2rem"
	},
	{
		id: "trendy-looks",
		title: "Trendy Looks",
		category: "acrylic",
		image: "/images/look-cocoa.jpg",
		span: 2,
		shape: "2.4rem 2rem 3rem 2.2rem"
	},
	{
		id: "client-favourites",
		title: "Client Favourites",
		category: "gel",
		image: "/images/look-bronze.jpg",
		span: 2,
		shape: "2rem 2.6rem 2.2rem 3rem"
	},
	{
		id: "pearl-blush",
		title: "Pearl Blush",
		category: "bridal",
		image: "/images/look-pearl.jpg",
		span: 2,
		shape: "2.6rem 2rem 3rem 2.2rem"
	},
	{
		id: "milk-gold",
		title: "Milk and Gold",
		category: "classic",
		image: "/images/look-milk.jpg",
		span: 2,
		shape: "2rem 3rem 2.4rem 2.6rem"
	},
	{
		id: "plum-silk",
		title: "Plum Silk",
		category: "seasonal",
		image: "/images/look-plum.jpg",
		span: 3,
		shape: "3rem 2.2rem 2.6rem 2rem"
	}
];
function filterGallery(filter) {
	if (filter === "all") return galleryItems;
	return galleryItems.filter((item) => item.category === filter);
}
function categoryLabel(id) {
	return galleryFilters.find((filter) => filter.id === id)?.label ?? id;
}
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [index, setIndex] = (0, import_react.useState)(null);
	const items = filterGallery(filter);
	const active = index != null ? items[index] : null;
	(0, import_react.useEffect)(() => {
		if (index == null) return;
		const onKey = (event) => {
			if (event.key === "ArrowRight") setIndex((current) => current == null ? current : (current + 1) % items.length);
			if (event.key === "ArrowLeft") setIndex((current) => current == null ? current : (current - 1 + items.length) % items.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [index, items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap hero-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Our gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4",
					children: ["Nail Art", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "script script-line spaced",
						children: "Speaks Louder"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "Explore our collection of real work, real clients, and endless inspiration. Every set tells a unique story of beauty, creativity, and confidence."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-visual",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-photo",
					style: { ["--hero-mask"]: "url(/images/opt/hero-stone.webp)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/hero-stone.png",
						alt: "Floral manicure on stone and satin",
						width: 520,
						height: 480,
						sizes: "(max-width: 980px) 88vw, 520px",
						priority: true,
						single: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-2 right-2 hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
						text: "BEAUTY IN EVERY DETAIL",
						label: "Beauty in every detail",
						light: true
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillRow, {
					options: galleryFilters,
					value: filter,
					onChange: (value) => {
						setFilter(value);
						setIndex(null);
					},
					label: "Gallery categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: filter === "all" ? "gallery-grid mt-6" : "gallery-grid flat mt-6",
					children: items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `gallery-card span-${item.span}`,
						style: { borderRadius: item.shape },
						onClick: () => setIndex(itemIndex),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: item.image,
								alt: item.title,
								sizes: "(max-width: 700px) 92vw, 280px"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shade" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "go",
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
							})
						]
					}, item.id))
				}),
				items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted",
					children: "No sets in this edit yet."
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "frame clip-salon zoom aspect-[16/10]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: "/images/salon.jpg",
								alt: "The tipntoe studio interior",
								sizes: "(max-width: 700px) 92vw, 420px"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "script-overlay bottom-16 left-6 text-5xl",
							children: [
								"Real People",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Real Confidence"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "absolute bottom-6 left-6 max-w-[16rem] text-[0.68rem] font-semibold tracking-[0.18em] text-cream",
							children: "OUR CLIENTS, OUR INSPIRATION"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "quote-mark",
						"aria-hidden": true,
						children: "“"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl leading-snug text-heading",
						children: "These are sets made in the studio. Classic, bridal, and the ones clients ask for again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "avatar-stack mt-6",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: "/images/priya.jpg",
								alt: "",
								sizes: "44px"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: "/images/ava.jpg",
								alt: "",
								sizes: "44px"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: "/images/mia.jpg",
								alt: "",
								sizes: "44px"
							})
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageCta, {
			title: "See a set",
			script: "you want?",
			text: "Book a time and tell us which one."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			open: active != null,
			onClose: () => setIndex(null),
			label: active ? active.title : "Gallery image",
			children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: active.image,
				alt: active.title,
				className: "max-h-[70vh] w-full object-cover",
				sizes: "100vw"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: categoryLabel(active.category)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-heading",
					children: active.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						"aria-label": "Previous image",
						onClick: () => setIndex((current) => current == null ? 0 : (current - 1 + items.length) % items.length),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						"aria-label": "Next image",
						onClick: () => setIndex((current) => current == null ? 0 : (current + 1) % items.length),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
					})]
				})]
			})] }) : null
		})
	] });
}
//#endregion
export { GalleryPage as component };
