import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/shared/container";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Products"
        description="A clear product hub for procurement teams, formulators, distributors, and business buyers."
      />
      <section className="section-gap">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.slug} className="rounded-2xl border border-brand-line p-6">
                <h2 className="text-2xl font-semibold text-brand-navy">{product.name}</h2>
                <p className="mt-3 text-gray-600">{product.shortDescription}</p>
                <Link href={`/products/${product.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand-green">
                  Open product page
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
