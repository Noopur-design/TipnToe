import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronLeft, _ as Flower2, c as Play, g as Gem, h as Heart, o as Shield, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { c as useVideo, o as RingBadge, r as ArrowButton, s as Stars } from "./router-T_zCaRjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C3eRqudY.js
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
		quote: "Luxe Nails is my go-to place! The team is so talented and the experience is always so luxurious. I leave feeling more confident every time."
	},
	{
		id: "elena",
		name: "Elena M.",
		image: "/images/priya.jpg",
		quote: "Every detail felt considered — the lighting, the tea, the way my set was shaped to my hands. I booked the next visit before I left."
	},
	{
		id: "hannah",
		name: "Hannah K.",
		image: "/images/priya.jpg",
		quote: "I came in for a repair and left with a set I keep showing people. Quiet, precise, and genuinely luxurious."
	}
];
function AboutPage() {
	const { openVideo } = useVideo();
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
					className: "display display-xl mt-4",
					children: [
						"More Than",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nails,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script script-line",
							children: "A Feeling"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "At Luxe Nails, we believe nail extensions are more than beauty — they’re a form of self-expression, confidence, and care. Our mission is to make every visit a luxurious and personalized experience."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/book",
						children: "Book Appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex items-center gap-3 text-left",
						onClick: openVideo,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-full border border-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								size: 16,
								fill: "currentColor"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold text-heading",
							children: "Watch Our Story"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: "2 min"
						})] })]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-portrait zoom aspect-[4/5] max-h-[560px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/softglam.jpg",
							alt: "Soft glam manicure on silk",
							style: { objectPosition: "center 20%" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "script-overlay right-[6%] top-[12%] text-5xl sm:text-6xl",
						children: [
							"Confidence",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Looks",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Beautiful",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"on You"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-4 bottom-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
							text: "LUXE NAILS NEW YORK",
							label: "Luxe Nails New York",
							light: true
						})
					})
				]
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
								children: "To enhance natural beauty through premium nail care and artistic excellence."
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
								children: "To be the most trusted and loved nail studio, known for luxury, creativity, and care."
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
								children: "Exceptional service, hygienic practices, and designs that make you feel you."
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon zoom aspect-[16/11]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/salon.jpg",
							alt: "Warm salon interior with velvet seating"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "script-overlay bottom-8 left-6 text-5xl",
						children: [
							"A Space",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Created for You"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display display-lg mt-3",
							children: "From Passion to a Destination"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-4",
							children: "What started as a small dream turned into Luxe Nails — a premium nail studio built on passion, creativity, and a love for details. We created a space where artistry meets care, and every client feels special."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-outline mt-6",
							onClick: openVideo,
							children: ["Our Journey ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "arrow",
								children: "→"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "healthy-blob absolute -right-4 top-0 hidden xl:grid",
							children: "It’s more than a nail appointment. It’s a self-care ritual."
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
						children: "The Artists Behind the Beauty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-4",
						children: "Our talented nail artists are not just technicians — they are creators, dedicated to bringing your vision to life with precision, care, and artistry."
					})
				] }), team.map((artist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "team-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: artist.image,
						alt: `${artist.name}, ${artist.role}`
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/tools.jpg",
						alt: "Gold-capped polish and professional nail tools"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Why choose Luxe Nails"
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
								title: "Premium Products",
								text: "Only the best for your nails",
								Icon: Gem
							},
							{
								title: "Hygienic & Safe",
								text: "Clean tools, safer beauty",
								Icon: Shield
							},
							{
								title: "Personalized Experience",
								text: "Designs tailored to your style",
								Icon: Heart
							},
							{
								title: "Expert Nail Artists",
								text: "Skilled, creative and passionate",
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
				className: "wine-shell clip-wave on-wine px-6 py-14 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-6 sm:grid-cols-4",
						children: [
							["10K+", "Happy Clients"],
							["5+", "Years of Experience"],
							["50+", "Unique Designs"],
							["100%", "Client Satisfaction"]
						].map(([stat, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stat",
							children: stat
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cream/75",
							children: label
						})] }, label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-serif text-2xl leading-snug",
						children: [
							"“",
							story.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-4 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: [story.name === "Priya S." ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/priya.jpg",
								alt: "",
								className: "h-11 w-11 rounded-full object-cover"
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
						})]
					})] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap section relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/polish.jpg",
				alt: "",
				className: "pointer-events-none absolute -left-4 bottom-0 hidden h-28 w-40 rounded-[40%] object-cover md:block"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display display-lg",
						children: ["Be a Part of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script",
							children: "Our Story"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: "Book your appointment and experience the Luxe Nails difference."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/book",
						children: "Book Appointment"
					})
				]
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
