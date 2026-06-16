import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";

export function PanIndiaSupply() {
  return (
    <section className="section-gap">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Supply Network</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">
              Pan India distribution with a focus on reliable bulk ingredient delivery
            </h2>
            <div className="mt-6 space-y-4 text-body text-neutral-700">
              <p>
                The business is positioned to support buyers across India with practical supply coordination, clear communication and
                recurring order support.
              </p>
              <p>
                Bulk orders, dispatch planning and consistent delivery are part of the supply story, not separate promises.
              </p>
            </div>
            <div className="mt-8 border-l-2 border-brand-green pl-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">Supply Focus</p>
              <p className="mt-2 text-h3 text-brand-navy">Pan India Supply | Reliable Supply | Bulk Orders | Consistent Delivery</p>
            </div>
          </div>

<div className="lg:col-span-7">
  <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-md">
    <iframe
      title="Tajpuriya Agritech Location"
      src="https://www.google.com/maps?q=Plot%20No-409M%20Dhankuna%20Road%20Majhola%20Khatima%20Udham%20Singh%20Nagar%20Uttarakhand%20262308%20India&output=embed"
      className="h-[320px] w-full md:h-[420px] lg:h-[500px]"
      loading="lazy"
      style={{ border: 0 }}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
        </div>
      </Container>
    </section>
  );
}
