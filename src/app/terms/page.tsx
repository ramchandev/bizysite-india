import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 style={{ fontSize: "32px", marginBottom: "12px", color: "var(--navy)" }}>Terms of Service</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "30px" }}>Last updated: June 28, 2026</p>

          <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>1. Agreement to Terms</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                By accessing our website, requesting a free website audit, or engaging Bizy Site India for 
                digital marketing, design, or search optimization services, you agree to be bound by these 
                Terms of Service.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>2. Service Engagements</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                Bizy Site India provides performance-driven website design, Conversion Rate Optimization (CRO), 
                Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), 
                and paid Google & Meta ad management. Service details, timelines, deliverables, and fees are defined 
                separately in custom Service Level Agreements (SLAs) or project proposals.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>3. Free Audits</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                Our website audit report is a free analysis provided for educational and sales purposes. While we strive for 
                highest accuracy, audits are based on external crawl diagnostics and represent our professional opinion 
                at the time of review. We guarantee no specific conversion lifts or ranking heights based solely on the audit report.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>4. Intellectual Property</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                Upon complete payment of project invoices, the client owns full intellectual property of custom code, copy layouts, 
                and design graphics developed for their website. Bizy Site India retains ownership of standard base templates, 
                underlying software libraries, and optimization patterns used in the delivery of services.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "10px", color: "var(--navy)" }}>5. Governing Law</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                These Terms of Service and any project dispute shall be governed by and construed in accordance with the laws of 
                India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, 
                Karnataka, India.
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
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.6)" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "var(--teal)" }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
