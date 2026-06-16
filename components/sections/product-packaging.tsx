import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

export function ProductPackaging({ product }: { product: Product }) {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading eyebrow="Packaging Options" title="Commercial packing formats" />
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {product.content.packaging.map((item, index) => (
            <div key={item} className="border-t border-neutral-200 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">0{index + 1}</p>
              <p className="mt-2 text-h3 text-brand-navy">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
