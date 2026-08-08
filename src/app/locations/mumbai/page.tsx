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
      <section className="service-hero">
        <div className="container service-hero-content">
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
