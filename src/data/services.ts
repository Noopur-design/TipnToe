export type ServiceCategory = "extensions" | "nail-art" | "care" | "addons";

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  price: number;
  duration: string;
  minutes: number;
  image: string;
  featured?: boolean;
  popular?: boolean;
  tone?: "dark" | "light";
  shape: "blob-a" | "blob-b" | "blob-c" | "blob-d";
};

export const serviceFilters = [
  { id: "all", label: "All Services" },
  { id: "extensions", label: "Extensions" },
  { id: "nail-art", label: "Nail Art" },
  { id: "care", label: "Care" },
  { id: "addons", label: "Add-ons" },
] as const;

export type ServiceFilter = (typeof serviceFilters)[number]["id"];

export const services: Service[] = [
  {
    id: "classic-extensions",
    name: "Classic Extensions",
    category: "extensions",
    tagline: "Timeless beauty. Always in style.",
    description: "Elegant and natural-looking enhancements for everyday beauty.",
    price: 2800,
    duration: "60–90 min",
    minutes: 75,
    image: "/images/look-bow.jpg",
    featured: true,
    popular: true,
    tone: "light",
    shape: "blob-a",
  },
  {
    id: "gel-extensions",
    name: "Gel Extensions",
    category: "extensions",
    tagline: "Strong. Natural. Flawless.",
    description: "Durable, lightweight, and long-lasting shine.",
    price: 3200,
    duration: "75–90 min",
    minutes: 80,
    image: "/images/look-swirl.jpg",
    featured: true,
    tone: "light",
    shape: "blob-b",
  },
  {
    id: "acrylic-extensions",
    name: "Acrylic Extensions",
    category: "extensions",
    tagline: "Bold designs. Endless possibilities.",
    description: "Bold, strong, and fully customizable to match your style.",
    price: 2600,
    duration: "60–90 min",
    minutes: 75,
    image: "/images/look-sage.jpg",
    featured: true,
    tone: "light",
    shape: "blob-c",
  },
  {
    id: "custom-nail-art",
    name: "Custom Nail Art",
    category: "nail-art",
    tagline: "Your imagination. Our art.",
    description: "A design made for you, from a single detail to a full set.",
    price: 900,
    duration: "15–60 min",
    minutes: 40,
    image: "/images/look-olive.jpg",
    featured: true,
    tone: "light",
    shape: "blob-d",
  },
  {
    id: "nail-repair",
    name: "Nail Repair",
    category: "care",
    tagline: "A quiet fix.",
    description: "A careful repair for a chipped or broken nail.",
    price: 450,
    duration: "20–30 min",
    minutes: 25,
    image: "/images/look-almond.jpg",
    shape: "blob-b",
  },
  {
    id: "french-tips",
    name: "French Tips",
    category: "nail-art",
    tagline: "Always in style.",
    description: "A clean French tip, shaped and finished by hand.",
    price: 850,
    duration: "45–60 min",
    minutes: 50,
    image: "/images/look-wine.jpg",
    shape: "blob-a",
  },
  {
    id: "chrome-finish",
    name: "Chrome Finish",
    category: "addons",
    tagline: "Mirror light.",
    description: "A mirror chrome finish over your set.",
    price: 650,
    duration: "45–60 min",
    minutes: 50,
    image: "/images/look-stars.jpg",
    shape: "blob-c",
  },
  {
    id: "matte-finish",
    name: "Matte Finish",
    category: "addons",
    tagline: "Soft depth.",
    description: "A soft matte finish with a quiet sheen.",
    price: 550,
    duration: "45–60 min",
    minutes: 45,
    image: "/images/look-glitter.jpg",
    shape: "blob-d",
  },
  {
    id: "nail-removal",
    name: "Nail Removal",
    category: "care",
    tagline: "Gentle release.",
    description: "Gentle removal that leaves the natural nail intact.",
    price: 500,
    duration: "20–40 min",
    minutes: 30,
    image: "/images/look-navy.jpg",
    shape: "blob-b",
  },
  {
    id: "paraffin-treatment",
    name: "Paraffin Treatment",
    category: "care",
    tagline: "Warm care.",
    description: "A warm paraffin treatment for dry hands.",
    price: 750,
    duration: "20–30 min",
    minutes: 25,
    image: "/images/look-mocha.jpg",
    shape: "blob-a",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function priceLabel(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function getService(id: string | null | undefined) {
  return services.find((service) => service.id === id) ?? null;
}

export function filterServices(filter: ServiceFilter) {
  if (filter === "all") return services;
  return services.filter((service) => service.category === filter);
}
