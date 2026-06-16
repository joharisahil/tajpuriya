import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

export function ProductOverview({ product }: { product: Product }) {
  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="Product Overview" title={`What ${product.name} is`} />
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-5 text-body text-neutral-700">
            {product.content.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-4 border-l border-neutral-200 pl-6">
            <p className="text-label text-brand-green">Industries</p>
            <div className="mt-4 space-y-3">
              {product.content.industries.map((industry) => (
                <div key={industry.title}>
                  <h3 className="text-h3 text-brand-navy">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
