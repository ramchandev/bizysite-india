import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Website Design for CA, Legal & Consulting Firms in India | Bizy Site",
  description: "Websites for CA firms, lawyers and consultants that signal trust and win serious clients. Show expertise, build credibility, capture enquiries. Get a free quote.",
  keywords: "CA firm website design India, lawyer website, consultant website design, professional services web design India",
  alternates: {
    canonical: "/industries/professional-services",
  },
  openGraph: {
    title: "Website Design for CA, Legal & Consulting Firms in India | Bizy Site",
    description: "Websites for CA firms, lawyers and consultants that signal trust and win serious clients. Show expertise, build credibility, capture enquiries. Get a free quote.",
    url: `${siteUrl}/industries/professional-services`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for CA, Legal & Consulting Firms in India | Bizy Site",
    description: "Websites for CA firms, lawyers and consultants that signal trust and win serious clients. Show expertise, build credibility, capture enquiries. Get a free quote.",
  },
};

export default function ProfessionalServices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/industries/professional-services/#service`,
        "name": "Website Design for CA, Legal & Consulting Firms",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Websites for CA firms, lawyers and consultants that signal trust and win serious clients.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/industries/professional-services/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website for a CA firm, lawyer or consultant cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the size of your practice, number of pages and features. A solo practitioner site costs less than a multi-partner firm site. Share your needs and we will send a clear quote."
            }
          },
          {
            "@type": "Question",
            "name": "Will my firm rank for searches like \"CA in [city]\" or \"GST filing\"?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with SEO and your Google Business Profile. We target the exact searches your potential clients use, both service-based and location-based."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make my website look trustworthy to clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trust comes from clear services, visible credentials, genuine testimonials, professional design and an easy way to reach you. We build all of these in, since trust is the deciding factor in your field."
            }
          },
          {
            "@type": "Question",
            "name": "Can I explain my services without confusing clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and we specialise in this. We translate complex professional services into clear, simple language that reassures worried clients instead of overwhelming them."
            }
          },
          {
            "@type": "Question",
            "name": "Can clients enquire privately and securely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We add secure, confidential enquiry forms and clear contact options, respecting the privacy that professional service clients expect."
            }
          },
          {
            "@type": "Question",
            "name": "I get most clients through referrals. Do I still need a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Referred clients almost always check you online before calling. A strong, credible website confirms the referral and closes the trust gap. A weak or missing one can undo a good referral."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/industries/professional-services/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": `${siteUrl}/industries`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Professional Services",
            "item": `${siteUrl}/industries/professional-services`
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_professional.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Professional Services</span>
          <h1 className="service-hero-title">Win clients who need to trust you before they hire you.</h1>
          <p className="service-hero-sub">
            People hire a CA, lawyer or consultant based on trust and credibility. We build professional services websites that signal expertise, build confidence, and turn serious visitors into client enquiries.
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
          <span className="section-tag">Trust Gap</span>
          <h2 className="section-title">Clients are handing you their money and their trust. Your site must earn it.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            When someone hires a CA to handle their taxes, a lawyer for a case, or a consultant for advice, they are placing serious trust in you. Before they call, they check you online, and if your website looks unprofessional or unclear, that trust never forms.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Most professional services websites are either outdated, confusing, or full of jargon that overwhelms a worried client. What clients actually want is simple: proof you are experienced, reliable, and easy to talk to. When a site fails to convey that, capable professionals lose clients to lesser competitors who simply appear more trustworthy.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting Professional Services Website Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to turn cautious visitors into confident clients.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear services in plain language</strong> — What you do and who you help, without confusing jargon.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Credentials and memberships</strong> — ICAI, Bar Council, and other bodies that prove your standing.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Experience and track record</strong> — Years in practice, clients served, areas of expertise.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Genuine testimonials</strong> — Real client experiences that build trust.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Easy, private enquiry</strong> — A simple, reassuring way to reach out, with confidentiality respected.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Professional, calm design</strong> — That signals reliability and competence.
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
            <h2 className="section-title">Where we focus for CA, legal and consulting firms.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "Website Design", desc: "A credible, trust-first site.", href: "/services/web-design" },
              { name: "SEO", desc: "Rank for \"CA firm in [city]\", \"GST filing\", \"lawyer for [need]\".", href: "/services/seo" },
              { name: "Google Business Profile", desc: "Show up locally when clients search for your service.", href: "/services/google-business-profile" },
              { name: "CRO", desc: "Turn more visitors into consultation enquiries.", href: "/services/cro" }
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
          <span className="section-tag light">Firm Credibility</span>
          <h2 className="section-title text-white">The clearer, more credible firm wins the client.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            Two CA firms may be equally skilled. The one whose website clearly explains its services, shows its credentials, and makes reaching out easy wins the client, because a worried client chooses the professional they trust most, and trust is built online before the first call.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            Trust is the deciding factor in your field.
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
                q: "How much does a website for a CA firm, lawyer or consultant cost in India?",
                a: "It depends on the size of your practice, number of pages and features. A solo practitioner site costs less than a multi-partner firm site. Share your needs and we will send a clear quote."
              },
              {
                q: "Will my firm rank for searches like \"CA in [city]\" or \"GST filing\"?",
                a: "Yes, with SEO and your Google Business Profile. We target the exact searches your potential clients use, both service-based and location-based."
              },
              {
                q: "How do I make my website look trustworthy to clients?",
                a: "Trust comes from clear services, visible credentials, genuine testimonials, professional design and an easy way to reach you. We build all of these in, since trust is the deciding factor in your field."
              },
              {
                q: "Can I explain my services without confusing clients?",
                a: "Yes, and we specialise in this. We translate complex professional services into clear, simple language that reassures worried clients instead of overwhelming them."
              },
              {
                q: "Can clients enquire privately and securely?",
                a: "Yes. We add secure, confidential enquiry forms and contact options, respecting the privacy that professional service clients expect."
              },
              {
                q: "I get most clients through referrals. Do I still need a website?",
                a: "Yes. Referred clients almost always check you online before calling. A strong, credible website confirms the referral and closes the trust gap. A weak or missing one can undo a good referral."
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
            Win more clients by earning their trust online.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Let us build a site that reflects your professional standards and secures more consults.
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
