import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Service Index | Bizy Site",
  description: "All website design, development, SEO, ads and social media management services in one place.",
  alternates: {
    canonical: "/service-index",
  },
};

export default function ServiceIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bizysite.in/service-index/#webpage",
    "url": "https://bizysite.in/service-index",
    "name": "Service Index"
  };

  const services = [
    { name: "Website Development", href: "/services/web-design", desc: "Fast, responsive, custom-built websites that turn visitors into paying customers." },
    { name: "Conversion Rate Optimization", href: "/services/cro", desc: "Rigorous funnel audits and structure changes designed to lift your digital leads." },
    { name: "Search Optimization (SEO & AEO)", href: "/services/seo", desc: "Dominate search engine result pages (SERPs) and win local map packs." },
    { name: "Google Business Profile", href: "/services/google-business-profile", desc: "Claim, optimize and manage local presence for maps and reviews." },
    { name: "Answer Engine Optimization", href: "/services/aeo", desc: "Format content structures for voice search queries and rich answer boxes." },
    { name: "AI Optimization (AIO)", href: "/services/aio", desc: "Stay visible across search models like ChatGPT Search, Gemini, and Claude." },
    { name: "Generative Engine Optimization", href: "/services/geo", desc: "Techniques for citations in AI summaries and search platforms." },
    { name: "Social Media Management", href: "/services/social-media-management", desc: "Maintain active profiles on Instagram, Facebook, and LinkedIn." },
    { name: "Google & Meta Ads", href: "/services/ads", desc: "Targeted campaigns built to generate instant leads, clicks and bookings." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <section className="service-hero" style={{ padding: "100px 0 40px 0" }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Index</span>
          <h1 className="service-hero-title">Service Index</h1>
          <p className="service-hero-sub">
            All our performance website design, search engine optimization, and growth campaign services in one place.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: "var(--off-white)", 
                  padding: "24px", 
                  borderRadius: "var(--radius-md)", 
                  border: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px"
                }}
              >
                <div style={{ maxWidth: "600px" }}>
                  <h3 style={{ fontSize: "18px", color: "var(--navy)", fontWeight: "800", marginBottom: "8px" }}>
                    {svc.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", margin: 0 }}>
                    {svc.desc}
                  </p>
                </div>
                <Link href={svc.href} className="btn btn-outline" style={{ fontSize: "13px", padding: "10px 20px" }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
