import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/products", "/industries", "/certifications", "/faqs", "/contact"];
  const pages = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const productPages = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  return [...pages, ...productPages];
}
