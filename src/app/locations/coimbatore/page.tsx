import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design Company in Coimbatore | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Coimbatore businesses, from manufacturing and textiles to clinics and services. Get a free quote today.",
  keywords: "website design company Coimbatore, web development Coimbatore, SEO Coimbatore, web designers in Coimbatore, digital marketing agency Coimbatore",
  alternates: {
    canonical: "/locations/coimbatore",
  },
  openGraph: {
    title: "Website Design Company in Coimbatore | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Coimbatore businesses, from manufacturing and textiles to clinics and services. Get a free quote today.",
    url: "https://bizysite.in/locations/coimbatore",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Coimbatore | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Coimbatore businesses, from manufacturing and textiles to clinics and services. Get a free quote today.",
  },
};

export default function CoimbatoreLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/locations/coimbatore/#localbusiness",
        "name": "Bizy Site Coimbatore Service Area",
        "url": "https://bizysite.in/locations/coimbatore",
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Coimbatore"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bizysite.in/locations/coimbatore/#service",
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Website design, SEO and digital marketing for Coimbatore businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Coimbatore"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/locations/coimbatore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business type and features. A manufacturing site with a product catalogue differs from a simple service site. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a website that attracts buyers from outside Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. This is especially important for Kovai manufacturers and exporters. We build sites that prove your capability and credibility to buyers across India and abroad, and rank for the products they search."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with manufacturing and textile businesses in Coimbatore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We understand how manufacturers, textile units, pump makers and engineering firms win buyers online, with clear product showcases, certifications and easy quote requests."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Coimbatore business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through SEO and your Google Business Profile, we help you rank for both local \"near me\" searches and the specific products or services buyers look for."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small and mid-sized Kovai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. From single shops and clinics to growing manufacturers, we scope every project to your goals and budget."
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
        "@id": "https://bizysite.in/locations/coimbatore/#breadcrumb",
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
            "name": "Locations",
            "item": "https://bizysite.in/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Coimbatore",
            "item": "https://bizysite.in/locations/coimbatore"
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/coimbatore_realistic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Coimbatore</span>
          <h1 className="service-hero-title">Websites for Kovai businesses that win customers, near and far.</h1>
          <p className="service-hero-sub">
            Coimbatore builds things and sells to the world. From pumps and textiles to jewellery, engineering and growing IT, we build websites that help Kovai businesses win local customers and reach buyers well beyond the city.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Coimbatore business. We reply the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Understanding Coimbatore Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">Kovai is a maker's city. Your website should sell what you make.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Coimbatore is one of India's great manufacturing and industrial hubs, the "Manchester of South India". It is home to the pump and motor industry that supplies much of the country, a huge textile and knitwear belt, a renowned jewellery manufacturing base, thousands of engineering units, and a fast-growing IT presence around TIDEL Park and KGISL.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Many Kovai businesses sell not just locally, but across India and abroad. That means your website often has two jobs: win trust from local customers, and prove your capability to serious buyers who may never visit in person. We build for both, with a specific focus on <Link href="/industries/manufacturing" style={{ color: "var(--teal)", fontWeight: "700" }}>Manufacturing & B2B website design</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Coimbatore and beyond.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Credible, capability-proving sites for manufacturers and services alike.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>B2B & Manufacturing Websites</strong> — Showcase products, capacity and certifications to serious buyers.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO</strong> — Rank for the specific products and services buyers search for.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Win "near me" searches across Coimbatore.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>CRO</strong> — Turn more visitors into quote requests and enquiries.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach buyers and customers quickly.
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
            <h2 className="section-title">Best-in-class work, built for how Kovai does business.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We understand both local service businesses and export-focused manufacturers.",
              "We build sites that prove capability to buyers who cannot visit your factory.",
              "We back every project with 500+ websites of experience.",
              "We speak in outcomes: more enquiries, more quote requests, more orders.",
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
                q: "How much does a website cost in Coimbatore?",
                a: "It depends on your business type and features. A manufacturing site with a product catalogue differs from a simple service site. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "Can you build a website that attracts buyers from outside Coimbatore?",
                a: "Yes. This is especially important for Kovai manufacturers and exporters. We build sites that prove your capability and credibility to buyers across India and abroad, and rank for the products they search."
              },
              {
                q: "Do you work with manufacturing and textile businesses in Coimbatore?",
                a: "Yes. We understand how manufacturers, textile units, pump makers and engineering firms win buyers online, with clear product showcases, certifications and easy quote requests."
              },
              {
                q: "Can you help my Coimbatore business rank on Google?",
                a: "Yes. Through SEO and your Google Business Profile, we help you rank for both local \"near me\" searches and the specific products or services buyers look for."
              },
              {
                q: "Do you work with small and mid-sized Kovai businesses?",
                a: "Yes. From single shops and clinics to growing manufacturers, we scope every project to your goals and budget."
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
            Get more customers and buyers from your Coimbatore website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Align your website with local capabilities and capture corporate quote requests.
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
