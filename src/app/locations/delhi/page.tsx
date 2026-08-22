import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Website Design Company in Delhi NCR | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Delhi NCR businesses. Stand out in a crowded market with fast, conversion-focused sites. Get a free quote.",
  keywords: "website design company Delhi, web development Delhi NCR, SEO Delhi, web designers in Delhi, digital marketing agency Delhi NCR",
  alternates: {
    canonical: "/locations/delhi",
  },
  openGraph: {
    title: "Website Design Company in Delhi NCR | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Delhi NCR businesses. Stand out in a crowded market with fast, conversion-focused sites. Get a free quote.",
    url: `${siteUrl}/locations/delhi`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Delhi NCR | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Delhi NCR businesses. Stand out in a crowded market with fast, conversion-focused sites. Get a free quote.",
  },
};

export default function DelhiLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/locations/delhi/#localbusiness`,
        "name": "Bizy Site Delhi NCR Service Area",
        "url": `${siteUrl}/locations/delhi`,
        "parentOrganization": {
          "@id": `${siteUrl}/#organization`
        },
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi NCR",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Delhi"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Gurugram"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Noida"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/locations/delhi/#service`,
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Website design, SEO and digital marketing for Delhi NCR businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Delhi NCR"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/locations/delhi/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Delhi NCR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business, pages and features. A simple service site costs far less than a custom e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make my business stand out in competitive Delhi NCR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With a credible, fast website that builds trust instantly, plus strong local search visibility. We focus on making you the obvious, trustworthy choice, then guiding visitors to enquire."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work across Delhi, Gurugram and Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We serve businesses across the entire Delhi NCR region, and optimise your local search so you appear in the specific areas your customers are in."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Delhi business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across NCR localities and on Google Maps, even in competitive areas."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet clients in person in Delhi NCR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle most work smoothly online, which saves time given NCR's size and traffic. Calls and discussions can be arranged as needed. Location is never a barrier."
            }
          },
          {
            "@type": "Question",
            "name": "Do I own my website after it is built?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, completely. Your website, content and data are yours from day one, with no lock-in."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/locations/delhi/#breadcrumb`,
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
            "name": "Locations",
            "item": `${siteUrl}/locations`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Delhi NCR",
            "item": `${siteUrl}/locations/delhi`
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/delhi_realistic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Delhi NCR</span>
          <h1 className="service-hero-title">Websites for Delhi NCR businesses that stand out in a crowded market.</h1>
          <p className="service-hero-sub">
            Delhi and its NCR are huge, competitive and full of choice. To win here, your website has to look sharp, build trust fast, and make you the obvious pick. That is exactly what we build.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Delhi business. We reply the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Understanding Delhi NCR Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">In Delhi NCR, competition is everywhere. Standing out is everything.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Delhi NCR is one of India's largest and most competitive markets, spanning Delhi, Gurugram, Noida, Faridabad and Ghaziabad. It is a hub for corporates and startups in Gurugram and Noida, sprawling retail and wholesale markets, countless clinics, CA firms, coaching centres and service businesses, all fighting for the same customers.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            With so much choice, Delhi customers compare quickly and trust cautiously. A weak website gets skipped instantly. Your site has to look credible, answer doubts fast, and make the next step easy, or a competitor gets the call.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Delhi NCR.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Sharp, credible sites that stand out and build trust.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>CRO</strong> — Turn cautious, comparison-driven visitors into enquiries.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Win "near me" searches across Delhi, Gurugram, Noida and beyond.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO</strong> — Get found in one of India's most competitive markets.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach ready-to-buy Delhi NCR customers fast.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Social Media Management</strong> — Stay visible and trusted where NCR scrolls.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Why Choose Bizy Site */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Why Us</span>
            <h2 className="section-title">Best-in-class work, for a crowded market.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We build sites that stand out and build trust fast in a competitive market.",
              "We understand how Delhi customers compare and decide.",
              "We back every project with 500+ websites of experience.",
              "We speak in outcomes: more calls, more enquiries, more sales.",
              "You own your website and data, from day one."
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much does a website cost in Delhi NCR?",
                a: "It depends on your business, pages and features. A simple service site costs far less than a custom e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "How do I make my business stand out in competitive Delhi NCR?",
                a: "With a credible, fast website that builds trust instantly, plus strong local search visibility. We focus on making you the obvious, trustworthy choice, then guiding visitors to enquire."
              },
              {
                q: "Do you work across Delhi, Gurugram and Noida?",
                a: "Yes. We serve businesses across the entire Delhi NCR region, and optimise your local search so you appear in the specific areas your customers are in."
              },
              {
                q: "Can you help my Delhi business rank on Google?",
                a: "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across NCR localities and on Google Maps, even in competitive areas."
              },
              {
                q: "Do you meet clients in person in Delhi NCR?",
                a: "We handle most work smoothly online, which saves time given NCR's size and traffic. Calls and discussions can be arranged as needed. Location is never a barrier."
              },
              {
                q: "Do I own my website after it is built?",
                a: "Yes, completely. Your website, content and data are yours from day one, with no lock-in."
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

      {/* SECTION 6 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Get more customers from your Delhi NCR website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Build trust faster and capture active searchers in the competitive capital region.
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
