import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowUpRight, _ as Flower2, g as Gem, h as Heart, w as Calendar } from "../_libs/lucide-react.mjs";
import { c as useVideo, l as Flourish, o as RingBadge, p as site, r as ArrowButton, s as Stars } from "./router-T_zCaRjS.mjs";
import { i as priceLabel, t as featuredServices } from "./services-a1o7JQ6y.mjs";
import { s as toISODate } from "./dates-BNcUB3W2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C9-85m1Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var studio = {
	"@context": "https://schema.org",
	"@type": "NailSalon",
	name: "Luxe Nails",
	telephone: "+1-555-123-4567",
	email: "hello@luxenails.com",
	priceRange: "$$",
	address: {
		"@type": "PostalAddress",
		streetAddress: "123 Beauty Lane",
		addressLocality: "New York",
		addressRegion: "NY",
		postalCode: "10001",
		addressCountry: "US"
	},
	openingHours: [
		"Mo-Fr 10:00-20:00",
		"Sa 09:00-19:00",
		"Su 10:00-17:00"
	]
};
function HomePage() {
	const { openVideo } = useVideo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(studio) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap hero-grid pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "More than a manicure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4",
					children: ["Nail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "script script-line",
						children: "Extensions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[0.72rem] font-semibold tracking-[0.32em] text-muted",
					children: "ART · CARE · CONFIDENCE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-4",
					children: "Premium nail extensions crafted with precision, designed to make you feel extraordinary."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/book",
						children: "Book Appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "avatar-stack",
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-bold text-heading",
							children: ["4.9/5 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Trusted by 10K+ Clients"
						})] })]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-visual",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-hero zoom aspect-[4/5] max-h-[620px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.jpg",
							alt: "French manicure with gold leaf on burgundy velvet",
							width: 1200,
							height: 1600,
							fetchPriority: "high",
							style: { objectPosition: "68% 22%" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "script-overlay right-[9%] top-[18%] text-6xl sm:text-7xl",
						children: [
							"Luxury",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"in Every",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Detail"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-play",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
							text: "WATCH OUR PROCESS",
							label: "Watch our process",
							onClick: openVideo,
							light: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flourish, { className: "flourish right-[6%] bottom-[10%]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "scroll-cue",
						children: "Scroll"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			"aria-label": "Signature looks",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-grid",
				children: featuredServices.map((service) => {
					const dark = service.tone === "dark";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `/book?service=${service.id}`,
						className: `organic-card ${service.shape}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: service.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shade",
								style: dark ? void 0 : { background: "linear-gradient(to top, rgba(247,242,235,0.94), rgba(247,242,235,0) 62%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "copy",
								style: { color: dark ? "#fffdf8" : "#4a1d22" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-serif text-3xl leading-none",
									children: service.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] opacity-80",
									children: service.tagline
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "card-arrow",
								style: { color: dark ? "#fffdf8" : "#4a1d22" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
							})
						]
					}, service.id);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "home-about",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "frame clip-salon zoom aspect-[16/11]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/salon.jpg",
									alt: "Luxe Nails studio with arched mirrors and burgundy chairs",
									style: { objectPosition: "center 60%" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "script-overlay bottom-10 left-7 text-5xl sm:text-6xl",
								children: [
									"Step into a",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Nail Experience"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-6 right-[-10px] hidden md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
									text: "LUXURIOUS BEAUTY SELF CARE",
									label: "Luxurious beauty and self care"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "About us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display display-lg mt-3",
							children: ["Where", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "script script-line",
								children: "Art Meets Care"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-5",
							children: "We are a premium nail studio dedicated to high-quality nail extensions, artistic designs, and a luxurious self-care experience. Every detail is crafted to make you feel confident, beautiful, and uniquely you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "feature-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "feature-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Premium Products" }) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "feature-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hygienic & Safe" }) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "feature-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Expert Nail Artists" }) })] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
								to: "/about",
								variant: "outline",
								children: "Our Story"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "selfcare-float",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/polish.jpg",
							alt: "",
							className: "selfcare-drip"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "selfcare-card",
							children: [
								"Self Care",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Looks Good",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"on You"
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cta-stage",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/polish.jpg",
						alt: "",
						className: "cta-bottle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wine-shell clip-wave grid gap-8 px-6 py-14 md:px-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow light",
								children: "Book now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display light display-lg mt-3",
								children: ["Your Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "script light script-line",
									children: "Look Awaits"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-cream/80",
								children: "Choose your service, pick a time, and let us take care of the rest."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBook, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sr-only",
					children: site.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sr-only",
					children: priceLabel(70)
				})
			]
		})
	] });
}
function MiniBook() {
	const navigate = useNavigate();
	const [service, setService] = (0, import_react.useState)("");
	const [slot, setSlot] = (0, import_react.useState)("");
	const [options, setOptions] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const times = [
			"11:00 AM",
			"1:00 PM",
			"4:00 PM",
			"6:00 PM"
		];
		const start = /* @__PURE__ */ new Date();
		start.setDate(start.getDate() + 1);
		const next = [];
		for (let day = 0; day < 10; day += 1) {
			const date = new Date(start);
			date.setDate(start.getDate() + day);
			const iso = toISODate(date);
			const label = date.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric"
			});
			times.forEach((time) => {
				if (date.getDay() === 0 && (time === "6:00 PM" || time === "4:00 PM")) return;
				next.push({
					value: `${iso}|${time}`,
					label: `${label} · ${time}`
				});
			});
		}
		setOptions(next);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "relative z-10 space-y-3",
		onSubmit: (event) => {
			event.preventDefault();
			const [date, time] = slot.split("|");
			navigate({
				to: "/book",
				search: {
					service: service || void 0,
					date: date || void 0,
					time: time || void 0
				}
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field-wrap block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Select service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
						size: 16,
						className: "field-icon",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field field-select",
						value: service,
						onChange: (event) => setService(event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select Service"
						}), featuredServices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.id,
							children: item.name
						}, item.id))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field-wrap block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Select date and time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
						size: 16,
						className: "field-icon",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field field-select",
						value: slot,
						onChange: (event) => setSlot(event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select Date & Time"
						}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: option.value,
							children: option.label
						}, option.value))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "btn btn-light w-full",
				children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "arrow",
					children: "→"
				})]
			})
		]
	});
}
//#endregion
export { HomePage as component };
