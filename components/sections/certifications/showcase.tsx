import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

const certifications = [
  {
    name: "ISO 22000:2018",
    image: media.images.iso2018,
    description: "Food safety management system standard supporting controlled manufacturing practices.",
    importance: "Supports food safety discipline and buyer confidence.",
    benefit: "Helps procurement teams assess safety-oriented operations."
  },
  {
    name: "ISO 9001:2015",
    image: media.images.iso2015,
    description: "Quality management system standard focused on consistency and process discipline.",
    importance: "Signals documented quality management.",
    benefit: "Supports dependable output and customer assurance."
  },
  {
    name: "HALAL",
    image: media.images.halal,
    description: "Certification support for markets and buyers requiring Halal-aligned ingredients.",
    importance: "Expands suitability for specific customer requirements.",
    benefit: "Supports broader market access and trust."
  },
  {
    name: "KOSHER",
    image: media.images.kosher,
    description: "Certification support for customers needing Kosher-compliant sourcing.",
    importance: "Shows awareness of specialized compliance needs.",
    benefit: "Supports procurement in regulated food channels."
  },
  {
    name: "FSSAI",
    image: media.images.fssai,
    description: "Food business compliance marker for Indian food ingredient operations.",
    importance: "Relevant for local food safety and regulatory confidence.",
    benefit: "Supports domestic buyer assurance."
  }
];

export function CertificationShowcase() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Certification Showcase</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Prestigious compliance markers presented with manufacturing context</h2>
            <p className="mt-6 text-body text-neutral-700">
              Each certification supports a different part of the supplier evaluation process. Together they help position the company
              as a serious food ingredient manufacturer rather than a generic supplier.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {certifications.map((certification) => (
              <div key={certification.name} className="grid gap-6 border-b border-neutral-200 pb-8 md:grid-cols-[240px,1fr]">
                <div className="mx-auto w-full max-w-[260px]">
                <ImageFrame
                src={certification.image}
                alt={`${certification.name} certificate`}
                ratio="portrait"
                wrapperClassName="shadow-md"
                />
                </div>
                <div>
                  <h3 className="text-h2 text-brand-navy">{certification.name}</h3>
                  <p className="mt-3 text-body text-neutral-700">{certification.description}</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Importance</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-700">{certification.importance}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">Business Benefit</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-700">{certification.benefit}</p>
                    </div>
                  </div>
                  <button type="button" className="mt-6 inline-flex rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-brand-navy">
                    Download Placeholder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
