//#region node_modules/.nitro/vite/services/ssr/assets/dates-BNcUB3W2.js
function toISODate(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseISODate(value) {
	const [y, m, d] = value.split("-").map(Number);
	return new Date(y, (m || 1) - 1, d || 1);
}
function formatLong(value) {
	return parseISODate(value).toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function parseTimeLabel(label) {
	const match = label.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
	if (!match) return null;
	let hours = Number(match[1]);
	const minutes = Number(match[2]);
	const meridiem = match[3].toUpperCase();
	if (meridiem === "PM" && hours !== 12) hours += 12;
	if (meridiem === "AM" && hours === 12) hours = 0;
	return {
		hours,
		minutes
	};
}
function isSlotOpen(dateISO, time, now = /* @__PURE__ */ new Date()) {
	const mins = parseTimeLabel(time);
	if (!mins) return false;
	const day = parseISODate(dateISO);
	const start = mins.hours * 60 + mins.minutes;
	const weekday = day.getDay();
	if (start < (weekday === 6 ? 540 : 600) || start >= (weekday === 0 ? 1020 : weekday === 6 ? 1140 : 1200)) return false;
	const slot = new Date(day);
	slot.setHours(mins.hours, mins.minutes, 0, 0);
	return slot.getTime() > now.getTime();
}
function startOfDay(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function buildMonth(year, month) {
	const first = new Date(year, month, 1);
	const days = new Date(year, month + 1, 0).getDate();
	const cells = Array.from({ length: first.getDay() }, () => null);
	for (let day = 1; day <= days; day += 1) cells.push(new Date(year, month, day));
	while (cells.length % 7 !== 0) cells.push(null);
	return cells;
}
function toIcsStamp(date) {
	return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}
//#endregion
export { parseTimeLabel as a, toIcsStamp as c, parseISODate as i, formatLong as n, startOfDay as o, isSlotOpen as r, toISODate as s, buildMonth as t };
