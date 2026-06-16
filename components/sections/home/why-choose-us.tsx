import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const points = [
  { title: "Manufacturing Quality", detail: "Built around disciplined production practices and dependable ingredient standards." },
  { title: "Quality Control", detail: "Control points and checks that support consistency from batch to batch." },
  { title: "Certifications", detail: "Quality credentials that reinforce trust in food ingredient procurement." },
  { title: "Pan India Distribution", detail: "Support for buyers across India with practical supply planning." },
  { title: "Reliable Supply", detail: "Focused on repeat business and dependable order fulfilment." },
  { title: "Customer Support", detail: "Clear communication for product, documentation and bulk requirements." }
];

export function WhyChooseUs() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="An industrial operating model shaped around quality and supply confidence"
          description="The value is not in flashy claims. It is in the way manufacturing discipline, quality oversight and service responsiveness work together."
        />

        <div className="mt-10 grid gap-0 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Capability Overview</p>
            <p className="mt-4 max-w-sm text-body text-neutral-700">
              Tajpuriya Agritech supports B2B buyers who need ingredient supply backed by a practical understanding of production,
              compliance and logistics.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {points.map((point, index) => (
                <div key={point.title} className="border-t border-neutral-200 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">0{index + 1}</p>
                  <h3 className="mt-2 text-h3 text-brand-navy">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
