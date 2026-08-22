import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Suspense } from "react";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Blog & Resources | Website, SEO & Growth Tips for Indian Businesses | Bizy Site",
  description: "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online. Written simply for Indian businesses.",
  keywords: "SEO tips India, AEO resources, conversion optimization blog, B2B lead generation guides",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Resources | Website, SEO & Growth Tips for Indian Businesses | Bizy Site",
    description: "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online. Written simply for Indian businesses.",
    url: `${siteUrl}/blog`,
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
  const posts = blogPosts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteUrl}/blog/#blog`,
        "url": `${siteUrl}/blog`,
        "name": "Bizy Site Growth Blog",
        "description": "Practical tips on websites, SEO, getting found on Google and AI, and winning more customers online."
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/blog/#breadcrumb`,
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
            "name": "Blog",
            "item": `${siteUrl}/blog`
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
        <div className="container" style={{ textAlign: "left" }}>
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)", marginLeft: 0 }}>Blog & Resources</span>
          <h1 className="service-hero-title">Practical tips to get found online and win more customers.</h1>
          <p className="service-hero-sub" style={{ marginLeft: 0 }}>
            No jargon. No fluff. Just clear, useful advice on websites, getting found on Google and AI, and turning visitors into customers, written for Indian business owners.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Article Grid & Sidebar */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "left", marginBottom: "40px" }}>
            <span className="section-tag" style={{ marginLeft: 0 }}>Resources</span>
            <h2 className="section-title" style={{ marginLeft: 0 }}>Latest Articles.</h2>
          </div>

          <Suspense fallback={
            <div style={{ textAlign: "center", padding: "48px", color: "var(--text-mid)" }}>
              Loading resources...
            </div>
          }>
            <BlogClient posts={blogPosts} />
          </Suspense>
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
