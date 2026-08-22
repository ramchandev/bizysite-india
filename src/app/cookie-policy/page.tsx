import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cookie Policy | Bizy Site",
  description: "How Bizy Site uses cookies and tracking technologies.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/cookie-policy/#webpage`,
    "url": `${siteUrl}/cookie-policy`,
    "name": "Cookie Policy"
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
          <h1 className="service-hero-title">Cookie Policy</h1>
          <p className="service-hero-sub">
            This policy outlines how Bizy Site uses cookies and tracking technologies on our website.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", color: "var(--text)", fontSize: "15px", lineHeight: "1.8" }}>
          
          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>1. What Are Cookies?</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            Cookies are small text files placed on your computer or mobile device when you browse websites. They are widely used to make websites work, load faster, and provide analytics data to site owners.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>2. How We Use Cookies</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "12px" }}>
            We use cookies to enhance your browsing experience and monitor performance:
          </p>
          <ul style={{ color: "var(--text-mid)", paddingLeft: "20px", marginBottom: "20px" }}>
            <li>**Essential Cookies:** Required for core website functions like secure forms and page routing.</li>
            <li>**Performance & Analytics:** We use tools like Google Analytics to count visitors, track page load speeds, and identify high-traffic features. All data is anonymized.</li>
            <li>**Advertising & Targeting:** Tracking pixels (such as Google and Meta pixels) are used to measure the effectiveness of our paid search and social campaigns.</li>
          </ul>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>3. Managing Your Choices</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            You can modify your browser settings to reject or delete cookies. Please check your browser's Help menu for details. Note that disabling cookies may affect the layout and speed of certain website sections.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>4. Policy Updates</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            We may update our Cookie Policy from time to time to match industry standards and legal requirements.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>5. Contact Us</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            If you have questions about our cookie usage, please email us at <a href="mailto:info@bizysite.in" style={{ color: "var(--teal)", fontWeight: "700" }}>info@bizysite.in</a>.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
