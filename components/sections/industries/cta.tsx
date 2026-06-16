import Link from "next/link";
import { Container } from "@/components/shared/container";

export function IndustriesCtaSection() {
  return (
    <section className="section-gap">
      <Container>
        <div className="rounded-[2rem] bg-brand-navy px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-h1 text-white text-balance">Need Ingredient Solutions for Your Industry?</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-white/85">
              Speak with our team regarding product selection, specifications, certifications and bulk supply requirements.
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
