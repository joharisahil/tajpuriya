"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { z } from "zod";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Product } from "@/types/product";

const inquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  product: z.string().min(2),
  message: z.string().min(10),
  website: z.string().optional().default("")
});

export function ProductInquiry({ product }: { product: Product }) {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const parsed = inquirySchema.safeParse(values);

    if (!parsed.success) {
      setStatus("Please complete all required fields.");
      return;
    }

    setStatus("Sending...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        product: product.name,
        source: "product-page",
        page: `/products/${product.slug}`,
        honeypot: parsed.data.website
      })
    });

    setStatus(response.ok ? "Thanks. Your enquiry has been sent." : "Something went wrong. Please try again.");
    if (response.ok) {
      form.reset();
    }
  }

  return (
    <section className="section-gap bg-white">
      <Container>
        <SectionHeading eyebrow="Inquiry" title="Request Product Information" />
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 lg:max-w-3xl">
          <input name="name" placeholder="Name" className="rounded-2xl border border-neutral-200 px-4 py-3" />
          <input name="company" placeholder="Company" className="rounded-2xl border border-neutral-200 px-4 py-3" />
          <input name="phone" placeholder="Phone" className="rounded-2xl border border-neutral-200 px-4 py-3" />
          <input name="email" placeholder="Email" className="rounded-2xl border border-neutral-200 px-4 py-3" />
          <input name="product" value={product.name} readOnly className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3" />
          <textarea name="message" placeholder="Message" rows={5} className="rounded-2xl border border-neutral-200 px-4 py-3" />
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <button type="submit" className="inline-flex w-fit rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
            Send Inquiry
          </button>
          {status ? <p className="text-sm text-neutral-600">{status}</p> : null}
        </form>
      </Container>
    </section>
  );
}
