import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function FacilitySection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <ImageFrame
              src={media.images.infrastructure}
              alt="Manufacturing facility placeholder"
              ratio="wide"
              wrapperClassName="shadow-md"
            />
          </div>

          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Manufacturing Facility</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              Infrastructure that supports production, storage and quality control
            </h2>
            <div className="mt-6 space-y-4 text-body text-neutral-700">
              <p>
                The facility is presented as a serious production environment, with the kind of operational presence buyers expect
                from a manufacturing-led ingredient supplier.
              </p>
              <p>
                Infrastructure, production handling, storage awareness and quality control form the basis of the company’s operating
                story.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
