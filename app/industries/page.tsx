import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { IndustriesHero } from "@/components/sections/industries/hero";
import { IndustriesIntro } from "@/components/sections/industries/intro";
import { SectorSection } from "@/components/sections/industries/sector";
import { IndustryProcessSection } from "@/components/sections/industries/process";
import { WhyIndustriesWorkWithUsSection } from "@/components/sections/industries/why-us";
import { RelatedProductsSection } from "@/components/sections/industries/related-products";
import { IndustriesFaqSection } from "@/components/sections/industries/faq";
import { IndustriesCtaSection } from "@/components/sections/industries/cta";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Industries We Serve | Tajpuriya Agritech",
  description:
    "Explore the industries served by Tajpuriya Agritech Private Limited including confectionery, bakery, food processing, beverages, pharmaceutical and nutraceutical manufacturing.",
  keywords: [
    "Food ingredient supplier",
    "Industrial food ingredients",
    "Confectionery ingredients",
    "Bakery ingredients",
    "Food processing ingredients",
    "Rice protein supplier",
    "Rice liquid glucose manufacturer"
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve | Tajpuriya Agritech",
    description:
      "Explore the industries served by Tajpuriya Agritech Private Limited including confectionery, bakery, food processing, beverages, pharmaceutical and nutraceutical manufacturing.",
    url: `${siteConfig.url}/industries`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/images/placeholders/factory-placeholder.jpg", width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Tajpuriya Agritech",
    description:
      "Explore the industries served by Tajpuriya Agritech Private Limited including confectionery, bakery, food processing, beverages, pharmaceutical and nutraceutical manufacturing.",
    images: ["/images/placeholders/factory-placeholder.jpg"]
  }
};

export default function IndustriesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteConfig.url}/industries` }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which industries use rice liquid glucose?", acceptedAnswer: { "@type": "Answer", text: "Rice liquid glucose is commonly used in confectionery, bakery, beverage and food processing applications." } },
      { "@type": "Question", name: "How is rice protein used in nutraceutical manufacturing?", acceptedAnswer: { "@type": "Answer", text: "Rice protein can support plant-based nutrition-oriented formulations depending on the product design." } },
      { "@type": "Question", name: "Can you support bulk industrial orders?", acceptedAnswer: { "@type": "Answer", text: "Yes. The company is structured for B2B procurement and bulk supply requirements." } },
      { "@type": "Question", name: "Do you supply manufacturers across India?", acceptedAnswer: { "@type": "Answer", text: "Yes. The business is positioned for Pan India supply." } },
      { "@type": "Question", name: "Is maltose dextrin powder suitable for dry mixes?", acceptedAnswer: { "@type": "Answer", text: "It is aligned with dry mixes, bakery and food processing environments that need functional carbohydrate support." } },
      { "@type": "Question", name: "Where is sorbitol commonly used?", acceptedAnswer: { "@type": "Answer", text: "Sorbitol is commonly used in confectionery, oral care and pharmaceutical-related applications." } },
      { "@type": "Question", name: "Do you work with export-oriented buyers?", acceptedAnswer: { "@type": "Answer", text: "The industrial positioning and certifications support buyers that require export-ready supplier confidence." } },
      { "@type": "Question", name: "Can I request product specifications for my industry?", acceptedAnswer: { "@type": "Answer", text: "Yes. Product specifications can be discussed during enquiry." } },
      { "@type": "Question", name: "How do certifications help industry buyers?", acceptedAnswer: { "@type": "Answer", text: "Certifications strengthen quality and compliance confidence during supplier evaluation." } },
      { "@type": "Question", name: "Do you help with product selection?", acceptedAnswer: { "@type": "Answer", text: "Yes. The team can support product selection based on industry and application." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <IndustriesHero />
      <IndustriesIntro />
      <SectorSection
        eyebrow="Confectionery Industry"
        title="Rice Liquid Glucose for confectionery manufacturing"
        description="Rice liquid glucose supports candy production, toffee manufacturing, sweetness control, texture management and moisture retention in confectionery systems."
        image={media.images.confectionery}
        points={[
          "Candy production support through functional syrup behavior",
          "Toffee manufacturing with controlled sweetness and body",
          "Texture management in sweets and sugar confectionery",
          "Moisture retention for improved product performance"
        ]}
      />
      <SectorSection
        eyebrow="Bakery Industry"
        title="Ingredient support for bakery manufacturing"
        description="Bakery manufacturers use ingredients like rice liquid glucose and related functional inputs to improve texture, shelf life, moisture retention and formulation consistency."
        image={media.images.bakeryIndustry}
        points={[
          "Texture improvement in bakery applications",
          "Shelf life support through moisture management",
          "Consistency for repeated production runs",
          "Ingredient behavior suited to industrial bakery lines"
        ]}
      />
      <SectorSection
        eyebrow="Food Processing Industry"
        title="Reliable ingredient supply for food processing operations"
        description="Food processing plants require predictable ingredient behavior, manufacturing discipline and consistent supply. Tajpuriya Agritech supports those needs with industrial food ingredients built for processing environments."
        image={media.images.foodProcessing}
        points={[
          "Industrial manufacturing use with operational consistency",
          "Ingredient support for processing requirements",
          "Reliable supply for production planning",
          "Food ingredient focus with quality awareness"
        ]}
      />
      <SectorSection
        eyebrow="Beverage Industry"
        title="Ingredient performance for beverage manufacturing"
        description="Beverage manufacturers depend on ingredient consistency, process stability and manufacturing support. Our ingredient portfolio helps support beverage development where functional reliability matters."
        image={media.images.beverageIndustry}
        reverse
        points={[
          "Ingredient performance that supports beverage processing",
          "Product consistency for repeated formulation",
          "Manufacturing support aligned with industrial requirements",
          "Practical supply behavior for production teams"
        ]}
      />
      <SectorSection
        eyebrow="Pharmaceutical Industry"
        title="Manufacturing discipline for pharmaceutical-adjacent requirements"
        description="Pharmaceutical buyers expect quality standards, documentation awareness, manufacturing controls and dependable ingredient reliability. These expectations guide the way our business operates."
        image={media.images.pharmaceuticalIndustry}
        points={[
          "Quality standards aligned with industrial procurement",
          "Manufacturing controls and batch awareness",
          "Ingredient reliability for controlled applications",
          "Documentation support for supplier review"
        ]}
      />
      <SectorSection
        eyebrow="Nutraceutical Industry"
        title="Rice Protein support for nutrition-focused manufacturing"
        description="Rice protein aligns with nutraceutical and nutrition-focused manufacturing where product performance, quality assurance and dependable ingredient supply are essential."
        image={media.images.nutraceuticalIndustry}
        reverse
        points={[
          "Rice Protein applications in supplement manufacturing",
          "Nutrition-focused ingredient support",
          "Industrial quality assurance and batch awareness",
          "Supply support for formulation teams"
        ]}
      />
      <IndustryProcessSection />
      <WhyIndustriesWorkWithUsSection />
      <RelatedProductsSection />
      {/* <IndustriesFaqSection /> */}
      <IndustriesCtaSection />
    </>
  );
}
