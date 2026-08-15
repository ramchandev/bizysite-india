"use client";

import { useSearchParams } from "next/navigation";
import { MessageCircle, Phone, FileText, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";
  const requestedGuide = searchParams.get("guide") === "true";

  return (
    <>
      {/* SECTION 1 — Confirmation */}
      <section className="service-hero" style={{ padding: "100px 0 60px 0" }}>
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Got it. Your request is in. ✓</h1>
          <p className="service-hero-sub" style={{ maxWidth: "700px", margin: "16px auto 0" }}>
            {requestedGuide ? (
              <>Thank you, <strong>{name}</strong>. We have sent the Website Conversion Cheat Sheet straight to your inbox! Check your spam or promotions tab if you do not see it in a minute.</>
            ) : (
              <>Thank you, <strong>{name}</strong>. We have received your request and Vivek or Ram from our team will get back to you the same working day.</>
            )}
          </p>
        </div>
      </section>

      {/* SECTION 2 — What Happens Next */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center" style={{ marginBottom: "32px" }}>
            <span className="section-tag">Next Steps</span>
            <h2 className="section-title">Here is exactly what to expect.</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "var(--off-white)", padding: "20px", borderRadius: "var(--radius-md)" }}>
              <div style={{ background: "var(--teal)", color: "var(--white)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", flexShrink: 0 }}>1</div>
              <div>
                <h4 style={{ fontWeight: "700", fontSize: "16px", color: "var(--navy)", marginBottom: "4px" }}>We review your request</h4>
                <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  We review your details and look at your website if you shared one, so we understand your business context.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "var(--off-white)", padding: "20px", borderRadius: "var(--radius-md)" }}>
              <div style={{ background: "var(--teal)", color: "var(--white)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", flexShrink: 0 }}>2</div>
              <div>
                <h4 style={{ fontWeight: "700", fontSize: "16px", color: "var(--navy)", marginBottom: "4px" }}>We reply the same working day</h4>
                <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  By call, WhatsApp or email, whichever you prefer. We respect your coordinates and do not spam.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "var(--off-white)", padding: "20px", borderRadius: "var(--radius-md)" }}>
              <div style={{ background: "var(--teal)", color: "var(--white)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", flexShrink: 0 }}>3</div>
              <div>
                <h4 style={{ fontWeight: "700", fontSize: "16px", color: "var(--navy)", marginBottom: "4px" }}>We give you honest advice and clear next steps</h4>
                <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  We tell you exactly what can be done to improve your website's search rankings and customer conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Reach Us Directly */}
      <section className="section-padding" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <span className="section-tag">In a hurry?</span>
          <h2 className="section-title">Reach us right now.</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
            <a 
              href="https://wa.me/919500728442?text=Hi%20Bizy%20Site,%20I%20just%20submitted%20a%20request."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ background: "#25D366", borderColor: "#25D366", display: "inline-flex", gap: "8px" }}
            >
              <MessageCircle size={18} fill="currentColor" />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+919500728442" className="btn btn-navy" style={{ display: "inline-flex", gap: "8px" }}>
              <Phone size={18} />
              <span>Call +91 95007 28442</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — While You Wait */}
      {!requestedGuide && (
        <section className="section-padding" style={{ background: "var(--white)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="section-tag">Useful Resource</span>
            <h2 className="section-title">While you wait, here is something useful.</h2>
            <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
              Download our free Website Conversion Cheat Sheet, 10 proven tips to turn more visitors into leads. A good use of the next five minutes.
            </p>
            <div className="cta-wrapper" style={{ margin: "0 auto" }}>
              <Link href="/free-guide" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                Download the Free Guide →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5 — Reassurance */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center" style={{ marginBottom: "32px" }}>
            <span className="section-tag">Reassurance</span>
            <h2 className="section-title">You made a good call.</h2>
          </div>

          <div style={{ background: "var(--white)", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)", marginBottom: "40px" }}>
            <div style={{ display: "flex", gap: "4px", color: "var(--teal)", marginBottom: "16px" }}>
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p style={{ fontSize: "16px", color: "var(--text)", lineHeight: "1.6", fontStyle: "italic", marginBottom: "16px" }}>
              "Got my appointment enquiries up in a month. They built a clean booking system that works."
            </p>
            <div>
              <strong style={{ fontSize: "14px", color: "var(--navy)", display: "block" }}>Priya S.</strong>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Chennai</span>
            </div>
          </div>

          <p className="text-center" style={{ fontSize: "14px", color: "var(--text-mid)" }}>
            Know someone else who needs a better website? Send them our way, we will take good care of them.
          </p>
        </div>
      </section>
    </>
  );
}

export default function ThankYouClient() {
  return (
    <Suspense fallback={
      <section className="section-padding text-center">
        <div className="container">
          <p>Loading confirmation details...</p>
        </div>
      </section>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
