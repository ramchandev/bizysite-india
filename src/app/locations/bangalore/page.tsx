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
      <section className="service-hero">
        <div className="container service-hero-content">
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
