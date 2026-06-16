import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

export function ProductSpecifications({ product }: { product: Product }) {
  return (
    <section id="specifications" className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="Technical Specifications" title="Specification overview" />
        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {product.content.specifications.map((spec, index) => (
              <div key={spec.label} className={`flex items-center justify-between gap-6 px-5 py-4 ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">{spec.label}</span>
                <span className="text-sm font-medium text-brand-navy text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
