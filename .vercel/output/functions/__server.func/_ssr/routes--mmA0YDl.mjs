import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowUpRight, _ as Flower2, g as Gem, h as Heart, w as Calendar } from "../_libs/lucide-react.mjs";
import { c as site, i as Flourish } from "./router-avF-vMbE.mjs";
import { i as Photo, o as RingBadge, s as Stars, t as ArrowButton } from "./ui-CfSGqP4J.mjs";
import { t as featuredServices } from "./services-BM7OZfFu.mjs";
import { s as toISODate } from "./dates-BNcUB3W2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes--mmA0YDl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var studio = {
	"@context": "https://schema.org",
	"@type": "NailSalon",
	name: site.name,
	telephone: "+91-22-4893-2160",
	email: site.email,
	priceRange: "₹₹",
	address: {
		"@type": "PostalAddress",
		streetAddress: site.street,
		addressLocality: "Mumbai",
		addressRegion: "Maharashtra",
		postalCode: "400050",
		addressCountry: "IN"
	},
	openingHours: ["Mo-Sa 11:00-20:00", "Su 11:00-18:00"]
};
function HomePage() {
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
						className: "hero-photo",
						style: { ["--hero-mask"]: "url(/images/opt/hero-bloom.webp)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/hero-bloom.png",
							alt: "Burgundy floral manicure with gold jewelry",
							width: 520,
							height: 480,
							sizes: "(max-width: 980px) 88vw, 520px",
							priority: true,
							single: true
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
				children: featuredServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/book?service=${service.id}`,
					className: `organic-card ${service.shape} ${service.tone === "dark" ? "on-dark" : "on-light"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: service.image,
							alt: service.name,
							sizes: "(max-width: 700px) 88vw, 280px"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shade" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "card-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "card-title",
									children: service.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "card-arrow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "card-tag",
								children: service.tagline
							})]
						})
					]
				}, service.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "home-about",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon zoom aspect-[16/11]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/salon.jpg",
							alt: "tipntoe studio with arched mirrors and burgundy chairs",
							sizes: "(max-width: 980px) 92vw, 560px",
							style: { objectPosition: "center 60%" }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-6 right-[-10px] hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
							text: "LUXURIOUS BEAUTY SELF CARE",
							label: "Luxurious beauty and self care"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "About us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display home-title mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Where Art Meets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script",
							children: "Care"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-5",
						children: "A studio in Bandra West for extensions, nail art, and appointments that are not rushed. The shape, the colour, and the finish are decided with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "feature-row home-features",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Studio products" }) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sterilised tools" }) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Nail artists" }) })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "home-story",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
							to: "/about",
							variant: "outline",
							children: "Our Story"
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "book-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow light",
						children: "Book now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display light book-title",
						children: ["Your Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script light",
							children: "Look Awaits"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "book-note",
						children: "Choose your service, pick a time, and let us take care of the rest."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBook, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: site.name
			})]
		})
	] });
}
function PickField({ label, value, options, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const root = (0, import_react.useRef)(null);
	const current = options.find((item) => item.value === value);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!root.current?.contains(event.target)) setOpen(false);
		};
		window.addEventListener("pointerdown", onPointer);
		return () => window.removeEventListener("pointerdown", onPointer);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `client-field${open ? " open" : ""}`,
		ref: root,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "field field-select",
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			onClick: () => setOpen((currentOpen) => !currentOpen),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
				size: 16,
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: current ? "" : "is-placeholder",
				children: current?.label ?? label
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: `client-menu${options.length > 6 ? " tall" : ""}`,
			role: "listbox",
			"aria-label": label,
			children: options.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "option",
				"aria-selected": value === item.value,
				onClick: () => {
					onChange(item.value);
					setOpen(false);
				},
				children: item.label
			}) }, item.value))
		}) : null]
	});
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickField, {
				label: "Select Service",
				value: service,
				options: featuredServices.map((item) => ({
					value: item.id,
					label: item.name
				})),
				onChange: setService
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickField, {
				label: "Select Date & Time",
				value: slot,
				options,
				onChange: setSlot
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
