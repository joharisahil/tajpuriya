import { Container } from "@/components/shared/container";

const items = [
  "Product Information",
  "Bulk Orders",
  "Packaging Details",
  "Specifications",
  "Certification Requests",
  "Distribution Inquiries",
  "OEM Opportunities"
];

export function WhyContactUs() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Why Contact Us</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Contact us for the details buyers actually need</h2>
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
