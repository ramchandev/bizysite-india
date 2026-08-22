import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Website Design Company in Hyderabad | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Hyderabad businesses ready to grow online. Fast, conversion-focused sites. Get a free quote today.",
  keywords: "website design company Hyderabad, web development Hyderabad, SEO Hyderabad, web designers in Hyderabad, digital marketing agency Hyderabad",
  alternates: {
    canonical: "/locations/hyderabad",
  },
  openGraph: {
    title: "Website Design Company in Hyderabad | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Hyderabad businesses ready to grow online. Fast, conversion-focused sites. Get a free quote today.",
    url: `${siteUrl}/locations/hyderabad`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Hyderabad | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Hyderabad businesses ready to grow online. Fast, conversion-focused sites. Get a free quote today.",
  },
};

export default function HyderabadLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/locations/hyderabad/#localbusiness`,
        "name": "Bizy Site Hyderabad Service Area",
        "url": `${siteUrl}/locations/hyderabad`,
        "parentOrganization": {
          "@id": `${siteUrl}/#organization`
        },
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Hyderabad"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/locations/hyderabad/#service`,
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Website design, SEO and digital marketing for Hyderabad businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Hyderabad"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/locations/hyderabad/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Hyderabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business, pages and features. A simple service site costs far less than a custom e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with both tech firms and local businesses in Hyderabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. From HITEC City tech and startup firms to local clinics, shops and services, we scope every project to your audience, goals and budget."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Hyderabad business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Hyderabad localities and on Google Maps."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet clients in person in Hyderabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle most work smoothly online for speed and convenience. Calls and discussions can be arranged as needed. Location is never a barrier."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses in Hyderabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with businesses of all sizes across Hyderabad, scoping each project to your goals and budget."
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
        "@id": `${siteUrl}/locations/hyderabad/#breadcrumb`,
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
            "name": "Hyderabad",
            "item": `${siteUrl}/locations/hyderabad`
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/hyderabad_realistic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Hyderabad</span>
          <h1 className="service-hero-title">Websites for Hyderabad businesses ready to grow online.</h1>
          <p className="service-hero-sub">
            From HITEC City tech firms to the old city's thriving trades, Hyderabad is growing fast. We build conversion-focused websites that help Hyderabad businesses get found, build trust, and win more customers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Hyderabad business. We reply the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Understanding Hyderabad Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">Hyderabad blends old trade and new tech. Your website should fit your world.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Hyderabad is a city of two energies working together: the booming IT and pharma corridor around HITEC City, Gachibowli and Madhapur, and the deep-rooted commercial and trading culture of the older city and its many established businesses. Around both, a growing population fuels clinics, restaurants, retail, coaching and services across areas like Kukatpally, Banjara Hills and Secunderabad.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Hyderabad customers increasingly research online before they buy or visit. Whether you serve tech professionals or local families, your website needs to build trust quickly and make the next step easy.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Hyderabad.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Fast, conversion-focused sites for any Hyderabad business.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Win "near me" searches across Hyderabad localities.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO</strong> — Get found for what your Hyderabad customers search.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>CRO</strong> — Turn more visitors into calls and enquiries.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach ready-to-buy Hyderabad customers fast.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Social Media Management</strong> — Stay active and trusted where Hyderabad scrolls.
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
            <h2 className="section-title">Why Hyderabad Businesses Choose Bizy Site</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We build for both Hyderabad's tech world and its established local businesses.",
              "We understand how Hyderabad customers research and decide.",
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
                q: "How much does a website cost in Hyderabad?",
                a: "It depends on your business, pages and features. A simple service site costs far less than a custom e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "Do you work with both tech firms and local businesses in Hyderabad?",
                a: "Yes. From HITEC City tech and startup firms to local clinics, shops and services, we scope every project to your audience, goals and budget."
              },
              {
                q: "Can you help my Hyderabad business rank on Google?",
                a: "Yes. Through local SEO and your Google Business Profile, we help you rank for searches across Hyderabad localities and on Google Maps."
              },
              {
                q: "Do you meet clients in person in Hyderabad?",
                a: "We handle most work smoothly online for speed and convenience. Calls and discussions can be arranged as needed. Location is never a barrier."
              },
              {
                q: "Do you work with small businesses in Hyderabad?",
                a: "Yes. We work with businesses of all sizes across Hyderabad, scoping each project to your goals and budget."
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
            Get more customers from your Hyderabad website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Launch a site that resonates with tech professionals and traditional traders in Hyderabad.
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
