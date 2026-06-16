import { Container } from "@/components/shared/container";

const items = [
  {
    title: "Quality",
    detail: "Consistent ingredient standards supported by disciplined production and release practices."
  },
  {
    title: "Consistency",
    detail: "A manufacturing mindset that prioritizes repeatable outcomes for every order."
  },
  {
    title: "Compliance",
    detail: "Operating with the documentation and quality awareness expected in modern ingredient supply."
  },
  {
    title: "Food Safety",
    detail: "Respect for food safety principles across production, handling and dispatch."
  },
  {
    title: "Customer Requirements",
    detail: "Practical support shaped around product suitability, packaging and order planning."
  }
];

export function PhilosophySection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Manufacturing Philosophy</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              Built on quality, consistency and food safety discipline
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 border-l border-neutral-200 pl-6">
              {items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-h3 text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-body text-neutral-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
