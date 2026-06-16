"use client";

import Link from "next/link";
import { Menu, PhoneCall, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mainNav, productLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function MobileNavContent({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "/contact";

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[999999] bg-black/50 backdrop-blur-[2px] transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-[999999] w-[320px] max-w-[85vw] translate-x-full overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out",
          open && "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-brand-navy">Tajpuriya Agritech</p>
            <p className="text-xs text-neutral-500">Industrial food ingredients</p>
          </div>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-brand-navy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-5 py-5">
          <div className="space-y-2">
            {mainNav.map((item) => {
              if (item.label === "Products") {
                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="flex w-full items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-brand-navy transition-colors hover:bg-neutral-50"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          productsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    
                    <div
                      className={cn(
                        "mt-2 space-y-2 overflow-hidden transition-all duration-200",
                        productsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <Link
                        href="/products"
                        onClick={() => {
                          setOpen(false);
                          setProductsOpen(false);
                        }}
                        className="block rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-brand-navy"
                      >
                        All Products
                      </Link>
                      {productLinks.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          onClick={() => {
                            setOpen(false);
                            setProductsOpen(false);
                          }}
                          className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-brand-navy"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Removed the separate Products list that was here */}

          <div className="mt-6 grid gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white"
            >
              Get Quote
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-brand-navy"
            >
              <PhoneCall className="h-4 w-4" />
              Call
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open mobile menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-navy xl:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted && createPortal(
        <MobileNavContent open={open} setOpen={setOpen} />,
        document.body
      )}
    </>
  );
}