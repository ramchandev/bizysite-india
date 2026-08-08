import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design Company in Chennai | SEO & Digital Marketing | Bizy Site",
  description: "Website design, SEO and digital marketing for Chennai businesses. Fast, conversion-focused sites that bring calls and customers. Get a free quote today.",
  keywords: "website design company Chennai, web development Chennai, SEO Chennai, web designers in Chennai, digital marketing agency Chennai",
  alternates: {
    canonical: "/locations/chennai",
  },
  openGraph: {
    title: "Website Design Company in Chennai | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Chennai businesses. Fast, conversion-focused sites that bring calls and customers. Get a free quote today.",
    url: "https://bizysite.in/locations/chennai",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Chennai | SEO & Digital Marketing | Bizy Site",
    description: "Website design, SEO and digital marketing for Chennai businesses. Fast, conversion-focused sites that bring calls and customers. Get a free quote today.",
  },
};

export default function ChennaiLocation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/locations/chennai/#localbusiness",
        "name": "Bizy Site Chennai Service Area",
        "url": "https://bizysite.in/locations/chennai",
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Chennai"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bizysite.in/locations/chennai/#service",
        "name": "Website Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Website design, SEO and digital marketing for Chennai businesses.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Chennai"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/locations/chennai/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Chennai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your business, the number of pages and features you need. A simple service-business site costs far less than a custom e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet clients in person in Chennai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most of our work is handled smoothly online, which keeps things fast and convenient. For Chennai clients, we can arrange calls or discussions as needed. Location is never a barrier to great work."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my Chennai business rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. With local SEO and your Google Business Profile, we help you show up for searches across Chennai localities and on Google Maps, so nearby customers find you first."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses in Chennai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with businesses of all sizes across Chennai, from single clinics and shops to larger firms and manufacturers. We scope every project to your goals and budget."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website work well for customers who search in Tamil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can build with Tamil and English in mind, and structure your site and search presence for how Chennai customers actually search, so you connect with the local audience."
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
        "@id": "https://bizysite.in/locations/chennai/#breadcrumb",
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
            "name": "Chennai",
            "item": "https://bizysite.in/locations/chennai"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Chennai</span>
          <h1 className="service-hero-title">Websites for Chennai businesses that bring real customers.</h1>
          <p className="service-hero-sub">
            From T. Nagar retailers to OMR tech firms, from Anna Nagar clinics to Guindy manufacturers, we build fast, conversion-focused websites that help Chennai businesses get found and get customers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your Chennai business. We reply the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Understanding Chennai Businesses */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Market Context</span>
          <h2 className="section-title">Chennai is diverse, and your website should reflect that.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Chennai is many business worlds in one. There is the auto and manufacturing belt around Guindy, Ambattur and Sriperumbudur. The IT corridor along OMR and Taramani. The busy retail of T. Nagar and Pondy Bazaar. The clinics and professional firms across Anna Nagar, Adyar and Velachery. Each competes for a customer who researches online first, often in a mix of Tamil and English.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Whether your customers are local families searching "near me" or serious B2B buyers comparing suppliers, your website has to earn their trust quickly. That is exactly what we build for.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Everything you need to win customers in Chennai.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Website Design & Development</strong> — Fast, mobile-first sites built to convert Chennai visitors.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Local SEO & Google Business Profile</strong> — Rank for "near me" searches across Chennai localities and on Google Maps.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>SEO</strong> — Get found for what your Chennai customers actually search.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>CRO</strong> — Turn more of your visitors into calls and enquiries.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Meta & Google Ads</strong> — Reach ready-to-buy Chennai customers fast.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Social Media Management</strong> — Stay active and trusted where Chennai scrolls.
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
            <h2 className="section-title">Best-in-class work, with local understanding.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "We build with 500+ websites of experience behind every project.",
              "We understand how Chennai customers search and decide.",
              "We speak in outcomes: more calls, more enquiries, more sales.",
              "Everything is handled smoothly online, wherever you are in the city.",
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
                q: "How much does a website cost in Chennai?",
                a: "It depends on your business, the number of pages and features you need. A simple service-business site costs far less than a custom e-commerce build. Share your requirement and we will send a clear, no-obligation quote."
              },
              {
                q: "Do you meet clients in person in Chennai?",
                a: "Most of our work is handled smoothly online, which keeps things fast and convenient. For Chennai clients, we can arrange calls or discussions as needed. Location is never a barrier to great work."
              },
              {
                q: "Can you help my Chennai business rank on Google?",
                a: "Yes. With local SEO and your Google Business Profile, we help you show up for searches across Chennai localities and on Google Maps, so nearby customers find you first."
              },
              {
                q: "Do you work with small businesses in Chennai?",
                a: "Yes. We work with businesses of all sizes across Chennai, from single clinics and shops to larger firms and manufacturers. We scope every project to your goals and budget."
              },
              {
                q: "Will my website work well for customers who search in Tamil?",
                a: "Yes. We can build with Tamil and English in mind, and structure your site and search presence for how Chennai customers actually search, so you connect with the local audience."
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
            Get more customers from your Chennai website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Launch a site optimized for Chennai search context and local user behaviors.
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
