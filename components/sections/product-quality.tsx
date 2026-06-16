import { Container } from "@/components/shared/container";
import type { Product } from "@/types/product";

export function ProductQuality({ product }: { product: Product }) {
  return (
    <section className="section-gap bg-brand-navy text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-white/70">Quality Assurance</p>
            <h2 className="mt-4 text-h1 text-white text-balance">Manufacturing controls that support buyer confidence</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {product.content.qualityAssurance.map((item, index) => (
                <div key={item} className="border-l border-white/20 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">0{index + 1}</p>
                  <p className="mt-2 text-h3 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
