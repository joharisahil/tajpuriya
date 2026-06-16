import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/shared/image-frame";
import { siteConfig } from "@/lib/site";

export function LocationSection() {
  return (
    <section className="section-gap bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
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
          <div className="lg:col-span-5">
            <p className="text-label text-brand-green">Business Location</p>
            <h2 className="mt-4 text-h1 text-brand-navy text-balance">Khatima, Uttarakhand with Pan India service coverage</h2>
            <div className="mt-6 space-y-4 text-body text-neutral-700">
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p>Service Coverage: Pan India Reach</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
