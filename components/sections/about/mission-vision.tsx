import { Container } from "@/components/shared/container";

export function MissionVisionSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="border-t border-neutral-200 pt-6">
            <p className="text-label text-brand-green">Mission</p>
            <h2 className="mt-4 text-h1 text-brand-navy">To supply dependable food ingredients through disciplined manufacturing and service</h2>
            <p className="mt-5 text-body text-neutral-700">
              Our mission is to support buyers with food ingredient products that are consistent, compliant and commercially
              dependable.
            </p>
          </div>
          <div className="border-t border-neutral-200 pt-6">
            <p className="text-label text-brand-green">Vision</p>
            <h2 className="mt-4 text-h1 text-brand-navy">To remain a trusted ingredient partner for businesses across India</h2>
            <p className="mt-5 text-body text-neutral-700">
              Our vision is to grow through quality, reliability and the kind of buyer trust that comes from real operational
              capability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
