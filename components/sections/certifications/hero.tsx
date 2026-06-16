import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function CertificationsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/factory/factory-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={media.videos.certificate} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-black/25" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-label text-white/70">Certifications</p>
          <h1 className="mt-4 text-hero-lg text-white text-balance">Quality Standards & Certifications</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">
            Our manufacturing processes are supported by recognized certifications and compliance systems that reflect our commitment
            to quality, food safety and customer confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
