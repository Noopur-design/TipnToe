import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowUpRight, _ as Flower2, a as Sparkles, g as Gem, h as Heart, i as SunMedium, o as Shield, u as Paintbrush, y as Droplets } from "../_libs/lucide-react.mjs";
import { a as PillRow, r as ArrowButton } from "./router-T_zCaRjS.mjs";
import { a as serviceFilters, i as priceLabel, n as filterServices, o as services, t as featuredServices } from "./services-a1o7JQ6y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DmSJgshl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var extraIcons = {
	"nail-repair": Shield,
	"french-tips": Paintbrush,
	"chrome-finish": Sparkles,
	"matte-finish": SunMedium,
	"nail-removal": Droplets,
	"paraffin-treatment": Flower2
};
function ServicesPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [saved, setSaved] = (0, import_react.useState)([]);
	const shown = filter === "all" ? featuredServices : filterServices(filter);
	const extras = services.filter((service) => !service.featured && (filter === "all" || service.category === filter));
	(0, import_react.useEffect)(() => {
		try {
			const raw = JSON.parse(localStorage.getItem("luxe-favs") || "[]");
			if (Array.isArray(raw)) setSaved(raw.filter((item) => typeof item === "string"));
		} catch {
			setSaved([]);
		}
	}, []);
	function toggle(id) {
		setSaved((current) => {
			const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
			localStorage.setItem("luxe-favs", JSON.stringify(next));
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap hero-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Our services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4",
					children: ["More Than", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "script script-line",
						children: "Nail Extensions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "Premium services, personalized care, and luxurious experiences — all in one place."
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hygienic & Safe" }) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "feature-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Expert Nail Artists" }) })] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "frame clip-portrait zoom aspect-[4/5] max-h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero.jpg",
						alt: "Soft French manicure with gold detail",
						style: { objectPosition: "70% 18%" }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "script-overlay right-[6%] top-[18%] text-6xl",
					children: [
						"Beautiful",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nails",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Brighter",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Days"
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-8",
			"aria-label": "Service categories",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-grid",
				children: featuredServices.map((service) => {
					const dark = service.tone === "dark";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book",
						search: { service: service.id },
						className: `organic-card ${service.shape}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shade",
								style: dark ? void 0 : { background: "linear-gradient(to top, rgba(247,242,235,0.94), transparent 60%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "copy",
								style: { color: dark ? "#fffdf8" : "#4a1d22" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-serif text-3xl leading-none",
									children: service.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
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
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon zoom aspect-[16/11]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/artist.jpg",
							alt: "A nail artist finishing a burgundy manicure"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "script-overlay bottom-8 left-6 text-5xl",
						children: [
							"Precision",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"in Every Detail"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display display-lg mt-3",
							children: ["Services Designed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "script script-line",
								children: "Around You"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-4",
							children: "From classic to creative, we offer a wide range of nail services tailored to your style, lifestyle, and nail goals. Each service is performed with precision, care, and premium products."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "healthy-blob absolute -right-2 top-0",
							children: [
								"Healthy",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Nails",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Happier",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"You"
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "signature",
			className: "wrap section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display display-lg",
						children: "Our Signature Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillRow, {
						options: serviceFilters,
						value: filter,
						onChange: setFilter,
						label: "Filter services"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "service-grid",
					children: shown.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "sig-card lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: service.image,
									alt: service.name
								}),
								service.popular ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip absolute top-3 left-3",
									children: "Most Popular"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: saved.includes(service.id) ? "heart on absolute top-3 right-3" : "heart absolute top-3 right-3",
									"aria-pressed": saved.includes(service.id),
									"aria-label": saved.includes(service.id) ? `Unsave ${service.name}` : `Save ${service.name}`,
									onClick: () => toggle(service.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										size: 16,
										fill: saved.includes(service.id) ? "currentColor" : "none"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-heading",
									children: service.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: service.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "price",
										children: priceLabel(service.price)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [" · ", service.duration]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/book",
									search: { service: service.id },
									className: "btn btn-outline mt-4",
									children: ["Book Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "arrow",
										children: "→"
									})]
								})
							]
						})]
					}, service.id))
				}),
				shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "No services in this category."
				}) : null
			]
		}),
		extras.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap section relative",
			"aria-label": "Additional services",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/polish.jpg",
					alt: "",
					className: "extras-photo pointer-events-none absolute -left-6 bottom-6 hidden w-36 rounded-[46%] lg:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display display-lg",
							children: "Additional Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-2",
							children: "The little extras that make a big difference."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "extra-grid mt-6",
							children: extras.map((service) => {
								const Icon = extraIcons[service.id] ?? Sparkles;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/book",
									search: { service: service.id },
									className: "lift p-3 text-center no-underline",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "feature-icon mx-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-3 block font-semibold text-heading",
											children: service.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "price text-sm",
											children: priceLabel(service.price)
										})
									]
								}, service.id);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "script pointer-events-none absolute right-2 bottom-8 hidden w-36 text-4xl leading-none lg:block",
					children: "Luxury Care Lasting Beauty"
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cta-stage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wine-shell clip-wave flex flex-col items-start justify-between gap-6 px-8 py-14 md:flex-row md:items-center md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display light display-lg",
						children: ["Ready for Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script light",
							children: "Next Look?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-cream/80",
						children: "Book your appointment now and let our experts take care of the rest."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/book",
						variant: "light",
						children: "Book Appointment"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/salon.jpg",
					alt: "",
					className: "pointer-events-none absolute right-0 bottom-0 hidden h-40 w-64 rounded-[40%] object-cover md:block"
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
