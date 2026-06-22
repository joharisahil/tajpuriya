import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function PanIndiaReachSection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Pan India Reach</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Distribution and delivery support across India</h2>
            <div className="mt-6 space-y-4 text-body text-neutral-700">
              <p>
                We serve buyers who need practical logistics, responsive communication and the ability to manage bulk ingredient
                supply with discipline.
              </p>
              <p>
                Customer support and logistics are part of the operating system, not a separate afterthought.
              </p>
            </div>
          </div>

        <div className="lg:col-span-7">
        <ImageFrame
        src={media.images.panIndia}
        alt="Pan India Supply Network"
        className="h-[320px] w-full md:h-[420px] lg:h-[500px]"
        />
        </div>
        </div>
      </Container>
    </section>
  );
}
