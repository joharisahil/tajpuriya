import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";

export function SectorSection({
  eyebrow,
  title,
  description,
  image,
  points,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  points: string[];
  reverse?: boolean;
}) {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            <ImageFrame src={image} alt={title} ratio="wide" wrapperClassName="shadow-md" />
          </div>
          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <p className="text-label text-brand-green">{eyebrow}</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">{title}</h2>
            <p className="mt-6 text-body text-neutral-700">{description}</p>
            <div className="mt-8 space-y-4 border-l border-neutral-200 pl-6">
              {points.map((point) => (
                <p key={point} className="text-h3 text-brand-navy">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
