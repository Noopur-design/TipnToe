export const site = {
  name: "tipntoe",
  phoneDisplay: "+91 22 4893 2160",
  phoneHref: "tel:+912248932160",
  email: "hello@tipntoe.in",
  emailHref: "mailto:hello@tipntoe.in",
  street: "14, Turner Road, Bandra West",
  cityLine: "Mumbai, Maharashtra 400050",
  country: "India",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=14+Turner+Road+Bandra+West+Mumbai+400050",
  hours: [
    { days: "Monday – Saturday", time: "11:00 AM – 8:00 PM" },
    { days: "Sunday", time: "11:00 AM – 6:00 PM" },
  ],
  socials: [
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/tipntoe" },
    { id: "pinterest", label: "Pinterest", href: "https://www.pinterest.com/tipntoe" },
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/tipntoe" },
  ],
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const timeGroups = [
  { label: "Morning", slots: ["9:00 AM", "10:00 AM", "11:00 AM"] },
  { label: "Afternoon", slots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"] },
  { label: "Evening", slots: ["5:00 PM", "6:00 PM", "7:00 PM"] },
] as const;

export const allTimes = timeGroups.flatMap((group) => [...group.slots]);

export const inquiryTypes = [
  "General Inquiry",
  "Appointment",
  "Service Question",
  "Pricing",
  "Other",
] as const;
