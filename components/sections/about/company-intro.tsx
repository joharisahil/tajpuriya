import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { media } from "@/lib/media";

export function CompanyIntro() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <ImageFrame
              src={media.images.manufacturing}
              alt="Manufacturing facility introduction placeholder"
              ratio="portrait"
              wrapperClassName="shadow-md"
            />
          </div>

          <div className="lg:col-span-6">
            <p className="text-label text-brand-green">Company Introduction</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              A manufacturing and trading company focused on dependable food ingredient supply
            </h2>
            <div className="mt-6 space-y-5 text-body text-neutral-700">
              <p>
                Tajpuriya Agritech Private Limited works with food ingredient buyers who need a practical supplier, not a marketing
                story. The company manufactures and trades rice liquid glucose, rice protein, maltose dextrin powder, sorbitol and
                allied food ingredients for industrial use.
              </p>
              <p>
                Its business model is built around production discipline, quality awareness and responsive support for buyers across
                confectionery, bakery, food processing, beverages, pharmaceutical and nutraceutical applications.
              </p>
              <p>
                From its base in Khatima, Uttarakhand, the company serves Pan India requirements with a focus on consistency, food
                safety and dependable commercial execution.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
