import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design Company in Bangalore | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Bengaluru businesses, from startups to local services. Modern, conversion-focused sites. Get a free quote.",
  keywords: "website design company Bangalore, web development Bengaluru, SEO Bangalore, web designers in Bangalore, digital marketing agency Bangalore",
  alternates: {
    canonical: "/locations/bangalore",
  },
  openGraph: {
    title: "Website Design Company in Bangalore | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Bengaluru businesses, from startups to local services. Modern, conversion-focused sites. Get a free quote.",
    url: "https://bizysite.in/locations/bangalore",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Bangalore | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Bengaluru businesses, from startups to local services. Modern, conversion-focused sites. Get a free quote.",
  },
};

export default function BangaloreLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/locations/bangalore/#localbusiness",
        "name": "Bizy Site Bangalore Service Area",
        "url": "https://bizysite.in/locations/bangalore",
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bengaluru"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bizysite.in/locations/bangalore/#service",
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Website design, SEO and digital marketing for Bengaluru businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bengaluru"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/locations/bangalore/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business, pages and features. A simple service site costs far less than a custom product or e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with startups in Bengaluru?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We understand startup needs, from a fast, credible launch site to a conversion-focused product site, and we build to grow with you."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet clients in person in Bengaluru?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle most work smoothly online, which is convenient given Bengaluru traffic. Calls and discussions can be arranged as needed. Location is never a barrier."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Bengaluru business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Bengaluru localities and on Google Maps, even in competitive areas."
            }
          },
          {
            "@type": "Question",
            "name": "My customers expect a slick website. Can you match that?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build modern, fast, polished websites that meet the high standard Bengaluru customers expect, while staying focused on bringing you enquiries."
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
        "@id": "https://bizysite.in/locations/bangalore/#breadcrumb",
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
            "name": "Bangalore",
            "item": "https://bizysite.in/locations/bangalore"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Bangalore</span>
          <h1 className="service-hero-title">Websites for Bengaluru businesses, from startups to your local shop.</h1>
          <p className="service-hero-sub">
            Bengaluru customers are digital-first and expect a polished online experience. Whether you are a startup, a growing brand, or a trusted local business, we build modern, conversion-focused websites that meet that expectation and win customers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Bengaluru business. We reply the same day.</p>
            </div>
          </div>
        </div>

        {/* Bangalore Skyline Background Silhouette */}
        {/* Bangalore Skyline Background Silhouette */}
        <div className="hero-skyline-silhouette" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", zIndex: 1, pointerEvents: "none", opacity: 0.15 }}>
          <svg viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            {/* Defs for gradients & clip-arts */}
            <defs>
              <linearGradient id="sky-glow-blr" x1="720" y1="250" x2="720" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--teal)" stopOpacity="0.15" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="office-grad" x1="100" y1="220" x2="100" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="var(--navy)" stopOpacity="0.5" />
                <stop offset="1" stopColor="var(--teal)" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="soudha-grad" x1="340" y1="220" x2="340" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.95" />
                <stop offset="0.7" stopColor="#1B3B6F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="palace-grad" x1="600" y1="220" x2="600" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0D1F3C" stopOpacity="0.9" />
                <stop offset="1" stopColor="#2BBFBF" stopOpacity="0.75" />
              </linearGradient>
            </defs>

            {/* Ambient Background Sky Glow */}
            <rect width="1440" height="250" fill="url(#sky-glow-blr)" />

            {/* Background Tech office skyscrapers (ORR / Electronic City) */}
            <g opacity="0.25">
              <rect x="70" y="50" width="80" height="170" fill="url(#office-grad)" rx="2" />
              <rect x="160" y="80" width="60" height="140" fill="url(#office-grad)" rx="2" />
              <rect x="1100" y="40" width="90" height="180" fill="url(#office-grad)" rx="2" />
              <rect x="1200" y="70" width="70" height="150" fill="url(#office-grad)" rx="2" />
            </g>

            {/* Vidhana Soudha (Detailed Silhouette in Center Left) */}
            <g opacity="0.95">
              {/* Grand pillars base and steps */}
              <rect x="240" y="195" width="200" height="25" fill="url(#soudha-grad)" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="220" y="215" width="240" height="10" fill="#0D1F3C" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="220" y1="218" x2="460" y2="218" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              
              {/* Columns grid */}
              <rect x="250" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="270" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="290" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="310" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="330" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="350" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="370" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="390" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="410" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              <rect x="430" y="150" width="10" height="48" fill="#2BBFBF" rx="1" />
              
              {/* Main roof deck */}
              <rect x="235" y="142" width="210" height="10" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              
              {/* Central Dome Tower */}
              <rect x="315" y="115" width="50" height="30" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 310,115 Q 340,65 370,115 Z" fill="url(#soudha-grad)" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Lion capital emblem spire */}
              <line x1="340" y1="75" x2="340" y2="52" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="340" cy="50" r="3" fill="#FFFFFF" />
              
              {/* Side dome structures */}
              <rect x="240" y="125" width="20" height="20" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 238,125 Q 250,105 262,125 Z" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <rect x="420" y="125" width="20" height="20" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <path d="M 418,125 Q 430,105 442,125 Z" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
            </g>

            {/* Bangalore Palace (Detailed Tudor Castle right center) */}
            <g opacity="0.95">
              {/* Fortress block base */}
              <rect x="520" y="140" width="170" height="80" fill="url(#palace-grad)" stroke="#2BBFBF" strokeWidth="1" />
              {/* Crenellated top battlements */}
              <rect x="515" y="132" width="180" height="8" fill="#0D1F3C" rx="1" stroke="#2BBFBF" strokeWidth="1" />
              <line x1="515" y1="136" x2="695" y2="136" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
              
              {/* Castle towers */}
              <rect x="530" y="90" width="30" height="50" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="525,90 545,70 565,90" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <rect x="640" y="90" width="30" height="50" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="635,90 655,70 675,90" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              
              {/* Taller central octagonal watchtower */}
              <polygon points="585,140 590,60 610,60 615,140" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1.5" />
              <line x1="590" y1="60" x2="610" y2="60" stroke="#FFFFFF" strokeWidth="2" />
              {/* Arch window slits */}
              <rect x="596" y="80" width="8" height="18" rx="4" fill="#FFFFFF" opacity="0.8" />
              <rect x="596" y="105" width="8" height="18" rx="4" fill="var(--teal)" />
              
              {/* Palace arched entryways */}
              <g fill="#FFFFFF" opacity="0.6">
                <rect x="550" y="165" width="14" height="22" rx="7" />
                <rect x="635" y="165" width="14" height="22" rx="7" />
              </g>
            </g>

            {/* ISCKON Gopuram (Silhouette far right detailed) */}
            <g opacity="0.9">
              <rect x="850" y="180" width="80" height="40" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="860" y="140" width="60" height="40" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <rect x="870" y="100" width="40" height="40" fill="#0D1F3C" stroke="#2BBFBF" strokeWidth="1" />
              <polygon points="865,100 890,60 915,100" fill="var(--teal)" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="890" y1="60" x2="890" y2="40" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="890" cy="38" r="3" fill="#FFFFFF" />
              
              {/* Stepped horizontal highlights */}
              <line x1="860" y1="140" x2="920" y2="140" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              <line x1="870" y1="100" x2="910" y2="100" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
            </g>

            {/* Horizon line */}
            <line x1="0" y1="219" x2="1440" y2="219" stroke="#2BBFBF" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — Understanding Bengaluru Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">Bengaluru expects the best online. So your website has to deliver it.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Bengaluru is India's technology capital, and that shapes how its customers behave. From the startup and tech world around Koramangala, Indiranagar, HSR Layout and Whitefield, to the countless clinics, restaurants, salons and service businesses across the city, one thing is common: customers here are used to slick apps and websites, and they judge you against that standard.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            A dated or clunky website stands out for the wrong reasons in Bengaluru. Your site needs to feel modern, load fast, and make buying or booking effortless, because your customers expect nothing less.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Bengaluru.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Modern, polished sites that meet Bengaluru's high standard.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>CRO</strong> — Turn digital-savvy visitors into enquiries and orders.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Win "near me" searches across Bengaluru localities.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO</strong> — Get found in a competitive, digital-first market.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach ready-to-buy Bengaluru customers fast.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Social Media Management</strong> — Stay active and trusted where Bengaluru scrolls.
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
            <h2 className="section-title">Best-in-class work, for a demanding market.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We build modern sites that meet the expectations of digital-first customers.",
              "We understand both the startup world and local service businesses.",
              "We back every project with 500+ websites of experience.",
              "We speak in outcomes: more enquiries, more bookings, more sales.",
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
                q: "How much does a website cost in Bangalore?",
                a: "It depends on your business, pages and features. A simple service site costs far less than a custom product or e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "Do you work with startups in Bengaluru?",
                a: "Yes. We understand startup needs, from a fast, credible launch site to a conversion-focused product site, and we build to grow with you."
              },
              {
                q: "Do you meet clients in person in Bengaluru?",
                a: "We handle most work smoothly online, which is convenient given Bengaluru traffic. Calls and discussions can be arranged as needed. Location is never a barrier."
              },
              {
                q: "Can you help my Bengaluru business rank on Google?",
                a: "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Bengaluru localities and on Google Maps, even in competitive areas."
              },
              {
                q: "My customers expect a slick website. Can you match that?",
                a: "Yes. We build modern, fast, polished websites that meet the high standard Bengaluru customers expect, while staying focused on bringing you enquiries."
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
            Get more customers from your Bengaluru website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Work with an agency that matches the digital-first standards of your customer base.
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
