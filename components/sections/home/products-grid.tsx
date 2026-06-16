import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImageFrame } from "@/components/shared/image-frame";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductsGrid() {
  return (
    <section className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Ingredient portfolio built for industrial food applications"
          description="Each product is presented as a distinct manufacturing story rather than a compact e-commerce card."
        />

        <div className="mt-12 space-y-16 lg:space-y-20">
          {products.map((product, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={product.slug}
                className={cn("grid gap-8 lg:grid-cols-12 lg:items-center", reversed && "lg:[&>*:first-child]:order-2")}
              >
                <div className="lg:col-span-5">
                  <ImageFrame
                    src={product.image}
                    alt={product.name}
                    ratio="wide"
                    wrapperClassName="shadow-md"
                  />
                </div>

                <div className="lg:col-span-7 lg:max-w-2xl">
                  <p className="text-label text-brand-green">Product {index + 1}</p>
                  <h3 className="mt-4 text-h1 text-brand-navy text-balance">{product.name}</h3>
                  <p className="mt-5 text-body-lg text-neutral-700">{product.shortDescription}</p>

                  <div className="mt-7">
                    <p className="text-label text-brand-green">Applications</p>
                    <p className="mt-3 text-body text-neutral-700">
                      {product.applications.join(", ")} and other formulation environments that require dependable ingredient
                      performance.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-brand-navy"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
