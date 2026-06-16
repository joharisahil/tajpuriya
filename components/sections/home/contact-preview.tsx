import Link from "next/link";
import { Mail, MapPin, PhoneCall, Clock3, MessageCircleMore } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site";

export function ContactPreview() {
  return (
    <section className="section-gap bg-brand-muted">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Request Product Information"
          description="Use this section for procurement enquiries, product details and bulk order conversations."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="space-y-6 text-body text-neutral-700">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-green" />
                <p>
                  <span className="block font-semibold text-brand-navy">Address</span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </p>
              </div>
              <div className="flex gap-4">
                <PhoneCall className="mt-1 h-4 w-4 shrink-0 text-brand-green" />
                <p>
                  <span className="block font-semibold text-brand-navy">Phone</span>
                  {siteConfig.phone || "Phone available on request"}
                </p>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-green" />
                <p>
                  <span className="block font-semibold text-brand-navy">Email</span>
                  {siteConfig.email}
                </p>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-1 h-4 w-4 shrink-0 text-brand-green" />
                <p>
                  <span className="block font-semibold text-brand-navy">Business Hours</span>
                  Monday to Saturday, 9:30 AM to 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-1">
            <div className="space-y-4">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full bg-brand-green px-6 py-4 text-sm font-semibold text-white"
              >
                Inquiry CTA
              </Link>
              <a href={siteConfig.phone ? `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}` : "/contact"} className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 text-sm font-semibold text-brand-navy">
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp CTA
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
