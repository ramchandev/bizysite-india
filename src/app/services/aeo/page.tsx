import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Search, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Answer Engine Optimization (AEO) in India | Win Voice & Instant Answers | Bizy Site",
  description: "Be the answer when people ask Google and voice assistants a question. AEO gets your business picked for instant answers and voice search. Get a free review.",
  keywords: "answer engine optimization India, voice search optimization, featured snippet ranking India, Google Featured Snippets, AEO services India",
  alternates: {
    canonical: "/services/aeo",
  },
  openGraph: {
    title: "Answer Engine Optimization (AEO) in India | Win Voice & Instant Answers | Bizy Site",
    description: "Be the answer when people ask Google and voice assistants a question. AEO gets your business picked for instant answers and voice search. Get a free review.",
    url: `${siteUrl}/services/aeo`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Answer Engine Optimization (AEO) in India | Win Voice & Instant Answers | Bizy Site",
    description: "Be the answer when people ask Google and voice assistants a question. AEO gets your business picked for instant answers and voice search. Get a free review.",
  },
};

export default function AEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/aeo/#service`,
        "name": "Answer Engine Optimization (AEO)",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Win voice search and Google Featured Snippets listings.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/aeo/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is answer engine optimization in simple words?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Answer engine optimization, or AEO, means preparing your website so that search engines and voice assistants pick your business as the direct answer to a question, instead of just listing you among many links."
            }
          },
          {
            "@type": "Question",
            "name": "How is AEO different from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO helps you appear in the list of search results. AEO helps you become the single answer that Google reads out or shows in its answer box. SEO gets you on the page. AEO gets you the spotlight."
            }
          },
          {
            "@type": "Question",
            "name": "Is voice search really used in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and it is growing fast, especially in regional languages and on mobile. Many people now speak their searches instead of typing. Being the chosen voice answer is a real advantage."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need AEO if I already do SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They work together. SEO builds your overall visibility, and AEO captures the growing number of people who want one quick answer. Adding AEO future-proofs your visibility."
            }
          },
          {
            "@type": "Question",
            "name": "How do you make my business the chosen answer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We give clear answers to common customer questions on your site, structure them so machines can read them, and add the right code so Google understands exactly what you offer."
            }
          },
          {
            "@type": "Question",
            "name": "Will AEO bring me more enquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When you are the answer people hear or see first, more of them reach you before they ever consider a competitor. That visibility turns into calls and enquiries."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/aeo/#breadcrumb`,
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
            "name": "Answer Engine Optimization",
            "item": `${siteUrl}/services/aeo`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Answer Engine Optimization (AEO)</span>
          <h1 className="service-hero-title">When people ask a question out loud, your business should be the answer.</h1>
          <p className="service-hero-sub">
            More and more people do not scroll through ten links. They ask a question and expect one clear answer, by voice or in Google's instant answer box. AEO makes sure that answer is you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free Visibility Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>See if you are being picked as the answer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Voice Search</span>
          <h2 className="section-title">Someone in Pune just asked their phone a question.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A busy shop owner in Pune is driving. He does not type. He just says, "Hey Google, which CA firm files GST returns near me?" His phone reads out one answer. One name. One number.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            He did not see a list of ten websites. He got a single spoken answer, and he called it. That is answer engine optimization. When the phone reads out just one business, AEO decides whether that business is you, or your competitor.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Analogy */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Analogy</span>
          <h2 className="section-title">AEO is like being the friend everyone asks for a recommendation.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Think about the one person in your circle everyone trusts for advice. "Which doctor should I see?" "Which mechanic is honest?" People ask them, and they give one confident answer.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            Google and voice assistants are becoming that trusted friend for millions of people. AEO is how we make sure that when they answer, they say your name, because your website gives clear, trustworthy answers they can rely on.
          </p>
        </div>
      </section>

      {/* SECTION 4 — What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">How we make you the answer.</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              Becoming the answer takes two things: content that clearly answers real questions, and the technical markup that lets machines read and pick it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* Content work */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The content work you see</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Answer the real questions</strong> — We build clear answers to the exact questions your customers ask.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Win the featured snippet box</strong> — Optimise for Google's featured snippets and "people also ask" blocks.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Strengthen trust signals</strong> — Reviews, clarity and authority, so you are the answer worth trusting.
                  </div>
                </li>
              </ul>
            </div>

            {/* Technical work */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The technical work we handle behind the scenes</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Structured data (schema markup)</strong> — Behind-the-scenes code that tells Google and voice tools exactly what your answer is.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Content structuring</strong> — Formatting your pages with clear questions, concise answers and clean headings that machines can read and quote.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Speed and mobile health</strong> — Fast, mobile-ready pages, since answer and voice results favour sites that load quickly.
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
            <span className="section-tag">AEO Outcomes</span>
            <h2 className="section-title">The result.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Your business chosen as the spoken answer in voice search",
              "Appearing in Google's instant answer box, above normal results",
              "More visibility even from people who never scroll",
              "A head start as more Indians move to voice and quick answers"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — FAQ (AEO) */}
      <section className="section-padding faq-section" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "What is answer engine optimization in simple words?",
                a: "Answer engine optimization, or AEO, means preparing your website so that search engines and voice assistants pick your business as the direct answer to a question, instead of just listing you among many links."
              },
              {
                q: "How is AEO different from SEO?",
                a: "SEO helps you appear in the list of search results. AEO helps you become the single answer that Google reads out or shows in its answer box. SEO gets you on the page. AEO gets you the spotlight."
              },
              {
                q: "Is voice search really used in India?",
                a: "Yes, and it is growing fast, especially in regional languages and on mobile. Many people now speak their searches instead of typing. Being the chosen voice answer is a real advantage."
              },
              {
                q: "Do I need AEO if I already do SEO?",
                a: "They work together. SEO builds your overall visibility, and AEO captures the growing number of people who want one quick answer. Adding AEO future-proofs your visibility."
              },
              {
                q: "How do you make my business the chosen answer?",
                a: "We give clear answers to common customer questions on your site, structure them so machines can read them, and add the right code so Google understands exactly what you offer."
              },
              {
                q: "Will AEO bring me more enquiries?",
                a: "When you are the answer people hear or see first, more of them reach you before they ever consider a competitor. That visibility turns into calls and enquiries."
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

      {/* SECTION 7 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Be the answer, not just an option.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Visibility Review →
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
