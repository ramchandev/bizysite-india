import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "E-commerce & D2C Website Design in India | Bizy Site",
  description: "Online stores and D2C websites that turn browsers into buyers. Fast, mobile-first, easy checkout, built to sell. Get a free quote.",
  keywords: "ecommerce website design India, D2C website, online store development, e-commerce digital marketing India",
  alternates: {
    canonical: "/industries/retail",
  },
  openGraph: {
    title: "E-commerce & D2C Website Design in India | Bizy Site",
    description: "Online stores and D2C websites that turn browsers into buyers. Fast, mobile-first, easy checkout, built to sell. Get a free quote.",
    url: `${siteUrl}/industries/retail`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce & D2C Website Design in India | Bizy Site",
    description: "Online stores and D2C websites that turn browsers into buyers. Fast, mobile-first, easy checkout, built to sell. Get a free quote.",
  },
};

export default function RetailD2C() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/industries/retail/#service`,
        "name": "E-commerce & D2C Website Design",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Online stores and D2C websites that turn browsers into buyers.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/industries/retail/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an e-commerce website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the number of products, features like payment and delivery integration, and overall complexity. A small D2C store costs less than a large catalogue store. Share your needs for a clear quote."
            }
          },
          {
            "@type": "Question",
            "name": "Which platform do you build online stores on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend the platform that best fits your products, budget and growth plans, whether that is a popular e-commerce platform or a custom build. We guide you to the right choice, not a one-size-fits-all."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate payment gateways and delivery partners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We connect trusted Indian payment gateways and delivery or logistics partners, so your store runs smoothly from order to doorstep."
            }
          },
          {
            "@type": "Question",
            "name": "How do you reduce cart abandonment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By speeding up the store, simplifying checkout, adding trust signals, and reducing unnecessary steps. Our CRO work focuses on exactly where shoppers drop off, so more carts turn into orders."
            }
          },
          {
            "@type": "Question",
            "name": "Will my products show up on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with e-commerce SEO. We optimise your product and category pages to rank for what shoppers search, bringing buyers who are ready to purchase."
            }
          },
          {
            "@type": "Question",
            "name": "Can I manage products and orders myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build your store so you can easily add products, update prices and manage orders yourself, and we train you on it. You stay in control of your store."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/industries/retail/#breadcrumb`,
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
            "name": "Retail & D2C / E-commerce",
            "item": `${siteUrl}/industries/retail`
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_retail.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Retail & D2C / E-commerce</span>
          <h1 className="service-hero-title">Turn browsers into buyers, and carts into orders.</h1>
          <p className="service-hero-sub">
            Online shoppers are impatient and easily distracted. We build e-commerce and D2C websites that load fast, build trust, and make buying so easy that visitors actually complete the purchase.
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
          <span className="section-tag">Cart Abandonment</span>
          <h2 className="section-title">Most online stores lose the sale at the last step.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            Getting a shopper to your store is only half the battle. The real loss happens later: slow pages, confusing product listings, a complicated checkout, or no trust signals, and the shopper abandons the cart. Across e-commerce, most carts are abandoned before payment.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Many Indian online stores also lose buyers who worry: is this site genuine, will my payment be safe, can I return this. If your store does not answer these instantly, the sale is lost, even when the shopper wanted to buy.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting Online Store Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to turn visits into completed orders.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Fast, mobile-first store</strong> — Since most Indian shopping happens on phones, speed is sales.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear product pages</strong> — Great photos, honest descriptions, prices and easy add-to-cart.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Simple, trusted checkout</strong> — Fewer steps, trusted payment options, less abandonment.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Trust signals</strong> — Reviews, secure payment badges, return and delivery info, shown clearly.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Easy search and filters</strong> — So shoppers find what they want fast.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Offers and upsells</strong> — Thoughtful nudges that increase order value.
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
            <h2 className="section-title">Where we focus for retail and D2C.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "E-commerce Web Design", desc: "A fast, trustworthy, easy-to-buy store.", href: "/services/web-design" },
              { name: "CRO", desc: "Reduce cart abandonment and increase completed orders.", href: "/services/cro" },
              { name: "SEO", desc: "Rank for the products people search to buy.", href: "/services/seo" },
              { name: "Meta & Google Ads", desc: "Drive ready-to-buy shoppers to your store.", href: "/services/ads" }
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
          <span className="section-tag light">Store Conversion</span>
          <h2 className="section-title text-white">A smoother checkout means more completed orders.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            When an online store loads fast, shows products clearly, and makes checkout simple and trusted, more of the same visitors actually complete their purchase.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            You rarely need more traffic first. You need to stop losing the buyers you already have.
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
                q: "How much does an e-commerce website cost in India?",
                a: "It depends on the number of products, features like payment and delivery integration, and overall complexity. A small D2C store costs less than a large catalogue store. Share your needs for a clear quote."
              },
              {
                q: "Which platform do you build online stores on?",
                a: "We recommend the platform that best fits your products, budget and growth plans, whether that is a popular e-commerce platform or a custom build. We guide you to the right choice, not a one-size-fits-all."
              },
              {
                q: "Can you integrate payment gateways and delivery partners?",
                a: "Yes. We connect trusted Indian payment gateways and delivery or logistics partners, so your store runs smoothly from order to doorstep."
              },
              {
                q: "How do you reduce cart abandonment?",
                a: "By speeding up the store, simplifying checkout, adding trust signals, and reducing unnecessary steps. Our CRO work focuses on exactly where shoppers drop off, so more carts turn into orders."
              },
              {
                q: "Will my products show up on Google?",
                a: "Yes, with e-commerce SEO. We optimise your product and category pages to rank for what shoppers search, bringing buyers who are ready to purchase."
              },
              {
                q: "Can I manage products and orders myself?",
                a: "Yes. We build your store so you can easily add products, update prices and manage orders yourself, and we train you on it. You stay in control of your store."
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
            Sell more without paying for more traffic.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Let us optimize your product page and checkout flow to stop cart abandonment.
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
