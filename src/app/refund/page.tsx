import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Refund & Cancellation Policy | Bizy Site",
  description: "Our approach to refunds and cancellations, explained clearly and fairly.",
  alternates: {
    canonical: "/refund",
  },
};

export default function RefundPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/refund/#webpage`,
    "url": `${siteUrl}/refund`,
    "name": "Refund & Cancellation Policy"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <section className="service-hero" style={{ padding: "100px 0 40px 0" }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Legal</span>
          <h1 className="service-hero-title">Refund & Cancellation Policy</h1>
          <p className="service-hero-sub">
            We want you to feel confident working with us. Here is our clear, fair approach to refunds and cancellations.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", color: "var(--text)", fontSize: "15px", lineHeight: "1.8" }}>
          
          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>1. Project Stages & Cancellations</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            You can request to cancel your project at any stage. Since custom design and development involve hours of research and planning, the work completed up to that point will be assessed to determine any partial fee due or return of deposit.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>2. What Is Refundable & What Is Not</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "12px" }}>
            - **Before work begins:** If you cancel before we start any design or research phase, you are eligible for a full refund of your deposit (minus any banking or transaction processing fees).
          </p>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            - **After work begins:** Once custom wireframing, content layout, or coding has commenced, the deposit becomes non-refundable, as it covers the team's dedicated labor hours. Any completed milestone deliveries are non-refundable.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>3. How Refunds Are Processed</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            Approved refund requests are processed within 10 to 15 working days. The refund amount will be credited back via the same payment channel (bank transfer, UPI, or corporate account) that was used to make the initial payment.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>4. How to Request Cancellation</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            To initiate a cancellation or refund inquiry, please email our support team at <a href="mailto:info@bizysite.com" style={{ color: "var(--teal)", fontWeight: "700" }}>info@bizysite.com</a> with details of your invoice and project reference. Our team will get back to you within 24 working hours.
          </p>

          <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", marginTop: "40px" }}>
            <p style={{ margin: 0, fontWeight: "600", color: "var(--navy)", fontStyle: "italic", textAlign: "center" }}>
              We believe in fairness and clear communication. If something is not right, talk to us, we will always try to make it fair.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
