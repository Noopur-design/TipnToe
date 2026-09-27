export const galleryFilters = [
  { id: "all", label: "All" },
  { id: "classic", label: "Classic" },
  { id: "gel", label: "Gel" },
  { id: "acrylic", label: "Acrylic" },
  { id: "nail-art", label: "Nail Art" },
  { id: "seasonal", label: "Seasonal" },
  { id: "bridal", label: "Bridal" },
  { id: "celeb", label: "Celeb Looks" },
] as const;

export type GalleryFilter = (typeof galleryFilters)[number]["id"];

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryFilter, "all">;
  image: string;
  span: 2 | 3;
  shape: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "classic-elegance", title: "Classic Elegance", category: "classic", image: "/images/look-bow.jpg", span: 2, shape: "2rem 3rem 2.2rem 2.6rem" },
  { id: "timeless-french", title: "Timeless French", category: "classic", image: "/images/look-swirl.jpg", span: 2, shape: "2.6rem 1.8rem 2.8rem 2rem" },
  { id: "custom-nail-art", title: "Custom Nail Art", category: "nail-art", image: "/images/look-wine.jpg", span: 2, shape: "2rem 2.4rem 3rem 1.8rem" },
  { id: "soft-glam", title: "Soft Glam", category: "celeb", image: "/images/look-stars.jpg", span: 3, shape: "3rem 2rem 2.4rem 2.8rem" },
  { id: "bridal-special", title: "Bridal Special", category: "bridal", image: "/images/look-almond.jpg", span: 2, shape: "2.2rem 2.8rem 2rem 3rem" },
  { id: "acrylic-perfection", title: "Acrylic Perfection", category: "acrylic", image: "/images/look-navy.jpg", span: 3, shape: "2.8rem 2rem 2.4rem 3.2rem" },
  { id: "minimal-luxury", title: "Minimal Luxury", category: "gel", image: "/images/look-sage.jpg", span: 2, shape: "2rem 3.2rem 2.4rem 2rem" },
  { id: "seasonal-inspo", title: "Seasonal Inspo", category: "seasonal", image: "/images/look-olive.jpg", span: 2, shape: "3rem 2.2rem 2.8rem 2rem" },
  { id: "trendy-looks", title: "Trendy Looks", category: "acrylic", image: "/images/look-cocoa.jpg", span: 2, shape: "2.4rem 2rem 3rem 2.2rem" },
  { id: "client-favourites", title: "Client Favourites", category: "gel", image: "/images/look-bronze.jpg", span: 2, shape: "2rem 2.6rem 2.2rem 3rem" },
  { id: "pearl-blush", title: "Pearl Blush", category: "bridal", image: "/images/look-pearl.jpg", span: 2, shape: "2.6rem 2rem 3rem 2.2rem" },
  { id: "milk-gold", title: "Milk and Gold", category: "classic", image: "/images/look-milk.jpg", span: 2, shape: "2rem 3rem 2.4rem 2.6rem" },
  { id: "plum-silk", title: "Plum Silk", category: "seasonal", image: "/images/look-plum.jpg", span: 3, shape: "3rem 2.2rem 2.6rem 2rem" },
];

export function filterGallery(filter: GalleryFilter) {
  if (filter === "all") return galleryItems;
  return galleryItems.filter((item) => item.category === filter);
}

export function categoryLabel(id: GalleryItem["category"]) {
  return galleryFilters.find((filter) => filter.id === id)?.label ?? id;
}
