import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design for Manufacturers & B2B Companies in India | Bizy Site",
  description: "Websites for manufacturers, suppliers and B2B firms that win serious buyers and quote requests. Showcase capabilities, build credibility, capture leads. Get a free quote.",
  keywords: "manufacturing website design India, B2B website, industrial website design, B2B lead generation India",
  alternates: {
    canonical: "/industries/manufacturing",
  },
  openGraph: {
    title: "Website Design for Manufacturers & B2B Companies in India | Bizy Site",
    description: "Websites for manufacturers, suppliers and B2B firms that win serious buyers and quote requests. Showcase capabilities, build credibility, capture leads. Get a free quote.",
    url: "https://bizysite.in/industries/manufacturing",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Manufacturers & B2B Companies in India | Bizy Site",
    description: "Websites for manufacturers, suppliers and B2B firms that win serious buyers and quote requests. Showcase capabilities, build credibility, capture leads. Get a free quote.",
  },
};

export default function ManufacturingB2B() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/industries/manufacturing/#service",
        "name": "Website Design for Manufacturing & B2B",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Websites for manufacturers, suppliers and B2B firms that win serious buyers and quote requests.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/industries/manufacturing/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a manufacturing or B2B website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your product range, number of pages, and features like catalogues, quote systems or multi-language support. Share your requirements and we will send a clear quote."
            }
          },
          {
            "@type": "Question",
            "name": "Can you showcase our full product catalogue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can build organised product and category pages, downloadable catalogues, and specification sheets, so buyers can evaluate you properly and request quotes."
            }
          },
          {
            "@type": "Question",
            "name": "Can buyers request a quotation directly from the site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We add clear \"request a quote\" forms tied to specific products or services, so your sales team receives well-qualified enquiries."
            }
          },
          {
            "@type": "Question",
            "name": "Will our products rank on Google for what buyers search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with SEO focused on your specific products and industry terms. B2B buyers search very specifically, and we target those exact searches."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add certifications, standards and compliance details?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We present your ISO and quality certifications, standards and compliance prominently, since these are decisive trust factors for B2B buyers."
            }
          },
          {
            "@type": "Question",
            "name": "We export or sell across India. Can the site support that?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can structure the site for multiple regions or export markets, including multi-language options if needed, so you reach the right buyers."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/industries/manufacturing/#breadcrumb",
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
            "name": "Industries",
            "item": "https://bizysite.in/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Manufacturing & B2B",
            "item": "https://bizysite.in/industries/manufacturing"
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
      <section className="service-hero" style={{ 
        position: "relative", 
        overflow: "hidden", 
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_manufacturing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Manufacturing & B2B</span>
          <h1 className="service-hero-title">Win serious buyers and quote requests, not just website visits.</h1>
          <p className="service-hero-sub">
            B2B buyers research thoroughly before they reach out. We build manufacturing and B2B websites that prove your capability, build credibility, and turn serious buyers into quote requests.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Supplier Evaluation</span>
          <h2 className="section-title">Your buyer is comparing you to competitors before they ever call.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A purchase manager or business buyer does not decide in five minutes. They shortlist suppliers online, check who looks capable and credible, and quietly drop anyone whose website looks small or unclear, even if that business is excellent.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Most manufacturing websites fail here. They do not clearly show what the company makes, its capacity, certifications, or client base. So a capable factory loses a serious order to a competitor who simply presented themselves better online.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting B2B Website Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to prove capability and win the quote request.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear product and capability showcase</strong> — What you make, your capacity, and your range, easy to grasp.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Certifications and standards</strong> — ISO, quality certifications and compliance that buyers demand.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Client logos and case studies</strong> — Proof that serious businesses already trust you.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Easy quote and enquiry requests</strong> — So a buyer can request a quotation in one step.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Downloadable catalogues and specs</strong> — Technical details buyers need to evaluate you.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Professional, credible design</strong> — That signals scale and reliability.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Services That Matter Most */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Focus</span>
            <h2 className="section-title">Where we focus for manufacturers and B2B.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "Website Design", desc: "A credible, capability-proving site.", href: "/services/web-design" },
              { name: "SEO", desc: "Rank for the specific products and services buyers search for.", href: "/services/seo" },
              { name: "LinkedIn-Ready Presence", desc: "A professional site that supports B2B outreach and trust.", href: "/services/social-media-management" },
              { name: "CRO", desc: "Turn more visitors into quote requests.", href: "/services/cro" }
            ].map((svc, idx) => (
              <div key={idx} className="work-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 className="work-title" style={{ fontSize: "18px", marginBottom: "8px" }}>{svc.name}</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "20px" }}>{svc.desc}</p>
                </div>
                <Link href={svc.href} className="btn btn-outline" style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "center" }}>
                  <span>Explore Service</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Mini Example */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag light">B2B Trust</span>
          <h2 className="section-title text-white">The bigger buyer chooses the more credible supplier.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            Two factories can make the same product at the same quality. The one whose website clearly shows capacity, certifications and past clients wins the larger, serious buyer, because that buyer cannot risk an order on a supplier who looks uncertain.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            In B2B, looking credible online is not vanity. It is how you get shortlisted.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much does a manufacturing or B2B website cost in India?",
                a: "It depends on your product range, number of pages, and features like catalogues, quote systems or multi-language support. Share your requirements and we will send a clear quote."
              },
              {
                q: "Can you showcase our full product catalogue?",
                a: "Yes. We can build organised product and category pages, downloadable catalogues, and specification sheets, so buyers can evaluate you properly and request quotes."
              },
              {
                q: "Can buyers request a quotation directly from the site?",
                a: "Yes. We add clear \"request a quote\" forms tied to specific products or services, so your sales team receives well-qualified enquiries."
              },
              {
                q: "Will our products rank on Google for what buyers search?",
                a: "Yes, with SEO focused on your specific products and industry terms. B2B buyers search very specifically, and we target those exact searches."
              },
              {
                q: "Can you add certifications, standards and compliance details?",
                a: "Yes. We present your ISO and quality certifications, standards and compliance prominently, since these are decisive trust factors for B2B buyers."
              },
              {
                q: "We export or sell across India. Can the site support that?",
                a: "Yes. We can structure the site for multiple regions or export markets, including multi-language options if needed, so you reach the right buyers."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-card-custom" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="faq-trigger-custom" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", cursor: "default" }}>
                  <span style={{ textAlign: "left", paddingRight: "16px", fontWeight: "800" }}>{faq.q}</span>
                </div>
                <div className="faq-content-custom" style={{ paddingTop: 0 }}>
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Get found and get shortlisted by serious buyers.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Let us showcase your production scale and ISO compliance to win corporate enquiries.
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
