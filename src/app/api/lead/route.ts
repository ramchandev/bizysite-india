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

// 1. Admin Email Notification Template
function buildAdminEmailHtml(data: LeadPayload & { submittedAt: string }) {
  const { name, email, phone, plan, notes, submittedAt } = data;

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
                New Website Audit Request
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.78);font-size:14px;line-height:1.5;">
                Someone just submitted their details for a free audit report.
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
                      Audit Lead
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
            <td style="padding:0 32px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
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
            <td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:11px;line-height:1.5;">
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

  // Extract business metrics safely
  let businessName = "Your Business";
  let websiteUrl = "Your Website";
  if (notes) {
    const bizMatch = notes.match(/Business:\s*(.*?)\.\s*Website:/);
    const webMatch = notes.match(/Website:\s*(.*?)\.?$/);
    if (bizMatch) businessName = bizMatch[1];
    if (webMatch) websiteUrl = webMatch[1];
  }

  const cleanGoal = plan.replace("Free Audit - Goal: ", "");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Website Audit is Confirmed</title>
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
                We're on it! 🚀
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.78);font-size:14px;line-height:1.5;">
                Your Free Website Audit Report is being generated.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 32px 24px;color:#334155;font-size:15px;line-height:1.6;">
              <h2 style="color:#0d1f3c;font-size:18px;margin-top:0;margin-bottom:12px;font-weight:700;">
                Hi ${escapeHtml(name.split(" ")[0] || name)},
              </h2>
              <p style="margin:0 0 16px;">
                Thank you for requesting a free audit from Bizy Site. We're excited to help you optimize your website for maximum conversions and visibility in modern search engines and AI databases.
              </p>
              
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:24px;">
                <h3 style="color:#0d1f3c;font-size:12px;margin-top:0;margin-bottom:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">
                  Audit Request Summary
                </h3>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                  <tr>
                    <td style="padding:4px 0;color:#64748b;font-weight:600;width:120px;vertical-align:top;">Business:</td>
                    <td style="padding:4px 0;color:#0f172a;font-weight:600;">${escapeHtml(businessName)}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:#64748b;font-weight:600;vertical-align:top;">Website:</td>
                    <td style="padding:4px 0;color:#0f172a;font-weight:600;">
                      <a href="${websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`}" style="color:#2BBFBF;text-decoration:underline;">${escapeHtml(websiteUrl)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:#64748b;font-weight:600;vertical-align:top;">Primary Goal:</td>
                    <td style="padding:4px 0;color:#0d1f3c;">${escapeHtml(cleanGoal)}</td>
                  </tr>
                </table>
              </div>

              <h3 style="color:#0d1f3c;font-size:15px;margin-top:0;margin-bottom:12px;font-weight:700;">
                What happens next?
              </h3>
              <ol style="margin:0;padding-left:20px;color:#475569;line-height:1.6;">
                <li style="margin-bottom:8px;">
                  <strong>Manual & Tech Analysis:</strong> Our engineers will run performance, SEO, mobile compatibility, and AI citation checks on your site.
                </li>
                <li style="margin-bottom:8px;">
                  <strong>PDF Audit Delivery:</strong> We'll compile the results into an actionable recommendations document and send it to you within 48 hours.
                </li>
                <li style="margin-bottom:8px;">
                  <strong>WhatsApp Sync:</strong> We will also message you on WhatsApp to ensure you receive the file directly.
                </li>
              </ol>

              <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e2e8f0;text-align:center;">
                <p style="margin:0 0 14px;color:#64748b;font-size:13px;">
                  Want to fast-track your audit?
                </p>
                <a href="https://wa.me/91950072844222?text=Hi%20Bizy%20Site,%20I%20just%20requested%20an%20audit%20and%20would%20like%20to%20speed%20it%20up." style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 24px;border-radius:10px;box-shadow:0 4px 12px rgba(37,211,102,0.2);">
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

function validate(payload: unknown): { ok: true; data: LeadPayload } | { ok: false; message: string } {
  if (!payload || typeof payload !== "object") return { ok: false, message: "Invalid payload" };
  const p = payload as Partial<LeadPayload>;

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

  const { name, email, phone, plan, notes } = validated.data;
  const submittedAt = formatLeadTimestamp();

  const resend = new Resend(apiKey);

  try {
    // 1. Send Lead Notification to Admin
    const adminSubject = `New Audit Request: ${name} - ${submittedAt}`;
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

    // 2. Send Welcome Confirmation to Customer (gracefully ignore error if it fails so we don't break page redirection)
    try {
      const customerSubject = "Website Audit Request Received - Bizy Site";
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
