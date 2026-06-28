"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const posts = [
    {
      slug: "aeo-guide",
      title: "The Complete Guide to AEO: Why Ten Blue Links Are Dying",
      excerpt: "Traditional search engines are transitioning into answer engines. Here is how to format your site so Siri, Alexa, and Google cite your brand.",
      date: "June 24, 2026",
      category: "AEO Optimization"
    },
    {
      slug: "website-conversion-secrets",
      title: "5 Design Elements That Are Leaking Leads on Your Website",
      excerpt: "Is your website pretty but quiet? We analyze five common user interface mistakes that cause buyers to exit without leaving inquiries.",
      date: "June 18, 2026",
      category: "Conversion CRO"
    },
    {
      slug: "generative-engine-optimization-india",
      title: "GEO in India: How to Rank in ChatGPT Search and Google AI Overviews",
      excerpt: "Generative search is replacing standard ads. Here is how Indian brands can optimize content structures to dominate Perplexity citations.",
      date: "June 10, 2026",
      category: "Generative Search (GEO)"
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Blog & Resources</h1>
          <p className="service-hero-sub">
            In-depth guides, case breakdowns, and search optimization news for growth-focused business founders.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-card-content">
                  <span className="blog-card-meta">{post.category} | {post.date}</span>
                  <h3 className="blog-card-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  
                  <Link href={`/blog/${post.slug}`} className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                    Read Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Want clarity on your own website's performance?</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit and we'll analyze your SEO, CRO, and AI search visibility in 48 hours.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free Website Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
