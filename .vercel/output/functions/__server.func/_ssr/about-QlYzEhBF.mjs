import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, _ as Flower2, g as Gem, h as Heart, o as Shield, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as Photo, o as RingBadge, r as PageCta, s as Stars, t as ArrowButton } from "./ui-DMRWTPDc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-QlYzEhBF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var team = [
	{
		id: "ava",
		name: "Ava",
		role: "Senior Nail Artist",
		image: "/images/ava.jpg"
	},
	{
		id: "mia",
		name: "Mia",
		role: "Nail Art Specialist",
		image: "/images/mia.jpg"
	},
	{
		id: "zara",
		name: "Zara",
		role: "Extension Expert",
		image: "/images/zara.jpg"
	}
];
var testimonials = [
	{
		id: "priya",
		name: "Priya S.",
		image: "/images/priya.jpg",
		quote: "tipntoe is the only studio I book now. The set is precise, the room is calm, and I leave feeling put together."
	},
	{
		id: "meera",
		name: "Meera K.",
		image: "/images/priya.jpg",
		quote: "I came in before a wedding in Jaipur. They shaped the set to my hands and it still looked right a fortnight later."
	},
	{
		id: "ananya",
		name: "Ananya R.",
		image: "/images/priya.jpg",
		quote: "I came for a repair and left with a set I keep showing friends. Quiet, careful, and genuinely well done."
	}
];
function AboutPage() {
	const [quote, setQuote] = (0, import_react.useState)(0);
	const story = testimonials[quote];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap hero-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "About us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4 about-hero-title",
					children: [
						"More Than",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nails",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script script-line",
							children: "A Feeling"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex flex-wrap items-center gap-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/book",
						children: "Book Appointment"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-visual",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-photo",
					style: { ["--hero-mask"]: "url(/images/opt/hero-satin.webp)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/hero-satin.png",
						alt: "French manicure with gold glitter on brown satin",
						width: 520,
						height: 480,
						sizes: "(max-width: 980px) 88vw, 520px",
						priority: true,
						single: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-4 bottom-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
						text: "TIPNTOE MUMBAI",
						label: "tipntoe Mumbai",
						light: true
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pillar-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl text-heading",
								children: "Our Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Extensions and nail art, with clean tools and enough time for the set."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl text-heading",
								children: "Our Vision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "A Bandra studio people book again because the work holds up."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl text-heading",
								children: "Our Promise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "The price is clear before we start, and the chair is not rushed."
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon zoom aspect-[16/11]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/salon.jpg",
							alt: "Warm salon interior with velvet seating",
							sizes: "(max-width: 980px) 92vw, 560px"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display display-lg mt-3",
							children: "How this studio began"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-4",
							children: "What began as a small studio is now tipntoe — a room in Bandra for extensions and nail art, built on patience and a close eye for detail."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/journey",
							className: "btn btn-outline mt-6",
							children: ["Our Journey ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "arrow",
								children: "→"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "team-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Meet our team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-3 text-5xl",
						children: "The artists"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-4",
						children: "Extensions, nail art, and repairs, done by the same small team."
					})
				] }), team.map((artist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "team-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: artist.image,
						alt: `${artist.name}, ${artist.role}`,
						sizes: "(max-width: 700px) 88vw, 280px"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "team-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "script text-5xl text-cream",
							children: artist.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "role-pill",
							children: artist.role
						})]
					})]
				}, artist.id))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "frame clip-portrait zoom aspect-[4/3]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/tools.jpg",
						alt: "Gold-capped polish and professional nail tools",
						sizes: "(max-width: 980px) 92vw, 560px"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Why tipntoe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display display-lg mt-3",
						children: ["It’s in the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script",
							children: "Details"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "detail-grid mt-6",
						children: [
							{
								title: "Products we use",
								text: "Gels and polishes chosen for wear, not just colour",
								Icon: Gem
							},
							{
								title: "Sterilised tools",
								text: "Cleaned between guests. Files are single-use",
								Icon: Shield
							},
							{
								title: "Made for you",
								text: "Length and shape decided with you",
								Icon: Heart
							},
							{
								title: "The artists",
								text: "The same people you meet at the chair",
								Icon: Flower2
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { size: 18 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-semibold text-heading",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: item.text
							})
						] }, item.title))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wine-shell clip-wave on-wine quote-panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quote-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "quote-stats",
						children: [
							["Bandra", "West, Mumbai"],
							["11 to 8", "Monday to Saturday"],
							["2–3 wks", "Between fills"],
							["By hand", "Every set"]
						].map(([stat, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stat",
							children: stat
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cream/80",
							children: label
						})] }, label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "quote-figure",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
							"“",
							story.quote,
							"”"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: [story.name === "Priya S." ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: "/images/priya.jpg",
								alt: "",
								className: "h-11 w-11 rounded-full object-cover",
								sizes: "44px"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-full bg-cream text-sm font-bold text-heading",
								children: story.name.slice(0, 1)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: story.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "icon-btn",
								"aria-label": "Previous testimonial",
								onClick: () => setQuote((current) => (current + testimonials.length - 1) % testimonials.length),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "icon-btn",
								"aria-label": "Next testimonial",
								onClick: () => setQuote((current) => (current + 1) % testimonials.length),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
							})]
						})] })]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageCta, {
			title: "Be a part of",
			script: "our story",
			text: "Book a chair and see the work for yourself."
		})
	] });
}
//#endregion
export { AboutPage as component };
