import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Search, TrendingUp, Sparkles, AlertCircle, BarChart3, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SEO Services in India | Get Found on Google | Bizy Site",
  description: "Show up when customers search for what you offer. Practical SEO that brings real enquiries, not just rankings. Get a free SEO review for your website.",
  keywords: "SEO services India, get found on Google, organic ranking India, local map pack optimization, technical SEO expert India",
  alternates: {
    canonical: "/services/seo",
  },
  openGraph: {
    title: "SEO Services in India | Get Found on Google | Bizy Site",
    description: "Show up when customers search for what you offer. Practical SEO that brings real enquiries, not just rankings. Get a free SEO review for your website.",
    url: `${siteUrl}/services/seo`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in India | Get Found on Google | Bizy Site",
    description: "Show up when customers search for what you offer. Practical SEO that brings real enquiries, not just rankings. Get a free SEO review for your website.",
  },
};

export default function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/seo/#service`,
        "name": "Search Engine Optimization (SEO)",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Gets your business to show up on Google when customers are looking.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/seo/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does SEO take to show results in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For most businesses, meaningful results begin in a few months and grow from there. Competitive cities and industries take longer. We focus first on quick wins and the searches most likely to bring you enquiries."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website come on the first page of Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That is the goal, for the searches that matter to your business. We cannot promise an exact position, since Google decides ranking, and anyone who guarantees a number-one spot is not being honest. What we can promise is real, proven work that steadily improves your visibility."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between SEO and Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads puts you at the top instantly, but you pay for every click. SEO takes time to build, but brings visitors without paying per click. Ads are renting the front spot. SEO is owning it. Many businesses use both."
            }
          },
          {
            "@type": "Question",
            "name": "Do you do local SEO for my city?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Local SEO helps you appear when people search for your service in your city, and on Google Maps. This is one of the highest-value SEO moves for any local business in India."
            }
          },
          {
            "@type": "Question",
            "name": "How much does SEO cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your industry, your city and how competitive your market is. We will assess your situation and give you a clear, honest quote, with no hidden charges."
            }
          },
          {
            "@type": "Question",
            "name": "Can you guarantee number one ranking on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No honest agency can. Google's ranking is not for sale through SEO, and it changes constantly. We guarantee genuine, best-practice work that improves your rankings and brings enquiries, not a fake promise of a fixed position."
            }
          },
          {
            "@type": "Question",
            "name": "I already rank okay. Can you still help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. There is almost always room to rank for more searches, fix technical issues, and turn more of your search traffic into actual enquiries. We start by reviewing where you stand."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/seo/#breadcrumb`,
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
            "name": "Search Engine Optimization",
            "item": `${siteUrl}/services/seo`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Search Engine Optimization (SEO)</span>
          <h1 className="service-hero-title">When someone searches for what you offer, you should be the one they find.</h1>
          <p className="service-hero-sub">
            SEO gets your business to show up on Google when customers are looking. Not for vanity rankings, but for the searches that actually bring you calls and enquiries.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free SEO Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>See where you rank, and where you could.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Visibility</span>
          <h2 className="section-title">It is 9pm. Someone in your city needs exactly what you sell.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A person in Chennai has a toothache. They pick up their phone and type "dentist near me open now." Three clinics show up at the top. They call the first one. They book.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Did that patient go to the best dentist in the city? No. They went to the one Google showed them. That is what SEO decides, every single day, for thousands of searches: who gets the call, and who stays invisible. If your business is not showing up when people search, you are not losing to better businesses. You are losing to more visible ones. SEO fixes that.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What This Means In Real Life (Analogy) */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Analogy</span>
            <h2 className="section-title">SEO is like having your shop on the main road, not a back lane.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px", marginBottom: "40px" }}>
            <div className="pain-card" style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--red)", background: "rgba(239, 68, 68, 0.08)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE BACK LANE
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                Imagine a shop down a narrow back lane that nobody walks through. The quality of products inside doesn't matter if nobody knows the shop exists.
              </p>
            </div>

            <div className="pain-card" style={{ background: "rgba(43, 191, 191, 0.03)", border: "1px solid rgba(43, 191, 191, 0.2)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--teal)", background: "rgba(43, 191, 191, 0.12)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE MAIN ROAD
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                Imagine the same shop situated on the busiest road in the city, with a clear board everyone sees. Google is today's main road. SEO is how we move your business from the back lane to the front, so the people already searching can actually find you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Real SEO work that brings real enquiries.</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              SEO has two halves: the visible strategy that targets the right customers, and the technical work under the hood that lets Google trust and rank your site.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* The SEO strategy you see */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The SEO strategy you see</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Find the searches that matter</strong> — The exact words your customers type, with intent to buy.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Optimise your pages</strong> — Titles, content and signals that help you rank for the right searches.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Local SEO</strong> — Show up in your city and on Google Maps, so nearby customers find you.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Content that ranks and converts</strong> — Helpful pages that bring visitors and turn them into leads.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Track and improve</strong> — We watch rankings, traffic and enquiries, and keep refining.
                  </div>
                </li>
              </ul>
            </div>

            {/* The technical SEO we handle behind the scenes */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The technical SEO we handle behind the scenes</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Site speed and Core Web Vitals</strong> — Faster, stable pages that Google rewards with better rankings.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Clean site structure</strong> — Proper URLs, heading tags and internal linking, so search engines understand your pages.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Structured data (schema)</strong> — Behind-the-scenes code that helps you appear in rich results and featured snippets.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Mobile and crawl health</strong> — Making sure Google can easily read, index and rank every important page.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Fixing technical errors</strong> — Broken links, duplicate content and indexing issues that quietly hold rankings back.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", maxWidth: "700px", margin: "32px auto 0" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              You do not need to know the difference between the two lists. You just need to know both are being done, so you get found by the right people and trusted by Google.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — What You Get */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">SEO Outcomes</span>
            <h2 className="section-title">The result, in plain terms.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "More of the right visitors, who are actually looking for what you offer",
              "A steady flow of enquiries that does not stop when you pause your ads",
              "Visibility in your city, on search and on Maps",
              "A long-term asset that keeps working month after month"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — Honest Expectations */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Expectations</span>
          <h2 className="section-title">SEO is a garden, not a vending machine.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            We will be straight with you. SEO is not instant. A vending machine gives you a snack the moment you pay. A garden takes time, care and patience, but then it keeps giving, season after season.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            SEO is the garden. It takes some weeks to grow, but once you rank, the enquiries keep coming without paying for every click. If you need customers today while SEO grows, we pair it with ads.
          </p>
        </div>
      </section>

      {/* SECTION 7 — FAQ (SEO) */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How long does SEO take to show results in India?",
                a: "For most businesses, meaningful results begin in a few months and grow from there. Competitive cities and industries take longer. We focus first on quick wins and the searches most likely to bring you enquiries."
              },
              {
                q: "Will my website come on the first page of Google?",
                a: "That is the goal, for the searches that matter to your business. We cannot promise an exact position, since Google decides ranking, and anyone who guarantees a number-one spot is not being honest. What we can promise is real, proven work that steadily improves your visibility."
              },
              {
                q: "What is the difference between SEO and Google Ads?",
                a: "Google Ads puts you at the top instantly, but you pay for every click. SEO takes time to build, but brings visitors without paying per click. Ads are renting the front spot. SEO is owning it. Many businesses use both."
              },
              {
                q: "Do you do local SEO for my city?",
                a: "Yes. Local SEO helps you appear when people search for your service in your city, and on Google Maps. This is one of the highest-value SEO moves for any local business in India."
              },
              {
                q: "How much does SEO cost in India?",
                a: "It depends on your industry, your city and how competitive your market is. We will assess your situation and give you a clear, honest quote, with no hidden charges."
              },
              {
                q: "Can you guarantee number one ranking on Google?",
                a: "No honest agency can. Google's ranking is not for sale through SEO, and it changes constantly. We guarantee genuine, best-practice work that improves your rankings and brings enquiries, not a fake promise of a fixed position."
              },
              {
                q: "I already rank okay. Can you still help?",
                a: "Yes. There is almost always room to rank for more searches, fix technical issues, and turn more of your search traffic into actual enquiries. We start by reviewing where you stand."
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
            Be the business people find first.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free SEO Review →
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
