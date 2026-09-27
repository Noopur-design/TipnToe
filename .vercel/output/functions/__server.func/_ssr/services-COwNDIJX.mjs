import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Flower2, a as Sparkles, g as Gem, h as Heart, i as SunMedium, o as Shield, u as Paintbrush, y as Droplets } from "../_libs/lucide-react.mjs";
import { a as PillRow, i as Photo, r as PageCta } from "./ui-DMRWTPDc.mjs";
import { a as serviceFilters, i as priceLabel, n as filterServices, o as services, t as featuredServices } from "./services-BM7OZfFu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-COwNDIJX.js
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
						className: "script script-line spaced",
						children: "Nail Extensions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "Extensions, nail art, and hand care, finished with the same care on every visit."
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
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-visual",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-photo",
					style: { ["--hero-mask"]: "url(/images/opt/hero-petal.webp)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/hero-petal.png",
						alt: "French manicure with floral gold detail on velvet",
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
			className: "wrap pb-8",
			"aria-label": "Service categories",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "svc-feature-grid",
				children: featuredServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book",
					search: { service: service.id },
					className: "svc-feature",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: service.image,
						alt: "",
						sizes: "(max-width: 700px) 42vw, 240px"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "svc-name",
						children: service.name
					})]
				}, service.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon zoom aspect-[16/11]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/artist.jpg",
							alt: "A nail artist finishing a burgundy manicure",
							sizes: "(max-width: 980px) 92vw, 560px"
						})
					})
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
								className: "script script-line spaced",
								children: "Around You"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-4",
							children: "Classic, gel, or nail art. Each one is shaped for your nail and the way you use your hands."
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
									src: service.image,
									alt: service.name,
									sizes: "(max-width: 700px) 92vw, 280px"
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
			className: "wrap section",
			"aria-label": "Additional services",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display display-lg",
					children: "Additional Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-2",
					children: "Finishes and care you can add to a set."
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
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageCta, {
			title: "Ready for your",
			script: "next look?",
			text: "Choose a service and a time. We will have the chair ready."
		})
	] });
}
//#endregion
export { ServicesPage as component };
