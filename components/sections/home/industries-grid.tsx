import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CandlestickChart, Sandwich, Beaker, GlassWater, Pill, Sprout } from "lucide-react";

const industries = [
  { title: "Confectionery", icon: CandlestickChart },
  { title: "Bakery", icon: Sandwich },
  { title: "Food Processing", icon: Beaker },
  { title: "Beverages", icon: GlassWater },
  { title: "Pharmaceutical", icon: Pill },
  { title: "Nutraceutical", icon: Sprout }
];

export function IndustriesGrid() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Ingredient support for sectors that value consistency and reliability"
          description="The portfolio aligns with production environments where product performance, compliance and supply discipline matter."
        />

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="flex gap-4">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-h3 text-brand-navy">{industry.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-700">
                    Structured for ingredient applications that require consistency, traceability and dependable commercial support.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
