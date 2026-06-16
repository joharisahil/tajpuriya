import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

const items = [
  "Production",
  "Infrastructure",
  "Quality Control",
  "Food Safety",
  "Manufacturing Standards"
];

export function ManufacturingExcellence() {
  return (
    <section className="section-gap">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <ImageFrame
              src={media.images.factoryFront}
              alt="Manufacturing facility placeholder"
              ratio="wide"
              wrapperClassName="shadow-md"
            />
          </div>

          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Manufacturing Excellence</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              Modern infrastructure and control practices that support reliable ingredient supply
            </h2>
            <p className="mt-6 text-body text-neutral-700">
              This section is intentionally visual. The factory environment, process visibility and quality discipline should feel
              like the core of the business because that is what buyers are evaluating.
            </p>
            <ul className="mt-8 space-y-4">
              {items.map((item, index) => (
                <li key={item} className="flex items-center gap-4 border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-green">0{index + 1}</span>
                  <span className="text-h3 text-brand-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
