"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav, productLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "/contact";

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

      <div
        className={cn("fixed inset-0 z-[9998] bg-black/50 backdrop-blur-[2px] transition-opacity", open ? "opacity-100" : "pointer-events-none opacity-0")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
        "fixed inset-y-0 right-0 z-[9999] w-[320px] max-w-[85vw] translate-x-full overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out",
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
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-label text-brand-green">Products</p>
            <div className="mt-3 space-y-2">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white"
            >
              Get Quote
            </Link>
            <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-brand-navy">
              <PhoneCall className="h-4 w-4" />
              Call
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
