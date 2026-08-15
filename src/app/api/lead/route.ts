import { Resend } from "resend";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  notes?: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatLeadTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(date);
}

function getRequestType(plan: string): "new_site" | "generic" {
  const normalized = plan.toLowerCase();
  if (normalized.includes("new website")) {
    return "new_site";
  }
  return "generic";
}

// 1. Admin Email Notification Template
function buildAdminEmailHtml(data: LeadPayload & { submittedAt: string }) {
  const { name, email, phone, plan, notes, submittedAt } = data;

  let adminTitle = "New Lead Request";
  let adminDesc = "Someone just submitted details on the Bizy Site website.";

  if (plan.includes("Need: New website")) {
    adminTitle = "New Website Request";
    adminDesc = "Client requested a quote for a new website design.";
  } else if (plan.includes("Need: Fix my website")) {
    adminTitle = "Fix Website Inquiry";
    adminDesc = "Client requested help fixing or improving their current site.";
  } else if (plan.includes("Need: SEO")) {
    adminTitle = "SEO & Local Search Inquiry";
    adminDesc = "Client requested SEO/AEO/GEO optimization help.";
  } else if (plan.includes("Need: Ads")) {
    adminTitle = "Ads Campaign Inquiry";
    adminDesc = "Client requested Google/Meta Ads management.";
  } else if (plan.includes("Need: Social media")) {
    adminTitle = "Social Media Inquiry";
    adminDesc = "Client requested social media page management.";
  } else if (plan.includes("Need: Not sure yet")) {
    adminTitle = "General Consultation Inquiry";
    adminDesc = "Client is not sure what they need and requested a call.";
  } else if (plan.includes("Free Guide")) {
    adminTitle = "Free Guide Download";
    adminDesc = "Client downloaded the free conversion rate guide.";
  }

  const row = (label: string, value: string, href?: string) => `
    <tr>
      <td style="padding:14px 16px;border-bottom:1px solid #e8edf3;color:#64748b;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;width:140px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:14px 16px;border-bottom:1px solid #e8edf3;color:#0f172a;font-size:15px;line-height:1.5;vertical-align:top;">
        ${href ? `<a href="${href}" style="color:#0d9488;text-decoration:none;font-weight:600;">${value}</a>` : value}
      </td>
    </tr>
  `;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Bizy Site Lead</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0d1f3c 0%,#1b3f7a 100%);padding:28px 32px;">
              <div style="color:#2BBFBF;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">
                Bizy Site Admin
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:700;">
                ${adminTitle}
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.78);font-size:14px;line-height:1.5;">
                ${adminDesc}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;margin-bottom:6px;">
                      Selected Goal / Plan
                    </div>
                    <div style="font-size:18px;font-weight:700;color:#0d1f3c;">
                      ${escapeHtml(plan)}
                    </div>
                  </td>
                  <td align="right" style="padding:16px 18px;vertical-align:top;">
                    <div style="display:inline-block;background:#e0f2fe;color:#0369a1;font-size:11px;font-weight:700;padding:6px 10px;border-radius:999px;text-transform:uppercase;letter-spacing:0.04em;">
                      Inquiry Lead
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:8px 32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                ${row("Name", escapeHtml(name))}
                ${row("Email", escapeHtml(email), `mailto:${encodeURIComponent(email)}`)}
                ${row("Phone/WhatsApp", escapeHtml(phone), `tel:${encodeURIComponent(phone.replace(/[^\d+]/g, ""))}`)}
                ${row("Submitted At", escapeHtml(submittedAt))}
              </table>
            </td>
          </tr>

          ${
            notes
              ? `
          <tr>
            <td style="padding:0 32px 24px;">
              <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;margin-bottom:10px;">
                Business Details / Goals
              </div>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 18px;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">
                ${escapeHtml(notes)}
              </div>
            </td>
          </tr>
          `
              : ""
          }

          <tr>
            <td style="padding:0 32px 28px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;text-align:center;">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background:#0d1f3c;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 18px;border-radius:10px;">
                      Reply to ${escapeHtml(name.split(" ")[0] || name)}
                    </a>
                  </td>
                  <td>
                    <a href="https://wa.me/${phone.replace(/[^\d]/g, "")}" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 18px;border-radius:10px;">
                      WhatsApp Client
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:11px;line-height:1.5;text-align:center;">
              This notification was sent from the Bizy Site lead form at bizysite.in.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// 2. Customer Email Confirmation Template
function buildCustomerEmailHtml(data: LeadPayload & { submittedAt: string }) {
  const { name, plan, notes } = data;

  let businessName = "Your Business";
  let websiteUrl = "Your Website";
  if (notes) {
    const bizMatch = notes.match(/Business:\s*(.*?)\.\s*Website:/);
    const webMatch = notes.match(/Website:\s*(.*?)\.?$/);
    if (bizMatch) businessName = bizMatch[1];
    if (webMatch) websiteUrl = webMatch[1];
  }

  const reqType = getRequestType(plan);
  const isNewSite = reqType === "new_site";

  const headerTitle = isNewSite ? "Let's build your new website! 🚀" : "Request Confirmed! 🚀";
  const headerSubtitle = isNewSite 
    ? "We've received your request for a custom website quote." 
    : "We've received your details and are on it.";
  
  const introText = isNewSite 
    ? `Thank you for reaching out to Bizy Site. We're excited to help you design and build a high-performance website that actually brings you calls and customers. Here's a summary of your request:`
    : `Thank you for contacting Bizy Site. Our team is currently reviewing your inquiry details and will get back to you with tailored recommendations. Here is a summary of what you submitted:`;

  const cleanGoal = plan.replace("Contact Form - Need: ", "").replace("Free Audit - Goal: ", "");

  const nextStepsHtml = isNewSite 
    ? `
      <ol style="margin:0;padding-left:20px;color:#475569;line-height:1.6;font-size:14px;">
        <li style="margin-bottom:8px;">
          <strong>Concept & Discovery Call:</strong> We will schedule a quick 10-15 minute discovery call to understand your business goals, target audience, and features.
        </li>
        <li style="margin-bottom:8px;">
          <strong>Custom Proposal:</strong> We'll compile a tailored plan and fixed-price quote outlining the design structure and timeline.
        </li>
        <li style="margin-bottom:8px;">
          <strong>Design & Launch:</strong> Once approved, our senior copywriters and conversion designers will get to work building your custom site.
        </li>
      </ol>
    `
    : `
      <ol style="margin:0;padding-left:20px;color:#475569;line-height:1.6;font-size:14px;">
        <li style="margin-bottom:8px;">
          <strong>Information Review:</strong> Our team will look at your goals and message details.
        </li>
        <li style="margin-bottom:8px;">
          <strong>Tailored Response:</strong> We'll write back to you via email or WhatsApp within 24 hours with custom recommendations.
        </li>
        <li style="margin-bottom:8px;">
          <strong>WhatsApp Sync:</strong> We will also follow up on WhatsApp to ensure you have a direct point of contact.
        </li>
      </ol>
    `;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Request is Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0d1f3c 0%,#1b3f7a 100%);padding:36px 32px;text-align:center;">
              <div style="color:#2BBFBF;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">
                Bizy Site
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:700;">
                ${headerTitle}
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.78);font-size:14px;line-height:1.5;">
                ${headerSubtitle}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 32px 24px;color:#334155;font-size:15px;line-height:1.6;">
              <h2 style="color:#0d1f3c;font-size:18px;margin-top:0;margin-bottom:12px;font-weight:700;">
                Hi ${escapeHtml(name.split(" ")[0] || name)},
              </h2>
              <p style="margin:0 0 16px;font-size:14.5px;">
                ${introText}
              </p>
              
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:24px;">
                <h3 style="color:#0d1f3c;font-size:12px;margin-top:0;margin-bottom:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">
                  Request Summary
                </h3>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                  <tr>
                    <td style="padding:4px 0;color:#64748b;font-weight:600;width:120px;vertical-align:top;">Business:</td>
                    <td style="padding:4px 0;color:#0f172a;font-weight:600;">${escapeHtml(businessName)}</td>
                  </tr>
                  ${websiteUrl && websiteUrl !== "Your Website" ? `
                  <tr>
                    <td style="padding:4px 0;color:#64748b;font-weight:600;vertical-align:top;">Website:</td>
                    <td style="padding:4px 0;color:#0f172a;font-weight:600;">
                      <a href="${websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`}" style="color:#2BBFBF;text-decoration:underline;">${escapeHtml(websiteUrl)}</a>
                    </td>
                  </tr>
                  ` : ""}
                  <tr>
                    <td style="padding:4px 0;color:#64748b;font-weight:600;vertical-align:top;">Inquiry:</td>
                    <td style="padding:4px 0;color:#0d1f3c;font-weight:600;">${escapeHtml(cleanGoal)}</td>
                  </tr>
                </table>
              </div>

              <h3 style="color:#0d1f3c;font-size:15px;margin-top:0;margin-bottom:12px;font-weight:700;">
                What happens next?
              </h3>
              ${nextStepsHtml}

              <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e2e8f0;text-align:center;">
                <p style="margin:0 0 14px;color:#64748b;font-size:13px;">
                  Need immediate help?
                </p>
                <a href="https://wa.me/919500728442?text=Hi%20Bizy%20Site,%20I%20just%20submitted%20a%20request%20for%20${encodeURIComponent(cleanGoal)}." style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 24px;border-radius:10px;box-shadow:0 4px 12px rgba(37,211,102,0.2);">
                  Chat on WhatsApp
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;color:#94a3b8;font-size:11px;line-height:1.5;">
              <strong>Bizy Site</strong><br />
              404 Jasmine A wing, Eden Park Phase 2, OMR, Siruseri, Chennai 603103<br />
              <a href="mailto:info@bizysite.com" style="color:#2BBFBF;text-decoration:none;">info@bizysite.com</a> · <a href="https://bizysite.in" style="color:#2BBFBF;text-decoration:none;">bizysite.in</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function validate(payload: unknown): { ok: true; data: LeadPayload & { gRecaptchaToken?: string } } | { ok: false; message: string } {
  if (!payload || typeof payload !== "object") return { ok: false, message: "Invalid payload" };
  const p = payload as Partial<LeadPayload & { gRecaptchaToken?: string }>;

  if (!isNonEmptyString(p.name)) return { ok: false, message: "Name is required" };
  if (!isNonEmptyString(p.email)) return { ok: false, message: "Email is required" };
  if (!isNonEmptyString(p.phone)) return { ok: false, message: "Phone/WhatsApp is required" };
  if (!isNonEmptyString(p.plan)) return { ok: false, message: "Plan/Goal is required" };

  return {
    ok: true,
    data: {
      name: p.name.trim(),
      email: p.email.trim(),
      phone: p.phone.trim(),
      plan: p.plan.trim(),
      notes: typeof p.notes === "string" ? p.notes.trim() : "",
      gRecaptchaToken: typeof p.gRecaptchaToken === "string" ? p.gRecaptchaToken.trim() : undefined,
    },
  };
}

function sanitizeEnv(value: string | undefined, fallback: string) {
  if (!value) return fallback;
  return value.trim().replace(/^["']|["']$/g, "");
}

export async function POST(req: Request) {
  const apiKey = sanitizeEnv(process.env.RESEND_API_KEY, "");
  if (!apiKey) {
    console.error("[lead] Missing RESEND_API_KEY");
    return Response.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const to = sanitizeEnv(process.env.LEADS_TO_EMAIL, "info@bizysite.com");
  const from = sanitizeEnv(process.env.RESEND_FROM, "Bizy Site <info@bizysite.com>");

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const validated = validate(body);
  if (!validated.ok) {
    return Response.json({ ok: false, error: validated.message }, { status: 400 });
  }

  const { name, email, phone, plan, notes, gRecaptchaToken } = validated.data;

  // reCAPTCHA verification in production
  const secretKey = sanitizeEnv(process.env.RECAPTCHA_SECRET_KEY, "");
  const isProd = process.env.NODE_ENV === "production";

  if (isProd && secretKey) {
    if (!gRecaptchaToken) {
      return Response.json({ ok: false, error: "reCAPTCHA verification is required." }, { status: 400 });
    }

    try {
      const verifyUrl = `https://www.google.com/recaptcha/api.js?secret=${secretKey}&response=${gRecaptchaToken}`; // siteverify endpoint
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: gRecaptchaToken
        })
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        console.error("[lead] reCAPTCHA verification failed:", verifyData);
        return Response.json({ ok: false, error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
      }
    } catch (err) {
      console.error("[lead] reCAPTCHA verify request failed:", err);
    }
  }

  const submittedAt = formatLeadTimestamp();

  // Determine dynamic admin subject line based on choice
  let adminSubject = `New Lead: ${name} - ${submittedAt}`;
  if (plan.includes("Need: New website")) {
    adminSubject = `New Website Request: ${name} - ${submittedAt}`;
  } else if (plan.includes("Need: Fix my website")) {
    adminSubject = `Fix Website Request: ${name} - ${submittedAt}`;
  } else if (plan.includes("Need: SEO")) {
    adminSubject = `SEO Optimization Lead: ${name} - ${submittedAt}`;
  } else if (plan.includes("Need: Ads")) {
    adminSubject = `Ads Campaign Lead: ${name} - ${submittedAt}`;
  } else if (plan.includes("Need: Social")) {
    adminSubject = `Social Media Lead: ${name} - ${submittedAt}`;
  } else if (plan.includes("Need: Not sure")) {
    adminSubject = `General Inquiry Lead: ${name} - ${submittedAt}`;
  } else if (plan.includes("Free Guide")) {
    adminSubject = `Guide Download: ${name} - ${submittedAt}`;
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Send Lead Notification to Admin
    const adminHtml = buildAdminEmailHtml({ name, email, phone, plan, notes, submittedAt });

    const adminResult = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminResult.error) {
      console.error("[lead] Resend Admin notification error:", adminResult.error);
      return Response.json(
        { ok: false, error: adminResult.error.message || "Email send failed" },
        { status: 502 }
      );
    }

    // 2. Send Welcome Confirmation to Customer
    try {
      const customerSubject = plan.includes("Need: New website") 
        ? "We've received your website request - Bizy Site" 
        : "We've received your request - Bizy Site";

      const customerHtml = buildCustomerEmailHtml({ name, email, phone, plan, notes, submittedAt });

      const customerResult = await resend.emails.send({
        from,
        to: email,
        subject: customerSubject,
        html: customerHtml,
      });

      if (customerResult.error) {
        console.warn("[lead] Resend Customer welcome warning:", customerResult.error);
      }
    } catch (custErr) {
      console.error("[lead] Resend Customer welcome failed:", custErr);
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Email send failed";
    console.error("[lead] Unexpected error:", err);
    return Response.json({ ok: false, error: message }, { status: 502 });
  }
}
