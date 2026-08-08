import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Blog & Resources | Website, SEO & Growth Tips for Indian Businesses | Bizy Site",
  description: "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online. Written simply for Indian businesses.",
  keywords: "SEO tips India, AEO resources, conversion optimization blog, B2B lead generation guides",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Resources | Website, SEO & Growth Tips for Indian Businesses | Bizy Site",
    description: "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online. Written simply for Indian businesses.",
    url: "https://bizysite.in/blog",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Resources | Website, SEO & Growth Tips for Indian Businesses | Bizy Site",
    description: "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online. Written simply for Indian businesses.",
  },
};

export default function Blog() {
  const posts = [
    {
      slug: "aeo-guide",
      title: "The Complete Guide to AEO: Why Ten Blue Links Are Dying",
      excerpt: "Traditional search engines are transitioning into answer engines. Here is how to format your site so Siri, Alexa, and Google cite your brand.",
      date: "June 24, 2026",
      category: "Getting Found (SEO/AEO/AIO/GEO)",
      readTime: "6 min read"
    },
    {
      slug: "website-conversion-secrets",
      title: "5 Design Elements That Are Leaking Leads on Your Website",
      excerpt: "Is your website pretty but quiet? We analyze five common user interface mistakes that cause buyers to exit without leaving inquiries.",
      date: "June 18, 2026",
      category: "Conversions",
      readTime: "5 min read"
    },
    {
      slug: "generative-engine-optimization-india",
      title: "GEO in India: How to Rank in ChatGPT Search and Google AI Overviews",
      excerpt: "Generative search is replacing standard ads. Here is how Indian brands can optimize content structures to dominate Perplexity citations.",
      date: "June 10, 2026",
      category: "Getting Found (SEO/AEO/AIO/GEO)",
      readTime: "7 min read"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://bizysite.in/blog/#blog",
        "url": "https://bizysite.in/blog",
        "name": "Bizy Site Growth Blog",
        "description": "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/blog/#breadcrumb",
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
            "name": "Blog",
            "item": "https://bizysite.in/blog"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Blog & Resources</span>
          <h1 className="service-hero-title">Practical tips to get found online and win more customers.</h1>
          <p className="service-hero-sub">
            No jargon. No fluff. Just clear, useful advice on websites, getting found on Google and AI, and turning visitors into customers, written for Indian business owners.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Article Grid */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Resources</span>
            <h2 className="section-title">Latest articles.</h2>
          </div>

          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--border)" }}>
                <div className="blog-card-content">
                  <span className="blog-card-meta" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--teal-dark)", display: "block", marginBottom: "8px" }}>
                    {post.category} · {post.date} · {post.readTime}
                  </span>
                  <h3 className="blog-card-title" style={{ fontSize: "18px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px", lineHeight: "1.4" }}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blog-card-excerpt" style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "20px" }}>
                    {post.excerpt}
                  </p>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Want us to handle all this for you?
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Get a growth team that integrates advanced SEO, conversion strategy, and AI search presence for you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                Get My Free Quote →
              </Link>
              <p className="cta-microcopy light" style={{ marginTop: "16px", opacity: 0.8 }}>
                Same-day reply. Real experts. Zero pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
