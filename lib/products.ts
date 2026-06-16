import { notFound } from "next/navigation";
import { products } from "@/data/products";

export function getProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    notFound();
  }
  return product;
}

export function getRelatedProducts(slug: string) {
  return products.filter((item) => item.slug !== slug);
}
