import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeGuideClient from "./FreeGuideClient";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Free Website Conversion Cheat Sheet | 10 Tips to Get More Leads | Bizy Site",
  description: "Download the free Website Conversion Cheat Sheet. 10 proven tips to turn more visitors into leads, without spending more on ads. Made for Indian businesses.",
  keywords: "website conversion cheat sheet, get more leads, conversion rate optimization tips, grow website sales India",
  alternates: {
    canonical: "/free-guide",
  },
  openGraph: {
    title: "Free Website Conversion Cheat Sheet | 10 Tips to Get More Leads | Bizy Site",
    description: "Download the free Website Conversion Cheat Sheet. 10 proven tips to turn more visitors into leads, without spending more on ads. Made for Indian businesses.",
    url: `${siteUrl}/free-guide`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Conversion Cheat Sheet | 10 Tips to Get More Leads | Bizy Site",
    description: "Download the free Website Conversion Cheat Sheet. 10 proven tips to turn more visitors into leads, without spending more on ads. Made for Indian businesses.",
  },
};

export default function FreeGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/free-guide/#webpage`,
        "url": `${siteUrl}/free-guide`,
        "name": "Free Website Conversion Cheat Sheet"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/free-guide/#breadcrumb`,
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
            "name": "Free Guide",
            "item": `${siteUrl}/free-guide`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Free Download</span>
          <h1 className="service-hero-title">Your website is getting visitors. Why are so few of them becoming customers?</h1>
          <p className="service-hero-sub">
            Download our free Website Conversion Cheat Sheet, 10 proven tips to turn more of your visitors into leads, without spending a single rupee more on ads. Written for Indian businesses.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Why This Guide */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Conversion Gap</span>
          <h2 className="section-title">Most websites quietly lose customers. This shows you where.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Half of all visitors leave a website without scrolling past the first screen. The average site turns only 1 to 3 out of every 100 visitors into an enquiry. The good news: most of these losses come from a handful of fixable mistakes.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            This cheat sheet walks you through the 10 most common ones, and exactly how to fix them, in simple language, with examples from Indian businesses like clinics, coaching centres, builders and CA firms.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What Is Inside */}
      <section className="section-padding" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Cheat Sheet Chapters</span>
            <h2 className="section-title">10 practical tips you can use today.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              "How to make your first screen stop visitors from leaving",
              "Headlines that make people want to read more",
              "The one button change that can lift your leads",
              "The small line of text that removes hesitation before contact",
              "Why your page speed is quietly costing you enquiries",
              "How to build forms people actually fill",
              "Where to place reviews so they convince, not just decorate",
              "The most ignored page on your website, and how to use it",
              "A simple checklist to score your own website"
            ].map((tip, index) => (
              <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "var(--white)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "14px", color: "var(--text)", fontWeight: "600", lineHeight: "1.5" }}>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeGuideClient />

      {/* SECTION 5 — Soft CTA */}
      <section className="section-padding" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Audit Services</span>
          <h2 className="section-title">Would you rather we just take a look for you?</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "32px" }}>
            If you would prefer, we can review your website ourselves and tell you exactly what is costing you leads, for free.
          </p>
          <div className="cta-wrapper">
            <Link href="/contact?type=audit" className="btn btn-navy" style={{ padding: "14px 32px" }}>
              Get My Free Website Audit →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
