import { Container } from "@/components/shared/container";

const steps = ["Consultation", "Product Selection", "Documentation", "Supply", "Support"];

export function IndustryProcessSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Industry Support Process</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">A straightforward process for industrial buyers</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="border-t border-neutral-200 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">0{index + 1}</p>
                  <p className="mt-2 text-h3 text-brand-navy">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
