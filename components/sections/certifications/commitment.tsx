import { Container } from "@/components/shared/container";

export function CertificationCommitment() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Quality Commitment</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              A working quality framework built around food safety and customer expectations
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-5 text-body text-neutral-700">
              <p>
                For a manufacturing-led ingredient business, certifications are not branding assets. They are signals that the
                company understands the discipline required to produce, handle and supply food ingredients responsibly.
              </p>
              <p>
                At Tajpuriya Agritech, food safety, compliance and continuous monitoring are treated as operational necessities.
                Quality assurance is shaped by customer expectations, manufacturing procedures and the standards required for
                dependable supply.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
