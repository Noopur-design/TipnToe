import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Clock, f as MapPin, l as Phone, n as User, p as Mail, s as Plus, w as Calendar } from "../_libs/lucide-react.mjs";
import { a as SocialIcon, c as site, s as inquiryTypes } from "./router-k1z4irU2.mjs";
import { i as Photo, r as PageCta, t as ArrowButton } from "./ui-DMRWTPDc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C8FNhO39.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "How long do extensions last?",
		a: "With a fill every two to three weeks, classic, gel, and acrylic sets stay neat for as long as you like them. We will suggest a rhythm based on your nails and routine."
	},
	{
		q: "How should I prepare for my appointment?",
		a: "Come with clean, polish-free nails if you can. Tell us if the set is for a wedding, a trip, or everyday wear, and mention any sensitivities before we begin."
	},
	{
		q: "Do you accept walk-ins?",
		a: "We work by appointment so each guest has unhurried time. If a chair opens the same day, we will try to fit you in."
	},
	{
		q: "What is your cancellation policy?",
		a: "Please reschedule or cancel at least 24 hours ahead so we can offer the chair to someone else. Late cancellations may need a fresh advance to rebook."
	},
	{
		q: "Are your tools sanitised?",
		a: "Yes. Implements are cleaned and sterilised between every guest, files are single-use, and the station is reset before you sit down."
	}
];
function validEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function ContactForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	function validate() {
		const next = {};
		if (name.trim().length < 2) next.name = "Please enter your name.";
		if (!validEmail(email)) next.email = "Enter a valid email address.";
		if (phone.trim()) {
			const digits = phone.replace(/\D/g, "");
			if (digits.length < 10 || digits.length > 15) next.phone = "Enter a valid phone number or leave it blank.";
		}
		if (!topic) next.topic = "Choose how we can help.";
		return next;
	}
	async function onSubmit(event) {
		event.preventDefault();
		const next = validate();
		setErrors(next);
		if (Object.keys(next).length) {
			setStatus("error");
			return;
		}
		setStatus("loading");
		await new Promise((resolve) => setTimeout(resolve, 700));
		setStatus("success");
	}
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "soft-card p-8",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Message sent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "display mt-3 text-4xl",
				children: [
					"Thank you, ",
					name.trim().split(" ")[0],
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "lede mt-3",
				children: [
					"We received your note and will reply at ",
					email.trim(),
					" as soon as the studio opens."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-outline mt-6",
				onClick: () => {
					setStatus("idle");
					setName("");
					setEmail("");
					setPhone("");
					setTopic("");
					setMessage("");
				},
				children: "Send another message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "contact-name",
				label: "Full Name",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 16 }),
				value: name,
				error: errors.name,
				onChange: setName,
				autoComplete: "name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "contact-email",
				label: "Email Address",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }),
				value: email,
				error: errors.email,
				onChange: setEmail,
				autoComplete: "email",
				inputMode: "email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "contact-phone",
				label: "Phone Number",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }),
				value: phone,
				error: errors.phone,
				onChange: setPhone,
				autoComplete: "tel",
				inputMode: "tel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field-wrap block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "How can we help you?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						size: 16,
						className: "field-icon",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: `field field-select${errors.topic ? " invalid" : ""}`,
						value: topic,
						onChange: (event) => setTopic(event.target.value),
						"aria-invalid": errors.topic ? true : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "How can we help you?"
						}), inquiryTypes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))]
					}),
					errors.topic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "field-error",
						children: errors.topic
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field-wrap area block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Your message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "field",
					placeholder: "Your Message (Optional)",
					value: message,
					maxLength: 800,
					onChange: (event) => setMessage(event.target.value)
				})]
			}),
			status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "field-error",
				children: "Please fix the highlighted fields."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "btn btn-solid w-full",
				disabled: status === "loading",
				children: [status === "loading" ? "Sending…" : "Send Message", status === "loading" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "arrow",
					"aria-hidden": true,
					children: "→"
				})]
			})
		]
	});
}
function Field({ id, label, icon, value, onChange, error, autoComplete, inputMode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field-wrap block",
		htmlFor: id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "field-icon",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				className: `field${error ? " invalid" : ""}`,
				placeholder: label,
				value,
				autoComplete,
				inputMode,
				"aria-invalid": error ? true : void 0,
				onChange: (event) => onChange(event.target.value)
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "field-error",
				children: error
			}) : null
		]
	});
}
function ContactPage() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap hero-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4",
					children: [
						"We’d Love",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"to Hear From ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script",
							children: "You"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "Have a question, want to book an appointment, or simply want to say hello? We’re here for you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-methods mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.phoneHref,
							className: "method",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "method-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-heading",
									children: "Call Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: site.phoneDisplay
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.emailHref,
							className: "method",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "method-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-heading",
									children: "Email Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: site.email
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.mapsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "method",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "method-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-heading",
									children: "Visit Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted",
									children: [
										site.street,
										", ",
										site.cityLine
									]
								})
							]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-visual",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-photo",
					style: { ["--hero-mask"]: "url(/images/opt/hero-glitter.webp)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/hero-glitter.png",
						alt: "French manicure with fine gold lines on burgundy velvet",
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
				className: "contact-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon zoom aspect-[16/11]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/salon.jpg",
							alt: "The tipntoe reception and styling floor",
							sizes: "(max-width: 980px) 92vw, 560px"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute bottom-6 left-6 max-w-xs text-xs font-semibold tracking-[0.18em] text-heading",
						children: "BANDRA WEST, MUMBAI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Send us a message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display display-lg mt-3",
						children: ["Let’s ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "script",
							children: "Connect"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-3",
						children: "Write to us. We reply the same day, during studio hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			"aria-label": "Location",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "locate-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "map-frame",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/map.jpg",
							alt: "Map with the studio pin in Bandra West, Mumbai",
							sizes: "(max-width: 700px) 92vw, 360px"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Our location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-3 text-5xl",
								children: "Find Us Here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex gap-2 text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 18,
									className: "mt-1 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									site.street,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									site.cityLine,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									site.country
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "btn btn-outline mt-6 w-fit",
								href: site.mapsUrl,
								target: "_blank",
								rel: "noreferrer",
								children: ["Get Directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "arrow",
									children: "→"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-portrait zoom min-h-60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/storefront.jpg",
							alt: "Evening exterior of the tipntoe studio",
							className: "h-full min-h-60 w-full object-cover",
							sizes: "(max-width: 980px) 92vw, 420px"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "info-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "soft-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl text-heading",
								children: "Business Hours"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "hours-list mt-3",
								children: site.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.time })] }, row.days))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "soft-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 18 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl text-heading",
								children: "Book an Appointment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Skip the wait and secure your preferred time with our experts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
								to: "/book",
								variant: "outline",
								className: "mt-5",
								children: "Book Now"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "soft-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl text-heading",
								children: "Follow Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Stay connected for the latest designs, offers, and nail inspiration."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "socials mt-4",
								children: site.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: social.href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": social.label,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, { id: social.id })
								}, social.id))
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageCta, {
			title: "We’re here",
			script: "to help",
			text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Write to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.emailHref,
					children: site.email
				}),
				" or call ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.phoneHref,
					children: site.phoneDisplay
				}),
				". We reply the same day, during studio hours."
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "faq",
			className: "wrap section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display display-lg",
				children: "Questions, answered"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: faqs.map((item, index) => {
					const expanded = open === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": expanded,
							onClick: () => setOpen(expanded ? null : index),
							children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								size: 18,
								className: expanded ? "rotate-45" : ""
							})]
						}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-4 text-muted",
							children: item.a
						}) : null]
					}, item.q);
				})
			})]
		})
	] });
}
//#endregion
export { ContactPage as component };
