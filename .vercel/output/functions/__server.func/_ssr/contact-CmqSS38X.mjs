import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Clock, f as MapPin, l as Phone, n as User, p as Mail, s as Plus, w as Calendar } from "../_libs/lucide-react.mjs";
import { f as inquiryTypes, p as site, r as ArrowButton, u as SocialIcon } from "./router-T_zCaRjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CmqSS38X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "How long do extensions last?",
		a: "With a fill every two to three weeks, classic, gel, and acrylic sets stay beautiful for as long as you love them. We will recommend a rhythm based on your nails and lifestyle."
	},
	{
		q: "How should I prepare for my appointment?",
		a: "Arrive with clean, polish-free nails if you can. Tell us about your plans — a wedding, a trip, or everyday wear — and any sensitivities before we begin."
	},
	{
		q: "Do you accept walk-ins?",
		a: "The studio is appointment-first so every guest has unhurried time. If we have an opening the same day, we will always try to welcome you."
	},
	{
		q: "What is your cancellation policy?",
		a: "Please reschedule or cancel at least 24 hours ahead so we can offer the chair to someone else. Late cancellations may require a new deposit to rebook."
	},
	{
		q: "Are your tools sanitized?",
		a: "Yes. Implements are cleaned and sterilized between every guest, files are single-use, and stations are reset before you sit down."
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
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "frame clip-hero zoom aspect-[4/5] max-h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero.jpg",
						alt: "Close-up of a luxury French manicure",
						style: { objectPosition: "68% 20%" }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "script-overlay right-[6%] top-[16%] text-6xl",
					children: [
						"Beautiful",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nails",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Brings You",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Closer"
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "frame clip-salon zoom aspect-[16/11]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/salon.jpg",
								alt: "The Luxe Nails reception and styling floor"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "script-overlay top-6 left-6 text-6xl",
							children: [
								"Visit",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Our Salon"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "absolute bottom-6 left-6 max-w-xs text-xs font-semibold tracking-[0.18em] text-cream",
							children: "A LUXURIOUS SPACE CREATED FOR YOUR BEAUTY JOURNEY"
						})
					]
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
						children: "Fill out the form below and we’ll get back to you as soon as possible."
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/map.jpg",
							alt: "Stylized map with the studio pin in New York"
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/storefront.jpg",
							alt: "Evening exterior of the Luxe Nails studio",
							className: "h-full min-h-60 w-full object-cover"
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cta-stage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/polish.jpg",
					alt: "",
					className: "cta-bottle"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wine-shell clip-wave flex flex-col items-start justify-between gap-6 px-8 py-14 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow light",
							children: "Still have questions?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display light display-lg",
							children: ["We’re Here to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "script light",
								children: "Help"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-cream/80",
							children: "Check our FAQ or reach out directly — we’d love to assist you."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#faq",
						className: "btn btn-light",
						children: ["View FAQ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "arrow",
							children: "→"
						})]
					})]
				})]
			})
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
