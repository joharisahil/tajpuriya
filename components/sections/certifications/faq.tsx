import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const faqs = [
  {
    q: "What certifications does Tajpuriya Agritech hold?",
    a: "The company profile includes ISO 22000:2018, ISO 9001:2015, HALAL, KOSHER and FSSAI."
  },
  {
    q: "Why is ISO 22000 important for food ingredient buyers?",
    a: "It indicates food safety management discipline within the manufacturing process."
  },
  {
    q: "How does ISO 9001 help procurement teams?",
    a: "It supports confidence in quality management and process consistency."
  },
  {
    q: "Why are HALAL and KOSHER certifications useful?",
    a: "They support specific customer and market requirements for compliant sourcing."
  },
  {
    q: "What does FSSAI signal to buyers in India?",
    a: "It supports domestic compliance confidence for food business operations."
  },
  {
    q: "Can certifications help with export readiness?",
    a: "Yes. Certifications strengthen trust and support buyer due diligence for trade-oriented customers."
  },
  {
    q: "Do certifications mean the products are suitable for bulk orders?",
    a: "They help build confidence in quality systems, which is important for bulk procurement."
  },
  {
    q: "Can I request certification copies?",
    a: "Yes. Certification documents can be requested through the inquiry process."
  }
];

export function CertificationsFaq() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Certification-related questions" />
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
