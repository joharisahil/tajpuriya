import { Container } from "@/components/shared/container";

const points = [
  "Reliable Supply",
  "Consistent Quality",
  "Industry Experience",
  "Food Safety Standards",
  "Responsive Support",
  "Bulk Order Capability"
];

export function WhyBuyersChooseUsSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Why Buyers Choose Us</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">A practical supplier relationship built for industrial procurement</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {points.map((point, index) => (
                <div key={point} className="border-t border-neutral-200 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">0{index + 1}</p>
                  <p className="mt-2 text-h3 text-brand-navy">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
