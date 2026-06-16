import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import type { Product } from "@/types/product";

export function ProductHero({ product }: { product: Product }) {
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
      <source src={product.video} type="video/mp4" />
      </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-black/20" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-label text-white/70">Product Catalogue</p>
          <h1 className="mt-4 text-hero-lg text-white text-balance">{product.name}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">{product.heroSubtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
            {product.applications.map((application) => (
              <span key={application} className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                {application}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
              Request Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
              Contact Team
            </Link>
            <a href="#specifications" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              <Download className="h-4 w-4" />
              Download Specifications
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
