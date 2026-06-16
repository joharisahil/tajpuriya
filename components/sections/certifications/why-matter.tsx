import { Container } from "@/components/shared/container";

export function WhyCertificationsMatterSection() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-label text-brand-green">Why Certifications Matter</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Benefits for food manufacturers, distributors and export buyers</h2>
          </div>
          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Food Manufacturers",
                detail: "Need reliable ingredient partners that understand food safety and process discipline."
              },
              {
                title: "Distributors",
                detail: "Prefer suppliers with clear quality markers and dependable commercial behavior."
              },
              {
                title: "Bulk Buyers",
                detail: "Look for evidence that the product can be supplied with control and consistency."
              },
              {
                title: "Industrial Clients",
                detail: "Need supplier confidence, compliance awareness and repeatable quality."
              },
              {
                title: "Export Customers",
                detail: "Value certifications that help support international trade expectations."
              }
            ].map((item) => (
              <div key={item.title} className="border-t border-neutral-200 pt-5">
                <h3 className="text-h3 text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
