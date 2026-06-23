import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

// const trustPoints = ["ISO Certified", "HALAL Certified", "KOSHER Certified", "Pan India Supply"];
const trustPoints = ["Pan India Supply"];


export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
      <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src={media.videos.mainHero}
        type="video/mp4"
      />
    </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-black/20" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-label text-white/75">Tajpuriya Agritech Private Limited</p>
          <h1 className="mt-5 max-w-3xl text-hero-lg text-white text-balance">
            Leading Manufacturer of Rice Liquid Glucose, Rice Protein & Food Ingredients
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">
            Tajpuriya Agritech delivers high-quality food ingredient solutions backed by modern manufacturing practices, certified
            quality systems and reliable Pan India supply.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
              Get Quote
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                <CheckCircle2 className="h-4 w-4 text-white" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
