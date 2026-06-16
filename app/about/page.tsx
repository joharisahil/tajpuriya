import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AboutHero } from "@/components/sections/about/hero";
import { CompanyIntro } from "@/components/sections/about/company-intro";
import { JourneySection } from "@/components/sections/about/journey";
import { PhilosophySection } from "@/components/sections/about/philosophy";
import { FacilitySection } from "@/components/sections/about/facility";
import { MissionVisionSection } from "@/components/sections/about/mission-vision";
import { CertificationHighlights } from "@/components/sections/about/certification-highlights";
import { WhyBuyersChooseUsSection } from "@/components/sections/about/why-buyers-choose-us";
import { PanIndiaReachSection } from "@/components/sections/about/pan-india-reach";
import { AboutFaqSection } from "@/components/sections/about/faq";
import { AboutCtaSection } from "@/components/sections/about/cta";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About Tajpuriya Agritech Private Limited",
  description:
    "Learn about Tajpuriya Agritech Private Limited, a food ingredient manufacturer and trader based in Khatima, Uttarakhand, serving Pan India buyers with certified quality systems.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Tajpuriya Agritech Private Limited",
    description:
      "Learn about Tajpuriya Agritech Private Limited, a food ingredient manufacturer and trader based in Khatima, Uttarakhand, serving Pan India buyers with certified quality systems.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: media.images.factory,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tajpuriya Agritech Private Limited",
    description:
      "Learn about Tajpuriya Agritech Private Limited, a food ingredient manufacturer and trader based in Khatima, Uttarakhand.",
    images: ["/images/placeholders/factory-placeholder.jpg"]
  }
};

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteConfig.url}/about`
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Tajpuriya Agritech manufacture and trade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The company manufactures and trades rice liquid glucose, rice protein, maltose dextrin powder, sorbitol and allied food ingredients."
        }
      },
      {
        "@type": "Question",
        name: "Where is the company located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The company is based at Plot No-409M, Dhankuna Road, Majhola, Khatima, Udham Singh Nagar, Uttarakhand - 262308, India."
        }
      },
      {
        "@type": "Question",
        name: "Which certifications support the business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The company profile includes ISO 22000:2018, ISO 9001:2015, HALAL, KOSHER and FSSAI."
        }
      },
      {
        "@type": "Question",
        name: "Does the company serve Pan India buyers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The business is positioned to support Pan India supply and bulk ingredient requirements."
        }
      },
      {
        "@type": "Question",
        name: "Which industries do you typically work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ingredient portfolio aligns with confectionery, bakery, food processing, beverages, pharmaceutical and nutraceutical applications."
        }
      },
      {
        "@type": "Question",
        name: "Is this a manufacturing-led business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The page is intentionally structured to reflect a manufacturing-first operating model and not a software-style business."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <AboutHero />
      <CompanyIntro />
      <JourneySection />
      <PhilosophySection />
      <FacilitySection />
      <MissionVisionSection />
      <CertificationHighlights />
      <WhyBuyersChooseUsSection />
      <PanIndiaReachSection />
      <AboutFaqSection />
      <AboutCtaSection />
    </>
  );
}
