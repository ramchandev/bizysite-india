"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AEO() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is AEO different from traditional SEO?",
      a: "Yes. Traditional SEO focuses on optimizing web pages to rank in a list of links on a search page. AEO focuses on structuring your content semantically so answer engines (like Google Featured Snippets, Siri, Alexa, and Google Assistant) can extract a single definitive answer and read it to the user."
    },
    {
      q: "What search platforms does AEO optimize for?",
      a: "AEO targets zero-click platforms: Google Featured Snippets, Google People Also Ask (PAA) boxes, voice assistants (Google Assistant, Siri, Alexa), and desktop AI-integrated search results."
    },
    {
      q: "How long before our brand starts showing up as the answer?",
      a: "Because AEO relies heavily on technical schema tags and clear content markup, Google crawls and indexes these quickly. Once the schemas and structured QA formats are deployed, you can see initial snippets activate in 2 to 4 weeks."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">When Someone Asks Google a Question, Is Your Business the Answer?</h1>
          <p className="service-hero-sub">
            AEO makes your brand the trusted, cited answer in featured snippets, voice search, and Google quick-answer formats.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free AEO Audit →
          </Link>
        </div>
      </section>

      {/* What is AEO? */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">New Search Horizon</span>
            <h2 className="section-title">What is Answer Engine Optimization (AEO)?</h2>
          </div>
          
          <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "20px", padding: "32px", marginTop: "32px" }}>
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: "1.7", fontWeight: "600", marginBottom: "16px" }}>
              In simple terms: AEO is the practice of optimizing your site content so that search algorithms can instantly copy and display a snippet of your text as the direct answer to a user's question.
            </p>
            <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6" }}>
              Instead of browsing a list of ten blue links, modern users ask direct questions (e.g., "What is the best CRM integration for Indian retail?"). AEO structures your answers so Google copies your sentence directly and places it at the very top of search results.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Now */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag light">The Zero-Click Reality</span>
          <h2 className="section-title text-white" style={{ fontSize: "clamp(24px, 4vw, 32px)", marginTop: "12px" }}>
            Over 60% of Google Searches Now End Without a Click.
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", lineHeight: "1.7", marginTop: "20px" }}>
            Users find their answer directly in the Google search result interface (in snippets or PAA accordions) and never visit a website. If your brand is not serving those snippets, you lose that brand impression completely.
          </p>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px", lineHeight: "1.7", marginTop: "16px" }}>
            By optimizing for AEO, you position your brand as the single authoritative source directly in these zero-click answer blocks.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">AEO Strategy</span>
            <h2 className="section-title">How We Make You the Answer</h2>
            <p className="section-sub">Technical and content-level optimizations built for quick extraction.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">FAQ Structuring</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We reformat landing page content into direct question-and-answer pairs matching exact user query phrasing.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Schema Markup</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We build and insert JSON-LD schemas (FAQPage, Speakable, HowTo) so answer bots parse content types easily.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Featured Snippet Targeting</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We write concise paragraphs, comparison lists, and tables designed to match Google's snippet length triggers.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Voice Search Optimization</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We optimize for natural conversational phrases, voice intent keywords, and mobile search queries.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Semantic Headings</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We index copy using strict heading structures (H1, H2, H3) that map query relationships cleanly.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Knowledge Graph Sync</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We connect your organization profile, social accounts, and local branch indexes to verify your brand's authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Process */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">AEO Framework</span>
            <h2 className="section-title">Bizy Site's AEO Process</h2>
          </div>

          <div className="success-roadmap" style={{ marginTop: "32px" }}>
            <div className="roadmap-step">
              <div className="roadmap-num">1</div>
              <div className="roadmap-details">
                <h4>Query Research</h4>
                <p>We analyze Google PAA boxes, keyword intent profiles, and voice assistant trends to build your custom Q&A catalog.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">2</div>
              <div className="roadmap-details">
                <h4>Content Re-authoring</h4>
                <p>We write concise, definition-style answers and construct comparison matrix grids for high-intent queries.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">3</div>
              <div className="roadmap-details">
                <h4>Technical Integration</h4>
                <p>We inject custom JSON-LD schemas and verify structure validity in Google Rich Results console.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">4</div>
              <div className="roadmap-details">
                <h4>Snippet Tracking</h4>
                <p>We track snippet activation, monitor voice query impressions, and adjust answer formats to defend snippet positions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Early Result */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Early Wins</span>
          <div style={{ background: "var(--teal-light)", color: "var(--teal-dark)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(43,191,191,0.2)", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>Snippet Domination</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--text-mid)" }}>
              "Within 3 weeks of deploying FAQ schema and definition parameters for our client's loan comparison product, they captured 14 Google Featured Snippets and People Also Ask placements, lifting click CTR by 38%."
            </p>
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
          <h2 className="section-title text-white">Be the definitive answer.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit report and see if your current site is optimized for voice and featured answers.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free AEO Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
