import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, T as ArrowUpRight, c as Play, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as PillRow, c as useVideo, i as Modal, o as RingBadge, r as ArrowButton } from "./router-T_zCaRjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BRrgJwPk.js
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
		image: "/images/classic.jpg",
		span: 2,
		shape: "2rem 3rem 2.2rem 2.6rem"
	},
	{
		id: "timeless-french",
		title: "Timeless French",
		category: "classic",
		image: "/images/french.jpg",
		span: 2,
		shape: "2.6rem 1.8rem 2.8rem 2rem"
	},
	{
		id: "custom-nail-art",
		title: "Custom Nail Art",
		category: "nail-art",
		image: "/images/floral.jpg",
		span: 2,
		shape: "2rem 2.4rem 3rem 1.8rem"
	},
	{
		id: "soft-glam",
		title: "Soft Glam",
		category: "celeb",
		image: "/images/softglam.jpg",
		span: 3,
		shape: "3rem 2rem 2.4rem 2.8rem"
	},
	{
		id: "bridal-special",
		title: "Bridal Special",
		category: "bridal",
		image: "/images/hero.jpg",
		span: 2,
		shape: "2.2rem 2.8rem 2rem 3rem"
	},
	{
		id: "acrylic-perfection",
		title: "Acrylic Perfection",
		category: "acrylic",
		image: "/images/goldleaf.jpg",
		span: 3,
		shape: "2.8rem 2rem 2.4rem 3.2rem"
	},
	{
		id: "minimal-luxury",
		title: "Minimal Luxury",
		category: "gel",
		image: "/images/minimal.jpg",
		span: 2,
		shape: "2rem 3.2rem 2.4rem 2rem"
	},
	{
		id: "seasonal-inspo",
		title: "Seasonal Inspo",
		category: "seasonal",
		image: "/images/blossom.jpg",
		span: 2,
		shape: "3rem 2.2rem 2.8rem 2rem"
	},
	{
		id: "trendy-looks",
		title: "Trendy Looks",
		category: "acrylic",
		image: "/images/chrome.jpg",
		span: 2,
		shape: "2.4rem 2rem 3rem 2.2rem"
	},
	{
		id: "client-favourites",
		title: "Client Favourites",
		category: "gel",
		image: "/images/gel.jpg",
		span: 2,
		shape: "2rem 2.6rem 2.2rem 3rem"
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
	const { openVideo } = useVideo();
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
						className: "script script-line",
						children: "Speaks Louder"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "Explore our collection of real work, real clients, and endless inspiration. Every set tells a unique story of beauty, creativity, and confidence."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-hero zoom aspect-[4/5] max-h-[540px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/floral.jpg",
							alt: "Custom floral nail art with pearls",
							style: { objectPosition: "62% 20%" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "script-overlay right-[8%] top-[14%] text-6xl",
						children: [
							"Real",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Nails",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Real",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Stories"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-2 right-2 hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
							text: "BEAUTY IN EVERY DETAIL",
							label: "Beauty in every detail",
							light: true
						})
					})
				]
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: filter === "all" ? "gallery-grid mt-6" : "gallery-grid flat mt-6",
					children: [items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `gallery-card span-${item.span}`,
						style: { borderRadius: item.shape },
						onClick: () => setIndex(itemIndex),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.title
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
					}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "video-card span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow light",
								children: "Video gallery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display light text-4xl",
								children: "Watch Our Nail Transformations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/80",
								children: "From simple to stunning — see the magic happen."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn btn-light w-fit",
								onClick: openVideo,
								children: ["Watch Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "arrow",
									children: "→"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "absolute right-4 bottom-4 h-28 w-36 overflow-hidden rounded-2xl",
								onClick: openVideo,
								"aria-label": "Play nail transformation video",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/softglam.jpg",
									alt: "",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-0 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-12 w-12 place-items-center rounded-full bg-cream text-wine",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
											size: 16,
											fill: "currentColor"
										})
									})
								})]
							})
						]
					})]
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/salon.jpg",
								alt: "The Luxe Nails studio interior"
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
						children: "Every set is a reflection of our passion and your unique style. These are real nails, real clients, and real confidence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "avatar-stack mt-6",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/priya.jpg",
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/ava.jpg",
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/mia.jpg",
								alt: ""
							})
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wine-shell clip-wave flex flex-col items-start justify-between gap-6 px-8 py-14 md:flex-row md:items-center md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display light display-lg",
					children: "Love What You See?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-cream/80",
					children: "Book your appointment and let’s create your next look."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
					to: "/book",
					variant: "light",
					children: "Book Appointment"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			open: active != null,
			onClose: () => setIndex(null),
			label: active ? active.title : "Gallery image",
			children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: active.image,
				alt: active.title,
				className: "max-h-[70vh] w-full object-cover"
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
