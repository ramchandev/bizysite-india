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
      <section className="service-hero" style={{ position: "relative", overflow: "hidden", paddingBottom: "120px" }}>
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

        {/* Coimbatore Skyline Background Silhouette */}
        <div className="hero-skyline-silhouette" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", zIndex: 1, pointerEvents: "none", opacity: 0.15 }}>
          <svg viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            {/* Defs for gradients & clip-arts */}
            <defs>
              <linearGradient id="sky-glow-kovai" x1="720" y1="250" x2="720" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--teal)" stopOpacity="0.15" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hills-grad" x1="720" y1="220" x2="720" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--navy)" stopOpacity="0.3" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="factory-grad" x1="150" y1="220" x2="150" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.9" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gopuram-grad" x1="365" y1="220" x2="365" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.95" />
                <stop offset="0.7" stopColor="#1B3B6F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Ambient Background Sky Glow */}
            <rect width="1440" height="250" fill="url(#sky-glow-kovai)" />

            {/* Western Ghats Hills (Far Background) */}
            <path d="M 0,220 Q 150,150 350,190 Q 550,130 800,180 Q 1050,140 1250,170 Q 1380,130 1440,160 L 1440,250 L 0,250 Z" fill="url(#hills-grad)" stroke="var(--teal)" strokeWidth="1" opacity="0.3" />
            <path d="M 0,230 Q 200,180 450,210 Q 700,170 950,200 Q 1200,165 1440,190 L 1440,250 L 0,250 Z" fill="url(#hills-grad)" opacity="0.4" />

            {/* Textile Mills / Pumps Engineering Chimneys & Factories (Detailed Clipart Style) */}
            <g opacity="0.9">
              <rect x="60" y="150" width="80" height="70" fill="url(#factory-grad)" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="55,150 95,120 105,150" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              {/* Factory Sawtooth Roofs */}
              <polygon points="140,220 140,170 170,190 170,220" fill="var(--navy)" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="170,220 170,170 200,190 200,220" fill="var(--navy)" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="200,220 200,170 230,190 230,220" fill="var(--navy)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Chimney Stack */}
              <polygon points="105,150 110,80 120,80 125,150" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="110" y1="95" x2="120" y2="95" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
              <line x1="108" y1="115" x2="122" y2="115" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
              {/* Smoke clouds */}
              <circle cx="115" cy="65" r="8" fill="#FFFFFF" opacity="0.25" />
              <circle cx="125" cy="53" r="11" fill="#FFFFFF" opacity="0.15" />
            </g>

            {/* Marudhamalai Temple Gopuram (Detailed Center Left) */}
            <g opacity="0.95">
              {/* Stepped Gopuram Pyramid */}
              <rect x="320" y="200" width="90" height="20" fill="url(#gopuram-grad)" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="330" y="180" width="70" height="20" fill="url(#gopuram-grad)" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="340" y="160" width="50" height="20" fill="url(#gopuram-grad)" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="348" y="140" width="34" height="20" fill="url(#gopuram-grad)" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="354" y="120" width="22" height="20" fill="url(#gopuram-grad)" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              {/* Top dome crown */}
              <path d="M 352,120 Q 365,100 378,120 Z" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              
              {/* Stepped lines and spires highlighted in White */}
              <line x1="330" y1="180" x2="400" y2="180" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
              <line x1="340" y1="160" x2="390" y2="160" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
              <line x1="348" y1="140" x2="382" y2="140" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
              <line x1="354" y1="120" x2="376" y2="120" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
              
              {/* Kalasams (Spires) */}
              <circle cx="365" cy="94" r="3.5" fill="#FFFFFF" />
              <circle cx="359" cy="96" r="2.5" fill="#FFFFFF" />
              <circle cx="371" cy="96" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Adiyogi Shiva Statue (Detailed Silhouette Center Right) */}
            <g opacity="0.95">
              {/* Pedestal base */}
              <path d="M 520,220 Q 640,215 760,220 L 740,210 Q 640,205 540,210 Z" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              {/* Chest outline */}
              <path d="M 530,220 Q 640,160 750,220" fill="none" stroke="#2BBFBF" strokeWidth="2" />
              {/* Hair/Jata spreading outwards */}
              <path d="M 545,185 Q 520,160 480,185 Q 530,150 560,165" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 735,185 Q 760,160 800,185 Q 750,150 720,165" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              {/* Shoulders and Neck */}
              <path d="M 580,220 Q 640,130 700,220" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1.5" />
              {/* Face/Head outline */}
              <path d="M 610,135 Q 610,65 640,65 Q 670,65 670,135 Z" fill="#1B3B6F" stroke="#2BBFBF" strokeWidth="1.5" />
              {/* Cobra snake around neck */}
              <path d="M 625,145 Q 640,135 655,145 Q 665,135 670,140 Q 660,155 625,145 Z" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <circle cx="667" cy="136" r="2.5" fill="#FFFFFF" />
              {/* Crescent Moon on Hair (White Highlight) */}
              <path d="M 664,75 Q 675,70 670,85 Q 662,80 664,75 Z" fill="#FFFFFF" />
              {/* Third eye dot */}
              <ellipse cx="640" cy="95" rx="2" ry="4.5" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
            </g>

            {/* IT Parks & Glass Tidel Buildings (Silhouette Right) */}
            <g opacity="0.25">
              {/* Tidel Building 1 */}
              <rect x="940" y="80" width="130" height="140" fill="#1B3B6F" rx="2" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="940" y1="110" x2="1070" y2="110" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
              <line x1="940" y1="140" x2="1070" y2="140" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
              <line x1="940" y1="170" x2="1070" y2="170" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
              {/* Window lines */}
              <line x1="970" y1="80" x2="970" y2="220" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="1010" y1="80" x2="1010" y2="220" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="1040" y1="80" x2="1040" y2="220" stroke="#2BBFBF" strokeWidth="1" />
              {/* Building 2 */}
              <rect x="1100" y="60" width="70" height="160" fill="#0D1F3C" rx="2" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="1115" y="75" width="40" height="130" fill="#2BBFBF" opacity="0.3" />
            </g>

            {/* Horizon line */}
            <line x1="0" y1="219" x2="1440" y2="219" stroke="#2BBFBF" strokeWidth="2" opacity="0.5" />
          </svg>
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
