import { Factory, Globe2, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/shared/container";

const items = [
  { icon: Factory, title: "Food Ingredient Manufacturer" },
  { icon: Globe2, title: "Pan India Supply" },
  { icon: ShieldCheck, title: "Certified Quality Systems" },
  { icon: Users, title: "Industry-Focused Solutions" }
];

export function TrustBar() {
  return (
    <section className="bg-white">
      <Container className="py-6 sm:py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-6 text-brand-navy">{item.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
