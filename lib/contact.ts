import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  company: z.string().trim().min(2, "Please enter your company name.").max(120),
  phone: z.string().trim().min(6, "Please enter a valid phone number.").max(30),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  product: z.string().trim().min(2, "Please select a product.").max(120),
  message: z.string().trim().min(10, "Please add a short message.").max(4000),
  source: z.string().trim().min(1).max(60).optional().default("website"),
  page: z.string().trim().max(120).optional().default(""),
  honeypot: z.string().trim().max(120).optional().default("")
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export function sanitizeContactSubmission(input: ContactSubmission): ContactSubmission {
  return {
    ...input,
    name: input.name.replace(/\s+/g, " ").trim(),
    company: input.company.replace(/\s+/g, " ").trim(),
    phone: input.phone.replace(/[^\d+()-\s]/g, "").trim(),
    email: input.email.toLowerCase().trim(),
    product: input.product.replace(/\s+/g, " ").trim(),
    message: input.message.replace(/\s+/g, " ").trim(),
    source: input.source?.replace(/\s+/g, " ").trim() || "website",
    page: input.page?.replace(/\s+/g, " ").trim() || "",
    honeypot: input.honeypot?.replace(/\s+/g, " ").trim() || ""
  };
}

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true as const };
  }

  if (entry.count >= limit) {
    return { allowed: false as const, retryAfterMs: entry.resetAt - now };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return { allowed: true as const };
}

export function getClientIp(request: Request) {
  const headerOrder = ["x-forwarded-for", "x-real-ip", "cf-connecting-ip"];
  for (const header of headerOrder) {
    const value = request.headers.get(header);
    if (value) {
      return value.split(",")[0]?.trim() || "unknown";
    }
  }
  return "unknown";
}
