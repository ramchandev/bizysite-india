"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Healthcare",
    "E-commerce",
    "Professional Services"
  ];

  const projects = [
    {
      slug: "dr-sajan-hegde",
      client: "Dr. Sajan Hegde",
      url: "https://drsajankhegde.com",
      screenshot: "/screenshots/dr-sajan-hegde.png",
      industry: "Healthcare & Spine Care",
      description: "Custom booking platform and clinical branding page for one of India's top spine surgeons, streamlining online patient appointments.",
      result: "38% increase in patient bookings",
      category: "Healthcare"
    },
    {
      slug: "sound-v-pro",
      client: "Sound V Pro",
      url: "https://soundvpro.com/",
      screenshot: "/screenshots/sound-v-pro.png",
      industry: "E-commerce & Pro Audio",
      description: "High-performance online store for professional audio and studio equipment, optimized for mobile checkout transitions.",
      result: "2.1× higher checkout conversion rate",
      category: "E-commerce"
    },
    {
      slug: "miracle-members",
      client: "Miracle Members",
      url: "https://miraclemembers.in",
      screenshot: "/screenshots/miracle-members.png",
      industry: "Professional Networking",
      description: "Speed-optimized custom portal and networking platform with dynamic member directories and lightning-fast search capabilities.",
      result: "48% reduction in page load speed",
      category: "Professional Services"
    },
    {
      slug: "an-art-by",
      client: "An Art By",
      url: "https://anartby.com/",
      screenshot: "/screenshots/an-art-by.png",
      industry: "E-commerce & Art Gallery",
      description: "Interactive art portfolio and online store built with high visual engagement and smooth catalog zoom configurations.",
      result: "62% increase in visual engagement CTR",
      category: "E-commerce"
    },
    {
      slug: "idea-heavens",
      client: "Idea Heavens",
      url: "https://ideaheavens.com/",
      screenshot: "/screenshots/idea-heavens.png",
      industry: "Creative Agency",
      description: "Conversion-optimized landing pages and marketing asset portal for a prominent digital branding and design agency.",
      result: "3.4× lower cost-per-lead (CPL)",
      category: "Professional Services"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* SECTION 2 — Portfolio Grid */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Explore our work.</h2>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  background: activeFilter === filter ? "var(--teal)" : "var(--white)",
                  color: activeFilter === filter ? "var(--white)" : "var(--text)",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="work-grid" style={{ minHeight: "300px" }}>
            {filteredProjects.map((p, index) => (
              <div key={index} className="work-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "var(--white)", transition: "all 0.2s" }}>
                
                {/* Screenshot layout header */}
                <div style={{ width: "100%", height: "180px", overflow: "hidden", borderBottom: "1px solid var(--border)", background: "var(--off-white)", position: "relative" }}>
                  <img 
                    src={p.screenshot} 
                    alt={`${p.client} website screenshot`} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.3s ease" }}
                    className="screenshot-img"
                  />
                </div>

                {/* Content Area with Padded spacing to prevent edge-to-edge layout */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                  <div>
                    <span className="section-tag" style={{ background: "rgba(43, 191, 191, 0.12)", color: "var(--teal-dark)", fontSize: "11px", display: "inline-block", marginBottom: "12px" }}>
                      {p.industry}
                    </span>
                    
                    <h3 className="work-title" style={{ fontSize: "18px", margin: "0 0 6px 0", color: "var(--navy)", fontWeight: "800" }}>{p.client}</h3>
                    
                    <a 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "var(--teal-dark)", fontSize: "12.5px", fontWeight: "700", textDecoration: "underline", display: "inline-block", marginBottom: "16px" }}
                      className="hover-teal"
                    >
                      Visit Website →
                    </a>

                    <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", margin: "0 0 16px 0", minHeight: "60px" }}>
                      {p.description}
                    </p>

                    <div className="work-stat-box" style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontWeight: "800", padding: "10px 14px", borderRadius: "8px", fontSize: "13.5px", display: "inline-block", marginBottom: "16px" }}>
                      {p.result}
                    </div>
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <Link href={`/contact?project=${p.slug}`} className="btn btn-outline" style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "center", width: "100%", padding: "10px" }}>
                      <span>Request Similar Results</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
            {filteredProjects.length === 0 && (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
                No projects found for this category yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
