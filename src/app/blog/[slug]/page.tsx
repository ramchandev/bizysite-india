"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const postData = {
  "aeo-guide": {
    title: "The Complete Guide to AEO: Why Ten Blue Links Are Dying",
    category: "AEO Optimization",
    date: "June 24, 2026",
    content: `
      <p>Search behaviour is shifting. Historically, search engines functioned as directories, listing a page of links (the "Ten Blue Links") in response to a keyword query. Users had to open multiple sites, scan content, and synthesize their own answers.</p>
      <p>Today, search platforms are answer engines. Users ask questions conversational in nature (e.g. "How do I audit my website's technical health?"), and algorithms read or display a single definitive answer, bypassing listing links entirely. This transition is called Answer Engine Optimization (AEO).</p>
      
      <h3>The Zero-Click Search Era</h3>
      <p>According to recent analysis, over 60% of Google queries now conclude without the user visiting any external site. They read the definition directly in the featured snippet or People Also Ask boxes. If your company depends on standard link traffic, your search visibility is actively shrinking.</p>
      
      <h3>How to Optimize Your Content for AEO</h3>
      <p>To capture zero-click answers, your content architecture must match query extraction algorithms:</p>
      <ul>
        <li><strong>QA Formatting:</strong> Restructure top headings as direct questions, followed immediately by a concise, definition-style answer (under 50 words).</li>
        <li><strong>Speakable Schema:</strong> Inject custom JSON-LD speakable markup so voice assistants (Siri, Alexa, Google Assistant) can locate and read your paragraphs.</li>
        <li><strong>Semantic HTML:</strong> Maintain clean heading flows (H1, H2, H3) to establish clear hierarchy for indexing crawlers.</li>
      </ul>
    `
  },
  "website-conversion-secrets": {
    title: "5 Design Elements That Are Leaking Leads on Your Website",
    category: "Conversion CRO",
    date: "June 18, 2026",
    content: `
      <p>Many business owners spend large amounts of money driving Google search and Meta social traffic to their websites, only to watch visitors exit without submitting inquiries. The issue isn't the traffic quality; it's the post-click friction built into the website layout.</p>
      <p>A pretty design that doesn't direct user attention is a liability. Here are the five layout mistakes that are causing you to lose leads:</p>
      
      <h3>1. Cluttered Hero Layouts</h3>
      <p>If a visitor cannot understand what your business does and what action they should take within three seconds of landing, they will close the tab. Keep the hero title clear, and make the main action button stand out.</p>
      
      <h3>2. Long, High-Friction Forms</h3>
      <p>Forms asking for budgets, locations, company details, and phone numbers in a single page drop conversion rates significantly. Re-author forms into multi-step wizards or simple inputs (Name, Email, WhatsApp) to reduce friction.</p>
      
      <h3>3. Slow Mobile Speeds</h3>
      <p>Over 80% of local traffic operates on mobile connections. If your page takes longer than 3 seconds to load due to heavy images or scripts, your bounce rate doubles.</p>
      
      <h3>4. Distracting Navigation Menus</h3>
      <p>If you offer dozens of links, users get confused. Limit primary menu selections, and direct users to a single clear next step (like a Free Audit or booking call).</p>
      
      <h3>5. Poor Trust Placements</h3>
      <p>Placing client reviews and security badges only at the bottom of the page is ineffective. Place reviews, stats, and trust indicators near key forms and call-to-actions to ease anxiety.</p>
    `
  },
  "generative-engine-optimization-india": {
    title: "GEO in India: How to Rank in ChatGPT Search and Google AI Overviews",
    category: "Generative Search (GEO)",
    date: "June 10, 2026",
    content: `
      <p>Google AI Overviews now appear at the top of organic search results, and Perplexity is growing 3× year-over-year. Traditional Google search traffic is declining because users prefer conversational answers synthesized by AI search engines.</p>
      <p>To defend your market share, you must optimize for Generative Engine Optimization (GEO). This means structuring your website data so AI crawlers index your product, cite your sentences, and link back to your pages.</p>
      
      <h3>How Generative Retrieval Bots Select Sources</h3>
      <p>AI summarizers gather references by scanning highly authoritative web documents. They prioritize resources containing:</p>
      <ul>
        <li><strong>Structured Tables:</strong> Clear comparison spreadsheets, feature checklists, and specifications tables are easy for LLMs to extract and format.</li>
        <li><strong>Entity Consistency:</strong> Having consistent organization profiles, Wikipedia definitions, and Crunchbase indexes makes you highly credible to AI indexing crawlers.</li>
        <li><strong>Topical Authority Depth:</strong> Comprehensive guides covering all related facets of an industry outperform short, surface-level articles.</li>
      </ul>
      <p>By optimizing for GEO today, you establish a massive first-mover advantage before competitors catch on to AI search citations.</p>
    `
  }
};

type ParamsPromise = Promise<{ slug: string }>;

export default function BlogDetail({ params }: { params: ParamsPromise }) {
  const { slug } = use(params);
  const post = postData[slug as keyof typeof postData];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content" style={{ textAlign: "left" }}>
          <Link href="/blog" style={{ color: "var(--teal)", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px", fontWeight: "700" }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className="market-tag" style={{ marginLeft: 0, display: "inline-block", marginBottom: "16px" }}>{post.category}</span>
          <h1 className="service-hero-title" style={{ fontSize: "clamp(28px, 4vw, 36px)", lineHeight: "1.2" }}>{post.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "600" }}>Published: {post.date}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <article 
            style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "20px" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Sidebar CTA style banner */}
          <div style={{ marginTop: "48px", background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px" }}>
            <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "18px", marginBottom: "10px" }}>
              Are you curious about your website's search performance?
            </h4>
            <p style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.6", marginBottom: "20px" }}>
              We'll review your website speed, technical SEO setups, organic keywords, and AI engine indexation points, and send you a detailed audit report in 48 hours, free of charge.
            </p>
            <Link href="/contact" className="btn btn-navy">
              Request Your Free Website Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
