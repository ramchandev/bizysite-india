"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { BookOpen, User } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogClientProps {
  posts: BlogPost[];
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

export default function BlogClient({ posts }: BlogClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const activeCategorySlug = searchParams.get("category") || "";
  const activeAuthorSlug = searchParams.get("author") || "";

  // Group categories and convert to URL slugs
  const distinctCategories = Array.from(new Set(posts.map(p => p.category)));
  const distinctAuthors = Array.from(new Set(posts.map(p => getAuthorForPost(p.slug).name)));

  const filteredPosts = posts.filter(post => {
    const author = getAuthorForPost(post.slug);
    const matchesCategory = activeCategorySlug
      ? post.category.toLowerCase().replace(/ /g, "-") === activeCategorySlug
      : true;
    const matchesAuthor = activeAuthorSlug
      ? author.name.toLowerCase() === activeAuthorSlug.toLowerCase()
      : true;
    return matchesCategory && matchesAuthor;
  });

  const handleCategorySelect = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeCategorySlug === categorySlug) {
      params.delete("category");
    } else {
      params.set("category", categorySlug);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  const handleAuthorSelect = (authorName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const slugifiedAuthor = authorName.toLowerCase();
    if (activeAuthorSlug === slugifiedAuthor) {
      params.delete("author");
    } else {
      params.set("author", slugifiedAuthor);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  const clearFilters = () => {
    router.push("/blog", { scroll: false });
  };

  const activeFiltersCount = (activeCategorySlug ? 1 : 0) + (activeAuthorSlug ? 1 : 0);

  return (
    <div className="blog-layout-grid">
      
      {/* Left Column: Filtered Article List */}
      <div>
        {activeFiltersCount > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "12px 16px", background: "var(--off-white)", borderRadius: "8px", border: "1px solid var(--border)" }}>
            <span style={{ fontSize: "13px", color: "var(--text-mid)", fontWeight: "600" }}>
              Showing {filteredPosts.length} guides matching filters
            </span>
            <button onClick={clearFilters} style={{ background: "none", border: "none", color: "var(--teal-dark)", fontWeight: "700", fontSize: "12px", cursor: "pointer", textDecoration: "underline" }}>
              Clear All
            </button>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "64px 32px", border: "1px dashed var(--border)", borderRadius: "16px", background: "var(--off-white)" }}>
            <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "18px", marginBottom: "8px" }}>No guides found</h3>
            <p style={{ color: "var(--text-mid)", fontSize: "14px", marginBottom: "20px" }}>There are no articles matching your current filter settings.</p>
            <button onClick={clearFilters} className="btn btn-navy" style={{ margin: "0 auto" }}>
              Clear filters & show all
            </button>
          </div>
        ) : (
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {filteredPosts.map((post, idx) => {
              const catSlug = post.category.toLowerCase().replace(/ /g, "-");
              const author = getAuthorForPost(post.slug);
              return (
                <div key={idx} className="blog-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "var(--white)", transition: "all 0.2s" }}>
                  <div className="blog-card-content" style={{ padding: "20px" }}>
                    <span className="blog-card-meta" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--teal-dark)", display: "block", marginBottom: "8px" }}>
                      {post.category} · By <span onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAuthorSelect(author.name);
                      }} style={{ textDecoration: "underline", cursor: "pointer" }} className="hover-teal">{author.name}</span> · {post.readTime}
                    </span>
                    <h3 className="blog-card-title" style={{ fontSize: "16.5px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px", lineHeight: "1.4" }}>
                      <Link href={`/blog/${catSlug}/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }} className="hover-teal">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="blog-card-excerpt" style={{ fontSize: "12.5px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "0" }}>
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div style={{ padding: "0 20px 20px 20px" }}>
                    <Link href={`/blog/${catSlug}/${post.slug}`} className="btn btn-outline" style={{ width: "100%", justifyContent: "center", fontSize: "12.5px", padding: "10px" }}>
                      Read Guide →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right Column: Sidebar */}
      <aside className="blog-sidebar">
        
        {/* Categories Selector */}
        <div className="sidebar-widget" style={{ padding: "24px", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "32px", background: "var(--white)" }}>
          <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <BookOpen size={16} style={{ color: "var(--teal)" }} /> Filter by Category
          </h4>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Show All Option */}
            <button
              onClick={() => handleCategorySelect(activeCategorySlug)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "left",
                padding: "10px 14px",
                background: activeCategorySlug === "" ? "var(--navy)" : "var(--off-white)",
                color: activeCategorySlug === "" ? "var(--white)" : "var(--text-mid)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "13.5px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              className={activeCategorySlug === "" ? "" : "category-pill"}
            >
              <span>All Categories</span>
              <span style={{
                background: activeCategorySlug === "" ? "rgba(255,255,255,0.2)" : "var(--teal)",
                color: "var(--white)",
                borderRadius: "12px",
                padding: "1px 8px",
                fontSize: "11px"
              }}>
                {posts.length}
              </span>
            </button>

            {/* Individual Categories */}
            {distinctCategories.map((cat, idx) => {
              const catSlug = cat.toLowerCase().replace(/ /g, "-");
              const isSelected = activeCategorySlug === catSlug;
              return (
                <button
                  key={idx}
                  onClick={() => handleCategorySelect(catSlug)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    padding: "10px 14px",
                    background: isSelected ? "var(--navy)" : "var(--off-white)",
                    color: isSelected ? "var(--white)" : "var(--text-mid)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  className={isSelected ? "" : "category-pill"}
                >
                  <span>{cat}</span>
                  <span style={{
                    background: isSelected ? "rgba(255,255,255,0.2)" : "var(--teal)",
                    color: "var(--white)",
                    borderRadius: "12px",
                    padding: "1px 8px",
                    fontSize: "11px"
                  }}>
                    {posts.filter(p => p.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Authors Selector */}
        <div className="sidebar-widget" style={{ padding: "24px", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "32px", background: "var(--white)" }}>
          <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <User size={16} style={{ color: "var(--teal)" }} /> Filter by Author
          </h4>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Individual Authors */}
            {distinctAuthors.map((authName, idx) => {
              const authSlug = authName.toLowerCase();
              const isSelected = activeAuthorSlug === authSlug;
              const count = posts.filter(p => getAuthorForPost(p.slug).name === authName).length;
              return (
                <button
                  key={idx}
                  onClick={() => handleAuthorSelect(authName)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    padding: "10px 14px",
                    background: isSelected ? "var(--navy)" : "var(--off-white)",
                    color: isSelected ? "var(--white)" : "var(--text-mid)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  className={isSelected ? "" : "category-pill"}
                >
                  <span>{authName}</span>
                  <span style={{
                    background: isSelected ? "rgba(255,255,255,0.2)" : "var(--teal)",
                    color: "var(--white)",
                    borderRadius: "12px",
                    padding: "1px 8px",
                    fontSize: "11px"
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Free Audit CTA Box */}
        <div style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <h4 style={{ color: "var(--white)", fontWeight: "800", fontSize: "16px", marginBottom: "10px" }}>
            Free Website Audit
          </h4>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12.5px", lineHeight: "1.6", marginBottom: "16px" }}>
            Wondering why your site isn't converting or ranking? Get a free 48-hour expert evaluation of your performance and SEO setups.
          </p>
          <Link href="/contact?type=audit" className="btn btn-primary" style={{ fontSize: "12px", padding: "10px 16px", width: "100%", justifyContent: "center" }}>
            Get My Free Audit →
          </Link>
        </div>

      </aside>

    </div>
  );
}
