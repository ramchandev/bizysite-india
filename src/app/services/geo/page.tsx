import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Search, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Generative Engine Optimization (GEO) in India | Get Recommended by ChatGPT | Bizy Site",
  description: "When customers ask ChatGPT and other AI tools for a recommendation, GEO helps your business be the one they suggest. Get a free GEO visibility review.",
  keywords: "generative engine optimization India, get recommended by ChatGPT, GEO marketing services, AI search recommendation engine, Perplexity SEO India",
  alternates: {
    canonical: "/services/geo",
  },
  openGraph: {
    title: "Generative Engine Optimization (GEO) in India | Get Recommended by ChatGPT | Bizy Site",
    description: "When customers ask ChatGPT and other AI tools for a recommendation, GEO helps your business be the one they suggest. Get a free GEO visibility review.",
    url: "https://bizysite.in/services/geo",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative Engine Optimization (GEO) in India | Get Recommended by ChatGPT | Bizy Site",
    description: "When customers ask ChatGPT and other AI tools for a recommendation, GEO helps your business be the one they suggest. Get a free GEO visibility review.",
  },
};

export default function GEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/services/geo/#service",
        "name": "Generative Engine Optimization (GEO)",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Helps your business be the one ChatGPT and other AI engines suggest.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/services/geo/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is generative engine optimization in simple words?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generative engine optimization, or GEO, means improving how your business appears to AI tools like ChatGPT, so that when someone asks them for a recommendation, your business is one they suggest."
            }
          },
          {
            "@type": "Question",
            "name": "Can you control what ChatGPT says about my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No one can directly control an AI's answer. But these tools build their recommendations from information and reputation found online. By improving that, we strongly increase the chance your business is recommended."
            }
          },
          {
            "@type": "Question",
            "name": "How is GEO different from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO helps you rank in search results. GEO helps you get mentioned and recommended inside AI answers. The skills overlap, but GEO focuses on reputation and trust signals that AI tools rely on."
            }
          },
          {
            "@type": "Question",
            "name": "Is GEO useful for a small business in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Because few businesses are paying attention to this yet, getting ahead now can make your business one of the first the AI recommends in your city and industry."
            }
          },
          {
            "@type": "Question",
            "name": "How long does GEO take to work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Like reputation in real life, it builds over time. As your online presence, reviews and authority grow, AI tools become more likely to mention you. It is an ongoing effort, not a one-time fix."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need AEO, AIO and GEO separately?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They are closely linked and often done together. We assess where your business stands and focus on what gives you the most visibility for your goals and budget."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/services/geo/#breadcrumb",
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
            "name": "Services",
            "item": "https://bizysite.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Generative Engine Optimization",
            "item": "https://bizysite.in/services/geo"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Generative Engine Optimization (GEO)</span>
          <h1 className="service-hero-title">When AI recommends a business, it should be recommending yours.</h1>
          <p className="service-hero-sub">
            Tools like ChatGPT now answer "who should I hire?" for millions of people. GEO is the work of making your business the one these AI tools mention and recommend.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free GEO Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>See if AI is recommending you or your rivals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">AI Recommendations</span>
          <h2 className="section-title">Someone in Hyderabad just asked ChatGPT to pick for them.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A startup founder in Hyderabad needs a website. Instead of searching and comparing, he simply asks ChatGPT, "Recommend a reliable web design company in Hyderabad for a small business."
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            ChatGPT gives him a short, confident list. He reaches out to those names first. Every other agency in the city is now competing for second place, if they get a chance at all. GEO decides whether your business makes that shortlist. Being recommended by AI is becoming the new word-of-mouth.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Analogy */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Analogy</span>
          <h2 className="section-title">GEO is like becoming the brand a trusted expert keeps recommending.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Imagine a respected expert that thousands of people listen to. Every time someone asks them for a recommendation, they suggest a few trusted names. If your business is one of those names, customers come to you already trusting you.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            AI tools are becoming that expert for a huge number of people. GEO is how we earn your business a place on the list the AI confidently recommends.
          </p>
        </div>
      </section>

      {/* SECTION 4 — What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">How we earn you the recommendation.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Build your reputation online.</strong> Reviews, mentions and credible references AI tools learn from.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Create authoritative content.</strong> Helpful, expert content that positions you as a trusted choice.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Ensure consistency.</strong> Accurate, matching information everywhere, so AI trusts your details.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Answer buying questions.</strong> Content addressing exactly what customers ask before choosing.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Strengthen trust signals.</strong> Proof, results and credibility that make you recommendation-worthy.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 — What You Get */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">GEO Outcomes</span>
            <h2 className="section-title">The result.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Your business suggested when people ask AI for a recommendation",
              "A place on the shortlist before competitors are even considered",
              "Trust transferred from the AI to your brand",
              "An advantage in a space most businesses have not noticed yet"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — How AEO, AIO and GEO Differ */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Frameworks</span>
            <h2 className="section-title">Three similar terms, one simple way to remember them.</h2>
            <p className="section-sub" style={{ marginBottom: "32px" }}>
              People mix these up. Here is the easy version.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="pain-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "var(--navy)", marginBottom: "8px" }}>AEO is about being the answer</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", margin: 0 }}>
                Being the answer to a question (often by voice or in Google's answer box).
              </p>
            </div>
            
            <div className="pain-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "var(--navy)", marginBottom: "8px" }}>AIO is about AI knowing your business</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", margin: 0 }}>
                Making sure AI tools know your business exists and understanding it correctly.
              </p>
            </div>

            <div className="pain-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "var(--navy)", marginBottom: "8px" }}>GEO is about AI recommending your business</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", margin: 0 }}>
                Getting AI to suggest you when someone asks who to choose.
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "32px", fontSize: "15px", fontWeight: "700", color: "var(--teal-dark)" }}>
            Think of it as a chain: AI must know you (AIO), trust you enough to answer with you (AEO), and like you enough to recommend you (GEO). We handle all three.
          </p>
        </div>
      </section>

      {/* SECTION 7 — FAQ (GEO) */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "What is generative engine optimization in simple words?",
                a: "Generative engine optimization, or GEO, means improving how your business appears to AI tools like ChatGPT, so that when someone asks them for a recommendation, your business is one they suggest."
              },
              {
                q: "Can you control what ChatGPT says about my business?",
                a: "No one can directly control an AI's answer. But these tools build their recommendations from information and reputation found online. By improving that, we strongly increase the chance your business is recommended."
              },
              {
                q: "How is GEO different from SEO?",
                a: "SEO helps you rank in search results. GEO helps you get mentioned and recommended inside AI answers. The skills overlap, but GEO focuses on reputation and trust signals that AI tools rely on."
              },
              {
                q: "Is GEO useful for a small business in India?",
                a: "Yes. Because few businesses are paying attention to this yet, getting ahead now can make your business one of the first the AI recommends in your city and industry."
              },
              {
                q: "How long does GEO take to work?",
                a: "Like reputation in real life, it builds over time. As your online presence, reviews and authority grow, AI tools become more likely to mention you. It is an ongoing effort, not a one-time fix."
              },
              {
                q: "Do I need AEO, AIO and GEO separately?",
                a: "They are closely linked and often done together. We assess where your business stands and focus on what gives you the most visibility for your goals and budget."
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
            Be the business AI recommends.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free GEO Review →
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
