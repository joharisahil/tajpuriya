import Link from "next/link";
import { Container } from "@/components/shared/container";

export function FinalCta() {
  return (
    <section className="section-gap">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-label text-white/70">Industrial Enquiries</p>
            <h2 className="mt-4 text-h1 text-white text-balance">Discuss Your Ingredient Requirements</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-white/85">
              Our team can assist with product information, packaging details, certifications and bulk order requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy">
                Request Quote
              </Link>
              <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
