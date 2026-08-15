import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

function getAuthorForPost(slug: string) {
  const clintonSlugs = ["rank-on-google-maps-india", "seo-vs-google-ads-india", "how-long-does-seo-take-india", "customers-asking-ai-not-google", "get-more-google-reviews", "aeo-guide", "generative-engine-optimization-india"];
  const vivekSlugs = ["website-visitors-but-no-enquiries", "website-conversion-secrets"];
  const ramSlugs = ["do-i-own-my-website"];
  
  if (clintonSlugs.includes(slug)) {
    return { name: "Clinton", title: "Head of SEO" };
  }
  if (vivekSlugs.includes(slug)) {
    return { name: "Vivek", title: "Co-Founder" };
  }
  if (ramSlugs.includes(slug)) {
    return { name: "Ram", title: "Co-Founder" };
  }
  return { name: "Kantha", title: "Chief Technology Officer" };
}

function getThumbnailForPost(slug: string): string {
  const mapping: Record<string, string> = {
    "website-visitors-but-no-enquiries": "/blog_conversion_illustrative.jpg",
    "aeo-guide": "/blog_aeo_guide.jpg",
    "website-conversion-secrets": "/blog_conversion_secrets.jpg",
    "generative-engine-optimization-india": "/blog_aeo_illustrative.jpg",
    "rank-on-google-maps-india": "/blog_maps_india.jpg",
    "do-i-own-my-website": "/blog_website_ownership.jpg",
    "seo-vs-google-ads-india": "/blog_seo_vs_ads.jpg",
    "how-long-does-seo-take-india": "/blog_seo_time.jpg",
    "customers-asking-ai-not-google": "/blog_ai_search_future.jpg",
    "why-your-website-is-slow": "/blog_website_slow.jpg",
    "get-more-google-reviews": "/blog_maps_india.jpg",
    "small-business-website-checklist-india": "/blog_checklist_india.jpg",
  };
  return mapping[slug] || "/blog_hero.jpg";
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    category: post.category.toLowerCase().replace(/ /g, "-"),
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  const postCategorySlug = post.category.toLowerCase().replace(/ /g, "-");
  
  // Verify category in URL matches post category
  if (postCategorySlug !== category) {
    return {};
  }

  return {
    metadataBase: new URL("https://bizysite.in"),
    title: post.metaTitle || `${post.title} | Bizy Site`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/blog/${category}/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://bizysite.in/blog/${category}/${post.slug}`,
      siteName: "Bizy Site India",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 1200,
          alt: post.title,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: ["/opengraph-image.png"],
    }
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { category, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postCategorySlug = post.category.toLowerCase().replace(/ /g, "-");
  if (postCategorySlug !== category) {
    notFound();
  }

  // Split content at the end of the first closing </div> tag to insert the illustration below the TL;DR: card
  const contentParts = post.content.split("</div>");
  const hasTldr = contentParts.length > 1;
  const tldrPart = hasTldr ? contentParts[0] + "</div>" : "";
  const restPart = hasTldr ? contentParts.slice(1).join("</div>") : post.content;

  // Schema: BlogPosting
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bizysite.in/blog/${category}/${post.slug}`
    },
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": "https://bizysite.in/opengraph-image.png",
    "author": {
      "@type": "Organization",
      "name": "Bizy Site India"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bizy Site India",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizysite.in/Bizy_Site_Logo.png"
      }
    },
    "datePublished": post.publishDateIso || "2026-08-15"
  };

  // Schema: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://bizysite.in/blog/${category}/${post.slug}`
      }
    ]
  };

  // Schema: FAQPage if FAQs are present
  const faqJsonLd = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Filter distinct categories
  const categoriesList = Array.from(new Set(blogPosts.map(p => p.category)));

  // Filter related articles (same category, exclude current)
  const relatedArticles = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If no related posts in same category, suggest other recent posts
  const fallbackRelated = relatedArticles.length > 0 
    ? relatedArticles 
    : blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  const postUrl = `https://bizysite.in/blog/${category}/${post.slug}`;
  const shareText = encodeURIComponent(post.title);
  const shareUrlEncoded = encodeURIComponent(postUrl);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${shareText}%20-%20${shareUrlEncoded}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`,
    twitter: `https://x.com/intent/tweet?text=${shareText}&url=${shareUrlEncoded}`,
    email: `mailto:?subject=${shareText}&body=Check%20out%20this%20article%20from%20Bizy%20Site:%20${shareUrlEncoded}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container" style={{ textAlign: "left" }}>
          
          {/* Dynamic Breadcrumbs */}
          <nav style={{ fontSize: "12.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", color: "rgba(255,255,255,0.6)", marginBottom: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "var(--teal)", textDecoration: "underline" }} className="hover-white">Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "var(--teal)", textDecoration: "underline" }} className="hover-white">Blog</Link>
            <span>/</span>
            <Link href={`/blog?category=${category}`} style={{ color: "var(--teal)", textDecoration: "underline" }} className="hover-white">{post.category}</Link>
            <span>/</span>
            <span style={{ color: "var(--white)" }}>{post.title}</span>
          </nav>

          <span className="market-tag" style={{ marginLeft: 0, display: "inline-block", marginBottom: "16px" }}>{post.category}</span>
          <h1 className="service-hero-title" style={{ fontSize: "clamp(28px, 4vw, 36px)", lineHeight: "1.2" }}>{post.title}</h1>
          
          {/* Metadata with Author details */}
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", fontWeight: "600", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", margin: 0 }}>
            <span>Published: {post.date}</span>
            <span>·</span>
            <span>{post.readTime || "5 min read"}</span>
            <span>·</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              Written by <Link href={`/blog?author=${getAuthorForPost(post.slug).name.toLowerCase()}`} style={{ color: "var(--teal)", textDecoration: "underline" }} className="hover-white">{getAuthorForPost(post.slug).name}</Link> ({getAuthorForPost(post.slug).title})
            </span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="blog-layout-grid">
            
            {/* Left Column: Article & FAQs */}
            <div className="blog-main-content">
              <article className="blog-post-article">
                {hasTldr ? (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: tldrPart }} />
                    <img 
                      src={getThumbnailForPost(post.slug)} 
                      alt={post.title}
                    />
                    <div dangerouslySetInnerHTML={{ __html: restPart }} />
                  </>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                )}
              </article>

              {/* Render FAQs at the end of the post if present */}
              {post.faqs && (
                <div style={{ marginTop: "48px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
                  <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "22px", marginBottom: "24px" }}>Frequently Asked Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} style={{ background: "var(--off-white)", padding: "20px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                        <h4 style={{ color: "var(--navy)", fontWeight: "700", fontSize: "15px", marginBottom: "8px" }}>{faq.question}</h4>
                        <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <aside className="blog-sidebar">
              
              {/* Share Section */}
              <div className="sidebar-widget" style={{ padding: "24px", background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "32px" }}>
                <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Share2 size={16} style={{ color: "var(--teal)" }} /> Share this article
                </h4>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  
                  {/* WhatsApp */}
                  <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="share-icon-btn whatsapp" title="Share on WhatsApp" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#25d366", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.885-6.948C16.59 2.016 14.12 1.01 11.516 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.45 3.224 1.302 4.666L1.947 21.9l5.7-1.496zM17.13 14.93c-.276-.135-1.636-.79-1.89-.88-.254-.09-.44-.135-.623.135-.184.27-.714.88-.875 1.06-.16.182-.323.2-.6.064-.275-.135-1.166-.42-2.223-1.347-.82-.718-1.375-1.606-1.537-1.879-.162-.272-.017-.42.12-.555.125-.12.276-.32.414-.48.14-.16.184-.27.276-.45.09-.18.046-.336-.023-.48-.068-.135-.623-1.47-.852-2.01-.225-.53-.473-.45-.624-.46h-.534c-.183 0-.48.07-.733.338-.254.266-.97.93-.97 2.27 0 1.337.99 2.627 1.13 2.807.137.18 1.948 2.924 4.72 4.095.66.278 1.174.445 1.577.57.663.208 1.267.178 1.745.108.53-.08 1.636-.557 1.868-1.096.232-.54.232-1.002.163-1.096-.07-.09-.253-.135-.53-.27z"/></svg>
                  </a>

                  {/* LinkedIn */}
                  <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-icon-btn linkedin" title="Share on LinkedIn" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#0077b5", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>

                  {/* Facebook */}
                  <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-icon-btn facebook" title="Share on Facebook" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#1877f2", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>

                  {/* X */}
                  <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-icon-btn twitter" title="Share on X" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#000000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>

                  {/* Email */}
                  <a href={shareLinks.email} className="share-icon-btn email" title="Share via Email" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#666666", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </a>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="sidebar-widget" style={{ padding: "24px", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "32px" }}>
                <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <BookOpen size={16} style={{ color: "var(--teal)" }} /> Categories
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {categoriesList.map((cat, idx) => {
                    const catSlug = cat.toLowerCase().replace(/ /g, "-");
                    return (
                      <Link 
                        key={idx} 
                        href={`/blog?category=${catSlug}`}
                        style={{ display: "flex", justifyContent: "space-between", textDecoration: "none", color: "var(--text-mid)", fontSize: "14px", fontWeight: "600", padding: "8px 12px", background: "var(--off-white)", borderRadius: "8px", border: "1px solid transparent", transition: "all 0.2s" }}
                        className="category-pill"
                      >
                        <span>{cat}</span>
                        <span style={{ background: "var(--teal)", color: "#fff", borderRadius: "12px", padding: "1px 8px", fontSize: "11px" }}>
                          {blogPosts.filter(p => p.category === cat).length}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Related Articles Widget */}
              <div className="sidebar-widget" style={{ padding: "24px", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "32px" }}>
                <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "16px" }}>
                  Related Guides
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {fallbackRelated.map((rel, idx) => {
                    const relCatSlug = rel.category.toLowerCase().replace(/ /g, "-");
                    return (
                      <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--teal)" }}>
                          {rel.category}
                        </span>
                        <Link 
                          href={`/blog/${relCatSlug}/${rel.slug}`}
                          style={{ color: "var(--navy)", fontWeight: "700", fontSize: "13.5px", lineHeight: "1.4", textDecoration: "none" }}
                          className="hover-teal"
                        >
                          {rel.title}
                        </Link>
                        <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{rel.date}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Audit Card */}
              <div style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "var(--white)", fontWeight: "800", fontSize: "16px", marginBottom: "10px" }}>
                  Free Website Audit
                </h4>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12.5px", lineHeight: "1.6", marginBottom: "16px" }}>
                  We'll check your website speed, technical SEO setups, organic keywords, and AI engine indexation points, and send you a detailed audit report in 48 hours, free.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ fontSize: "12px", padding: "10px 16px", width: "100%", justifyContent: "center" }}>
                  Get My Free Audit →
                </Link>
              </div>

            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
