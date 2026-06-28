"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseData = {
  "dr-sajan-hegde": {
    logo: "Dr. Sajan Hegde",
    title: "Spine Surgery Clinic Rebuilds Authority & Increases Bookings by 38%",
    industry: "Healthcare & Spine Care Services",
    size: "10-20 staff",
    challenge: "Low online authority and friction in patient booking channels.",
    problem: "The clinic's old site had slow mobile loading speeds and lacked structured medical information. Patients found it hard to book spine consultations online, leading to a high drop-off rate on search listings.",
    approach: "We built an authoritative, blazing fast clinic portal on drsajankhegde.com, optimized semantic schemas for local medical queries, and simplified patient booking paths.",
    tactics: [
      "Designed a clean, professional clinical dashboard layout built for patient trust.",
      "Integrated a simple, 2-step consultation appointment booking system.",
      "Implemented technical schemas identifying specialty spinal surgery domains.",
      "Optimized Google Business Profiles and local map search citations."
    ],
    beforeStats: "1.2s page speed · 18 monthly appointments · Low visibility",
    afterStats: "0.8s page speed · 32 monthly appointments · 38% increase",
    quote: "Bizy Site rebuilt our clinical web portal to be incredibly fast and authoritative. Patients regularly mention how easy it is to find information and book consultations.",
    author: "Dr. Sajan Hegde, Chief Spine Surgeon"
  },
  "sound-v-pro": {
    logo: "Sound V Pro",
    title: "E-Commerce Audio Systems Platform Optimizes Checkout Funnel to Double Sales",
    industry: "Audio Production Rentals",
    size: "5-10 staff",
    challenge: "High cart abandonment rate on checkout and payment options.",
    problem: "Sound V Pro's old e-commerce system at soundvpro.com made renting sound systems complex. Customers had to complete 8 fields before checking out, and mobile payment gateways crashed frequently.",
    approach: "We redesigned the booking system to support instant checkout, integrated local Indian payment portals, and optimized layouts for performance meta campaigns.",
    tactics: [
      "Redesigned the e-commerce cart into a single-page checkout flow.",
      "Added trust symbols, safety assurances, and clean cost details.",
      "Restructured Meta paid campaigns to target warm cart abandoners.",
      "Optimized product grids for fast rendering on mobile connections."
    ],
    beforeStats: "1.1% checkout rate · 22 monthly orders · High cart drops",
    afterStats: "2.3% checkout rate · 46 monthly orders · 2.1× higher conversion",
    quote: "Our sound system bookings doubled within 30 days of launch. The simplified single-page checkout removed the friction that was costing us sales.",
    author: "Kiran Dev, Founder"
  },
  "miracle-members": {
    logo: "Miracle Members",
    title: "BNI Miracles Member Networking Directory Mobile Speed Redesign",
    industry: "Business Networking Services",
    size: "100+ members",
    challenge: "Slow directory load speeds preventing member search on mobile networks.",
    problem: "Miracle Members portal at miraclemembers.in was loaded with unoptimized photos. Pages took over 6 seconds to load on mobile connections, preventing business owners from referencing members during networking sessions.",
    approach: "We rebuilt the membership directory using static Next.js compilation, optimized photos, and deployed a lightweight search interface.",
    tactics: [
      "Converted all directory images into WebP formats with lazy loading.",
      "Built a custom client-side search indexing engine for instant filtering.",
      "Redesigned member cards to render cleanly on standard mobile screens.",
      "Structured SEO semantic tags for local business categories."
    ],
    beforeStats: "6.2s page load speed · High bounce rate on mobile · Poor search",
    afterStats: "1.2s page load speed · 48% speed increase · Instant search indexing",
    quote: "Our members can now query the directory instantly during active networking meets. The speed improvements solved a major operational bottleneck.",
    author: "Sanjay Shah, Chapter Director"
  },
  "an-art-by": {
    logo: "An Art By",
    title: "Art Portfolio & E-Commerce Gallery Visual Funnel Optimization",
    industry: "Art & Creative Studio",
    size: "Self-employed artist",
    challenge: "Low visual engagement and high checkout drop-offs for custom paintings.",
    problem: "The art gallery at anartby.com looked beautiful but lacked visual hierarchy. Art collectors could not easily locate pricing details, checkout flows, or commission request options.",
    approach: "We optimized their visual gallery interface, added high-fidelity product zoom views, and integrated a low-friction art commission form.",
    tactics: [
      "Redesigned the gallery layout to focus on custom painting details.",
      "Implemented a clean, multi-step artwork inquiry wizard.",
      "Optimized image delivery via CDN nodes for fast retina viewing.",
      "Created visual checkout prompts reducing checkout anxiety."
    ],
    beforeStats: "0.8% CTR on art commissions · High cart abandon rate",
    afterStats: "2.1% CTR on art commissions · 62% increase in visual engagement",
    quote: "Bizy Site understood how to balance artistic beauty with commercial conversion. The new commission forms are bringing in highly qualified custom painting requests.",
    author: "Ananya Roy, Principal Artist"
  },
  "idea-heavens": {
    logo: "Idea Heavens",
    title: "Performance Marketing Agency Cuts Client Acquisiton Lead Costs by 3.4×",
    industry: "Marketing & Design Agency",
    size: "20-50 employees",
    challenge: "High cost-per-lead (CPL) on agency acquisition campaigns.",
    problem: "The agency was paying high CPC bids on Google Ads. However, their landing pages at ideaheavens.com converted traffic poorly, resulting in expensive, low-quality sales inquiries.",
    approach: "We designed a high-converting landing page, set up Google Ads match terms with negative keyword lists, and optimized their copy to capture zero-click AEO answers.",
    tactics: [
      "Re-authored landing pages targeting high-converting keyword intents.",
      "Configured FAQ and Organization schemas for snippet indexing.",
      "Added multi-step form capture and WhatsApp chat triggers.",
      "Tuned Google Search bids to focus on high-quality business queries."
    ],
    beforeStats: "₹1,500 cost-per-lead (CPL) · Low quality calls · Poor tracking",
    afterStats: "₹440 cost-per-lead (CPL) · 3.4× cheaper lead acquisition · Clean attribution",
    quote: "We are running ads that actually generate high-quality sales leads at a third of the cost. The full funnel alignment has worked wonders.",
    author: "Rohit Verma, Director"
  }
};

type ParamsPromise = Promise<{ slug: string }>;

export default function CaseStudyDetail({ params }: { params: ParamsPromise }) {
  const { slug } = use(params);
  const study = caseData[slug as keyof typeof caseData];

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content" style={{ textAlign: "left" }}>
          <Link href="/work" style={{ color: "var(--teal)", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px", fontWeight: "700" }}>
            <ArrowLeft size={16} /> Back to All Work
          </Link>
          <span className="market-tag" style={{ marginLeft: 0, display: "inline-block", marginBottom: "16px" }}>{study.industry}</span>
          <h1 className="service-hero-title" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.2" }}>{study.title}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          
          {/* Metadata Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "24px", background: "var(--off-white)", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "40px" }}>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>Industry</span>
              <p style={{ fontWeight: "700", color: "var(--navy)" }}>{study.industry}</p>
            </div>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>Company Size</span>
              <p style={{ fontWeight: "700", color: "var(--navy)" }}>{study.size}</p>
            </div>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>Key Challenge</span>
              <p style={{ fontWeight: "700", color: "var(--navy)" }}>{study.challenge}</p>
            </div>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>1. The Problem</h3>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.7", fontSize: "15px" }}>{study.problem}</p>
            </div>

            <div>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>2. Our Approach</h3>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.7", fontSize: "15px" }}>{study.approach}</p>
            </div>

            <div>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>3. What We Did (Tactics)</h3>
              <ul className="outcome-list" style={{ gap: "12px", marginTop: "12px" }}>
                {study.tactics.map((tactic, idx) => (
                  <li key={idx} className="outcome-item" style={{ alignItems: "flex-start" }}>
                    <Check size={16} style={{ marginTop: "4px" }} />
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>{tactic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results Grid */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden", marginTop: "16px" }}>
              <div style={{ background: "var(--navy)", color: "var(--white)", padding: "16px 24px", fontWeight: "bold" }}>
                4. Performance Comparison
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
                <div style={{ background: "var(--white)", padding: "24px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>BEFORE BIZY SITE</span>
                  <p style={{ fontSize: "14px", color: "#EF4444", fontWeight: "700", marginTop: "8px" }}>{study.beforeStats}</p>
                </div>
                <div style={{ background: "var(--white)", padding: "24px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>AFTER BIZY SITE</span>
                  <p style={{ fontSize: "14px", color: "var(--green)", fontWeight: "700", marginTop: "8px" }}>{study.afterStats}</p>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div style={{ background: "var(--teal-light)", borderLeft: "4px solid var(--teal)", padding: "24px", borderRadius: "0 12px 12px 0", marginTop: "16px" }}>
              <p style={{ fontSize: "16px", fontStyle: "italic", fontWeight: "600", color: "var(--navy)", marginBottom: "12px" }}>
                "{study.quote}"
              </p>
              <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "14px" }}>{study.author}</h4>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Get results like this for your business.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit report and let our experts show you where the growth gaps are.
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
