import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design for Restaurants & Hotels in India | Bizy Site",
  description: "Websites for restaurants, cafes and hotels that drive bookings, orders and footfall. Menus, reservations, reviews and Google visibility. Get a free quote.",
  keywords: "restaurant website design India, hotel website, cafe website design, hospitality digital marketing India",
  alternates: {
    canonical: "/industries/hospitality",
  },
  openGraph: {
    title: "Website Design for Restaurants & Hotels in India | Bizy Site",
    description: "Websites for restaurants, cafes and hotels that drive bookings, orders and footfall. Menus, reservations, reviews and Google visibility. Get a free quote.",
    url: "https://bizysite.in/industries/hospitality",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Restaurants & Hotels in India | Bizy Site",
    description: "Websites for restaurants, cafes and hotels that drive bookings, orders and footfall. Menus, reservations, reviews and Google visibility. Get a free quote.",
  },
};

export default function HospitalityRestaurants() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/industries/hospitality/#service",
        "name": "Website Design for Restaurants & Hotels",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Websites for restaurants, cafes and hotels that drive bookings, orders and footfall.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/industries/hospitality/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a restaurant or hotel website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on features like online booking, ordering, menu management and the number of pages. A single cafe site costs less than a multi-property hotel site. Share your needs for a clear quote."
            }
          },
          {
            "@type": "Question",
            "name": "Can customers book a table or room directly on the website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We add reservation and booking systems, or connect the booking tools you already use, so customers can book in a tap without calling."
            }
          },
          {
            "@type": "Question",
            "name": "Can we take food orders through the website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can set up online ordering directly on your site, so you rely less on aggregator apps and their high commissions, keeping more of each order."
            }
          },
          {
            "@type": "Question",
            "name": "Will we show up on \"restaurants near me\" and Google Maps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Local SEO and your Google Business Profile are essential in hospitality. We optimise both so hungry, nearby customers find you first."
            }
          },
          {
            "@type": "Question",
            "name": "Can you keep our menu and prices easy to update?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build it so you can easily update menus, prices and offers yourself, or we can manage it for you. No being stuck with an outdated menu online."
            }
          },
          {
            "@type": "Question",
            "name": "We are active on Instagram. Can the website connect to it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We link your social feeds and can manage your social media too, since food and ambience sell brilliantly on Instagram and Facebook."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/industries/hospitality/#breadcrumb",
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
            "name": "Industries",
            "item": "https://bizysite.in/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Hospitality & Restaurants",
            "item": "https://bizysite.in/industries/hospitality"
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_hospitality.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Hospitality & Restaurants</span>
          <h1 className="service-hero-title">Turn hungry searches into bookings, orders and footfall.</h1>
          <p className="service-hero-sub">
            People decide where to eat and stay in seconds, mostly on their phones. We build restaurant and hotel websites that make your place irresistible and make booking a table, room or order effortless.
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
          <span className="section-tag">Instant Cravings</span>
          <h2 className="section-title">Hungry customers decide fast, and go to whoever looks best.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            Someone searching "best biryani near me" or "hotels in [city]" decides in seconds, based on photos, reviews and how easy it is to book or order. If your food or rooms are not shown appetisingly, or if booking is a hassle, they simply pick the next option.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Most restaurant and hotel websites lose customers with slow pages, tiny menus, no good photos, and no easy booking. In hospitality, the mouth-watering photo and the one-tap booking win the customer, not the fanciest design.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting Hospitality Website Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to turn cravings into bookings.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Mouth-watering photos</strong> — Of your food, rooms and ambience, that make people want to come.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Easy booking and ordering</strong> — Table reservations, room bookings or food orders in a tap.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear menu or room details</strong> — With prices, easy to browse on a phone.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Reviews and ratings</strong> — Google reviews shown prominently, since diners and guests trust them.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Location, timings and contact</strong> — Answered instantly, with maps and one-tap call.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Fast, mobile-first design</strong> — Because hungry, hurried customers are always on mobile.
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
            <h2 className="section-title">Where we focus for restaurants and hotels.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "Website Design", desc: "An appetising, easy-to-book site.", href: "/services/web-design" },
              { name: "Local SEO & GBP", desc: "Win \"restaurants near me\" and Google Maps.", href: "/services/google-business-profile" },
              { name: "Social Media Management", desc: "Keep your food and vibe visible where diners scroll.", href: "/services/social-media-management" },
              { name: "Meta & Google Ads", desc: "Fill tables and rooms during slow periods.", href: "/services/ads" }
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
          <span className="section-tag light">Cravings</span>
          <h2 className="section-title text-white">Great photos and easy booking fill more tables.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            When a restaurant shows genuinely appetising photos, an easy-to-read menu and one-tap reservation, browsing turns into booking. In hospitality, the website's job is simple: make people hungry and make booking effortless.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            Do both, and the tables fill themselves.
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
                q: "How much does a restaurant or hotel website cost in India?",
                a: "It depends on features like online booking, ordering, menu management and the number of pages. A single cafe site costs less than a multi-property hotel site. Share your needs for a clear quote."
              },
              {
                q: "Can customers book a table or room directly on the website?",
                a: "Yes. We add reservation and booking systems, or connect the booking tools you already use, so customers can book in a tap without calling."
              },
              {
                q: "Can we take food orders through the website?",
                a: "Yes. We can set up online ordering directly on your site, so you rely less on aggregator apps and their high commissions, keeping more of each order."
              },
              {
                q: "Will we show up on \"restaurants near me\" and Google Maps?",
                a: "Yes. Local SEO and your Google Business Profile are essential in hospitality. We optimise both so hungry, nearby customers find you first."
              },
              {
                q: "Can you keep our menu and prices easy to update?",
                a: "Yes. We build it so you can easily update menus, prices and offers yourself, or we can manage it for you. No being stuck with an outdated menu online."
              },
              {
                q: "We are active on Instagram. Can the website connect to it?",
                a: "Yes. We link your social feeds and can manage your social media too, since food and ambience sell brilliantly on Instagram and Facebook."
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
            Fill more tables and rooms, starting with your website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Make your brand irresistible and booking or ordering a breeze.
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
