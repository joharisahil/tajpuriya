import { Container } from "@/components/shared/container";

const items = [
  "Documentation Support",
  "Product Information",
  "Certification Copies",
  "Packaging Information",
  "Bulk Orders",
  "Technical Assistance"
];

export function ProcurementSupportSection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Procurement Support</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Support for purchasing managers and industrial buyers</h2>
          </div>
          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="border-t border-neutral-200 pt-5">
                <p className="text-h3 text-brand-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
