import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function FoodSafetySection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <ImageFrame src={media.images.foodSafety} alt="Food safety placeholder" ratio="wide" wrapperClassName="shadow-md" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Food Safety Approach</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Manufacturing controls, traceability and disciplined handling</h2>
            <div className="mt-6 space-y-4 text-body text-neutral-700">
              <p>Food safety is supported by manufacturing controls that extend from storage and handling through monitoring and quality checks.</p>
              <p>Traceability and documentation help create confidence for customers evaluating ingredient supply at scale.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
