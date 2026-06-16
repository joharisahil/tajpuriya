import Link from "next/link";
import { Mail, MapPin, PhoneCall, Facebook, Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/shared/container";
import { productLinks } from "@/data/navigation";
import { certifications } from "@/data/certifications";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "/contact";

  return (
    <footer className="border-t border-neutral-200 bg-brand-muted">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-h3 text-brand-navy">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-body text-neutral-700">{siteConfig.description}</p>
            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <p>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </p>
              </div>
              <a href={phoneHref} className="flex items-center gap-3 hover:text-brand-green">
                <PhoneCall className="h-4 w-4 shrink-0 text-brand-green" />
                <span>{siteConfig.phone || "Phone on request"}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-brand-green">
                <Mail className="h-4 w-4 shrink-0 text-brand-green" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-label text-brand-green">Quick Links</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: "About", href: "/about" },
                  { label: "Products", href: "/products" },
                  { label: "Industries", href: "/industries" },
                  { label: "Certifications", href: "/certifications" },
                  { label: "Contact", href: "/contact" }
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block text-sm text-neutral-700 hover:text-brand-green">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label text-brand-green">Products</p>
              <div className="mt-4 space-y-3">
                {productLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block text-sm text-neutral-700 hover:text-brand-green">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label text-brand-green">Certifications</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((item) => (
                  <span key={item} className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-label text-brand-green">Follow</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-neutral-600">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-small text-neutral-600">
            <span>Private limited company</span>
            <span>Pan India market</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
