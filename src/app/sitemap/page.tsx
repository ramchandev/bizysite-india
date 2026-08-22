import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sitemap | Bizy Site",
  description: "All pages on the Bizy Site website, in one place.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapHtml() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/sitemap/#webpage`,
    "url": `${siteUrl}/sitemap`,
    "name": "HTML Sitemap"
  };

  const blogSection = {
    title: "Blog & Guides",
    links: blogPosts.map(post => ({
      name: post.title,
      href: `/blog/${post.category.toLowerCase().replace(/ /g, "-")}/${post.slug}`
    }))
  };

  const sections = [
    {
      title: "Core Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Work & Portfolio", href: "/work" },
        { name: "Blog & Resources", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
        { name: "Free Website Conversion Guide", href: "/free-guide" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Services Overview (Pillar)", href: "/services" },
        { name: "Website Design & Development", href: "/services/web-design" },
        { name: "Conversion Rate Optimization (CRO)", href: "/services/cro" },
        { name: "Search Engine Optimization (SEO)", href: "/services/seo" },
        { name: "Answer Engine Optimization (AEO)", href: "/services/aeo" },
        { name: "AI Optimization (AIO)", href: "/services/aio" },
        { name: "Generative Engine Optimization (GEO)", href: "/services/geo" },
        { name: "Google Business Profile Optimization", href: "/services/google-business-profile" },
        { name: "Google & Meta Ads Management", href: "/services/ads" },
        { name: "Social Media Management", href: "/services/social-media-management" }
      ]
    },
    {
      title: "Locations",
      links: [
        { name: "Locations Overview", href: "/locations" },
        { name: "Chennai", href: "/locations/chennai" },
        { name: "Coimbatore", href: "/locations/coimbatore" },
        { name: "Mumbai", href: "/locations/mumbai" },
        { name: "Bangalore", href: "/locations/bangalore" },
        { name: "Pune", href: "/locations/pune" },
        { name: "Delhi NCR", href: "/locations/delhi" },
        { name: "Hyderabad", href: "/locations/hyderabad" }
      ]
    },
    {
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "AI Policy", href: "/ai-policy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Refund & Cancellation Policy", href: "/refund" },
        { name: "Service Index", href: "/service-index" }
      ]
    },
    blogSection
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <section className="service-hero" style={{ padding: "100px 0 40px 0" }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Index</span>
          <h1 className="service-hero-title">Sitemap</h1>
          <p className="service-hero-sub">
            All pages on the Bizy Site website, organized in one place for easy navigation.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            {sections.map((section, idx) => (
              <div key={idx} style={{ background: "var(--off-white)", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontSize: "18px", color: "var(--navy)", fontWeight: "800", borderBottom: "2px solid var(--teal)", paddingBottom: "10px", marginBottom: "20px" }}>
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href} 
                        style={{ color: "var(--text)", textDecoration: "none", fontSize: "14px", fontWeight: "600", transition: "color 0.2s ease" }}
                        className="sitemap-link-hover"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
