"use client";

import Link from "next/link";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import { mainNav, productLinks } from "@/data/navigation";
import { Container } from "@/components/shared/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { media } from "@/lib/media";

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "/contact";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = () => {
    setProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-[9997] border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="border-b border-neutral-100 bg-brand-navy text-white">
        <Container className="flex items-center justify-between gap-3 py-2">
          <p className="text-caption">Pan India supply of food ingredients</p>
          <div className="hidden items-center gap-4 sm:flex">
            <a href={phoneHref} className="text-caption hover:text-white/80">
              Call Us
            </a>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-caption">ISO 22000:2018 | HALAL | KOSHER | FSSAI</span>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-brand-green">
            <Image
              src={media.images.logo}
              alt={siteConfig.name}
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </div>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-[0.02em] text-brand-navy sm:text-base">
              Tajpuriya Agritech Private Limited
            </span>
            <span className="block text-xs text-neutral-500">Manufacturer and Trader</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {mainNav.map((item) =>
            item.label === "Products" ? (
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 outline-none transition-colors hover:bg-neutral-50 hover:text-brand-navy"
                >
                  Products
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      productsOpen && "rotate-180"
                    )}
                  />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <Link
                      href="/products"
                      onClick={handleProductClick}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-brand-navy hover:bg-neutral-50"
                    >
                      All Products
                    </Link>
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={handleProductClick}
                        className="block rounded-xl px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                      >
                        {product.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-brand-navy"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-green hover:text-brand-green"
          >
            <PhoneCall className="h-4 w-4" />
            Call
          </a>
          <Link href="/contact" className="inline-flex items-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white">
            Get Quote
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}