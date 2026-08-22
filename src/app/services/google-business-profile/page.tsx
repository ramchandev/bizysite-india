import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Search, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Google Business Profile Management in India | Rank on Google Maps | Bizy Site",
  description: "Win the local map and \"near me\" searches. We set up and optimise your Google Business Profile so nearby customers find, trust and call you. Get a free review.",
  keywords: "Google Business Profile management India, Google Maps ranking, Google My Business optimization, local map pack marketing",
  alternates: {
    canonical: "/services/google-business-profile",
  },
  openGraph: {
    title: "Google Business Profile Management in India | Rank on Google Maps | Bizy Site",
    description: "Win the local map and \"near me\" searches. We set up and optimise your Google Business Profile so nearby customers find, trust and call you. Get a free review.",
    url: `${siteUrl}/services/google-business-profile`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Management in India | Rank on Google Maps | Bizy Site",
    description: "Win the local map and \"near me\" searches. We set up and optimise your Google Business Profile so nearby customers find, trust and call you. Get a free review.",
  },
};

export default function GoogleBusinessProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/google-business-profile/#service`,
        "name": "Google Business Profile Management",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Win local Google Maps ranking and Google My Business optimization queries.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/google-business-profile/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Google Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Google Business Profile is your free business listing that appears on Google Search and Google Maps. It shows your name, location, hours, photos, reviews and a call button, and it is often the first thing a local customer sees when they search for your service."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between my Google Business Profile and my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your website is your own space that you fully control and own. Your Google Business Profile is your listing on Google's map and search. Many local customers call straight from the profile without visiting the website, so both matter, and they work best together."
            }
          },
          {
            "@type": "Question",
            "name": "How do I rank higher on Google Maps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google looks at how complete and accurate your profile is, how relevant your categories and services are, how close you are to the searcher, and your reviews and activity. We optimise all of these to lift you in the local results."
            }
          },
          {
            "@type": "Question",
            "name": "Do reviews really affect my ranking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. More genuine reviews, and replies to them, improve both your ranking and the trust customers feel. We help you get more reviews the right way, without any fake or bought reviews, which can get you penalised."
            }
          },
          {
            "@type": "Question",
            "name": "Can you fix a profile that is suspended or has wrong information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often, yes. We can clean up incorrect details, resolve duplicate listings, and work to recover suspended profiles where possible. Share your situation and we will tell you honestly what can be done."
            }
          },
          {
            "@type": "Question",
            "name": "Is a Google Business Profile useful if I have no shop or office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Service-area businesses like plumbers, electricians and home services can show the areas they serve without displaying a physical address. We set this up correctly for you."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Google Business Profile management cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The profile itself is free to create. Our service is the expert setup, optimisation and ongoing management that makes it actually rank and bring calls. Share your business and we will send a clear quote."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/google-business-profile/#breadcrumb`,
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
            "name": "Services",
            "item": `${siteUrl}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Google Business Profile",
            "item": `${siteUrl}/services/google-business-profile`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Google Business Profile</span>
          <h1 className="service-hero-title">When someone nearby searches for you, be the first name on the map.</h1>
          <p className="service-hero-sub">
            Your Google Business Profile is what puts you on Google Maps and in the top local results, with your photos, reviews, hours and a call button. Set up well, it can bring more calls than your website. We make sure it works for you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free Profile Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>See how your profile compares to local rivals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Map Search</span>
          <h2 className="section-title">The customer never even reached your website.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            Someone in Coimbatore searches "physiotherapy clinic near me." Before any website appears, Google shows a map with three clinics, each with star ratings, photos, opening hours and a call button right there. The person taps "Call" on the top one. No website visit. No comparison. Just a call.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            That map box is the most valuable spot in local search, and it is controlled entirely by your Google Business Profile, not your website. If your profile is missing, incomplete or beaten by competitors, you never even get the chance. This is often the single biggest source of calls for a local business, and the most ignored.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Analogy */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Analogy</span>
          <h2 className="section-title">Your website is your shop. Your Google profile is your board on the main road.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Imagine your shop is inside a large market. Your website is the shop itself, nicely done up inside. But your Google Business Profile is the big, bright board at the market entrance that tells people you exist, where you are, when you are open, and that others trust you.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            A great shop with no entrance board gets missed. A clear, well-lit board pulls people in before they even see the competition. We make sure your board is the brightest one at the entrance.
          </p>
        </div>
      </section>

      {/* SECTION 4 — What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">How we turn your profile into a lead machine.</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              Getting found on the map takes two things: a complete, polished profile, and the ongoing signals that push you above local competitors.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* The visible profile work */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The visible profile work</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Complete, accurate setup</strong> — Correct name, address, phone, hours, categories and services, so Google and customers trust your details.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Photos that sell</strong> — Real, high-quality images of your work, team and place that build confidence.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Review strategy</strong> — A simple system to get more genuine reviews and reply to them well, since reviews strongly affect ranking and trust.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Posts and updates</strong> — Regular offers, updates and news on your profile to keep it active and appealing.
                  </div>
                </li>
              </ul>
            </div>

            {/* Behind the scenes */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>What we handle behind the scenes</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Local ranking optimisation</strong> — The categories, keywords and signals that help you rank higher in the map results for your city.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Consistent information across the web</strong> — Making sure your business details match everywhere online, which Google checks before ranking you.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Insights tracking</strong> — Watching how many people call, message, request directions or visit your site from your profile, so we can keep improving.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — What You Get */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">GBP Outcomes</span>
            <h2 className="section-title">The result.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "More calls and direction requests from nearby customers",
              "A higher spot in the local map results for your city",
              "More and better reviews, building instant trust",
              "A profile that quietly brings business, even when your website does not"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — Who It Is For */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Target Audience</span>
          <h2 className="section-title">Perfect for any business customers visit or call locally.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Clinics, dentists, salons, gyms, restaurants, builders, car services, coaching centres, CA and legal firms, retail stores, any business where nearby customers search and then call or visit. If location matters to your customers, your Google Business Profile matters to your business.
          </p>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "What is a Google Business Profile?",
                a: "A Google Business Profile is your free business listing that appears on Google Search and Google Maps. It shows your name, location, hours, photos, reviews and a call button, and it is often the first thing a local customer sees when they search for your service."
              },
              {
                q: "What is the difference between my Google Business Profile and my website?",
                a: "Your website is your own space that you fully control and own. Your Google Business Profile is your listing on Google's map and search. Many local customers call straight from the profile without visiting the website, so both matter, and they work best together."
              },
              {
                q: "How do I rank higher on Google Maps?",
                a: "Google looks at how complete and accurate your profile is, how relevant your categories and services are, how close you are to the searcher, and your reviews and activity. We optimise all of these to lift you in the local results."
              },
              {
                q: "Do reviews really affect my ranking?",
                a: "Yes. More genuine reviews, and replies to them, improve both your ranking and the trust customers feel. We help you get more reviews the right way, without any fake or bought reviews, which can get you penalised."
              },
              {
                q: "Can you fix a profile that is suspended or has wrong information?",
                a: "Often, yes. We can clean up incorrect details, resolve duplicate listings, and work to recover suspended profiles where possible. Share your situation and we will tell you honestly what can be done."
              },
              {
                q: "Is a Google Business Profile useful if I have no shop or office?",
                a: "Yes. Service-area businesses like plumbers, electricians and home services can show the areas they serve without displaying a physical address. We set this up correctly for you."
              },
              {
                q: "How much does Google Business Profile management cost?",
                a: "The profile itself is free to create. Our service is the expert setup, optimisation and ongoing management that makes it actually rank and bring calls. Share your business and we will send a clear quote."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-card-custom" style={{ borderBottom: "1px solid var(--border)" }}>
                <div 
                  className="faq-trigger-custom" 
                  style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", cursor: "default" }}
                >
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

      {/* SECTION 8 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Own the map in your city.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Profile Review →
                </Link>
              </div>
              <div className="cta-wrapper">
                <Link href="/contact?type=quote" className="btn btn-outline" style={{ padding: "14px 32px", background: "rgba(255,255,255,0.08)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>
                  Get My Free Quote →
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
