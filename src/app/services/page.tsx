"use client";

import Link from "next/link";
import { 
  Smartphone, 
  BarChart3, 
  Search, 
  MessageSquare, 
  Sparkles, 
  Target, 
  Zap, 
  Check 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesHub() {
  const servicesList = [
    {
      icon: <Smartphone size={24} />,
      name: "Website Design & Development",
      description: "Custom-designed, highly responsive, and blazing fast websites engineered specifically to turn local traffic into inquiries and customers.",
      outcomes: [
        "Mobile-first, conversion-optimized responsive layouts",
        "Lightning-fast load times (Core Web Vitals optimized)",
        "Easy-to-use Content Management System (CMS)"
      ],
      href: "/services/web-design"
    },
    {
      icon: <BarChart3 size={24} />,
      name: "Conversion Rate Optimization (CRO)",
      description: "Systematic scientific testing of your forms, CTA hierarchy, above-the-fold content, and checkouts to capture more revenue from current traffic.",
      outcomes: [
        "A/B split testing of layouts and messaging",
        "Detailed heatmap and user behavior analysis",
        "Higher inquiry rates without increasing traffic spend"
      ],
      href: "/services/cro"
    },
    {
      icon: <Search size={24} />,
      name: "Search Engine Optimization (SEO)",
      description: "Keyword strategies mapping to local and national search intent, optimized specifically for how Indian buyers query and evaluate services.",
      outcomes: [
        "Top rankings for high-intent business terms",
        "Clean technical SEO structure and schema integrations",
        "Local SEO & regional language optimization"
      ],
      href: "/services/seo"
    },
    {
      icon: <MessageSquare size={24} />,
      name: "Answer Engine Optimization (AEO)",
      description: "Formatting and structuring your brand answers so you show up as the featured snippet in voice search and search engine quick-answers.",
      outcomes: [
        "Targeted Schema markup and FAQ structuring",
        "High-authority answers indexed for voice engines",
        "Featured snippets placement on Google India search"
      ],
      href: "/services/aeo"
    },
    {
      icon: <Sparkles size={24} />,
      name: "AI Optimization (AIO)",
      description: "Ensure your brand details are represented accurately inside large language models like ChatGPT, Gemini, and Claude when users query them.",
      outcomes: [
        "Comprehensive brand mention strategy across authority channels",
        "Topical authority content structures built for AI ingestion",
        "Knowledge graph optimization for LLM recommendations"
      ],
      href: "/services/aio"
    },
    {
      icon: <Target size={24} />,
      name: "Generative Engine Optimization (GEO)",
      description: "Strategic actions to place your product and service recommendations directly into AI generative results like Google AI Overviews and Perplexity.",
      outcomes: [
        "Source citation building across AI reference networks",
        "Topical depth optimization for generative summarizers",
        "Visibility mapping across major generative search platforms"
      ],
      href: "/services/geo"
    },
    {
      icon: <Zap size={24} />,
      name: "Google & Meta Ads (Performance Marketing)",
      description: "Return-focused campaigns utilizing local customer demographic targeting, customized landing page funnels, and instant WhatsApp chat leads.",
      outcomes: [
        "Full-funnel custom landing page & creative setup",
        "WhatsApp API integrations for immediate sales follow-up",
        "Reduced cost-per-lead and clean CRM tracking"
      ],
      href: "/services/ads"
    }
  ];

  return (
    <>
      <Header />

      {/* Services Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">What We Do</h1>
          <p className="service-hero-sub">
            Seven services. One goal: make your website your best-performing salesperson.
          </p>
        </div>
      </section>

      {/* Services Grid Hub */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="services-grid-hub">
            {servicesList.map((svc, index) => (
              <div key={index} className="service-card-hub">
                <div className="service-card-icon">
                  {svc.icon}
                </div>
                <h3 className="service-card-title">{svc.name}</h3>
                <p className="service-card-desc">{svc.description}</p>
                
                <ul className="outcome-list">
                  {svc.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="outcome-item">
                      <Check size={14} />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <Link href={svc.href} className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: "64px", textAlign: "center", background: "var(--off-white)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "20px", marginBottom: "12px" }}>
              Not sure which service you need?
            </h3>
            <p style={{ color: "var(--text-mid)", fontSize: "14px", marginBottom: "20px", maxWidth: "600px", margin: "0 auto 20px auto" }}>
              Get a free audit of your current digital footprint and website. We'll examine your SEO, conversion gaps, and AI search visibility, then give you clear, actionable recommendations.
            </p>
            <Link href="/contact" className="btn btn-navy">
              Get a Free Audit & We'll Tell You
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
