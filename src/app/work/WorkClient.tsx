"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Healthcare",
    "Real Estate",
    "Manufacturing",
    "Education",
    "Hospitality",
    "Professional Services",
    "E-commerce"
  ];

  const projects = [
    {
      slug: "dr-sajan-hegde",
      client: "Dr. Sajan Hegde",
      industry: "Healthcare & Clinics",
      result: "38% increase in patient bookings",
      category: "Healthcare"
    },
    {
      slug: "sound-v-pro",
      client: "Sound V Pro",
      industry: "Retail & D2C / E-commerce",
      result: "2.1× higher checkout conversion rate",
      category: "E-commerce"
    },
    {
      slug: "miracle-members",
      client: "Miracle Members BNI",
      industry: "Professional Services",
      result: "48% reduction in page load speed",
      category: "Professional Services"
    },
    {
      slug: "an-art-by",
      client: "An Art By",
      industry: "Retail & D2C / E-commerce",
      result: "62% increase in visual engagement CTR",
      category: "E-commerce"
    },
    {
      slug: "idea-heavens",
      client: "Idea Heavens",
      industry: "Professional Services",
      result: "3.4× lower cost-per-lead (CPL)",
      category: "Professional Services"
    },
    {
      slug: "luxury-apartment-mumbai",
      client: "Prestige Realtors, Mumbai",
      industry: "Real Estate & Builders",
      result: "Pre-qualified 48 site visits in a month",
      category: "Real Estate"
    },
    {
      slug: "guindy-valve-manufacturer",
      client: "Guindy Industrial Valve Manufacturer",
      industry: "Manufacturing & B2B",
      result: "3.4× increase in corporate B2B RFQs",
      category: "Manufacturing"
    },
    {
      slug: "coaching-centre-pune",
      client: "Apex IIT Coaching, Pune",
      industry: "Education & Coaching",
      result: "Filled batch of 60 students in 2 weeks",
      category: "Education"
    },
    {
      slug: "boutique-resort-omr",
      client: "Grande Vista Resort, OMR Chennai",
      industry: "Hospitality & Restaurants",
      result: "54% increase in direct room bookings",
      category: "Hospitality"
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
              <div key={index} className="work-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--border)" }}>
                <div>
                  <span className="section-tag" style={{ background: "rgba(43, 191, 191, 0.12)", color: "var(--teal-dark)", fontSize: "11px" }}>
                    {p.industry}
                  </span>
                  <h3 className="work-title" style={{ fontSize: "18px", margin: "12px 0 8px 0", color: "var(--navy)" }}>{p.client}</h3>
                  <div className="work-stat-box" style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontWeight: "800", padding: "10px 14px", borderRadius: "8px", fontSize: "14px", display: "inline-block", marginBottom: "16px" }}>
                    {p.result}
                  </div>
                </div>
                {/* Fallback back to project or details */}
                <Link href={`/contact?project=${p.slug}`} className="btn btn-outline" style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  <span>Request Similar Results</span>
                  <ArrowRight size={14} />
                </Link>
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
