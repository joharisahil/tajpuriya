import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { products } from "@/data/products";

export function AllFaqs() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our products, manufacturing capabilities and supply capabilities."
        />

        <div className="mt-12 space-y-12">
          {products.map((product) => (
            <div key={product.slug}>
              <h2 className="mb-6 text-2xl font-semibold text-brand-navy">
                {product.name}
              </h2>

              <div className="space-y-5">
                {product.content.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="border-b border-neutral-200 pb-5"
                  >
                    <summary className="cursor-pointer list-none text-h3 text-brand-navy outline-none">
                      {faq.question}
                    </summary>

                    <p className="mt-4 max-w-3xl text-body text-neutral-700">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}