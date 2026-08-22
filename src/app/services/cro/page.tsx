import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Percent, TrendingUp, Sparkles, AlertCircle, BarChart3, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Conversion Rate Optimization (CRO) in India | More Leads, Same Traffic | Bizy Site",
  description: "Turn more website visitors into calls and enquiries, without spending more on ads. CRO for new and existing sites. Get a free conversion review.",
  keywords: "conversion rate optimization India, increase website conversions, CRO services India, improve website leads, lead conversion rate optimization",
  alternates: {
    canonical: "/services/cro",
  },
  openGraph: {
    title: "Conversion Rate Optimization (CRO) in India | More Leads, Same Traffic | Bizy Site",
    description: "Turn more website visitors into calls and enquiries, without spending more on ads. CRO for new and existing sites. Get a free conversion review.",
    url: `${siteUrl}/services/cro`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Rate Optimization (CRO) in India | More Leads, Same Traffic | Bizy Site",
    description: "Turn more website visitors into calls and enquiries, without spending more on ads. CRO for new and existing sites. Get a free conversion review.",
  },
};

export default function CRO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/cro/#service`,
        "name": "Conversion Rate Optimization (CRO)",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Turn more website visitors into calls and enquiries, without spending more on ads.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/cro/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is conversion rate optimization in simple words?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Conversion rate optimization, or CRO, means improving your website so that more of your visitors take action, like calling you or filling a form, instead of leaving. You get more business from the same number of visitors."
            }
          },
          {
            "@type": "Question",
            "name": "How is CRO different from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO brings more people to your website. CRO makes more of those people actually contact you. SEO fills the shop with visitors. CRO makes sure they reach the billing counter. They work best together."
            }
          },
          {
            "@type": "Question",
            "name": "Will CRO work if my website traffic is low?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and it is often the smartest first step. If you are paying for ads or SEO to bring visitors, it makes no sense to lose most of them on the page. CRO helps you get more from every visitor you already have."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to rebuild my website for CRO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually not. We start with an audit and fix what is hurting conversions on your current site. We only suggest a rebuild if the site is genuinely beyond repair, and we will explain why."
            }
          },
          {
            "@type": "Question",
            "name": "How soon will I see more enquiries after CRO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some fixes, like a faster page or a clearer call-to-action, can show results within days. Bigger improvements build up over a few weeks. We track the numbers so you can see the difference."
            }
          },
          {
            "@type": "Question",
            "name": "How do you know what to fix on my site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine proven conversion principles with a close look at how visitors actually behave on your pages: where they stop scrolling, where they hesitate, and where they leave. Then we fix the biggest leaks first."
            }
          },
          {
            "@type": "Question",
            "name": "Does CRO cost more than running more ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CRO often saves you money. Instead of paying for more and more traffic, you make better use of the traffic you already get. Many businesses find this is the cheapest way to grow enquiries."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/cro/#breadcrumb`,
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
            "name": "Conversion Rate Optimization",
            "item": `${siteUrl}/services/cro`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Conversion Rate Optimization (CRO)</span>
          <h1 className="service-hero-title">You are already getting visitors. Let us turn more of them into customers.</h1>
          <p className="service-hero-sub">
            Most websites lose customers they already attracted. CRO is the work of fixing the leaks, so the same traffic brings you more calls, enquiries and sales, without spending a rupee more on ads.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free Conversion Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>We show you exactly where you are losing leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Hidden Cost</span>
          <h2 className="section-title">Here is what is quietly costing you business.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            Picture 100 people walking into your shop today. 95 of them look around and walk out without buying. You would be alarmed. You would want to know why.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            That is exactly what happens on most websites, but you never see it. The visitors come, glance, and leave. The average website turns only 1 to 3 out of every 100 visitors into an enquiry. Worse, half your visitors never even scroll past the first screen. CRO is how we find out where people are dropping off, and fix it, so more of those 100 visitors actually contact you.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What This Means In Real Life (Analogy) */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Analogy</span>
            <h2 className="section-title">CRO is like rearranging a shop so people actually reach the counter.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px", marginBottom: "40px" }}>
            <div className="pain-card" style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--red)", background: "rgba(239, 68, 68, 0.08)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE CONFUSING LAYOUT
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                Imagine a shop where the products are great but the aisles are confusing, the prices are hidden, and the billing counter is tucked away in a dark corner. People wander in, get lost, and leave.
              </p>
            </div>

            <div className="pain-card" style={{ background: "rgba(43, 191, 191, 0.03)", border: "1px solid rgba(43, 191, 191, 0.2)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--teal)", background: "rgba(43, 191, 191, 0.12)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE OPTIMIZED SHOP
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                Now imagine the same shop with clear signs, products in easy reach, and a clear path to the counter. Same products, same footfall, far more sales. CRO does that to your website. We do not change what you sell. We change how easily a visitor can say yes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Two-Audience Split */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Paths</span>
            <h2 className="section-title">Whether your site is new or already live, we make it convert.</h2>
          </div>

          <div className="pain-grid" style={{ marginTop: "40px" }}>
            {/* Path A */}
            <div className="pain-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
                <h3 className="pain-title" style={{ fontSize: "20px", marginBottom: "12px", color: "var(--navy)", fontWeight: "800" }}>I am building a new website</h3>
                <p className="pain-body" style={{ marginBottom: "24px", fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  Good news: we build conversion in from the very first line of code. You do not have to fix anything later, because it is designed to sell from day one.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Every page built around a clear next step</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Fast loading and mobile-first, so visitors stay</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Trust signals, strong CTAs and simple forms, baked in</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                <Link href="/contact?type=quote" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Build me a conversion-first site →
                </Link>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center" }}>
                  Designed to bring enquiries from launch.
                </p>
              </div>
            </div>

            {/* Path B */}
            <div className="pain-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
                <h3 className="pain-title" style={{ fontSize: "20px", marginBottom: "12px", color: "var(--navy)", fontWeight: "800" }}>I already have a website</h3>
                <p className="pain-body" style={{ marginBottom: "24px", fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  You do not need a full rebuild to get more leads. We audit your current site, find what is stopping visitors from contacting you, and fix it, often with changes you would never have guessed mattered.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>A clear, honest conversion audit of your current site</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Practical fixes to headlines, layout, speed, forms and CTAs</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>More enquiries without changing your traffic or ad spend</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                <Link href="/contact?type=audit" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                  Get My Free Conversion Review →
                </Link>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center" }}>
                  We tell you exactly what to fix, and why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Our Scope</span>
            <h2 className="section-title">The leaks we find, and the work that fixes them.</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              Fixing conversions has two sides: the problems we hunt for, and the technical work that quietly powers the fix.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* The leaks we look for */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The leaks we look for</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Weak first impression</strong> — Your headline and first screen must make the visitor stay in 5 seconds.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Slow pages</strong> — Every extra second of load time loses you enquiries.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Unclear next step</strong> — Visitors should never wonder what to do next.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Forms that scare people off</strong> — Too many fields, or no trust, kill submissions.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>No proof</strong> — Reviews and results placed where doubt is highest.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Mobile problems</strong> — Since most of your visitors are on a phone, the mobile experience must be flawless.
                  </div>
                </li>
              </ul>
            </div>

            {/* What we handle behind the scenes */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>What we handle behind the scenes</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Speed and Core Web Vitals</strong> — We improve loading speed and page stability, which lift both conversions and Google rankings.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Conversion tracking and analytics</strong> — Set up so we can see exactly where visitors drop off, and prove the improvement.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>A/B testing where it helps</strong> — Comparing versions of a page to find what genuinely brings more enquiries, instead of guessing.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Clean, mobile-first code</strong> — So the experience is smooth on every phone and screen size.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Form and CTA optimisation</strong> — The right fields, trust signals and button copy, built and tested to lift submissions.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", maxWidth: "700px", margin: "32px auto 0" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              You do not need to follow the technical side. You just need to know the leaks are being found and sealed, so more of your visitors turn into customers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — What You Get */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Measurable Outcomes</span>
            <h2 className="section-title">The outcome you can measure.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "More calls and enquiries from the visitors you already have",
              "A clear before-and-after, so you see the improvement",
              "Lower cost per lead, because you waste less traffic",
              "A website that keeps earning, not just existing"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 7 — Mini Result */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "var(--radius-lg)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag light">Success Story</span>
          <h2 className="section-title text-white">Same traffic. Same ad spend. 38% more enquiries.</h2>
          <p style={{ fontSize: "18px", fontStyle: "italic", fontWeight: "600", color: "var(--teal)", marginBottom: "20px", lineHeight: "1.7" }}>
            "We optimised a clinic website that was slow and hard to use. By speeding it up and making the booking step clearer, appointment enquiries rose 38% in a single month, with no increase in visitors or ad budget."
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: "600" }}>
            That is the power of fixing the leaks instead of pouring in more traffic.
          </p>
        </div>
      </section>

      {/* SECTION 8 — Free Resource (Lead Magnet) */}
      <section className="section-padding lead-magnet-section" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "40px", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden" }} className="pain-card">
            {/* Decorative gradient corner */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: "radial-gradient(circle, rgba(43, 191, 191, 0.1) 0%, transparent 70%)", pointerEvents: "none" }}></div>
            
            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <span className="section-tag" style={{ margin: "0 auto 12px" }}>Free Resource</span>
              <h2 style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", marginBottom: "16px" }}>Want to start fixing your site today, for free?</h2>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.7", marginBottom: "28px" }}>
                Download our Website Conversion Cheat Sheet: 10 proven tips to turn more visitors into leads, without spending more on ads.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="/contact?download=cheatsheet" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Download the Free Guide →
                </Link>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px" }}>
                  10 fixes you can start using today. No cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ (CRO) */}
      <section className="section-padding faq-section" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "What is conversion rate optimization in simple words?",
                a: "Conversion rate optimization, or CRO, means improving your website so that more of your visitors take action, like calling you or filling a form, instead of leaving. You get more business from the same number of visitors."
              },
              {
                q: "How is CRO different from SEO?",
                a: "SEO brings more people to your website. CRO makes more of those people actually contact you. SEO fills the shop with visitors. CRO makes sure they reach the billing counter. They work best together."
              },
              {
                q: "Will CRO work if my website traffic is low?",
                a: "Yes, and it is often the smartest first step. If you are paying for ads or SEO to bring visitors, it makes no sense to lose most of them on the page. CRO helps you get more from every visitor you already have."
              },
              {
                q: "Do I need to rebuild my website for CRO?",
                a: "Usually not. We start with an audit and fix what is hurting conversions on your current site. We only suggest a rebuild if the site is genuinely beyond repair, and we will explain why."
              },
              {
                q: "How soon will I see more enquiries after CRO?",
                a: "Some fixes, like a faster page or a clearer call-to-action, can show results within days. Bigger improvements build up over a few weeks. We track the numbers so you can see the difference."
              },
              {
                q: "How do you know what to fix on my site?",
                a: "We combine proven conversion principles with a close look at how visitors actually behave on your pages: where they stop scrolling, where they hesitate, and where they leave. Then we fix the biggest leaks first."
              },
              {
                q: "Does CRO cost more than running more ads?",
                a: "CRO often saves you money. Instead of paying for more and more traffic, you make better use of the traffic you already get. Many businesses find this is the cheapest way to grow enquiries."
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

      {/* SECTION 10 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Stop losing leads you already paid to attract.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Conversion Review →
                </Link>
              </div>
              <div className="cta-wrapper">
                <Link href="/contact?download=cheatsheet" className="btn btn-outline" style={{ padding: "14px 32px", background: "rgba(255,255,255,0.08)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>
                  Download the Free Guide →
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
