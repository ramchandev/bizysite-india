import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Search, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Optimization (AIO) in India | Be Visible Inside AI Tools | Bizy Site",
  description: "People now ask AI tools instead of searching. AIO keeps your business visible and recommended as customers shift to AI. Get a free AI visibility review.",
  keywords: "AI optimization India, AI search visibility, ChatGPT search optimization, Gemini SEO India, Large Language Model marketing",
  alternates: {
    canonical: "/services/aio",
  },
  openGraph: {
    title: "AI Optimization (AIO) in India | Be Visible Inside AI Tools | Bizy Site",
    description: "People now ask AI tools instead of searching. AIO keeps your business visible and recommended as customers shift to AI. Get a free AI visibility review.",
    url: `${siteUrl}/services/aio`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Optimization (AIO) in India | Be Visible Inside AI Tools | Bizy Site",
    description: "People now ask AI tools instead of searching. AIO keeps your business visible and recommended as customers shift to AI. Get a free AI visibility review.",
  },
};

export default function AIO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/aio/#service`,
        "name": "AI Optimization (AIO)",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Keeps your business visible and recommended inside AI tools.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/aio/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI optimization in simple words?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI optimization, or AIO, means preparing your business information online so that AI tools understand it, trust it, and include your business when people ask them questions or for recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "Why does AIO matter now?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "More people are using AI tools instead of search engines to find services and make decisions. If AI does not know your business, you miss every customer who asks AI instead of Googling. Starting early gives you an advantage."
            }
          },
          {
            "@type": "Question",
            "name": "How is AIO different from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO focuses on ranking in search engines like Google. AIO focuses on being visible and recommended inside AI tools. They overlap, but AIO is built for how AI gathers and trusts information, which is different from how a search list works."
            }
          },
          {
            "@type": "Question",
            "name": "Can you really influence what AI says about my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cannot control an AI directly, but AI tools learn from the information available about you online. By making that information clear, accurate, consistent and trustworthy, we strongly improve the chance that AI knows and recommends you."
            }
          },
          {
            "@type": "Question",
            "name": "Is AIO worth it for a small local business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. As your customers adopt AI tools, being one of the few local businesses the AI knows can put you well ahead of competitors who are invisible in that space."
            }
          },
          {
            "@type": "Question",
            "name": "Does AIO replace SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. It adds to it. SEO still matters for Google. AIO prepares you for the growing number of people using AI. Together they cover both worlds."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/aio/#breadcrumb`,
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
            "name": "AI Optimization",
            "item": `${siteUrl}/services/aio`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>AI Optimization (AIO)</span>
          <h1 className="service-hero-title">Your customers are starting to ask AI, not Google. Make sure AI knows you.</h1>
          <p className="service-hero-sub">
            A growing number of people now ask AI tools for answers and recommendations. If those tools do not know your business, you simply do not exist in that conversation. AIO fixes that.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free AI Visibility Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Find out if AI tools know your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">AI Shifts</span>
          <h2 className="section-title">A customer in Bangalore is no longer Googling. They are asking AI.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A young professional in Bangalore wants to redo her flat. A year ago she would have Googled "interior designers in Bangalore" and compared ten websites. Today, she opens an AI assistant and types, "Suggest a good interior designer in Bangalore for a 2BHK on a mid-range budget."
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            The AI gives her three names. She contacts them. The other twenty designers in the city never had a chance, because the AI did not mention them. AIO is how we make sure your business is one of the names the AI knows and trusts enough to suggest.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Analogy */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Analogy</span>
          <h2 className="section-title">AIO is like making sure your name is in the directory everyone now uses.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Years ago, every business wanted to be in the phone directory, because that is where customers looked. Then it was Google. Now, a new directory is forming inside AI tools, built from what these tools have learned about businesses online.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            If your information online is unclear, outdated or missing, the AI cannot include you. AIO makes your business clear, consistent and trustworthy across the web, so the AI confidently knows who you are and what you do.
          </p>
        </div>
      </section>

      {/* SECTION 4 — What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">How we make your business AI-ready.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear, consistent information.</strong> The same accurate details about your business everywhere online, so AI is not confused.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Content AI can understand.</strong> Pages written and structured so AI tools can read, trust and use them.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Strong online footprint.</strong> Reviews, listings and mentions that tell AI your business is real and reputable.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Question-focused content.</strong> Answering the questions customers actually ask AI about your kind of business.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Ongoing updates.</strong> Keeping your information fresh as AI tools evolve.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 — What You Get */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">AIO Outcomes</span>
            <h2 className="section-title">The result.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Your business known and mentioned by AI tools",
              "Visibility with customers who have stopped using normal search",
              "A clear, trusted presence across the web",
              "An early lead while most competitors ignore this shift"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — FAQ (AIO) */}
      <section className="section-padding faq-section" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "What is AI optimization in simple words?",
                a: "AI optimization, or AIO, means preparing your business information online so that AI tools understand it, trust it, and include your business when people ask them questions or for recommendations."
              },
              {
                q: "Why does AIO matter now?",
                a: "More people are using AI tools instead of search engines to find services and make decisions. If AI does not know your business, you miss every customer who asks AI instead of Googling. Starting early gives you an advantage."
              },
              {
                q: "How is AIO different from SEO?",
                a: "SEO focuses on ranking in search engines like Google. AIO focuses on being visible and recommended inside AI tools. They overlap, but AIO is built for how AI gathers and trusts information, which is different from how a search list works."
              },
              {
                q: "Can you really influence what AI says about my business?",
                a: "We cannot control an AI directly, but AI tools learn from the information available about you online. By making that information clear, accurate, consistent and trustworthy, we strongly improve the chance that AI knows and recommends you."
              },
              {
                q: "Is AIO worth it for a small local business?",
                a: "Yes. As your customers adopt AI tools, being one of the few local businesses the AI knows can put you well ahead of competitors who are invisible in that space."
              },
              {
                q: "Does AIO replace SEO?",
                a: "No. It adds to it. SEO still matters for Google. AIO prepares you for the growing number of people using AI. Together they cover both worlds."
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
            Be visible in the way customers are starting to search.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free AI Visibility Review →
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
