import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Our Work | Website Design Portfolio & Results | Bizy Site",
  description: "See websites we have built and the results they bring. 500+ projects across industries. Real work, real outcomes. Get a free quote for yours.",
  keywords: "web design portfolio, conversion design case studies, SEO results India, web design examples",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | Website Design Portfolio & Results | Bizy Site",
    description: "See websites we have built and the results they bring. 500+ projects across industries. Real work, real outcomes. Get a free quote for yours.",
    url: "https://bizysite.in/work",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Website Design Portfolio & Results | Bizy Site",
    description: "See websites we have built and the results they bring. 500+ projects across industries. Real work, real outcomes. Get a free quote for yours.",
  },
};

export default function Work() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://bizysite.in/work/#webpage",
        "url": "https://bizysite.in/work",
        "name": "Our Work & Case Studies"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/work/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bizysite.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://bizysite.in/work"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      {/* SECTION 1 — Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Our Work</span>
          <h1 className="service-hero-title">Websites we are proud of. Results our clients are happy about.</h1>
          <p className="service-hero-sub">
            Good design is nice to look at. Great design brings business. Here is a look at the work we do and the outcomes it creates.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Want results like these? Let us talk.</p>
            </div>
          </div>
        </div>
      </section>

      <WorkClient />

      {/* SECTION 3 — Featured Case Studies */}
      <section className="section-padding" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">A closer look at the difference a website makes.</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {/* Case Study 1 */}
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
              <span className="section-tag" style={{ color: "var(--teal)", background: "rgba(43,191,191,0.08)" }}>E-commerce & Retail</span>
              <h3 style={{ fontSize: "22px", color: "var(--navy)", fontWeight: "800", margin: "12px 0 20px 0" }}>Sound V Pro Store</h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", textTransform: "uppercase", marginBottom: "8px" }}>The Problem</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                    Renting high-end audio setups online was too friction-heavy on their old store, leading to high cart abandonment rates.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", textTransform: "uppercase", marginBottom: "8px" }}>What We Did</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                    Redesigned the checkout funnel into a streamlined single-page process, compressed product galleries, and fixed mobile checkout drop-offs.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", textTransform: "uppercase", marginBottom: "8px" }}>The Result</h4>
                  <div style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontWeight: "800", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", display: "inline-block", marginTop: "4px" }}>
                    Checkout conversion rates rose by 2.1× and online rentals doubled in 30 days.
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
              <span className="section-tag" style={{ color: "var(--teal)", background: "rgba(43,191,191,0.08)" }}>B2B & Agencies</span>
              <h3 style={{ fontSize: "22px", color: "var(--navy)", fontWeight: "800", margin: "12px 0 20px 0" }}>Idea Heavens Agency</h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", textTransform: "uppercase", marginBottom: "8px" }}>The Problem</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                    Performance marketing agency was paying too much for client acquisition leads. Cost per lead was high and landing page conversion was low.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", textTransform: "uppercase", marginBottom: "8px" }}>What We Did</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                    Optimized the search landing page, integrated clear WhatsApp quickCTAs, and optimized Google and Meta Ads targeting.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", textTransform: "uppercase", marginBottom: "8px" }}>The Result</h4>
                  <div style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontWeight: "800", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", display: "inline-block", marginTop: "4px" }}>
                    Cut client acquisition cost per lead (CPL) by 3.4× with a 62% increase in page conversions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Testimonials */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What our clients say.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              {
                text: "Bizy Site rebuilt our clinic's website. They optimized the local search queries and simplified our appointment booking flow. Our online bookings grew by 38%, and patients keep commenting on how fast the website is.",
                author: "Ragil",
                title: "Manager, Dr. Sajan Hegde's Website",
                city: "Chennai"
              },
              {
                text: "Renting high-end audio setups online was too friction-heavy on our old store. Bizy Site redesigned the checkout funnel into a single-page checkout and fixed our mobile cart abandonment. Our online rentals doubled in 30 days.",
                author: "Jacob",
                title: "Founder, Sound V Pro",
                city: "Chennai"
              },
              {
                text: "Our membership directory was slow on mobile, preventing business owners from referencing members during networking sessions. Bizy Site rebuilt the index, resulting in a 48% reduction in page load speed.",
                author: "Ram",
                title: "VP of Miracle Chapter, Miracle Members",
                city: "Chennai"
              },
              {
                text: "We were spending heavily on marketing campaigns with very poor lead volumes. Bizy Site rebuilt our landing pages and optimized our ad campaigns. Our cost-per-lead dropped by 3.4×, with highly qualified sales inquiries.",
                author: "Praveen",
                title: "Founder, Idea Heavens",
                city: "Chennai"
              }
            ].map((t, idx) => (
              <div key={idx} style={{ background: "var(--off-white)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "4px", color: "var(--teal)", marginBottom: "16px" }}>
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--text)", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>
                  "{t.text}"
                </p>
                <div>
                  <strong style={{ fontSize: "13.5px", color: "var(--navy)", display: "block" }}>{t.author}</strong>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "600" }}>{t.title} ({t.city})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Let us build something that works this well for you.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Launch a site structured around customer acquisition and optimization pathways.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=quote" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Quote →
                </Link>
              </div>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-outline" style={{ padding: "14px 32px", background: "rgba(255,255,255,0.08)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>
                  Get My Free Website Audit →
                </Link>
              </div>
            </div>
            
            <p className="cta-microcopy light" style={{ marginTop: "16px", opacity: 0.8 }}>
              Same-day reply. Real experts. Zero pressure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
