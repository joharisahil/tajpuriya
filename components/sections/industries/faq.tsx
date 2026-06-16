import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const faqs = [
  { q: "Which industries use rice liquid glucose?", a: "Rice liquid glucose is commonly used in confectionery, bakery, beverage and food processing applications." },
  { q: "How is rice protein used in nutraceutical manufacturing?", a: "Rice protein can support plant-based nutrition-oriented formulations depending on the product design." },
  { q: "Can you support bulk industrial orders?", a: "Yes. The company is structured for B2B procurement and bulk supply requirements." },
  { q: "Do you supply manufacturers across India?", a: "Yes. The business is positioned for Pan India supply." },
  { q: "Is maltose dextrin powder suitable for dry mixes?", a: "It is aligned with dry mixes, bakery and food processing environments that need functional carbohydrate support." },
  { q: "Where is sorbitol commonly used?", a: "Sorbitol is commonly used in confectionery, oral care and pharmaceutical-related applications." },
  { q: "Do you work with export-oriented buyers?", a: "The industrial positioning and certifications support buyers that require export-ready supplier confidence." },
  { q: "Can I request product specifications for my industry?", a: "Yes. Product specifications can be discussed during enquiry." },
  { q: "How do certifications help industry buyers?", a: "Certifications strengthen quality and compliance confidence during supplier evaluation." },
  { q: "Do you help with product selection?", a: "Yes. The team can support product selection based on industry and application." }
];

export function IndustriesFaqSection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Industry-related questions" />
        <div className="mt-10 space-y-5">
          {faqs.map((faq) => (
            <details key={faq.q} className="border-b border-neutral-200 pb-5">
              <summary className="cursor-pointer list-none text-h3 text-brand-navy outline-none">{faq.q}</summary>
              <p className="mt-4 max-w-3xl text-body text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
