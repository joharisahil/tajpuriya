import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { certifications } from "@/data/certifications";

export function CertificationsGrid() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications presented with the prominence they deserve"
          description="These quality markers reinforce confidence for customers reviewing product suitability, compliance and supplier credibility."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {certifications.map((certification) => (
            <div key={certification} className="group">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-md">
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,77,57,0.08),rgba(19,34,56,0.02))]" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <span className="text-center text-lg font-semibold tracking-tight text-brand-navy">{certification}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/certifications" className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
            View Certifications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
