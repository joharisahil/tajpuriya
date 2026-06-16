import { Mail, MapPin, MessageCircleMore, PhoneCall, Clock3 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";
import { CopyAction } from "@/components/sections/contact/copy-actions";

export function ContactOptions() {
  const phone = siteConfig.phone || "9758588888";
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "/contact";
  const emailHref = `mailto:${siteConfig.email}`;
  const whatsappHref = siteConfig.phone ? `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}` : "/contact";

  return (
    <section id="contact-options" className="section-gap bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-label text-brand-green">Call Us</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-brand-green" />
                  <a href={phoneHref} className="text-h2 text-brand-navy">
                    {phone}
                  </a>
                  <CopyAction value={siteConfig.phone} label="phone number" disabled={!siteConfig.phone} />
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-label text-brand-green">Email Us</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-green" />
                  <a href={emailHref} className="text-h3 text-brand-navy">
                    {siteConfig.email}
                  </a>
                  <CopyAction value={siteConfig.email} label="email address" />
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-label text-brand-green">WhatsApp Us</p>
                <div className="mt-3 flex items-center gap-3">
                  <MessageCircleMore className="h-5 w-5 text-brand-green" />
                  <a href={whatsappHref} className="text-h3 text-brand-navy">
                    Quick WhatsApp Inquiry
                  </a>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-label text-brand-green">Business Address</p>
                <div className="mt-3 flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  <p className="max-w-xl text-body text-neutral-700">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-label text-brand-green">Business Hours</p>
                <div className="mt-3 flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-brand-green" />
                  <p className="text-body text-neutral-700">Monday to Saturday, 9:30 AM to 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-label text-brand-green">Quick Actions</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a href={phoneHref} className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white">
                  Call Now
                </a>
                <a href={whatsappHref} className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-brand-navy">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
