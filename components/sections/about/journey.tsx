import { Container } from "@/components/shared/container";

export function JourneySection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Our Journey</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Built around manufacturing focus and long-term customer relationships</h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-8 text-body text-neutral-700">
              <p>
                The business has developed with a clear view of what ingredient buyers need most: stable product quality, practical
                communication and delivery behavior that supports production planning.
              </p>
              <p>
                Over time, the company’s focus has remained anchored in the manufacturing side of the business. That focus shapes
                the way enquiries are handled, how product requirements are discussed and how supply expectations are managed.
              </p>
              <p>
                The result is a supplier relationship that feels operationally useful rather than promotional. That matters to buyers
                who need production continuity and not just a quotation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
