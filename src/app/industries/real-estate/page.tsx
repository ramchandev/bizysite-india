import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Website Design for Real Estate & Builders in India | Bizy Site",
  description: "Websites for builders, developers and real estate firms that turn projects into serious enquiries. Showcase properties, build trust, capture leads. Get a free quote.",
  keywords: "real estate website design India, builder website, property website design, digital marketing for real estate India",
  alternates: {
    canonical: "/industries/real-estate",
  },
  openGraph: {
    title: "Website Design for Real Estate & Builders in India | Bizy Site",
    description: "Websites for builders, developers and real estate firms that turn projects into serious enquiries. Showcase properties, build trust, capture leads. Get a free quote.",
    url: `${siteUrl}/industries/real-estate`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Real Estate & Builders in India | Bizy Site",
    description: "Websites for builders, developers and real estate firms that turn projects into serious enquiries. Showcase properties, build trust, capture leads. Get a free quote.",
  },
};

export default function RealEstateBuilders() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/industries/real-estate/#service`,
        "name": "Website Design for Real Estate & Builders",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Websites for builders, developers and real estate firms that turn projects into serious enquiries.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/industries/real-estate/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a real estate or builder website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on how many projects you showcase and features like property filters, galleries and enquiry systems. A single-project site costs less than a large developer portfolio. Share your needs for a clear quote."
            }
          },
          {
            "@type": "Question",
            "name": "Can you showcase multiple projects with individual pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can build dedicated pages for each project with its own photos, details, location and enquiry form, so buyers can go deep on the property that interests them."
            }
          },
          {
            "@type": "Question",
            "name": "Can buyers enquire about a specific property directly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We add project-specific enquiry forms and WhatsApp options, so you know exactly which property a lead is interested in, making follow-up far easier."
            }
          },
          {
            "@type": "Question",
            "name": "Will my projects rank for searches like \"flats in [area]\"?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That is what local SEO does. We optimise your site and Google Business Profile to appear for location-based property searches in your city and localities."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add RERA and legal details properly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We present RERA registration, approvals and legal information clearly, since these strongly influence buyer trust and are important for credibility."
            }
          },
          {
            "@type": "Question",
            "name": "I sell plots and resale properties, not just new projects. Can you help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Whether it is new projects, plots, resale or rentals, we structure the site around how your buyers search and decide."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/industries/real-estate/#breadcrumb`,
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
            "name": "Industries",
            "item": `${siteUrl}/industries`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Real Estate & Builders",
            "item": `${siteUrl}/industries/real-estate`
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_realestate.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Real Estate & Builders</span>
          <h1 className="service-hero-title">Turn your projects into serious buyer enquiries.</h1>
          <p className="service-hero-sub">
            Property buyers research online long before they visit. We build real estate and builder websites that showcase your projects beautifully, build trust, and capture serious enquiries, not just window shoppers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">High Stakes Decision</span>
          <h2 className="section-title">A property is a huge decision, and buyers judge you online first.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            Nobody buys a flat or hires a builder on impulse. Buyers spend weeks researching, comparing projects, checking credibility, and quietly ruling out anyone whose website looks unprofessional or outdated. If your projects are not shown well online, you lose serious buyers before they ever call.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            The problem with most builder websites: blurry photos, no clear project details, no trust signals, and no easy way to enquire about a specific property. Buyers leave, and you never know they were interested.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting Real Estate Website Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to turn browsers into site visits.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Stunning project galleries</strong> — High-quality photos and videos that make properties desirable.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear project details</strong> — Location, configurations, amenities, price range and status, easy to find.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Trust and credibility signals</strong> — RERA details, completed projects, awards and testimonials.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Easy, specific enquiry forms</strong> — So a buyer can ask about a particular project in one tap.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Location and connectivity info</strong> — Maps and nearby landmarks that buyers care about.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Fast, mobile-first design</strong> — Since most buyers browse properties on their phones.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Services That Matter Most */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Focus</span>
            <h2 className="section-title">Where we focus for builders and developers.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "Website Design", desc: "A premium, trust-building showcase for your projects.", href: "/services/web-design" },
              { name: "SEO & Local SEO", desc: "Rank for \"flats in [area]\" and \"builders in [city]\".", href: "/services/google-business-profile" },
              { name: "Meta & Google Ads", desc: "Reach active property seekers fast.", href: "/services/ads" },
              { name: "CRO", desc: "Turn more visitors into genuine site-visit bookings.", href: "/services/cro" }
            ].map((svc, idx) => (
              <div key={idx} className="work-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 className="work-title" style={{ fontSize: "18px", marginBottom: "8px" }}>{svc.name}</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "20px" }}>{svc.desc}</p>
                </div>
                <Link href={svc.href} className="btn btn-outline" style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "center" }}>
                  <span>Explore Service</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Mini Example */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag light">Property Sales</span>
          <h2 className="section-title text-white">The project sells itself, when it is shown right.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            When a builder's website shows finished projects with clear photos, honest details and easy enquiry, the quality of leads changes completely. Instead of random calls, you get buyers who already like a specific project and want a site visit.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            A well-built website does not just look good. It pre-qualifies your buyers.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much does a real estate or builder website cost in India?",
                a: "It depends on how many projects you showcase and features like property filters, galleries and enquiry systems. A single-project site costs less than a large developer portfolio. Share your needs for a clear quote."
              },
              {
                q: "Can you showcase multiple projects with individual pages?",
                a: "Yes. We can build dedicated pages for each project with its own photos, details, location and enquiry form, so buyers can go deep on the property that interests them."
              },
              {
                q: "Can buyers enquire about a specific property directly?",
                a: "Yes. We add project-specific enquiry forms and WhatsApp options, so you know exactly which property a lead is interested in, making follow-up far easier."
              },
              {
                q: "Will my projects rank for searches like \"flats in [area]\"?",
                a: "That is what local SEO does. We optimise your site and Google Business Profile to appear for location-based property searches in your city and localities."
              },
              {
                q: "Can you add RERA and legal details properly?",
                a: "Yes. We present RERA registration, approvals and legal information clearly, since these strongly influence buyer trust and are important for credibility."
              },
              {
                q: "I sell plots and resale properties, not just new projects. Can you help?",
                a: "Yes. Whether it is new projects, plots, resale or rentals, we structure the site around how your buyers search and decide."
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

      {/* SECTION 7 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Turn your next project into a pipeline of buyers.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Get a site that presents your builds cleanly and converts traffic into site visits.
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
