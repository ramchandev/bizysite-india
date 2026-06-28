"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Table } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GEO() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the difference between GEO and traditional SEO?",
      a: "Traditional SEO targets index algorithms to list your page in a set of ten blue links. GEO (Generative Engine Optimization) optimizes content explicitly for generative summarizers (like Google AI Overviews and Perplexity). It ensures your content is selected as a cited source, and your product is actively named inside the AI-written summary paragraph."
    },
    {
      q: "How does Perplexity pull source information?",
      a: "Perplexity performs real-time queries using web crawlers, retrieves high-ranking documents, synthesizes them using LLMs, and embeds inline citation links to the source. GEO makes sure your content matches their retrieval format, offering concise facts, structured tables, and deep entity coverage."
    },
    {
      q: "Are the citations in Google AI Overviews valuable?",
      a: "Yes. Google AI Overviews sit above standard organic links. Users read the AI summary first, and the cited cards next to or inside the text receive the highest click-through rates (CTR) on the page. Capturing these citations is the new standard for organic search traffic."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Appear in the AI Search Results That Are Replacing Google Ads</h1>
          <p className="service-hero-sub">
            GEO optimizes your brand, content, and structured data to appear as the cited source inside generated responses from Perplexity, Google AI Overviews, and Bing Copilot.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free GEO Strategy Call →
          </Link>
        </div>
      </section>

      {/* What is GEO? */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">First-Mover Advantage</span>
            <h2 className="section-title">What is Generative Engine Optimization (GEO)?</h2>
          </div>
          
          <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "20px", padding: "32px", marginTop: "32px" }}>
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: "1.7", fontWeight: "600", marginBottom: "16px" }}>
              GEO is the engineering practice of structuring web copy, citations, and data to rank inside generative summaries produced by real-time AI search bots.
            </p>
            <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6" }}>
              When Perplexity searches the web to answer: "What are the compliance requirements for hiring remote developers in India?", it reads the top results and writes a custom summary. GEO ensures your website is the source Perplexity references, quotes, and links to.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag light">The Shift is Already Here</span>
          <h2 className="section-title text-white" style={{ fontSize: "clamp(24px, 4vw, 32px)", marginTop: "12px" }}>
            Google AI Overviews Now Appear in 30%+ of All Search Queries.
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", lineHeight: "1.7", marginTop: "20px" }}>
            Perplexity is growing 3× year-over-year, conducting millions of direct research searches daily. Standard search traffic is declining because users prefer synthesized AI summaries. Early movers who optimize for generative citations are capturing the market share before competitors catch on.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">GEO Strategy</span>
            <h2 className="section-title">How We Optimize for Generative Search</h2>
            <p className="section-sub">Techniques designed to match AI information-retrieval patterns.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">Source Authority Building</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We secure brand placements in publications, indexes, and reference databases queried by generative retrieval models.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Structured Data Systems</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We format specifications, lists, and numbers in tables and bullet matrices, formats heavily preferred by AI summarizers.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Topical Depth Content</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We write pages with deep semantic coverage of industry entities, answering primary, secondary, and tertiary search questions.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">AI Citation Optimization</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We write clear, quote-style definition blocks that bot scrapers can easily lift and paste into summarizing loops.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Real-Time Search Audits</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We run test queries across Perplexity and AI Overviews, mapping where your brand is cited and identifying keyword gap leaks.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Local Entity Mapping</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We verify address schemas and local business structures so AI map search models suggest your branch coordinates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO vs AIO vs GEO Comparison Table */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Comparison</span>
            <h2 className="section-title">SEO vs AEO vs AIO vs GEO</h2>
            <p className="section-sub">Understanding the different stages of the search revolution.</p>
          </div>

          <div className="comparison-matrix-wrapper">
            <table className="comparison-matrix">
              <thead>
                <tr>
                  <th>Methodology</th>
                  <th>Target Interface</th>
                  <th>Core Optimization Focus</th>
                  <th>Value Proposition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Traditional SEO</strong></td>
                  <td>List of Ten Blue Links</td>
                  <td>Keyword matching, link building, domain authority rankings</td>
                  <td>Drives standard click traffic to website pages.</td>
                </tr>
                <tr>
                  <td><strong>AEO (Answer Engine)</strong></td>
                  <td>Featured Snippets, Voice Assistants</td>
                  <td>Direct Q&A structuring, JSON FAQ schemas, voice intent</td>
                  <td>Secures top-of-page zero-click text answers.</td>
                </tr>
                <tr>
                  <td><strong>AIO (AI Optimization)</strong></td>
                  <td>ChatGPT, Gemini, Claude (Static Models)</td>
                  <td>Wikidata seeding, G2 reviews, topical database mention</td>
                  <td>Ensures brand recognition inside LLM training weights.</td>
                </tr>
                <tr>
                  <td><strong>GEO (Generative Engine)</strong></td>
                  <td>Perplexity, Google AI Overviews (Hybrid Models)</td>
                  <td>Structured tables, citation network mentions, clear definitions</td>
                  <td>Secures source citation cards inside AI summary blocks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study / Early Wins */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Early Wins</span>
          <div style={{ background: "var(--teal-light)", color: "var(--teal-dark)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(43,191,191,0.2)" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>Perplexity Citation Domination</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--text-mid)", marginBottom: "16px" }}>
              "By structuring our B2B client's industry benchmark data into comparison tables and optimization schemas, we secured primary citations on Perplexity and Google AI Overviews for 18 high-intent queries, driving direct demo signups."
            </p>
            <span style={{ fontSize: "12px", color: "var(--navy)", fontWeight: "bold" }}>Result: 42% lift in direct demo attribution from AI engines</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "32px" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card-custom">
                <button 
                  className="faq-trigger-custom"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaq === idx ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {openFaq === idx && (
                  <div className="faq-content-custom">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Dominate the AI search results.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit and review your website's visibility on generative search engines.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free GEO Strategy Call →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
