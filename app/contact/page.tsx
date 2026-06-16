import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactHero } from "@/components/sections/contact/hero";
import { ContactOptions } from "@/components/sections/contact/options";
import { WhyContactUs } from "@/components/sections/contact/why-contact";
import { ContactFormSection } from "@/components/sections/contact/form";
import { WhatsAppSection } from "@/components/sections/contact/whatsapp";
import { LocationSection } from "@/components/sections/contact/location";
import { ProcurementSupportSection } from "@/components/sections/contact/procurement-support";
import { ContactFaqSection } from "@/components/sections/contact/faq";
import { ContactFinalCta } from "@/components/sections/contact/final-cta";

export const metadata: Metadata = {
  title: "Contact Tajpuriya Agritech | Request Food Ingredient Information",
  description:
    "Contact Tajpuriya Agritech Private Limited for product information, certifications, packaging options, WhatsApp inquiries and bulk food ingredient requirements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Tajpuriya Agritech | Request Food Ingredient Information",
    description:
      "Contact Tajpuriya Agritech Private Limited for product information, certifications, packaging options, WhatsApp inquiries and bulk food ingredient requirements.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/images/placeholders/factory-placeholder.jpg", width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tajpuriya Agritech | Request Food Ingredient Information",
    description:
      "Contact Tajpuriya Agritech Private Limited for product information, certifications, packaging options and bulk food ingredient requirements.",
    images: ["/images/placeholders/factory-placeholder.jpg"]
  }
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What are your typical lead times?", acceptedAnswer: { "@type": "Answer", text: "Lead times depend on product, quantity and packaging requirements. Please share your details for confirmation." } },
      { "@type": "Question", name: "What is your MOQ?", acceptedAnswer: { "@type": "Answer", text: "Minimum order quantities depend on the product and commercial format. We can confirm during enquiry." } },
      { "@type": "Question", name: "Is product availability regular?", acceptedAnswer: { "@type": "Answer", text: "We support ongoing B2B supply planning and can discuss current availability during enquiry." } },
      { "@type": "Question", name: "Do you arrange shipping?", acceptedAnswer: { "@type": "Answer", text: "Shipping can be coordinated based on location and order requirements." } },
      { "@type": "Question", name: "Can you share documentation?", acceptedAnswer: { "@type": "Answer", text: "Yes. Product and certification documentation can be shared when requested." } },
      { "@type": "Question", name: "Do you provide certifications?", acceptedAnswer: { "@type": "Answer", text: "Yes. ISO, HALAL, KOSHER and FSSAI related information can be discussed." } },
      { "@type": "Question", name: "Can I request samples?", acceptedAnswer: { "@type": "Answer", text: "Sample requests can be reviewed based on product and buyer requirement." } },
      { "@type": "Question", name: "What support do you provide after inquiry?", acceptedAnswer: { "@type": "Answer", text: "Our team supports product details, packaging discussions and bulk order coordination." } }
    ]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone || undefined,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Khatima",
      addressRegion: "Uttarakhand",
      postalCode: "262308",
      addressCountry: "IN"
    },
    areaServed: "IN",
    priceRange: "Request quote"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <ContactHero />
      <ContactOptions />
      <WhyContactUs />
      <ContactFormSection />
      <WhatsAppSection />
      <LocationSection />
      <ProcurementSupportSection />
      <ContactFaqSection />
      <ContactFinalCta />
    </>
  );
}
