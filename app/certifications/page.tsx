import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { CertificationsHero } from "@/components/sections/certifications/hero";
import { CertificationCommitment } from "@/components/sections/certifications/commitment";
import { CertificationShowcase } from "@/components/sections/certifications/showcase";
import { CertificationDetails } from "@/components/sections/certifications/details";
import { QualityManagementSection } from "@/components/sections/certifications/qms";
import { FoodSafetySection } from "@/components/sections/certifications/safety";
import { WhyCertificationsMatterSection } from "@/components/sections/certifications/why-matter";
import { CertificationsFaq } from "@/components/sections/certifications/faq";
import { CertificationsCta } from "@/components/sections/certifications/cta";

export const metadata: Metadata = {
  title: "Quality Standards & Certifications | Tajpuriya Agritech",
  description:
    "Explore the quality standards and certifications that support Tajpuriya Agritech Private Limited's food ingredient manufacturing, food safety and compliance systems.",
  keywords: ["ISO 22000:2018", "ISO 9001:2015", "HALAL", "KOSHER", "FSSAI", "food ingredient certifications"],
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Quality Standards & Certifications | Tajpuriya Agritech",
    description:
      "Explore the quality standards and certifications that support Tajpuriya Agritech Private Limited's food ingredient manufacturing, food safety and compliance systems.",
    url: `${siteConfig.url}/certifications`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      { url: "/images/placeholders/certificate-placeholder.jpg", width: 1200, height: 630, alt: siteConfig.name }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Standards & Certifications | Tajpuriya Agritech",
    description:
      "Explore the quality standards and certifications that support Tajpuriya Agritech Private Limited's food ingredient manufacturing.",
    images: ["/images/placeholders/certificate-placeholder.jpg"]
  }
};

export default function CertificationsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Certifications", item: `${siteConfig.url}/certifications` }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What certifications does Tajpuriya Agritech hold?",
        acceptedAnswer: { "@type": "Answer", text: "The company profile includes ISO 22000:2018, ISO 9001:2015, HALAL, KOSHER and FSSAI." }
      },
      {
        "@type": "Question",
        name: "Why is ISO 22000 important for food ingredient buyers?",
        acceptedAnswer: { "@type": "Answer", text: "It indicates food safety management discipline within the manufacturing process." }
      },
      {
        "@type": "Question",
        name: "How does ISO 9001 help procurement teams?",
        acceptedAnswer: { "@type": "Answer", text: "It supports confidence in quality management and process consistency." }
      },
      {
        "@type": "Question",
        name: "Why are HALAL and KOSHER certifications useful?",
        acceptedAnswer: { "@type": "Answer", text: "They support specific customer and market requirements for compliant sourcing." }
      },
      {
        "@type": "Question",
        name: "What does FSSAI signal to buyers in India?",
        acceptedAnswer: { "@type": "Answer", text: "It supports domestic compliance confidence for food business operations." }
      },
      {
        "@type": "Question",
        name: "Can certifications help with export readiness?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Certifications strengthen trust and support buyer due diligence for trade-oriented customers." }
      },
      {
        "@type": "Question",
        name: "Do certifications mean the products are suitable for bulk orders?",
        acceptedAnswer: { "@type": "Answer", text: "They help build confidence in quality systems, which is important for bulk procurement." }
      },
      {
        "@type": "Question",
        name: "Can I request certification copies?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Certification documents can be requested through the inquiry process." }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CertificationsHero />
      <CertificationCommitment />
      <CertificationShowcase />
      <CertificationDetails />
      <QualityManagementSection />
      <FoodSafetySection />
      <WhyCertificationsMatterSection />
      <CertificationsFaq />
      <CertificationsCta />
    </>
  );
}
