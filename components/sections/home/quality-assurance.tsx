import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function QualityAssurance() {
  return (
    <section className="section-gap bg-brand-navy text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-label text-white/70">Quality Assurance</p>
            <h2 className="mt-4 text-h1 text-white text-balance">
              Testing, compliance and monitoring embedded into production discipline
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6">
              <p className="max-w-3xl text-body-lg text-white/85">
                Quality assurance is treated as an operational system, not a decorative section. We emphasize testing, compliance,
                food safety and manufacturing controls because those are the decisions that matter in industrial ingredient supply.
              </p>
              <div className="border-t border-white/15 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Focus Areas</p>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {["Testing Process", "Compliance Standards", "Food Safety", "Quality Monitoring"].map((item) => (
                    <div key={item} className="border-l border-white/20 pl-4">
                      <p className="text-h3 text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
