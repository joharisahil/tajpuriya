import { Container } from "@/components/shared/container";

export function IndustriesIntro() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Introduction</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              Ingredient support for sectors that depend on consistency and compliance
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-5 text-body text-neutral-700">
              <p>
                Food ingredient manufacturing is not the same for every sector. Confectionery, bakery, beverage and nutraceutical
                manufacturers each depend on different ingredient behaviors, supply expectations and quality controls.
              </p>
              <p>
                Tajpuriya Agritech works with these requirements by aligning product selection, manufacturing awareness and commercial
                support with the needs of each industry.
              </p>
              <p>
                The result is a supplier relationship built around quality, consistency and compliance rather than generic product
                selling.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
