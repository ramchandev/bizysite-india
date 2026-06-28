"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Design", "CRO", "SEO", "AEO/GEO", "Paid Ads"];

  const caseStudies = [
    {
      slug: "dr-sajan-hegde",
      logo: "Dr. Sajan Hegde",
      title: "Spine Surgery Clinic Rebuilds Authority & Increases Bookings by 38%",
      industry: "Healthcare & Medical Services",
      services: "Website Design & Local SEO",
      stat: "38% increase in patient bookings",
      categories: ["Design", "SEO"]
    },
    {
      slug: "sound-v-pro",
      logo: "Sound V Pro",
      title: "E-Commerce Audio Systems Platform Optimizes Checkout Funnel to Double Sales",
      industry: "Audio Production Rentals",
      services: "CRO & Performance Meta Ads",
      stat: "2.1× higher checkout conversion rate",
      categories: ["Paid Ads", "CRO"]
    },
    {
      slug: "miracle-members",
      logo: "Miracle Members",
      title: "BNI Miracles Member Networking Directory Mobile Speed Redesign",
      industry: "Business Networking Services",
      services: "Website Design & Speed CRO",
      stat: "48% reduction in page load speed",
      categories: ["Design", "CRO"]
    },
    {
      slug: "an-art-by",
      logo: "An Art By",
      title: "Art Portfolio & E-Commerce Gallery Visual Funnel Optimization",
      industry: "Art & Creative Studio",
      services: "UI/UX Redesign & E-Commerce CRO",
      stat: "62% increase in visual engagement CTR",
      categories: ["Design", "CRO"]
    },
    {
      slug: "idea-heavens",
      logo: "Idea Heavens",
      title: "Performance Marketing Agency Cuts Client Acquisiton Lead Costs by 3.4×",
      industry: "Marketing & Design Agency",
      services: "Google Ads & GEO/AEO Optimization",
      stat: "3.4× lower cost-per-lead (CPL)",
      categories: ["Paid Ads", "AEO/GEO"]
    }
  ];

  const filteredCases = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter(c => c.categories.includes(activeFilter));

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Results We've Delivered</h1>
          <p className="service-hero-sub">
            Real client campaigns, documented conversion data, and verifiable business growth.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Cards */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          
          {/* Tabs */}
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="work-grid" style={{ minHeight: "300px" }}>
            {filteredCases.map((c, index) => (
              <div key={index} className="work-card">
                <div className="work-card-content">
                  <span className="work-logo">{c.logo}</span>
                  <h3 className="work-title">
                    <Link href={`/work/${c.slug}`}>{c.title}</Link>
                  </h3>
                  <span className="work-meta">
                    Industry: {c.industry} | Services: {c.services}
                  </span>
                  
                  <div className="work-stat-box">
                    {c.stat}
                  </div>

                  <Link href={`/work/${c.slug}`} className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                    Read Case Study →
                  </Link>
                </div>
              </div>
            ))}
            {filteredCases.length === 0 && (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
                No case studies found for this category yet.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Get results like this for your business.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free website audit report and let our experts show you where the growth gaps are.
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
