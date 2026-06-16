import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function IndustriesHero() {
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
  <source src={media.videos.factory} type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-black/20" />
      </div>
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-label text-white/70">Industries</p>
          <h1 className="mt-4 text-hero-lg text-white text-balance">Industries We Serve</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">
            Supporting manufacturers across multiple industries with reliable food ingredient solutions, consistent quality and
            dependable supply capabilities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
              Explore Products
            </Link>
            <Link href="/contact" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
              Request Quote
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
