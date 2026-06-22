import { products } from "./products";

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Certifications", href: "/certifications" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" }
];

export const productLinks = products.map((product) => ({
  label: product.name,
  href: `/products/${product.slug}`
}));
