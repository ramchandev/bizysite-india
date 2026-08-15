import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design Company in Pune | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Pune businesses, across education, IT, manufacturing and services. Get a free quote today.",
  keywords: "website design company Pune, web development Pune, SEO Pune, web designers in Pune, digital marketing agency Pune",
  alternates: {
    canonical: "/locations/pune",
  },
  openGraph: {
    title: "Website Design Company in Pune | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Pune businesses, across education, IT, manufacturing and services. Get a free quote today.",
    url: "https://bizysite.in/locations/pune",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Pune | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Pune businesses, across education, IT, manufacturing and services. Get a free quote today.",
  },
};

export default function PuneLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/locations/pune/#localbusiness",
        "name": "Bizy Site Pune Service Area",
        "url": "https://bizysite.in/locations/pune",
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Pune"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bizysite.in/locations/pune/#service",
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Website design, SEO and digital marketing for Pune businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Pune"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/locations/pune/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business, pages and features. A coaching centre site differs from a manufacturing or e-commerce site. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build websites for coaching centres and institutes in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Given Pune's strong education scene, we specialise in coaching and education sites that showcase results and make demo bookings and admissions easy."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with manufacturers around Chakan and Pimpri-Chinchwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build B2B and manufacturing sites that showcase capability, certifications and products, and make it easy for serious buyers to request quotes."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Pune business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Pune localities and on Google Maps."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet clients in person in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle most work smoothly online for speed and convenience. Calls and discussions can be arranged as needed. Location is never a barrier."
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
        "@id": "https://bizysite.in/locations/pune/#breadcrumb",
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
            "name": "Pune",
            "item": "https://bizysite.in/locations/pune"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Pune</span>
          <h1 className="service-hero-title">Websites for Pune businesses, from classrooms to factories.</h1>
          <p className="service-hero-sub">
            Pune blends education, IT, manufacturing and a young, growing population. We build conversion-focused websites that help Pune businesses, across every sector, get found and win customers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Pune business. We reply the same day.</p>
            </div>
          </div>
        </div>

        {/* Pune Skyline Background Silhouette */}
        <div className="hero-skyline-silhouette" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", zIndex: 1, pointerEvents: "none", opacity: 0.15 }}>
          <svg viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            {/* Defs for gradients & clip-arts */}
            <defs>
              <linearGradient id="sky-glow-pune" x1="720" y1="250" x2="720" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--teal)" stopOpacity="0.15" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hills-grad-pune" x1="720" y1="220" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--navy)" stopOpacity="0.25" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="wada-grad" x1="320" y1="210" x2="320" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.95" />
                <stop offset="0.75" stopColor="#1B3B6F" stopOpacity="0.85" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="mahal-grad" x1="580" y1="210" x2="580" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.9" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.75" />
              </linearGradient>
            </defs>

            {/* Ambient Background Sky Glow */}
            <rect width="1440" height="250" fill="url(#sky-glow-pune)" />

            {/* Sinhagad Hills (Background Outline) */}
            <path d="M 0,210 Q 200,160 400,185 Q 600,150 850,195 Q 1100,155 1300,180 Q 1380,150 1440,165 L 1440,250 L 0,250 Z" fill="url(#hills-grad-pune)" stroke="var(--teal)" strokeWidth="1" opacity="0.3" />

            {/* Shaniwar Wada Fortress Gate (Detailed Silhouette Center Left) */}
            <g opacity="0.95">
              {/* Main heavy stone wall and bastions */}
              <rect x="240" y="140" width="160" height="70" fill="url(#wada-grad)" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="230" y="200" width="180" height="12" fill="#0D1F3C" rx="2" stroke="#2BBFBF" strokeWidth="1" />
              
              {/* Rounded left and right bastions */}
              <rect x="220" y="110" width="30" height="90" fill="url(#wada-grad)" rx="15" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="390" y="110" width="30" height="90" fill="url(#wada-grad)" rx="15" stroke="#2BBFBF" strokeWidth="1" />
              
              {/* Bastion arrow slits & window details in White */}
              <g fill="#FFFFFF" opacity="0.6">
                <rect x="231" y="130" width="8" height="15" rx="4" />
                <rect x="231" y="160" width="8" height="15" rx="4" fill="var(--teal)" />
                <rect x="401" y="130" width="8" height="15" rx="4" />
                <rect x="401" y="160" width="8" height="15" rx="4" fill="var(--teal)" />
              </g>

              {/* Main Center Wooden Gate Arch */}
              <path d="M 300,210 L 300,165 Q 320,150 340,165 L 340,210 Z" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1.5" />
              
              {/* Spikes on doors (White details) */}
              <line x1="305" y1="175" x2="308" y2="175" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="305" y1="185" x2="308" y2="185" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="305" y1="195" x2="308" y2="195" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="335" y1="175" x2="332" y2="175" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="335" y1="185" x2="332" y2="185" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="335" y1="195" x2="332" y2="195" stroke="#FFFFFF" strokeWidth="1.5" />

              {/* Top parapet slots */}
              <rect x="255" y="132" width="130" height="8" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="255" y1="136" x2="385" y2="136" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
            </g>

            {/* Lal Mahal (Detailed Red Canopy Silhouette Center Right) */}
            <g opacity="0.95">
              {/* Main canopy columns */}
              <rect x="540" y="120" width="80" height="90" fill="url(#mahal-grad)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Tiered canopy roofs */}
              <polygon points="530,120 580,90 630,120" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <polygon points="545,95 580,75 615,95" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              {/* Top spire */}
              <line x1="580" y1="75" x2="580" y2="55" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="580" cy="53" r="3" fill="#FFFFFF" />
              
              {/* Arched windows and columns */}
              <g fill="#FFFFFF" opacity="0.6">
                <rect x="560" y="170" width="10" height="20" rx="5" />
                <rect x="575" y="170" width="10" height="20" rx="5" />
                <rect x="590" y="170" width="10" height="20" rx="5" />
                
                <rect x="565" y="140" width="8" height="12" rx="4" fill="var(--teal)" />
                <rect x="587" y="140" width="8" height="12" rx="4" fill="var(--teal)" />
              </g>
            </g>

            {/* IT Parks & Hinjawadi glass tech buildings (Silhouette Right) */}
            <g opacity="0.25">
              {/* Tech Tower 1 */}
              <rect x="920" y="70" width="80" height="150" fill="url(#wada-grad)" rx="2" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="920" y1="100" x2="1000" y2="100" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
              <line x1="920" y1="130" x2="1000" y2="130" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
              <line x1="920" y1="160" x2="1000" y2="160" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
              {/* Tech Tower 2 */}
              <rect x="1030" y="50" width="90" height="170" fill="url(#wada-grad)" rx="2" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="1045" y="65" width="60" height="140" fill="#2BBFBF" opacity="0.35" />
              {/* Tech Tower 3 */}
              <rect x="1150" y="90" width="80" height="130" fill="url(#wada-grad)" rx="2" stroke="#2BBFBF" strokeWidth="1" />
            </g>

            {/* Horizon line */}
            <line x1="0" y1="219" x2="1440" y2="219" stroke="#2BBFBF" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — Understanding Pune Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">Pune is young, educated and growing fast. Your website should speak to that.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Pune is a city of many strengths: a famous education hub drawing students from across India, a strong IT presence in Hinjewadi and Kharadi, a major automobile and manufacturing belt around Chakan and Pimpri-Chinchwad, and a large, young population fuelling coaching centres, restaurants, retail and services.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            This mix means Pune businesses serve very different customers, from students and young professionals to serious industrial buyers. We build custom solutions such as <Link href="/industries/education" style={{ color: "var(--teal)", fontWeight: "700" }}>Education & Coaching website design</Link> and B2B industrial systems. Whatever yours is, your website needs to reach the right Pune audience clearly.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Pune.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Conversion-focused sites for any Pune sector.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Education & Coaching Websites</strong> — Show results and fill batches, key for Pune's education scene.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>B2B & Manufacturing Websites</strong> — Win serious buyers around Chakan and PCMC.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Win "near me" searches across Pune.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO & CRO</strong> — Get found, and turn more visitors into enquiries.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach the right Pune customers fast.
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
            <h2 className="section-title">Best-in-class work, for a many-sided city.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We build for Pune's full range, education, IT, manufacturing and local services.",
              "We understand how to reach both young consumers and industrial buyers.",
              "We back every project with 500+ websites of experience.",
              "We speak in outcomes: more admissions, more enquiries, more orders.",
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
                q: "How much does a website cost in Pune?",
                a: "It depends on your business, pages and features. A coaching centre site differs from a manufacturing or e-commerce site. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "Do you build websites for coaching centres and institutes in Pune?",
                a: "Yes. Given Pune's strong education scene, we specialise in coaching and education sites that showcase results and make demo bookings and admissions easy."
              },
              {
                q: "Do you work with manufacturers around Chakan and Pimpri-Chinchwad?",
                a: "Yes. We build B2B and manufacturing sites that showcase capability, certifications and products, and make it easy for serious buyers to request quotes."
              },
              {
                q: "Can you help my Pune business rank on Google?",
                a: "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Pune localities and on Google Maps."
              },
              {
                q: "Do you meet clients in person in Pune?",
                a: "We handle most work smoothly online for speed and convenience. Calls and discussions can be arranged as needed. Location is never a barrier."
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
            Get more customers from your Pune website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Optimize your site structure to connect with Pune's young demographics and corporate decision-makers.
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
