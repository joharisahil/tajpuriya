import type { ContactSubmission } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildEnquiryEmailHtml(data: ContactSubmission, timestamp: string) {
  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Product", data.product],
    ["Source", data.source || "website"],
    ["Page", data.page || "website"],
    ["Timestamp", timestamp]
  ];

  return `
  <html>
    <body style="margin:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="max-width:720px;margin:0 auto;padding:32px 16px;">
        <div style="background:#132238;color:#fff;padding:24px 28px;border-radius:20px 20px 0 0;">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.75;">New Website Enquiry</div>
          <h1 style="margin:12px 0 0;font-size:28px;line-height:1.2;">${escapeHtml(siteConfig.name)}</h1>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-top:none;padding:28px;border-radius:0 0 20px 20px;">
          <p style="margin:0 0 20px;font-size:16px;line-height:1.6;">A new lead has been submitted through the website contact form.</p>
          <table style="width:100%;border-collapse:collapse;">
            ${rows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #e2e8f0;width:160px;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:.08em;color:#475569;">${escapeHtml(
                      label
                    )}</td>
                    <td style="padding:12px 0;border-top:1px solid #e2e8f0;font-size:15px;line-height:1.6;color:#0f172a;">${escapeHtml(value)}</td>
                  </tr>
                `
              )
              .join("")}
          </table>
          <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:13px;color:#64748b;">
            Tajpuriya Agritech Private Limited, Plot No-409M, Dhankuna Road, Majhola, Khatima, Uttarakhand - 262308, India
          </div>
        </div>
      </div>
    </body>
  </html>`;
}

export function buildEnquiryEmailText(data: ContactSubmission, timestamp: string) {
  return [
    `New Website Enquiry - ${siteConfig.name}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Product: ${data.product}`,
    `Source: ${data.source || "website"}`,
    `Page: ${data.page || "website"}`,
    `Timestamp: ${timestamp}`,
    "",
    "Message:",
    data.message
  ].join("\n");
}
