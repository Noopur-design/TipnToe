import { i as __toESM } from "../_runtime.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, S as ChevronLeft, _ as Flower2, b as Clock, f as MapPin, g as Gem, h as Heart, l as Phone, n as User, o as Shield, p as Mail, w as Calendar, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as PillRow, d as allTimes, m as timeGroups, n as Route$3, o as RingBadge, p as site } from "./router-T_zCaRjS.mjs";
import { a as serviceFilters, i as priceLabel, n as filterServices, r as getService } from "./services-a1o7JQ6y.mjs";
import { a as parseTimeLabel, c as toIcsStamp, i as parseISODate, n as formatLong, o as startOfDay, r as isSlotOpen, s as toISODate, t as buildMonth } from "./dates-BNcUB3W2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CJi4KWEm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DRAFT_KEY = "luxe-nails-draft-v1";
var CONFIRM_KEY = "luxe-nails-confirmed-v1";
var emptyDraft = {
	serviceId: null,
	date: null,
	time: null,
	name: "",
	phone: "",
	email: "",
	clientType: "",
	notes: "",
	step: 1
};
var steps = [
	{
		id: 1,
		label: "Service"
	},
	{
		id: 2,
		label: "Date & Time"
	},
	{
		id: 3,
		label: "Your Details"
	},
	{
		id: 4,
		label: "Confirm"
	}
];
function isKnownTime(value) {
	return allTimes.includes(value);
}
function bookingCode() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const bytes = /* @__PURE__ */ new Uint32Array(6);
	crypto.getRandomValues(bytes);
	return `LN-${Array.from(bytes, (value) => alphabet[value % 32]).join("")}`;
}
function validEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function validPhone(value) {
	const digits = value.replace(/\D/g, "");
	return digits.length >= 10 && digits.length <= 15;
}
function sanitize(value) {
	if (!value || typeof value !== "object") return null;
	const raw = value;
	const step = raw.step === 2 || raw.step === 3 || raw.step === 4 ? raw.step : 1;
	return {
		serviceId: typeof raw.serviceId === "string" && getService(raw.serviceId) ? raw.serviceId : null,
		date: typeof raw.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.date) ? raw.date : null,
		time: typeof raw.time === "string" && isKnownTime(raw.time) ? raw.time : null,
		name: typeof raw.name === "string" ? raw.name.slice(0, 80) : "",
		phone: typeof raw.phone === "string" ? raw.phone.slice(0, 24) : "",
		email: typeof raw.email === "string" ? raw.email.slice(0, 120) : "",
		clientType: raw.clientType === "first" || raw.clientType === "returning" ? raw.clientType : "",
		notes: typeof raw.notes === "string" ? raw.notes.slice(0, 500) : "",
		step
	};
}
function validate(draft, step) {
	const errors = {};
	if (step >= 1 && !draft.serviceId) errors.service = "Choose a service to continue.";
	if (step >= 2) {
		if (!draft.date) errors.date = "Choose a date.";
		else if (!draft.time || !isSlotOpen(draft.date, draft.time)) errors.time = "Choose an available time.";
	}
	if (step >= 3) {
		if (draft.name.trim().length < 2) errors.name = "Please enter your full name.";
		if (!validPhone(draft.phone)) errors.phone = "Enter a valid phone number.";
		if (!validEmail(draft.email)) errors.email = "Enter a valid email address.";
		if (!draft.clientType) errors.clientType = "Let us know if this is your first visit.";
	}
	return errors;
}
function downloadIcs(item) {
	const parsed = parseTimeLabel(item.time);
	if (!parsed) return;
	const start = parseISODate(item.date);
	start.setHours(parsed.hours, parsed.minutes, 0, 0);
	const end = new Date(start.getTime() + item.minutes * 60 * 1e3);
	const body = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Luxe Nails//Booking//EN",
		"BEGIN:VEVENT",
		`UID:${item.id}@luxenails.local`,
		`DTSTAMP:${toIcsStamp(/* @__PURE__ */ new Date())}`,
		`DTSTART:${toIcsStamp(start)}`,
		`DTEND:${toIcsStamp(end)}`,
		`SUMMARY:Luxe Nails — ${item.serviceName}`,
		`LOCATION:${site.street}\\, ${site.cityLine}`,
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	const blob = new Blob([body], { type: "text/calendar" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `${item.id}.ics`;
	link.click();
	URL.revokeObjectURL(url);
}
function BookingWizard({ preset }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(emptyDraft);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [confirmation, setConfirmation] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [month, setMonth] = (0, import_react.useState)(() => new Date(2026, 8, 1));
	(0, import_react.useEffect)(() => {
		const now = /* @__PURE__ */ new Date();
		setMonth(new Date(now.getFullYear(), now.getMonth(), 1));
		let confirmed = null;
		if (!preset.service && !preset.date && !preset.time) try {
			const stored = sessionStorage.getItem(CONFIRM_KEY);
			if (stored) confirmed = JSON.parse(stored);
		} catch {
			confirmed = null;
		}
		if (confirmed?.id && confirmed.serviceName) {
			setConfirmation(confirmed);
			setReady(true);
			return;
		}
		let next = emptyDraft;
		try {
			const saved = sanitize(JSON.parse(localStorage.getItem(DRAFT_KEY) || "null"));
			if (saved) next = saved;
		} catch {
			next = emptyDraft;
		}
		if (preset.service && getService(preset.service)) next = {
			...next,
			serviceId: preset.service
		};
		if (preset.date && /^\d{4}-\d{2}-\d{2}$/.test(preset.date) && isSlotOpen(preset.date, "11:00 AM", /* @__PURE__ */ new Date(0))) {
			const day = parseISODate(preset.date);
			if (startOfDay(day) >= startOfDay(now)) next = {
				...next,
				date: preset.date
			};
		}
		if (preset.time && isKnownTime(preset.time)) next = {
			...next,
			time: preset.time
		};
		if (next.date && next.time && !isSlotOpen(next.date, next.time, now)) next = {
			...next,
			time: null
		};
		if (next.serviceId && next.date && next.time) next.step = 3;
		else if (next.serviceId && (next.date || next.time)) next.step = 2;
		else if (preset.service) next.step = 1;
		setDraft(next);
		if (next.date) {
			const day = parseISODate(next.date);
			setMonth(new Date(day.getFullYear(), day.getMonth(), 1));
		}
		setReady(true);
	}, [
		preset.service,
		preset.date,
		preset.time
	]);
	(0, import_react.useEffect)(() => {
		if (!ready || confirmation) return;
		localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
	}, [
		draft,
		ready,
		confirmation
	]);
	const today = (0, import_react.useMemo)(() => startOfDay(/* @__PURE__ */ new Date()), [ready]);
	const cells = buildMonth(month.getFullYear(), month.getMonth());
	const visible = filterServices(filter);
	const service = getService(draft.serviceId);
	function patch(partial) {
		setDraft((current) => ({
			...current,
			...partial
		}));
	}
	function focusStep(step) {
		document.getElementById(`book-step-${step}`)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	function go(step) {
		if (step <= draft.step) {
			patch({ step });
			setErrors({});
			focusStep(step);
			return;
		}
		for (let index = 1; index < step; index = index + 1) {
			const found = validate({
				...draft,
				step: index
			}, index);
			if (Object.keys(found).length) {
				patch({ step: index });
				setErrors(found);
				focusStep(index);
				return;
			}
		}
		patch({ step });
		setErrors({});
		focusStep(step);
	}
	function next() {
		const found = validate(draft, draft.step);
		if (Object.keys(found).length) {
			setErrors(found);
			focusStep(draft.step);
			return;
		}
		setErrors({});
		const step = Math.min(4, draft.step + 1);
		patch({ step });
		focusStep(step);
	}
	async function confirm() {
		const found = validate(draft, 4);
		if (Object.keys(found).length || !service || !draft.date || !draft.time) {
			const failing = Object.keys(found).length ? found : { service: "Complete each step before confirming." };
			setErrors(failing);
			if (failing.service) {
				patch({ step: 1 });
				focusStep(1);
			} else if (failing.date || failing.time) {
				patch({ step: 2 });
				focusStep(2);
			} else {
				patch({ step: 3 });
				focusStep(3);
			}
			return;
		}
		setPending(true);
		await new Promise((resolve) => setTimeout(resolve, 700));
		const record = {
			id: bookingCode(),
			serviceName: service.name,
			price: priceLabel(service.price),
			duration: service.duration,
			minutes: service.minutes,
			date: draft.date,
			time: draft.time,
			name: draft.name.trim(),
			phone: draft.phone.trim(),
			email: draft.email.trim()
		};
		sessionStorage.setItem(CONFIRM_KEY, JSON.stringify(record));
		localStorage.removeItem(DRAFT_KEY);
		setConfirmation(record);
		setPending(false);
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "soft-card p-8",
		"aria-busy": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "Book appointment"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "display mt-3 text-4xl",
			children: "Preparing your visit"
		})]
	});
	if (confirmation) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "soft-card mx-auto max-w-xl p-8 text-center",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Booking confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display mt-3 text-5xl",
				children: "Your appointment is booked."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: ["Booking ID ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-heading",
					children: confirmation.id
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-2 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Service",
						value: `${confirmation.serviceName} · ${confirmation.price}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Duration",
						value: confirmation.duration
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Date",
						value: formatLong(confirmation.date)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Time",
						value: confirmation.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Guest",
						value: confirmation.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Studio",
						value: `${site.street}, ${site.cityLine}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "btn btn-solid",
						onClick: () => downloadIcs(confirmation),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
							size: 16,
							"aria-hidden": true
						}), " Add to Calendar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn btn-outline",
						children: "Back to Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-outline",
						onClick: () => {
							sessionStorage.removeItem(CONFIRM_KEY);
							setConfirmation(null);
							setDraft(emptyDraft);
						},
						children: "Book another"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "soft-card mb-8 px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "progress",
				"aria-label": "Booking progress",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: draft.step === step.id ? "step-btn on" : "step-btn",
						onClick: () => go(step.id),
						"aria-current": draft.step === step.id ? "step" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "step-num",
							children: step.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.label })]
					}), index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "step-line" }) : null]
				}, step.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "book-step-1",
			"aria-labelledby": "step-service",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "step-service",
						className: "display text-4xl md:text-5xl",
						children: "1. Select a Service"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-2",
						children: "Choose the service that suits your style and let us know your preferences."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillRow, {
						options: serviceFilters,
						value: filter,
						onChange: setFilter,
						label: "Service categories"
					})]
				}),
				errors.service ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "field-error mb-3",
					children: errors.service
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "service-grid",
					children: visible.map((item) => {
						const selected = draft.serviceId === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: selected ? "pick on" : "pick",
							"aria-pressed": selected,
							onClick: () => {
								patch({ serviceId: item.id });
								setErrors((current) => ({
									...current,
									service: void 0
								}));
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-start justify-between gap-3 px-4 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-serif text-2xl leading-none text-heading",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted",
										children: item.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-2 block text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "price",
											children: priceLabel(item.price)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted",
											children: [" · ", item.duration]
										})]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "radio",
									children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 }) : null
								})]
							})]
						}, item.id);
					})
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Nothing in this category yet."
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "book-lower mt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "book-step-2",
					"aria-labelledby": "step-date",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "step-date",
							className: "display text-3xl md:text-4xl",
							children: "2. Select Date & Time"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-2",
							children: "Pick a date and time that works for you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 xl:grid-cols-[1.15fr_0.85fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "soft-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "icon-btn",
												"aria-label": "Previous month",
												onClick: () => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1)),
												disabled: month.getFullYear() === today.getFullYear() && month.getMonth() === today.getMonth(),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-2xl text-heading",
												children: month.toLocaleDateString("en-US", {
													month: "long",
													year: "numeric"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "icon-btn",
												"aria-label": "Next month",
												onClick: () => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1)),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "cal",
										children: [[
											"Sun",
											"Mon",
											"Tue",
											"Wed",
											"Thu",
											"Fri",
											"Sat"
										].map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "cal-dow",
											children: day
										}, day)), cells.map((day, index) => day ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: `cal-day${draft.date === toISODate(day) ? " on" : ""}${toISODate(day) === toISODate(today) ? " today" : ""}`,
											disabled: startOfDay(day) < today,
											onClick: () => {
												patch({
													date: toISODate(day),
													time: draft.time && isSlotOpen(toISODate(day), draft.time) ? draft.time : null
												});
												setErrors((current) => ({
													...current,
													date: void 0
												}));
											},
											children: day.getDate()
										}, toISODate(day)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, `e-${index}`))]
									}),
									errors.date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "field-error",
										children: errors.date
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "soft-card p-4",
								children: [
									timeGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-2 text-sm font-semibold text-muted",
											children: group.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: group.slots.map((slot) => {
												const open = draft.date ? isSlotOpen(draft.date, slot) : false;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: draft.time === slot ? "slot on" : "slot",
													disabled: !draft.date || !open,
													onClick: () => {
														patch({ time: slot });
														setErrors((current) => ({
															...current,
															time: void 0
														}));
													},
													children: slot
												}, slot);
											})
										})]
									}, group.label)),
									!draft.date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "Select a date to see open times."
									}) : null,
									errors.time ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "field-error",
										children: errors.time
									}) : null
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "book-step-3",
					"aria-labelledby": "step-details",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "step-details",
							className: "display text-3xl md:text-4xl",
							children: "3. Your Details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-2",
							children: "Tell us a bit about yourself."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 16 }),
									label: "Full Name",
									value: draft.name,
									error: errors.name,
									onChange: (name) => patch({ name }),
									autoComplete: "name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }),
									label: "Phone Number",
									value: draft.phone,
									error: errors.phone,
									onChange: (phone) => patch({ phone }),
									autoComplete: "tel",
									inputMode: "tel",
									prefix: "+1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }),
									label: "Email Address",
									value: draft.email,
									error: errors.email,
									onChange: (email) => patch({ email }),
									autoComplete: "email",
									inputMode: "email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field-wrap block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "First time or returning client"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
											size: 16,
											className: "field-icon",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: `field field-select${errors.clientType ? " invalid" : ""}`,
											value: draft.clientType,
											onChange: (event) => patch({ clientType: event.target.value }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "First Time or Returning Client?"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "first",
													children: "First Time Client"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "returning",
													children: "Returning Client"
												})
											]
										}),
										errors.clientType ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "field-error",
											children: errors.clientType
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "field-wrap area block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Special requests"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field",
										placeholder: "Any special requests? (Optional)",
										value: draft.notes,
										maxLength: 500,
										onChange: (event) => patch({ notes: event.target.value })
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "book-step-4",
					"aria-labelledby": "step-confirm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "step-confirm",
							className: "display text-3xl md:text-4xl",
							children: "4. Confirm Booking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-2",
							children: "Review your appointment details."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "confirm-card mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: service?.image ?? "/images/gel.jpg",
										alt: "",
										className: "h-16 w-16 rounded-2xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif text-2xl leading-none text-heading",
											children: service?.name ?? "Select a service"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "price mt-1",
											children: service ? priceLabel(service.price) : "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: service?.duration ?? "Duration appears here"
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 space-y-3 text-sm text-heading",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
													size: 15,
													className: "mt-0.5 text-muted"
												}),
												" ",
												draft.date ? formatLong(draft.date) : "Choose a date"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
													size: 15,
													className: "mt-0.5 text-muted"
												}),
												" ",
												draft.time ?? "Choose a time"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													size: 15,
													className: "mt-0.5 text-muted"
												}),
												" ",
												site.street,
												", ",
												site.cityLine
											]
										})
									]
								}),
								errors.service || errors.date || errors.time || errors.name || errors.phone || errors.email || errors.clientType ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "field-error",
									children: "Complete the highlighted steps before confirming."
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn btn-solid mt-5 w-full",
									onClick: confirm,
									disabled: pending,
									children: pending ? "Confirming…" : "Confirm Appointment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-center justify-center gap-2 text-center text-xs text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
										size: 14,
										"aria-hidden": true
									}), " Your information is secure with us."]
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [draft.step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "btn btn-outline",
				onClick: () => go(draft.step - 1),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					size: 16,
					"aria-hidden": true
				}), " Back"]
			}) : null, draft.step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-outline",
				onClick: next,
				children: "Continue"
			}) : null]
		})
	] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4 border-b border-line py-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right font-semibold text-heading",
			children: value
		})]
	});
}
function Field({ icon, label, value, onChange, error, autoComplete, inputMode, prefix }) {
	const id = label.toLowerCase().replace(/\s+/g, "-");
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
			prefix ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "phone-prefix",
				children: prefix
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				className: `field${prefix ? " with-prefix" : ""}${error ? " invalid" : ""}`,
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
function BookPage() {
	const search = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap book-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Book appointment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display display-xl mt-4",
					children: ["Your Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "script script-line",
						children: "Look Awaits"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "Book your appointment and let our expert nail artists take care of the rest. Beautiful nails, a more confident you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "feature-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "feature-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Premium Experience" }) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "feature-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hygienic & Safe" }) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "feature-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Expert Nail Artists" }) })] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-hero zoom aspect-[4/5] max-h-[520px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.jpg",
							alt: "French tips with gold foil, ready for an appointment",
							style: { objectPosition: "70% 20%" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "script-overlay right-[8%] top-[18%] text-6xl",
						children: [
							"Self Care",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Looks",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Good",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"on You"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-2 bottom-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingBadge, {
							text: "BEAUTY IN EVERY DETAIL",
							label: "Beauty in every detail"
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWizard, { preset: search })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cta-stage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wine-shell clip-wave on-wine grid items-center gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] md:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "frame clip-salon overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/salon.jpg",
							alt: "The studio lounge",
							className: "aspect-[16/10] w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display light display-lg",
						children: "Why Book With Us?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "feature-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Easy Booking" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Quick and hassle-free appointment scheduling." })] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Personalized Care" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Tailored to your style and preferences." })] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Flexible Slots" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Choose a time that works for you." })] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Welcoming Space" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "A relaxing and luxurious environment." })] })] })
						]
					})] })]
				})
			})
		})
	] });
}
//#endregion
export { BookPage as component };
