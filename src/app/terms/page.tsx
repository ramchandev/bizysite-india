import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Terms & Conditions | Bizy Site",
  description: "The terms that govern the use of the Bizy Site website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/terms/#webpage`,
    "url": `${siteUrl}/terms`,
    "name": "Terms & Conditions"
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
          <h1 className="service-hero-title">Terms & Conditions</h1>
          <p className="service-hero-sub">
            These terms govern your use of the Bizy Site website and the services we provide. By using our site or engaging our services, you agree to these terms.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", color: "var(--text)", fontSize: "15px", lineHeight: "1.8" }}>
          
          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>1. Use of Our Website</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            You agree to use this website solely for legitimate inquiries, requests for information, and reading educational content. Any unauthorized crawling, framing, or scraping of content is prohibited.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>2. Our Services & Scope</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            We provide performance-driven website design, search engine optimization (SEO), answer/generative search visibility (AEO/GEO), paid ads management, and social media management. Specific deliverables, pricing, and timelines are governed by separate project proposals or Service Level Agreements (SLAs).
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>3. Quotes, Payments & Invoicing (GST)</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            All quotes are provided on an individual project basis. Invoices will be raised electronically and will carry applicable Goods and Services Tax (GST). Our registered GST number is **33AAPCM5658N1ZP**. Payments must be made via bank transfer or approved digital corporate channels as specified on invoices.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>4. Project Timelines & Client Responsibilities</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            We aim to deliver all projects within the agreed-upon schedules. Timely delivery is dependent on the client providing necessary content assets, access coordinates, and feedback. Delays in supplying these assets may result in adjustment of final completion dates.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>5. Website Ownership</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            Clients own their custom website designs, written copy layouts, and custom database integrations completely upon full payment of the project invoice. Bizy Site retains rights to pre-existing base templates, libraries, and frameworks.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>6. Limitation of Liability</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            While we build high-performing websites and search campaigns, we do not guarantee specific lead volumes, conversion ratios, or search ranking heights, as these are dependent on external search engines, market competition, and customer behaviors.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>7. Governing Law</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            These terms and any commercial dispute shall be governed by and construed in accordance with the laws of India. Any legal actions shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
          </p>

          <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "24px", marginBottom: "12px" }}>8. Contact Information</h3>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px" }}>
            If you have questions about these terms, please contact us at <a href="mailto:info@bizysite.in" style={{ color: "var(--teal)", fontWeight: "700" }}>info@bizysite.in</a>.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
