import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";

export function WhatsAppSection() {
  const message = encodeURIComponent(
    "Hello,\n\nI am interested in learning more about your products.\n\nPlease share product details and pricing information.\n\nThank you."
  );
  const href = siteConfig.phone
    ? `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${message}`
    : "#contact-options";

  return (
    <section id="whatsapp" className="section-gap bg-brand-muted">
      <Container>
        <div className="rounded-[2rem] bg-brand-navy px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-label text-white/70">WhatsApp Inquiry</p>
            <h2 className="mt-4 text-h1 text-white text-balance">Get Quote on WhatsApp</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-white/85">
              Use WhatsApp for quick product questions, pricing requests and bulk supply discussions.
            </p>
            <a href={href} className="mt-8 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
              Get Quote on WhatsApp
            </a>
            {/* <p className="mt-4 text-sm text-white/70">
              Hello,
              <br />
              <br />
              I am interested in learning more about your products.
              <br />
              <br />
              Please share product details and pricing information.
              <br />
              <br />
              Thank you.
            </p> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
