"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { z } from "zod";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company name."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  product: z.string().min(2, "Please select a product."),
  message: z.string().min(10, "Please add a short message."),
  website: z.string().optional().default("")
});

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function ContactFormSection() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setState({ status: "error", message: "Please review the form fields." });
      return;
    }

    setErrors({});
    setState({ status: "loading", message: "Sending enquiry..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        source: "contact-page",
        page: "/contact",
        honeypot: parsed.data.website
      })
    });

    if (response.ok) {
      form.reset();
      setState({ status: "success", message: "Thank you. Your enquiry has been sent." });
      return;
    }

    setState({ status: "error", message: "Unable to send your enquiry. Please try again." });
  }

  return (
    <section id="contact-form" className="section-gap bg-white">
      <Container>
        <SectionHeading
          eyebrow="Inquiry Form"
          title="Request Product Information"
          description="Use this form to share your requirements for pricing, product details, certifications and bulk supply support."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Your name" error={errors.name} />
                <Field label="Company Name" name="company" placeholder="Company name" error={errors.company} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone Number" name="phone" placeholder="Phone number" error={errors.phone} />
                <Field label="Email" name="email" type="email" placeholder="Email address" error={errors.email} />
              </div>
              <div>
                <label className="text-label text-brand-green" htmlFor="product">
                  Product Interested In
                </label>
                <select id="product" name="product" className={inputClassName}>
                  <option value="">Select a product</option>
                  <option>Rice Liquid Glucose</option>
                  <option>Rice Protein</option>
                  <option>Maltose Dextrin Powder</option>
                  <option>Sorbitol</option>
                  <option>Other</option>
                </select>
                {errors.product ? <p className="mt-2 text-sm text-red-600">{errors.product}</p> : null}
              </div>
              <div>
                <label className="text-label text-brand-green" htmlFor="message">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} placeholder="Tell us about your requirement" className={inputClassName} />
                {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
              </div>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <button
                type="submit"
                disabled={state.status === "loading"}
                className={cn(
                  "inline-flex w-fit rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white",
                  state.status === "loading" && "opacity-70"
                )}
              >
                {state.status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
              {state.message ? <p className={cn("text-sm", state.status === "error" ? "text-red-600" : "text-neutral-600")}>{state.message}</p> : null}
            </form>
          </div>

          {/* <div className="lg:col-span-4">
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-label text-brand-green">Contact Details</p>
              <div className="mt-4 space-y-4 text-sm text-neutral-700">
                <p>{siteConfig.address.line1}</p>
                <p>{siteConfig.address.line2}</p>
                <p>{siteConfig.email}</p>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  error
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-label text-brand-green" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} className={inputClassName} />
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

const inputClassName =
  "mt-3 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-green";
