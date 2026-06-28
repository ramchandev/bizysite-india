import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: "var(--off-white)", minHeight: "100vh" }}>
      {/* Mini Nav Header */}
      <header className="nav-header">
        <div className="container nav-container">
          <Link href="/" className="nav-logo">
            <span>Bizy Site</span>
            <span className="market-tag">India</span>
          </Link>
          <Link href="/" className="btn btn-navy" style={{ display: "inline-flex", gap: "8px", padding: "10px 20px" }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="container section-padding" style={{ maxWidth: "800px" }}>
        <article className="pain-card" style={{ padding: "40px", backgroundColor: "var(--white)" }}>
          <span className="section-tag">LEGAL</span>
          <h1 style={{ fontSize: "32px", marginBottom: "12px", color: "var(--navy)" }}>Privacy Policy</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "30px" }}>Last updated: June 28, 2026</p>

          <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>1. Introduction</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                At Bizy Site India, we are committed to protecting the privacy of our clients and visitors. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, submit website audit requests, or contact our sales team.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>2. Information We Collect</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "10px" }}>
                We collect personal and business information that you voluntarily provide to us when requesting a 
                free website audit. This includes:
              </p>
              <ul style={{ fontSize: "14px", color: "var(--text-mid)", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li><strong>Contact Data:</strong> Full name, WhatsApp/Phone number, and email address.</li>
                <li><strong>Business Metrics:</strong> Business name, current website URL, and primary business goals.</li>
                <li><strong>Inquiry Context:</strong> Details about your current marketing campaigns, platforms, or general notes.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>3. How We Use Your Information</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "10px" }}>
                We use the information we collect to:
              </p>
              <ul style={{ fontSize: "14px", color: "var(--text-mid)", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li>Compile and deliver your custom website audit report.</li>
                <li>Reach out to discuss recommendations and answer growth questions.</li>
                <li>Connect via WhatsApp or email to provide support.</li>
                <li>Improve our conversion models, templates, and search methodologies.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>4. Data Security</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                We implement technical and organizational security measures to protect your personal data from 
                unauthorized access or loss. We do not sell or rent client details to third-party databases. All lead 
                transmissions are encrypted via SSL.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>5. Contact Us</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                If you have questions about this policy or want to request removal of your business audit files 
                from our records, please contact us at <strong>info@bizysite.com</strong>.
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer-section" style={{ padding: "40px 0 30px 0", textAlign: "center" }}>
        <div className="container" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.45)" }}>
          <p style={{ marginBottom: "10px" }} suppressHydrationWarning>© {currentYear} Bizy Site India. All rights reserved.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link href="/privacy" style={{ color: "var(--teal)" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.6)" }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
