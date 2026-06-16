import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { siteConfig } from "@/lib/site";
import { media } from "@/lib/media";

export function ContactHero() {
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "/contact";
  const whatsappHref = siteConfig.phone ? `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}` : "/contact";

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
          <source src={media.videos.contact} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-black/25" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-label text-white/70">Contact</p>
          <h1 className="mt-4 text-hero-lg text-white text-balance">Get In Touch</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">
            Speak with our team regarding product specifications, certifications, packaging options, pricing and bulk order requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={phoneHref} className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
            <a href={whatsappHref} className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
