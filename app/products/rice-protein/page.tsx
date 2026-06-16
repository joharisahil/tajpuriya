import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getProductBySlug } from "@/lib/products";
import { ProductJsonLd } from "@/components/seo/product-jsonld";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductOverview } from "@/components/sections/product-overview";
import { ProductBenefits } from "@/components/sections/product-benefits";
import { ProductApplications } from "@/components/sections/product-applications";
import { ProductSpecifications } from "@/components/sections/product-specifications";
import { ProductPackaging } from "@/components/sections/product-packaging";
import { ProductQuality } from "@/components/sections/product-quality";
import { ProductRelatedProducts } from "@/components/sections/product-related-products";
import { ProductFaq } from "@/components/sections/product-faq";
import { ProductInquiry } from "@/components/sections/product-inquiry";

const product = getProductBySlug("rice-protein");

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  keywords: product.keywords,
  alternates: { canonical: "/products/rice-protein" },
  openGraph: {
    title: product.seoTitle,
    description: product.seoDescription,
    url: `${siteConfig.url}/products/rice-protein`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/images/placeholders/product-placeholder.jpg", width: 1200, height: 630, alt: product.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: product.seoTitle,
    description: product.seoDescription,
    images: ["/images/placeholders/product-placeholder.jpg"]
  }
};

export default function RiceProteinPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${siteConfig.url}/products/${product.slug}` }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <ProductJsonLd product={product} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductBenefits product={product} />
      <ProductApplications product={product} />
      <ProductSpecifications product={product} />
      <ProductPackaging product={product} />
      <ProductQuality product={product} />
      <ProductRelatedProducts product={product} />
      <ProductFaq product={product} />
      <ProductInquiry product={product} />
    </>
  );
}
