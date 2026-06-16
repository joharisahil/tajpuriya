import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getRelatedProducts } from "@/lib/products";
import type { Product } from "@/types/product";

export function ProductRelatedProducts({ product }: { product: Product }) {
  const related = getRelatedProducts(product.slug);

  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="Related Products" title="Other ingredients in the Tajpuriya Agritech portfolio" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/products/${item.slug}`} className="border-t border-neutral-200 pt-5">
              <p className="text-h3 text-brand-navy">{item.name}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-700">{item.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                View Product
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
