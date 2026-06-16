import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { products } from "@/data/products";

export function RelatedProductsSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading
          eyebrow="Related Products"
          title="Ingredient portfolio that supports multiple industry requirements"
          description="Linking industries to products helps buyers move from application awareness to procurement."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="border-t border-neutral-200 pt-5">
              <p className="text-h3 text-brand-navy">{product.name}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-700">{product.shortDescription}</p>
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
