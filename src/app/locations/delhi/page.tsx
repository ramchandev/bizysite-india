import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design Company in Delhi NCR | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Delhi NCR businesses. Stand out in a crowded market with fast, conversion-focused sites. Get a free quote.",
  keywords: "website design company Delhi, web development Delhi NCR, SEO Delhi, web designers in Delhi, digital marketing agency Delhi NCR",
  alternates: {
    canonical: "/locations/delhi",
  },
  openGraph: {
    title: "Website Design Company in Delhi NCR | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Delhi NCR businesses. Stand out in a crowded market with fast, conversion-focused sites. Get a free quote.",
    url: "https://bizysite.in/locations/delhi",
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
        "@id": "https://bizysite.in/locations/delhi/#localbusiness",
        "name": "Bizy Site Delhi NCR Service Area",
        "url": "https://bizysite.in/locations/delhi",
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
        "@id": "https://bizysite.in/locations/delhi/#service",
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Website design, SEO and digital marketing for Delhi NCR businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Delhi NCR"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/locations/delhi/#faq",
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
        "@id": "https://bizysite.in/locations/delhi/#breadcrumb",
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
            "name": "Delhi NCR",
            "item": "https://bizysite.in/locations/delhi"
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

        {/* Delhi Skyline Background Silhouette */}
        <div className="hero-skyline-silhouette" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", zIndex: 1, pointerEvents: "none", opacity: 0.15 }}>
          <svg viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            {/* Defs for gradients & clip-arts */}
            <defs>
              <linearGradient id="sky-glow-delhi" x1="720" y1="250" x2="720" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--teal)" stopOpacity="0.15" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="qutub-grad" x1="280" y1="220" x2="280" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.95" />
                <stop offset="0.75" stopColor="#1B3B6F" stopOpacity="0.85" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="indiagate-grad" x1="495" y1="220" x2="495" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.95" />
                <stop offset="0.7" stopColor="#1B3B6F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="lotus-grad" x1="740" y1="210" x2="740" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.9" />
                <stop offset="0.8" stopColor="#2BBFBF" stopOpacity="0.65" />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Ambient Background Sky Glow */}
            <rect width="1440" height="250" fill="url(#sky-glow-delhi)" />

            {/* Background High-rises (Noida/Gurugram) */}
            <g fill="rgba(43, 191, 191, 0.04)">
              <rect x="60" y="40" width="55" height="180" />
              <rect x="125" y="70" width="45" height="150" />
              <rect x="1100" y="50" width="70" height="170" />
              <rect x="1180" y="30" width="60" height="190" />
            </g>

            {/* Qutub Minar (Detailed Silhouette Left Center) */}
            <g opacity="0.95">
              {/* Tapering Minar Body */}
              <polygon points="260,220 270,30 290,30 300,220" fill="url(#qutub-grad)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Balconies divisions with white outline/glow */}
              <rect x="274" y="65" width="12" height="5" fill="#0D1F3C" stroke="#FFFFFF" strokeWidth="1" />
              <rect x="271" y="105" width="18" height="5" fill="#0D1F3C" stroke="#FFFFFF" strokeWidth="1" />
              <rect x="268" y="145" width="24" height="6" fill="#0D1F3C" stroke="#FFFFFF" strokeWidth="1" />
              <rect x="264" y="185" width="32" height="6" fill="#0D1F3C" stroke="#FFFFFF" strokeWidth="1" />
              
              {/* Fluting vertical detailed lines */}
              <line x1="277" y1="30" x2="277" y2="220" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              <line x1="283" y1="30" x2="283" y2="220" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              <line x1="270" y1="30" x2="270" y2="220" stroke="#2BBFBF" strokeWidth="1" opacity="0.5" />
              <line x1="290" y1="30" x2="290" y2="220" stroke="#2BBFBF" strokeWidth="1" opacity="0.5" />
              
              {/* Dome tip structure at the top */}
              <polygon points="274,30 280,10 286,30" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="280" y1="10" x2="280" y2="2" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="280" cy="1" r="1.5" fill="#FFFFFF" />
            </g>

            {/* India Gate (Detailed Center Archway) */}
            <g opacity="0.95">
              {/* Main arch block structure */}
              <rect x="420" y="110" width="150" height="110" rx="2" fill="url(#indiagate-grad)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Large Central Arched Vault */}
              <rect x="470" y="135" width="50" height="85" rx="25" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1.5" />
              
              {/* Multi-tiered decorative horizontal bands */}
              <rect x="410" y="102" width="170" height="8" fill="var(--teal)" rx="1" stroke="#FFFFFF" strokeWidth="0.5" />
              <rect x="430" y="90" width="130" height="12" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="440" y="80" width="110" height="10" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="0.5" />
              <rect x="465" y="70" width="60" height="10" fill="#0D1F3C" rx="4" stroke="#2BBFBF" strokeWidth="1" />
              
              {/* Side moldings/columns detail lines */}
              <rect x="442" y="110" width="10" height="110" fill="#2BBFBF" opacity="0.3" />
              <rect x="538" y="110" width="10" height="110" fill="#2BBFBF" opacity="0.3" />
            </g>

            {/* Lotus Temple (Detailed Silhouette Right Center) */}
            <g opacity="0.95">
              {/* Base Platform */}
              <rect x="630" y="210" width="220" height="10" fill="#0D1F3C" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="610" y="218" width="260" height="6" fill="#1B3B6F" rx="1" />
              
              {/* Outer Petals (Highlighted curves) */}
              <path d="M 640,210 Q 670,120 740,210" fill="none" stroke="#2BBFBF" strokeWidth="2" />
              <path d="M 840,210 Q 810,120 740,210" fill="none" stroke="#2BBFBF" strokeWidth="2" />
              
              {/* Inner Petals (Detailed Gradients) */}
              <path d="M 670,210 Q 700,90 740,210" fill="url(#lotus-grad)" stroke="#FFFFFF" strokeWidth="1" />
              <path d="M 810,210 Q 780,90 740,210" fill="url(#lotus-grad)" stroke="#FFFFFF" strokeWidth="1" />
              
              {/* Center Tallest Petals (Bud) */}
              <path d="M 700,210 Q 740,60 740,210 Z" fill="url(#lotus-grad)" stroke="#FFFFFF" strokeWidth="1.5" />
              <path d="M 780,210 Q 740,60 740,210 Z" fill="url(#lotus-grad)" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>

            {/* Red Fort Dome (Silhouette Right detailed) */}
            <g opacity="0.9">
              <rect x="940" y="150" width="120" height="70" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              {/* Sandstone battlement crown */}
              <rect x="935" y="142" width="130" height="8" fill="var(--teal)" rx="1" stroke="#FFFFFF" strokeWidth="0.5" />
              <line x1="935" y1="146" x2="1065" y2="146" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
              
              {/* Small Chhatri Dome Pavilions */}
              <rect x="955" y="125" width="20" height="18" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 952,125 Q 965,105 978,125 Z" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <rect x="1025" y="125" width="20" height="18" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 1022,125 Q 1035,105 1048,125 Z" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
            </g>

            {/* Horizon line */}
            <line x1="0" y1="219" x2="1440" y2="219" stroke="#2BBFBF" strokeWidth="2" opacity="0.5" />
          </svg>
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
