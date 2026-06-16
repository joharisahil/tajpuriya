import { Beaker, GlassWater, Pill, Sprout, Candy, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

const iconMap = [Candy, UtensilsCrossed, Beaker, GlassWater, Pill, Sprout];

export function ProductApplications({ product }: { product: Product }) {
  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="Applications" title="Where this ingredient fits" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {product.content.applications.map((application, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div key={application.title} className="flex gap-4 border-b border-neutral-200 pb-5">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-h3 text-brand-navy">{application.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{application.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
