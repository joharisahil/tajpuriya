import { Container } from "@/components/shared/container";

const faqs = [
  {
    q: "What does Tajpuriya Agritech manufacture and trade?",
    a: "The company manufactures and trades rice liquid glucose, rice protein, maltose dextrin powder, sorbitol and allied food ingredients."
  },
  {
    q: "Where is the company located?",
    a: "The company is based at Plot No-409M, Dhankuna Road, Majhola, Khatima, Udham Singh Nagar, Uttarakhand - 262308, India."
  },
  {
    q: "Which certifications support the business?",
    a: "The company profile includes ISO 22000:2018, ISO 9001:2015, HALAL, KOSHER and FSSAI."
  },
  {
    q: "Does the company serve Pan India buyers?",
    a: "Yes. The business is positioned to support Pan India supply and bulk ingredient requirements."
  },
  {
    q: "Which industries do you typically work with?",
    a: "The ingredient portfolio aligns with confectionery, bakery, food processing, beverages, pharmaceutical and nutraceutical applications."
  },
  {
    q: "Is this a manufacturing-led business?",
    a: "Yes. The page is intentionally structured to reflect a manufacturing-first operating model and not a software-style business."
  }
];

export function AboutFaqSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <p className="text-label text-brand-green">FAQ</p>
        <h2 className="mt-4 text-h1 text-brand-navy text-balance">About Tajpuriya Agritech FAQs</h2>

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
