"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIO() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do LLMs decide which brands to recommend?",
      a: "LLMs (like GPT-4, Gemini, Claude) evaluate brands based on topical authority, citation density across high-authority publications, consistent brand relationships in public knowledge graphs (like Wikidata), and semantic context in industry forums."
    },
    {
      q: "Is AIO different from SEO?",
      a: "Yes. Traditional SEO optimizes for keyword algorithms to rank links. AIO optimizes for LLM vector spaces, ensuring your brand's relationships, reviews, specifications, and authority points are ingested and recalled by generative transformers."
    },
    {
      q: "Which AI models do you optimize for?",
      a: "We optimize for the major AI models: OpenAI (ChatGPT), Google (Gemini/AI Overviews), Anthropic (Claude), and Microsoft (Copilot)."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Your Competitors Are Invisible to AI. You Don't Have to Be.</h1>
          <p className="service-hero-sub">
            AIO ensures ChatGPT, Gemini, Claude, and other AI models recognize, source, and recommend your brand to research-heavy buyers.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free AIO Assessment →
          </Link>
        </div>
      </section>

      {/* What is AIO? */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">AI Search Readiness</span>
            <h2 className="section-title">What is AI Optimization (AIO)?</h2>
          </div>
          
          <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "20px", padding: "32px", marginTop: "32px" }}>
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: "1.7", fontWeight: "600", marginBottom: "16px" }}>
              AIO is the methodology of structuring your digital footprint so that Large Language Models (LLMs) extract, list, and rank your brand during conversational product research.
            </p>
            <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6" }}>
              When a user asks Claude: "Which is the most reliable shipping API for D2C brands in India?", the model queries its training weights and real-time search citations. AIO ensures that your brand has the semantic authority to be cited as the top suggestion.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag light">The AI Blindspot</span>
          <h2 className="section-title text-white" style={{ fontSize: "clamp(24px, 4vw, 32px)", marginTop: "12px" }}>
            If You Aren't in Their Training Weights or Citations, You Don't Exist.
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", lineHeight: "1.7", marginTop: "20px" }}>
            AI models confidently recommend products and services. If your company lacks authoritative citations, structured knowledge mapping, and review density, AI engines will filter your brand out. Your business becomes invisible to modern buyers.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">AIO Capabilities</span>
            <h2 className="section-title">How We Build AI Visibility</h2>
            <p className="section-sub">Systematically establishing your brand's presence in LLM weights.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">Knowledge Graph Integration</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We seed and optimize your brand profile across Wikidata, Crunchbase, and entity indexes used by AI model creators.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Citation Network Building</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We secure brand mentions, product comparisons, and backlinks in publications that serve as primary AI retrieval sources.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Topical Authority Content</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We write deep semantic guides that comprehensively cover your industry entities, helping LLM crawler scrapers map your site.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Review & Sentiment Density</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We manage reviews across G2, Trustpilot, and maps to increase sentiment scoring, which is analyzed heavily by LLMs.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">LLM Retrieval Testing</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We query LLM models systematically to check if your brand is recommended, measure retrieval frequency, and track sentiment.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">JSON-LD Metadata</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We implement structured metadata explicitly identifying your founders, services, locations, and brand entities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs AIO */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Target Audience</span>
            <h2 className="section-title">Who Needs AIO?</h2>
            <p className="section-sub">AIO is critical for brands in research-heavy niches where buyers consult AI before contacting sales.</p>
          </div>

          <div className="pain-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div className="pain-card">
              <h3 className="pain-title">B2B & SaaS</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px" }}>
                IT decision-makers and developers query ChatGPT to compare software APIs, features, and platform reliability before booking sales demos.
              </p>
            </div>
            <div className="pain-card">
              <h3 className="pain-title">Premium D2C Brands</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px" }}>
                Modern buyers consult Gemini or Claude to find high-end products (e.g. "What are the best organic mattress brands with free delivery in Bengaluru?").
              </p>
            </div>
            <div className="pain-card">
              <h3 className="pain-title">Professional Services</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px" }}>
                Firms targeting seed-funded startups, corporate restructurings, or tax planning depend on being recommended by AI advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
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
          <h2 className="section-title text-white">Get recommended by AI.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free AIO assessment and see if ChatGPT or Gemini can find your business.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free AIO Assessment →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
