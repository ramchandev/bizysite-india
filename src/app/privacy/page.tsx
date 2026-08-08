import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Privacy Policy | Bizy Site",
  description: "How Bizy Site collects, uses and protects your information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bizysite.in/privacy/#webpage",
    "url": "https://bizysite.in/privacy",
    "name": "Privacy Policy"
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
          <h1 className="service-hero-title">Privacy Policy</h1>
          <p className="service-hero-sub">
            At Bizy Site, we respect your privacy and are committed to protecting your personal information. This policy explains what we collect, why, and how we keep it safe.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", color: "var(--text)", fontSize: "15px", lineHeight: "1.8" }}>
          
          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>1. What Information We Collect</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "12px" }}>
            We collect personal and business information that you voluntarily share with us when requesting a free website audit, filling out our contact form, requesting our guide, or contacting us directly:
          </p>
          <ul style={{ color: "var(--text-mid)", paddingLeft: "20px", marginBottom: "20px" }}>
            <li>Name and contact details (including mobile/WhatsApp number and email address).</li>
            <li>Information about your business (such as website URL, business goals, and industry).</li>
            <li>Any custom messages, questions, or project files you share with us.</li>
            <li>Website usage data through cookies and standard analytics to help us improve your browsing experience.</li>
          </ul>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>2. How We Use Your Information</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "12px" }}>
            We use the information we collect to run our business and deliver services responsibly:
          </p>
          <ul style={{ color: "var(--text-mid)", paddingLeft: "20px", marginBottom: "20px" }}>
            <li>To respond to your inquiries, send you requested guides, or prepare your free website audit reports.</li>
            <li>To discuss recommendations, answer growth questions, and provide professional services.</li>
            <li>To manage and improve our website structure, usability, and speed performance.</li>
          </ul>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>3. Data Protection & Sharing</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            We implement strong technical and organizational security measures to prevent unauthorized access or loss of data. **We do not sell, rent, or share your personal details with third parties for marketing purposes.** Your details remain strictly private.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>4. Cookies & Analytics</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            We use standard cookies and tracking tools (like Google Analytics) to review web traffic, load performance, and user interactions. You can configure your browser to reject cookies if you prefer, though some parts of our site may not load optimally.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>5. Your Rights & How to Contact Us</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            You have the right to request a copy of the information we hold about your business, ask us to correct details, or request that we delete your audit records and personal data. Please contact us at <a href="mailto:info@bizysite.com" style={{ color: "var(--teal)", fontWeight: "700" }}>info@bizysite.com</a> to submit your request.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>6. Updates to This Policy</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            We may update this policy periodically to align with changing data protection practices or Indian regulations. We advise checking this page occasionally to stay updated.
          </p>

          <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", marginTop: "40px" }}>
            <p style={{ margin: 0, fontWeight: "600", color: "var(--navy)", fontStyle: "italic", textAlign: "center" }}>
              We will never sell your details or send you spam. Your information is used only to help you, and to run our business responsibly.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
