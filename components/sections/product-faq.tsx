import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

export function ProductFaq({ product }: { product: Product }) {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-8 space-y-5">
          {product.content.faqs.map((faq) => (
            <details key={faq.question} className="border-b border-neutral-200 pb-5">
              <summary className="cursor-pointer list-none text-h3 text-brand-navy outline-none">{faq.question}</summary>
              <p className="mt-4 max-w-3xl text-body text-neutral-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
