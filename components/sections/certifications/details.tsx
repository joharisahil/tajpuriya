import { Container } from "@/components/shared/container";

const details = [
  {
    title: "ISO 22000",
    purpose: "Food safety management for controlled ingredient manufacturing.",
    importance: "Supports safety-focused processes and buyer assurance.",
    support: "Helps customers trust that food safety is embedded into operations.",
    improvement: "Improves manufacturing standards through structured control."
  },
  {
    title: "ISO 9001",
    purpose: "Quality management system for process consistency.",
    importance: "Signals documented quality discipline.",
    support: "Supports dependable supply and clear customer expectations.",
    improvement: "Improves manufacturing standards through process awareness."
  },
  {
    title: "HALAL",
    purpose: "Compliance support for Halal-aligned market needs.",
    importance: "Supports specific buyer and market requirements.",
    support: "Widens suitability for food ingredient customers.",
    improvement: "Improves manufacturing standards by addressing market-specific controls."
  },
  {
    title: "KOSHER",
    purpose: "Compliance support for Kosher-oriented customers.",
    importance: "Relevant for buyers with defined sourcing needs.",
    support: "Improves confidence for regulated food channels.",
    improvement: "Improves manufacturing standards through buyer-specific diligence."
  },
  {
    title: "FSSAI",
    purpose: "Domestic food business regulatory alignment.",
    importance: "Important for Indian food ingredient operations.",
    support: "Supports confidence in local supply and compliance awareness.",
    improvement: "Improves manufacturing standards through local compliance orientation."
  }
];

export function CertificationDetails() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <p className="text-label text-brand-green">Certification Details</p>
        <h2 className="mt-4 text-h1 text-brand-navy text-balance">How each certification supports manufacturing and customers</h2>

        <div className="mt-10 space-y-8">
          {details.map((item) => (
            <div key={item.title} className="grid gap-4 border-b border-neutral-200 pb-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <h3 className="text-h2 text-brand-navy">{item.title}</h3>
              </div>
              <div className="lg:col-span-9 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Purpose</p>
                  <p className="mt-2 text-body text-neutral-700">{item.purpose}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Importance</p>
                  <p className="mt-2 text-body text-neutral-700">{item.importance}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Customer Support</p>
                  <p className="mt-2 text-body text-neutral-700">{item.support}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Manufacturing Standards</p>
                  <p className="mt-2 text-body text-neutral-700">{item.improvement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
