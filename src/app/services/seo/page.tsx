"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, BarChart, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SEO() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does SEO take to show results in India?",
      a: "For most keywords with moderate competition, you will see significant organic ranking improvements and initial traffic growth within 3 to 6 months. High-volume competitive keywords typically require 6 to 9 months of authority building and technical optimization."
    },
    {
      q: "Do you focus on regional languages or only English?",
      a: "We do both. Local search behavior in India is heavily bilingual and multilingual. We optimize schemas and write content targeting regional search terms (e.g. Hindi, Tamil, Telugu, Marathi keyword queries) based on your target audience."
    },
    {
      q: "Do you guarantee first-page rankings?",
      a: "Nobody can guarantee exact Google ranking positions because search algorithms update constantly. However, we guarantee that we build authority structures using white-hat SEO techniques that increase search impressions, drive targeted traffic, and grow your sales leads."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Rank Higher. Get Found. Grow Faster.</h1>
          <p className="service-hero-sub">
            Bizy Site builds search engine authority that delivers high-intent organic buyers, not just empty clicks. Real business metrics, zero vanity.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free SEO Audit →
          </Link>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag font-bold">The Vanity Trap</span>
          <h2 className="section-title">Rankings Without Conversions Are Just Vanity. We Build SEO Strategies That Bring Buyers.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
            Many agencies will optimize your site for obscure keywords with high search volumes but zero intent. You get thousands of visits but zero lead submissions.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.7" }}>
            We map keywords to business intent. We target search phrases used by decision-makers when they are ready to evaluate, inquire, and purchase.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Core Services</span>
            <h2 className="section-title">What Our SEO Packages Cover</h2>
            <p className="section-sub">Comprehensive optimizations to satisfy both search crawlers and human readers.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">Technical SEO & Audits</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We audit site structure, fix canonical links, build XML sitemaps, optimize robots.txt, and resolve crawl errors.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">On-Page Optimization</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We structure H1-H3 headings, write compelling meta tags, configure alt tags, and build clean internal linking siloing.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Intent-Based Content</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We write depth articles, comparative pages, and FAQ grids targeting buyer queries at different stages of the funnel.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Authority Link Building</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We secure mentions and editorial backlinks from authoritative industry journals and news publications to grow your domain rating.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Local SEO & Google Map</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We optimize your Google Business Profiles, secure local citations, and drive reviews to rank you in the Local 3-Pack.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Schema & Snippets</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We deploy structured data schemas (FAQ, Organization, LocalBusiness, Product) so you stand out in search results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* India-Specific Angle */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">India Market Focus</span>
            <h2 className="section-title">Optimized for Google India Search Behaviour</h2>
            <p className="section-sub">Indian search behaviour is unique. We adapt your organic strategy accordingly.</p>
          </div>

          <div className="pain-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div className="pain-card">
              <h3 className="pain-title">Bilingual Search Intent</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)" }}>
                Indian users often blend regional vocabulary with English terms. We analyze and target Hinglish and localized keywords to capture these organic queries.
              </p>
            </div>
            <div className="pain-card">
              <h3 className="pain-title">Mobile-First Speeds</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)" }}>
                With vast mobile search traffic operating on mobile connections, your site speed is a direct ranking factor in India. We tune assets to load instantly.
              </p>
            </div>
            <div className="pain-card">
              <h3 className="pain-title">Local Pack Domination</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)" }}>
                We configure geographic schemas and manage citations to position your physical branches, retail outlets, or service areas in the Local Map Pack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Case Study */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Case Study</span>
            <h2 className="section-title">Organic Growth Results</h2>
          </div>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border)", marginTop: "32px" }}>
            <div className="contact-section-split">
              <div>
                <span className="market-tag" style={{ marginLeft: 0 }}>B2B Logistics</span>
                <h3 style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", margin: "16px 0" }}>
                  B2B SaaS: Inbound Demos Grown by 3.2× via Organic Search
                </h3>
                <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  By rebuilding their site architecture, fixing slow rendering speeds, and deploying targeted landing pages for high-intent queries, we grew their search footprint.
                </p>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>ORGANIC CLICKS</span>
                    <p style={{ fontSize: "24px", color: "var(--green)", fontWeight: "800" }}>+240%</p>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>TOP 3 KEYWORDS</span>
                    <p style={{ fontSize: "24px", color: "var(--teal-dark)", fontWeight: "800" }}>84 Ranked</p>
                  </div>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px" }}>
                <h4 style={{ color: "var(--navy)", fontWeight: "800", marginBottom: "16px" }}>Organic Search Trajectory</h4>
                <div style={{ display: "flex", alignItems: "flex-end", height: "120px", gap: "16px" }}>
                  <div style={{ flex: 1, background: "var(--border)", height: "30%", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "11px", color: "var(--text-muted)" }}>Month 1</div>
                  <div style={{ flex: 1, background: "var(--text-muted)", height: "55%", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "11px", color: "var(--white)" }}>Month 3</div>
                  <div style={{ flex: 1, background: "var(--teal)", height: "100%", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "11px", color: "var(--white)" }}>Month 6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ background: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">Partner Feedback</span>
          <p style={{ fontSize: "18px", fontStyle: "italic", fontWeight: "600", color: "var(--navy)", marginBottom: "20px" }}>
            "Bizy Site restructured our blog content and solved deep indexation issues in our CMS. Within 90 days, our organic lead volume exceeded what we used to buy from paid channels."
          </p>
          <h4 style={{ color: "var(--navy)", fontWeight: "800" }}>Anita Desai, Head of Growth</h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>FinTech SaaS Brand (Bengaluru)</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "32px" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card-custom">
                <button 
                  className="faq-trigger-custom"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaq === idx ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {openFaq === idx && (
                  <div className="faq-content-custom">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Let's grow your organic pipeline.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free SEO audit report and see where your technical indexation stands.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free SEO Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
