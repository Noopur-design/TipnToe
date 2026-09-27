//#region node_modules/.nitro/vite/services/ssr/assets/services-a1o7JQ6y.js
var serviceFilters = [
	{
		id: "all",
		label: "All Services"
	},
	{
		id: "extensions",
		label: "Extensions"
	},
	{
		id: "nail-art",
		label: "Nail Art"
	},
	{
		id: "care",
		label: "Care"
	},
	{
		id: "addons",
		label: "Add-ons"
	}
];
var services = [
	{
		id: "classic-extensions",
		name: "Classic Extensions",
		category: "extensions",
		tagline: "Timeless beauty. Always in style.",
		description: "Elegant and natural-looking enhancements for everyday beauty.",
		price: 70,
		duration: "60–90 min",
		minutes: 75,
		image: "/images/classic.jpg",
		featured: true,
		popular: true,
		tone: "dark",
		shape: "blob-a"
	},
	{
		id: "gel-extensions",
		name: "Gel Extensions",
		category: "extensions",
		tagline: "Strong. Natural. Flawless.",
		description: "Durable, lightweight, and long-lasting shine.",
		price: 75,
		duration: "75–90 min",
		minutes: 80,
		image: "/images/gel.jpg",
		featured: true,
		tone: "light",
		shape: "blob-b"
	},
	{
		id: "acrylic-extensions",
		name: "Acrylic Extensions",
		category: "extensions",
		tagline: "Bold designs. Endless possibilities.",
		description: "Bold, strong, and fully customizable to match your style.",
		price: 65,
		duration: "60–90 min",
		minutes: 75,
		image: "/images/acrylic.jpg",
		featured: true,
		tone: "dark",
		shape: "blob-c"
	},
	{
		id: "custom-nail-art",
		name: "Custom Nail Art",
		category: "nail-art",
		tagline: "Your imagination. Our art.",
		description: "Unique designs crafted to express your personality.",
		price: 15,
		duration: "15–60 min",
		minutes: 40,
		image: "/images/floral.jpg",
		featured: true,
		tone: "light",
		shape: "blob-d"
	},
	{
		id: "nail-repair",
		name: "Nail Repair",
		category: "care",
		tagline: "A quiet fix.",
		description: "Fix damaged or broken nails with professional care.",
		price: 10,
		duration: "20–30 min",
		minutes: 25,
		image: "/images/minimal.jpg",
		shape: "blob-b"
	},
	{
		id: "french-tips",
		name: "French Tips",
		category: "nail-art",
		tagline: "Always in style.",
		description: "A timeless classic, always in style.",
		price: 15,
		duration: "45–60 min",
		minutes: 50,
		image: "/images/french.jpg",
		shape: "blob-a"
	},
	{
		id: "chrome-finish",
		name: "Chrome Finish",
		category: "addons",
		tagline: "Mirror light.",
		description: "Add a touch of modern luxury to your nails.",
		price: 20,
		duration: "45–60 min",
		minutes: 50,
		image: "/images/chrome.jpg",
		shape: "blob-c"
	},
	{
		id: "matte-finish",
		name: "Matte Finish",
		category: "addons",
		tagline: "Soft depth.",
		description: "A sleek and sophisticated look.",
		price: 15,
		duration: "45–60 min",
		minutes: 45,
		image: "/images/matte.jpg",
		shape: "blob-d"
	},
	{
		id: "nail-removal",
		name: "Nail Removal",
		category: "care",
		tagline: "Gentle release.",
		description: "Safe, careful removal that protects your natural nail.",
		price: 20,
		duration: "20–40 min",
		minutes: 30,
		image: "/images/tools.jpg",
		shape: "blob-b"
	},
	{
		id: "paraffin-treatment",
		name: "Paraffin Treatment",
		category: "care",
		tagline: "Warm care.",
		description: "A warming treatment that leaves hands soft and restored.",
		price: 25,
		duration: "20–30 min",
		minutes: 25,
		image: "/images/salon.jpg",
		shape: "blob-a"
	}
];
var featuredServices = services.filter((service) => service.featured);
function priceLabel(price) {
	return `$${price}+`;
}
function getService(id) {
	return services.find((service) => service.id === id) ?? null;
}
function filterServices(filter) {
	if (filter === "all") return services;
	return services.filter((service) => service.category === filter);
}
//#endregion
export { serviceFilters as a, priceLabel as i, filterServices as n, services as o, getService as r, featuredServices as t };
