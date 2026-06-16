import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const faqs = [
  {
    q: "What industries commonly use rice liquid glucose?",
    a: "Rice liquid glucose is typically used in confectionery, bakery and beverage formulations where texture, sweetness and functional syrup performance matter."
  },
  {
    q: "Is rice protein suitable for plant-forward product development?",
    a: "Rice protein is commonly selected for formulations that require plant-based protein support and a neutral ingredient positioning."
  },
  {
    q: "What is maltose dextrin powder used for?",
    a: "Maltose dextrin powder is used in dry blends, instant mixes and formulated food systems where functional carbohydrate support is needed."
  },
  {
    q: "Where is sorbitol used in manufacturing?",
    a: "Sorbitol is used across confectionery, oral care and other applications where humectancy, stability and texture are important."
  },
  {
    q: "Do you manufacture with quality controls in place?",
    a: "The business is structured around process discipline, quality checks and food safety aligned practices."
  },
  {
    q: "Which certifications support your operations?",
    a: "The company profile includes ISO 22000:2018, ISO 9001:2015, HALAL, KOSHER and FSSAI references."
  },
  {
    q: "Do you serve buyers across India?",
    a: "Yes. The business is positioned for Pan India supply and B2B ingredient delivery."
  },
  {
    q: "Can you handle bulk orders and recurring procurement?",
    a: "The company is structured to support bulk enquiry workflows and repeat procurement relationships."
  }
];

export function FaqSection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to common procurement and product questions."
        />

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
