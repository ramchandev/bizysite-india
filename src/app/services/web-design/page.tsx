"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebDesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to design and launch?",
      a: "A typical custom website redesign takes between 3 to 5 weeks from onboarding to launching. More complex web apps or e-commerce stores can take 6-8 weeks."
    },
    {
      q: "Do you build on Shopify / WordPress?",
      a: "Yes. We work extensively with Shopify (for D2C brands), WordPress (for content-rich authority sites), and headless custom builds (React/Next.js) for enterprises that require absolute speed and flexibility."
    },
    {
      q: "What do you need from us to get started?",
      a: "We need basic brand guidelines, logo assets, and access to any existing domains, hosting, or copywriting assets. If you don't have copy, our copywriters can write SEO-optimized content for you."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Websites Designed to Convert, Not Just Impress</h1>
          <p className="service-hero-sub">
            Bizy Site builds conversion-first websites for Indian businesses that load in milliseconds and turn casual traffic into qualified revenue.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free Website Audit →
          </Link>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Aesthetic Trap</span>
          <h2 className="section-title">Most Websites in India are Built for Aesthetics. Yours Should Be Built for Revenue.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
            Agencies will sell you complex animations, unnecessary scripts, and heavy page designs that look fancy in a slide deck but load slowly on mobile networks and confuse actual buyers.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.7" }}>
            A beautiful website that does not convert is a liability, not an asset. We prioritize user psychology, loading speeds, mobile-first rendering, and clear CTA hierarchies so your site actually helps your business grow.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Engineered to Perform</h2>
            <p className="section-sub">Standard features baked into every Single Bizy Site project.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">Mobile-First Layouts</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>80%+ of Indian traffic is mobile. We design and test layouts strictly for mobile views before desktop.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Core Web Vitals Speed</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Slow sites kill conversions. We build with lightweight code, optimized images, and clean caching systems.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">CRO-Integrated Hierarchy</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Every page has a single job. Buttons, navigation, and text are placed exactly where they generate leads.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Custom CMS Integration</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Easily publish blog posts, add new team members, edit copy, or update portfolio pieces without code access.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">SEO Ready Setup</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Includes technical markup, XML sitemaps, indexation setups, and semantic heading tags out of the box.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Analytics & CRM Sync</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We set up Google Analytics (GA4), heatmaps, and route lead submissions directly to your sales CRM or WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Our Workflow</span>
            <h2 className="section-title">From Concept to Launch</h2>
          </div>

          <div className="success-roadmap" style={{ marginTop: "32px" }}>
            <div className="roadmap-step">
              <div className="roadmap-num">1</div>
              <div className="roadmap-details">
                <h4>Discovery & Audit</h4>
                <p>We analyze your competitors, define target buyers, map conversion paths, and outline requirements.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">2</div>
              <div className="roadmap-details">
                <h4>UX Wireframes</h4>
                <p>We create the blueprints for each page layout to align the content and CTA hierarchy before graphics.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">3</div>
              <div className="roadmap-details">
                <h4>UI Design</h4>
                <p>We apply high-fidelity styling, typography, brand assets, and animations to establish premium look and feel.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">4</div>
              <div className="roadmap-details">
                <h4>Development & QA</h4>
                <p>Our developers code the responsive UI and run rigorous speed, mobile view, and browser testing protocols.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">5</div>
              <div className="roadmap-details">
                <h4>Launch & Optimization</h4>
                <p>We deploy the site to production, submit to Google, verify tracking analytics, and start initial heatmaps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio thumbnails */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Built to Perform</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {/* Project 1 */}
            <div className="work-card">
              <div className="work-card-content">
                <span className="work-logo">Dr. Sajan Hegde</span>
                <h3 className="work-title">
                  <a href="https://drsajankhegde.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--navy)" }}>
                    Dr. Sajan Hegde Clinic Website
                  </a>
                </h3>
                <span className="work-meta">Healthcare & Spine Care Authority Portal</span>
                <div className="work-stat-box">
                  38% increase in online patient bookings
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="work-card">
              <div className="work-card-content">
                <span className="work-logo">Sound V Pro</span>
                <h3 className="work-title">
                  <a href="https://soundvpro.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--navy)" }}>
                    Sound V Pro Rentals Portal
                  </a>
                </h3>
                <span className="work-meta">E-Commerce Audio Systems Platform</span>
                <div className="work-stat-box">
                  2.1× higher checkout conversion rate
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="work-card">
              <div className="work-card-content">
                <span className="work-logo">Miracle Members</span>
                <h3 className="work-title">
                  <a href="https://miraclemembers.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--navy)" }}>
                    Miracle Members Directory
                  </a>
                </h3>
                <span className="work-meta">Business Networking & Member Platform</span>
                <div className="work-stat-box">
                  48% reduction in mobile page load speeds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ background: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">Success Story</span>
          <p style={{ fontSize: "18px", fontStyle: "italic", fontWeight: "600", color: "var(--navy)", marginBottom: "20px" }}>
            "Bizy Site rebuilt our networking chapter directory. The old system was bloated, taking over 6 seconds to load on mobile connections, which was a huge bottleneck. Within days of launch, members could search and connect instantly, with directory load times dropping by 48%."
          </p>
          <h4 style={{ color: "var(--navy)", fontWeight: "800" }}>Ram, VP of Miracle Chapter</h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Miracle Members Directory (Chennai)</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "32px" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card-custom">
                <button 
                  className="faq-trigger-custom"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaq === idx ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {openFaq === idx && (
                  <div className="faq-content-custom">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Let's build a website that works.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit report and see where your current website is leaking inquiries.
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
