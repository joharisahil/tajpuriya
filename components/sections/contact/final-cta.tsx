import Link from "next/link";
import { Container } from "@/components/shared/container";

export function ContactFinalCta() {
  return (
    <section className="section-gap bg-brand-navy">
      <Container>
        <div className="max-w-3xl text-white">
          <h2 className="text-h1 text-white text-balance">Looking for Reliable Food Ingredient Supply?</h2>
          <p className="mt-5 text-body-lg text-white/85">
            Our team is ready to assist with product information, certifications and bulk supply requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#contact-form" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy">
              Request Quote
            </Link>
            <a href="#contact-options" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              Call Now
            </a>
            <a href="#whatsapp" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
