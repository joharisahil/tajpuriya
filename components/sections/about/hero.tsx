import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/factory/factory-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_70%]"
        >
          <source src={media.videos.about} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-black/25" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-label text-white/70">About</p>
          <h1 className="mt-4 text-hero-lg text-white text-balance">About Tajpuriya Agritech</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">
            Committed to delivering quality food ingredient solutions through reliable manufacturing practices and industry-focused
            expertise.
          </p>
        </div>
      </Container>
    </section>
  );
}
