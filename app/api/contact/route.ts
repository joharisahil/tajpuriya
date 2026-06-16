import { NextResponse } from "next/server";
import { contactSubmissionSchema, checkRateLimit, getClientIp, sanitizeContactSubmission } from "@/lib/contact";
import { buildEnquiryEmailHtml, buildEnquiryEmailText } from "@/lib/email-template";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = checkRateLimit(ip);

    if (!limit.allowed) {
      return NextResponse.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please review the form fields.",
          errors: parsed.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const data = sanitizeContactSubmission(parsed.data);

    if (data.honeypot) {
      return NextResponse.json({ ok: true, message: "Thanks for your enquiry." });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "Tajpuriya Agritech <onboarding@resend.dev>";

    if (!receiverEmail) {
      return NextResponse.json({ ok: false, message: "Receiver email is not configured." }, { status: 500 });
    }

    if (!resendKey) {
      return NextResponse.json({ ok: false, message: "Email service is not configured." }, { status: 500 });
    }

    const timestamp = new Date().toISOString();
    const emailHtml = buildEnquiryEmailHtml(data, timestamp);
    const emailText = buildEnquiryEmailText(data, timestamp);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [receiverEmail],
        subject: `New enquiry: ${data.product}`,
        html: emailHtml,
        text: emailText,
        reply_to: data.email
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        { ok: false, message: "Unable to send enquiry email.", detail: errorBody },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Enquiry submitted successfully." });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to submit enquiry." }, { status: 500 });
  }
}
