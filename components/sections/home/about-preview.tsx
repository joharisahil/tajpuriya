import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function AboutPreview() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <ImageFrame
              src={media.images.factory}
              alt="Tajpuriya Agritech factory facility placeholder"
              ratio="portrait"
              wrapperClassName="max-w-xl shadow-md"
            />
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-label text-brand-green">About Company</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              Manufacturing and trading food ingredients with a quality-first approach
            </h2>
            <div className="mt-6 space-y-5 text-body text-neutral-700">
              <p>
                Tajpuriya Agritech Private Limited serves food and ingredient buyers with a focused operating model built around
                dependable supply, documented quality controls and practical customer support.
              </p>
              <p>
                Based in Khatima, Uttarakhand, the company operates with a manufacturing mindset that values consistency, clear
                communication and dependable fulfilment across Pan India requirements.
              </p>
              <p>
                Buyers trust us because we keep the conversation practical: product suitability, quality systems, compliance and
                delivery readiness.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { label: "What we manufacture", value: "Food ingredients for industrial use" },
                { label: "Where we operate", value: "Khatima, Uttarakhand, India" },
                { label: "Why buyers trust us", value: "Quality systems and consistent supply" }
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-brand-green pl-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">{item.label}</p>
                  <p className="mt-2 text-h3 text-brand-navy">{item.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
