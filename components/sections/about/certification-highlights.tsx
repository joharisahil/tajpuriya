import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";

const certifications = ["ISO 22000", "ISO 9001", "HALAL", "KOSHER", "FSSAI"];

export function CertificationHighlights() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <p className="text-label text-brand-green">Certification Highlights</p>
        <h2 className="mt-4 text-h1 text-brand-navy text-balance">Quality credentials that support buyer confidence</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {certifications.map((certification) => (
            <div key={certification} className="overflow-hidden rounded-[1.75rem] bg-white shadow-md">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,77,57,0.08),rgba(19,34,56,0.02))]" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <span className="text-lg font-semibold text-brand-navy">{certification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/certifications" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
          View Certifications
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
