import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

export function ProductBenefits({ product }: { product: Product }) {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading eyebrow="Key Benefits" title="Functional advantages for industrial buyers" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {product.content.benefits.map((benefit, index) => (
            <div key={benefit} className="border-t border-neutral-200 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">0{index + 1}</p>
              <p className="mt-2 text-h3 text-brand-navy">{benefit}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
