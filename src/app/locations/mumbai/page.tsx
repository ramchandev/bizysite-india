import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design Company in Mumbai | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Mumbai businesses. Fast, conversion-focused sites that keep pace with the city. Get a free quote today.",
  keywords: "website design company Mumbai, web development Mumbai, SEO Mumbai, web designers in Mumbai, digital marketing agency Mumbai",
  alternates: {
    canonical: "/locations/mumbai",
  },
  openGraph: {
    title: "Website Design Company in Mumbai | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Mumbai businesses. Fast, conversion-focused sites that keep pace with the city. Get a free quote today.",
    url: "https://bizysite.in/locations/mumbai",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Mumbai | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Mumbai businesses. Fast, conversion-focused sites that keep pace with the city. Get a free quote today.",
  },
};

export default function MumbaiLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/locations/mumbai/#localbusiness",
        "name": "Bizy Site Mumbai Service Area",
        "url": "https://bizysite.in/locations/mumbai",
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Mumbai"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bizysite.in/locations/mumbai/#service",
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Website design, SEO and digital marketing for Mumbai businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Mumbai"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/locations/mumbai/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business, pages and features. A simple service site costs far less than a custom e-commerce or booking platform. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet clients in person in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle most work smoothly online, which suits Mumbai's fast pace and saves you travel time across the city. Calls and discussions can be arranged as needed. Location is never a barrier."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make my business stand out in competitive Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With a fast, clear, trustworthy website and strong local search visibility. We focus on making you the obvious choice in those first few seconds, then guiding visitors to enquire."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Mumbai business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Mumbai's suburbs and on Google Maps, even in competitive areas."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses and startups in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. From neighbourhood shops and clinics to startups and larger firms, we scope every project to your goals and budget."
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
        "@id": "https://bizysite.in/locations/mumbai/#breadcrumb",
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
            "name": "Mumbai",
            "item": "https://bizysite.in/locations/mumbai"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Mumbai</span>
          <h1 className="service-hero-title">Websites for Mumbai businesses that move as fast as the city.</h1>
          <p className="service-hero-sub">
            In a city where everyone is busy and competition is fierce, your website has seconds to make an impression. We build fast, sharp, conversion-focused sites that help Mumbai businesses stand out and win customers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Mumbai business. We reply the same day.</p>
            </div>
          </div>
        </div>

        {/* Mumbai Skyline Background Silhouette */}
        <div className="hero-skyline-silhouette" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", zIndex: 1, pointerEvents: "none", opacity: 0.15 }}>
          <svg viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            {/* Defs for gradients & clip-arts */}
            <defs>
              <linearGradient id="sky-glow-mumbai" x1="720" y1="250" x2="720" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--teal)" stopOpacity="0.15" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="sealink-grad" x1="140" y1="70" x2="140" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gateway-grad" x1="500" y1="210" x2="500" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.95" />
                <stop offset="0.8" stopColor="#1B3B6F" stopOpacity="0.8" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="taj-dome-grad" x1="740" y1="40" x2="740" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2BBFBF" stopOpacity="0.95" />
                <stop offset="1" stopColor="#0D1F3C" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Ambient Background Sky Glow */}
            <rect width="1440" height="250" fill="url(#sky-glow-mumbai)" />

            {/* Background Skyscrapers */}
            <g fill="rgba(43, 191, 191, 0.04)">
              <rect x="80" y="40" width="50" height="180" />
              <rect x="140" y="60" width="45" height="160" />
              <rect x="1120" y="50" width="60" height="170" />
              <rect x="1190" y="30" width="55" height="190" />
            </g>

            {/* Bandra-Worli Sea Link (Silhouette on left) */}
            <g opacity="0.9">
              {/* Bridge deck line */}
              <line x1="0" y1="210" x2="350" y2="210" stroke="#2BBFBF" strokeWidth="3" />
              <line x1="0" y1="214" x2="350" y2="214" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              
              {/* Cable stay tower 1 */}
              <polygon points="120,210 135,70 145,70 160,210 152,210 140,90 128,210" fill="url(#sealink-grad)" stroke="#2BBFBF" strokeWidth="1" />
              
              {/* Stay cables (Fine White Cables) */}
              <line x1="140" y1="90" x2="60" y2="210" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
              <line x1="140" y1="110" x2="80" y2="210" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
              <line x1="140" y1="130" x2="100" y2="210" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
              <line x1="140" y1="90" x2="220" y2="210" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
              <line x1="140" y1="110" x2="200" y2="210" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
              <line x1="140" y1="130" x2="180" y2="210" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
            </g>

            {/* Gateway of India (Silhouette in Center) */}
            <g opacity="0.95">
              {/* Gateway base and arches */}
              <rect x="420" y="120" width="160" height="90" rx="2" fill="url(#gateway-grad)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Main Central Arch */}
              <rect x="475" y="140" width="50" height="70" rx="25" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1.5" />
              {/* Side arches */}
              <rect x="440" y="160" width="20" height="50" rx="10" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="540" y="160" width="20" height="50" rx="10" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              
              {/* Top parapet decoration and corner domes */}
              <rect x="415" y="112" width="170" height="8" rx="1" fill="#2BBFBF" />
              <rect x="425" y="90" width="15" height="22" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="420,90 432,75 445,90" fill="#2BBFBF" />
              <rect x="560" y="90" width="15" height="22" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="555,90 567,75 580,90" fill="#2BBFBF" />
              
              {/* Detailed small spires */}
              <circle cx="432" cy="74" r="2.5" fill="#FFFFFF" />
              <circle cx="567" cy="74" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Taj Mahal Palace Hotel (Detailed Clipart Style Right Center) */}
            <g opacity="0.95">
              {/* Main building block */}
              <rect x="630" y="130" width="220" height="80" fill="url(#gateway-grad)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Side wings towers */}
              <rect x="640" y="100" width="40" height="30" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="635,100 660,80 685,100" fill="#2BBFBF" />
              <rect x="800" y="100" width="40" height="30" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="795,100 820,80 845,100" fill="#2BBFBF" />
              
              {/* Central grand red dome tower */}
              <rect x="715" y="95" width="50" height="35" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 710,95 Q 740,40 770,95 Z" fill="url(#taj-dome-grad)" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Dome tip spire */}
              <line x1="740" y1="58" x2="740" y2="40" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="740" cy="38" r="2.5" fill="#FFFFFF" />
              
              {/* Rows of arched balconies (White / Teal highlighted windows) */}
              <g fill="#FFFFFF" opacity="0.7">
                <rect x="695" y="145" width="8" height="14" rx="4" />
                <rect x="715" y="145" width="8" height="14" rx="4" />
                <rect x="735" y="145" width="8" height="14" rx="4" fill="var(--teal)" />
                <rect x="755" y="145" width="8" height="14" rx="4" fill="var(--teal)" />
                <rect x="775" y="145" width="8" height="14" rx="4" />
                
                <rect x="695" y="170" width="8" height="14" rx="4" fill="var(--teal)" />
                <rect x="715" y="170" width="8" height="14" rx="4" fill="var(--teal)" />
                <rect x="735" y="170" width="8" height="14" rx="4" />
                <rect x="755" y="170" width="8" height="14" rx="4" />
                <rect x="775" y="170" width="8" height="14" rx="4" fill="var(--teal)" />
              </g>
            </g>

            {/* CSMT Station spire (Right side detailed) */}
            <g opacity="0.9">
              <rect x="910" y="80" width="40" height="130" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="905,80 930,30 955,80" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="930" y1="30" x2="930" y2="10" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="930" cy="8" r="2.5" fill="#FFFFFF" />
              {/* Gothic spires */}
              <rect x="898" y="130" width="8" height="80" fill="#0D1F3C" />
              <polygon points="896,130 902,108 908,130" fill="#2BBFBF" />
              <rect x="954" y="130" width="8" height="80" fill="#0D1F3C" />
              <polygon points="952,130 958,108 964,130" fill="#2BBFBF" />
            </g>

            {/* Horizon line */}
            <line x1="0" y1="209" x2="1440" y2="209" stroke="#2BBFBF" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — Understanding Mumbai Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">Mumbai is fast, crowded and competitive. Your website must earn attention instantly.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Mumbai is India's financial and commercial capital, and its business landscape is as varied as its neighbourhoods: finance and corporates in BKC and Nariman Point, startups and media in Andheri and Lower Parel, retail and services spread across the suburbs, and countless small businesses serving a huge, always-moving population.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Here, customers are impatient and options are endless. A slow or unclear website loses them in seconds. Your site has to load fast, say what you do instantly, and make the next step effortless, whether that is a call, a booking or an order.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Mumbai.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Fast, polished sites that make an instant impression.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>CRO</strong> — Turn Mumbai's impatient visitors into enquiries before they bounce.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Win "near me" searches across Mumbai's suburbs.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO</strong> — Get found in a crowded, competitive market.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach ready-to-buy Mumbai customers fast.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Social Media Management</strong> — Stay visible and trusted where Mumbai scrolls.
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
            <h2 className="section-title">Best-in-class work, built for a fast city.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We build sites that load fast and convert quickly, essential in Mumbai.",
              "We understand how to stand out in a crowded, competitive market.",
              "We back every project with 500+ websites of experience.",
              "We speak in outcomes: more calls, more bookings, more sales.",
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
                q: "How much does a website cost in Mumbai?",
                a: "It depends on your business, pages and features. A simple service site costs far less than a custom e-commerce or booking platform. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "Do you meet clients in person in Mumbai?",
                a: "We handle most work smoothly online, which suits Mumbai's fast pace and saves you travel time across the city. Calls and discussions can be arranged as needed. Location is never a barrier."
              },
              {
                q: "How do I make my business stand out in competitive Mumbai?",
                a: "With a fast, clear, trustworthy website and strong local search visibility. We focus on making you the obvious choice in those first few seconds, then guiding visitors to enquire."
              },
              {
                q: "Can you help my Mumbai business rank on Google?",
                a: "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Mumbai's suburbs and on Google Maps, even in competitive areas."
              },
              {
                q: "Do you work with small businesses and startups in Mumbai?",
                a: "Yes. From neighbourhood shops and clinics to startups and larger firms, we scope every project to your goals and budget."
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
            Get more customers from your Mumbai website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Maximize your traffic conversion and stand out in the competitive Mumbai ecosystem.
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
