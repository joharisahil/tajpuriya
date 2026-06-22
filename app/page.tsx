import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { TrustBar } from "@/components/sections/home/trust-bar";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ProductsGrid } from "@/components/sections/home/products-grid";
import { IndustriesGrid } from "@/components/sections/home/industries-grid";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { ManufacturingExcellence } from "@/components/sections/home/manufacturing-excellence";
import { CertificationsGrid } from "@/components/sections/home/certifications-grid";
import { QualityAssurance } from "@/components/sections/home/quality-assurance";
import { PanIndiaSupply } from "@/components/sections/home/pan-india-supply";
import { FaqSection } from "@/components/sections/home/faq-section";
import { FinalCta } from "@/components/sections/home/final-cta";
import { ContactPreview } from "@/components/sections/home/contact-preview";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tajpuriya Agritech | Food Ingredient Manufacturer",
  description:
    "Manufacturer and trader of rice liquid glucose, rice protein, maltose dextrin powder, sorbitol and allied food ingredients. Pan India supply with certified quality systems.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Tajpuriya Agritech | Food Ingredient Manufacturer",
    description:
      "Manufacturer and trader of rice liquid glucose, rice protein, maltose dextrin powder, sorbitol and allied food ingredients. Pan India supply with certified quality systems.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/images/placeholders/hero-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tajpuriya Agritech | Food Ingredient Manufacturer",
    description:
      "Manufacturer and trader of rice liquid glucose, rice protein, maltose dextrin powder, sorbitol and allied food ingredients.",
    images: ["/images/placeholders/hero-placeholder.jpg"]
  }
};

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/placeholders/hero-placeholder.jpg`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Khatima",
      addressRegion: "Uttarakhand",
      postalCode: "262308",
      addressCountry: "IN"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What industries commonly use rice liquid glucose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rice liquid glucose is typically used in confectionery, bakery and beverage formulations where texture, sweetness and functional syrup performance matter."
        }
      },
      {
        "@type": "Question",
        name: "Is rice protein suitable for plant-forward product development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rice protein is commonly selected for formulations that require plant-based protein support and a neutral ingredient positioning."
        }
      },
      {
        "@type": "Question",
        name: "What is maltose dextrin powder used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maltose dextrin powder is used in dry blends, instant mixes and formulated food systems where functional carbohydrate support is needed."
        }
      },
      {
        "@type": "Question",
        name: "Where is sorbitol used in manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sorbitol is used across confectionery, oral care and other applications where humectancy, stability and texture are important."
        }
      },
      {
        "@type": "Question",
        name: "Do you manufacture with quality controls in place?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The business is structured around process discipline, quality checks and food safety aligned practices."
        }
      },
      {
        "@type": "Question",
        name: "Which certifications support your operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The company profile includes ISO 22000:2018, ISO 9001:2015, HALAL, KOSHER and FSSAI references."
        }
      },
      {
        "@type": "Question",
        name: "Do you serve buyers across India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The business is positioned for Pan India supply and B2B ingredient delivery."
        }
      },
      {
        "@type": "Question",
        name: "Can you handle bulk orders and recurring procurement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The company is structured to support bulk enquiry workflows and repeat procurement relationships."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HeroSection />
      <TrustBar />
      {/* <AboutPreview /> */}
      <ProductsGrid />
      <IndustriesGrid />
      <WhyChooseUs />
      <ManufacturingExcellence />
      {/* <CertificationsGrid /> */}
      <QualityAssurance />
      <PanIndiaSupply />
      {/* <FaqSection /> */}
      <FinalCta />
      {/* <ContactPreview /> */}
    </>
  );
}
