import type { Product } from "@/types/product";
import { siteConfig } from "@/lib/site";

export function ProductJsonLd({ product }: { product: Product }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name
    },
    category: "Food Ingredient",
    image: `${siteConfig.url}/images/placeholders/product-placeholder.jpg`
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    </>
  );
}
