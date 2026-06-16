import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const faqs = [
  { q: "What are your typical lead times?", a: "Lead times depend on product, quantity and packaging requirements. Please share your details for confirmation." },
  { q: "What is your MOQ?", a: "Minimum order quantities depend on the product and commercial format. We can confirm during enquiry." },
  { q: "Is product availability regular?", a: "We support ongoing B2B supply planning and can discuss current availability during enquiry." },
  { q: "Do you arrange shipping?", a: "Shipping can be coordinated based on location and order requirements." },
  { q: "Can you share documentation?", a: "Yes. Product and certification documentation can be shared when requested." },
  { q: "Do you provide certifications?", a: "Yes. ISO, HALAL, KOSHER and FSSAI related information can be discussed." },
  { q: "Can I request samples?", a: "Sample requests can be reviewed based on product and buyer requirement." },
  { q: "What support do you provide after inquiry?", a: "Our team supports product details, packaging discussions and bulk order coordination." }
];

export function ContactFaqSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Contact related questions" />
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
