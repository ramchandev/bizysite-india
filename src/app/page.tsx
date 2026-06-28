"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Search, 
  BarChart3, 
  Target, 
  Award, 
  Sparkles, 
  AlertCircle, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  MousePointerClick,
  Smartphone,
  ChevronDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Bizy Site rebuilt our clinic's website. They optimized the local search queries and simplified our appointment booking flow. Our online bookings grew by 38%, and patients keep commenting on how fast the website is.",
      name: "Ragil",
      title: "Manager, Dr. Sajan Hegde's Website",
      city: "Chennai"
    },
    {
      quote: "Renting high-end audio setups online was too friction-heavy on our old store. Bizy Site redesigned the checkout funnel into a single-page checkout and fixed our mobile cart abandonment. Our online rentals doubled in 30 days.",
      name: "Jacob",
      title: "Founder, Sound V Pro",
      city: "Chennai"
    },
    {
      quote: "Our membership directory was slow on mobile, preventing business owners from referencing members during networking sessions. Bizy Site rebuilt the index, resulting in a 48% reduction in page load speed.",
      name: "Ram",
      title: "VP of Miracle Chapter, Miracle Members",
      city: "Chennai"
    },
    {
      quote: "We were spending heavily on marketing campaigns with very poor lead volumes. Bizy Site rebuilt our landing pages and optimized our ad campaigns. Our cost-per-lead dropped by 3.4×, with highly qualified sales inquiries.",
      name: "Praveen",
      title: "Founder, Idea Heavens",
      city: "Chennai"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🚀 India's First Performance-Driven Web Agency Integrating Website Dev, SEO, CRO, Ads, and AI search optimization (AEO/GEO).</span>
        <Link href="/contact">Get Your Free Audit →</Link>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Hero Left */}
          <div className="hero-left">
            <div className="hero-badge">
              <Sparkles size={12} fill="currentColor" />
              <span>Performance-Driven Digital Agency, India</span>
            </div>
            
            <h1 className="hero-title">
              More Traffic.<br />
              More Leads.<br />
              <span>More Revenue.</span><br />
              Built Into Every Project.
            </h1>
            
            <p className="hero-subheadline">
              Bizy Site combines Website Design, SEO, CRO, Paid Ads, and AI Optimization, so your site doesn't just look good, it grows your business.
            </p>
            
            <div className="hero-ctas">
              <div className="cta-wrapper">
                <Link href="/contact" className="btn btn-primary">
                  Get My Free Website Audit →
                </Link>
                <p className="cta-microcopy light">No obligation · Delivered in 48 hours</p>
              </div>
              
              <Link href="/work" className="btn btn-ghost" style={{ marginBottom: "20px" }}>
                See What We've Built
              </Link>
            </div>
          </div>

          {/* Hero Right - Before/After Dashboard Visual */}
          <div className="hero-right">
            <div className="proof-card">
              <div className="proof-tag">
                <TrendingUp size={12} />
                <span>Conversion Performance Dashboard</span>
              </div>
              
              <h4 className="proof-name" style={{ marginBottom: "4px" }}>India Client Average</h4>
              <p className="proof-meta" style={{ marginBottom: "16px" }}>Aggregated across Web, SEO, & CRO campaigns</p>

              {/* Conversion Stats */}
              <div className="before-after-grid">
                <div className="before-box">
                  <div className="before-label" style={{ color: "#FCA5A5" }}>
                    <span>✗ BEFORE BIZY SITE</span>
                  </div>
                  <p className="before-text" style={{ fontSize: "20px", fontWeight: "bold", color: "var(--white)", margin: "8px 0" }}>1.2%</p>
                  <p className="before-text" style={{ color: "rgba(255, 255, 255, 0.85)" }}>Average conversion rate. High acquisition cost per lead.</p>
                </div>
                <div className="after-box" style={{ background: "rgba(43, 191, 191, 0.12)", border: "1px solid rgba(43, 191, 191, 0.3)" }}>
                  <div className="after-label" style={{ color: "var(--teal)" }}>
                    <span>✓ AFTER BIZY SITE</span>
                  </div>
                  <p className="after-text" style={{ fontSize: "24px", fontWeight: "bold", color: "var(--white)", margin: "8px 0" }}>3.1%</p>
                  <p className="after-text" style={{ color: "rgba(255, 255, 255, 0.9)" }}>2.5× average conversion lift. Seamless CRM integration.</p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                <div className="proof-outcome" style={{ background: "rgba(43, 191, 191, 0.15)", border: "1px solid rgba(43, 191, 191, 0.3)", color: "var(--teal)", borderRadius: "30px", padding: "6px 16px", display: "inline-flex", width: "fit-content", gap: "8px" }}>
                  <CheckCircle2 size={14} fill="currentColor" style={{ color: "var(--teal)" }} />
                  <span style={{ fontSize: "11px", fontWeight: "700" }}>Avg. 2.4× conversion lift · ₹25+ Cr in client revenue influenced</span>
                </div>
              </div>
            </div>

            {/* Three Stat pills */}
            <div className="stats-grid">
              <div className="stat-pill">
                <div className="stat-value">50+</div>
                <div className="stat-label">Indian Brands Trusted</div>
              </div>
              <div className="stat-pill">
                <div className="stat-value">2.4×</div>
                <div className="stat-label">Avg. Conversion Lift</div>
              </div>
              <div className="stat-pill">
                <div className="stat-value">AEO</div>
                <div className="stat-label">AI Search Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust-strip" style={{ background: "var(--off-white)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center", padding: "16px 20px" }}>
          <p style={{ fontWeight: "700", color: "var(--navy)", fontSize: "14px" }}>
            Trusted by 50+ Indian businesses · ₹25+ Cr in client revenue influenced · Avg. 2.4× conversion lift
          </p>
        </div>
      </section>

      {/* Section 2 — Problem / Agitation */}
      <section className="section-padding pain-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Does Your Website Work?</span>
            <h2 className="section-title">Your Website Has One Job. Is It Doing It?</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              Most websites are passive digital brochures. Bizy Site turns your website into an active revenue engine.
            </p>
          </div>

          <div className="pain-grid">
            {/* Card 1 */}
            <div className="pain-card">
              <div className="pain-top-border"></div>
              <div className="pain-icon-wrapper">
                <AlertCircle size={24} style={{ color: "var(--red)" }} />
              </div>
              <h3 className="pain-title">🔴 Traffic but no leads?</h3>
              <p className="pain-body">
                You're spending heavily on driving traffic through SEO and paid campaigns, but visitors leave without subscribing, calling, or buying.
              </p>
            </div>

            {/* Card 2 */}
            <div className="pain-card">
              <div className="pain-top-border"></div>
              <div className="pain-icon-wrapper">
                <Sparkles size={24} style={{ color: "var(--red)" }} />
              </div>
              <h3 className="pain-title">🔴 Invisible to AI Search?</h3>
              <p className="pain-body">
                ChatGPT, Perplexity, and Google AI Overviews are replacing traditional search. If your brand is not optimized for AI citation, you don't exist.
              </p>
            </div>

            {/* Card 3 */}
            <div className="pain-card">
              <div className="pain-top-border"></div>
              <div className="pain-icon-wrapper">
                <MousePointerClick size={24} style={{ color: "var(--red)" }} />
              </div>
              <h3 className="pain-title">🔴 Pretty site, poor conversions?</h3>
              <p className="pain-body">
                Your website looks beautiful, but the design ignores user psychology, clear paths, and high-conversion landing page layouts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="pain-card">
              <div className="pain-top-border"></div>
              <div className="pain-icon-wrapper">
                <BarChart3 size={24} style={{ color: "var(--red)" }} />
              </div>
              <h3 className="pain-title">🔴 Burning budget on ads?</h3>
              <p className="pain-body">
                Your Google or Meta campaigns are running, but leads are expensive and unqualified because your ads don't align with a high-conversion landing page.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn btn-navy">
              Let's fix this: Get a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 — Services Overview */}
      <section className="section-padding services-section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Our Capabilities</span>
            <h2 className="section-title">Everything Your Website Needs to Perform</h2>
            <p className="section-sub">
              Seven services. One goal: make your website your best-performing salesperson.
            </p>
          </div>

          <div className="services-grid-hub">
            {/* Service 1 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <Smartphone size={24} />
              </div>
              <h3 className="service-card-title">Website Design & Dev</h3>
              <p className="service-card-desc">
                Conversion-first websites built specifically for Indian businesses. Built for extreme speed and responsiveness.
              </p>
              <Link href="/services/web-design" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <BarChart3 size={24} />
              </div>
              <h3 className="service-card-title">CRO</h3>
              <p className="service-card-desc">
                Turn your existing traffic into more leads and sales without spending an extra rupee on acquisition.
              </p>
              <Link href="/services/cro" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <Search size={24} />
              </div>
              <h3 className="service-card-title">SEO</h3>
              <p className="service-card-desc">
                Rank higher for high-intent keywords. Drive relevant organic traffic that actually wants to buy.
              </p>
              <Link href="/services/seo" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>

            {/* Service 4 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <MessageSquare size={24} />
              </div>
              <h3 className="service-card-title">AEO</h3>
              <p className="service-card-desc">
                Answer Engine Optimization makes your brand the cited answer in voice searches and featured snippets.
              </p>
              <Link href="/services/aeo" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>

            {/* Service 5 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="service-card-title">AI Optimization (AIO)</h3>
              <p className="service-card-desc">
                Optimize your entire online footprint to ensure ChatGPT, Gemini, and Claude recognize and recommend your business.
              </p>
              <Link href="/services/aio" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>

            {/* Service 6 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <Target size={24} />
              </div>
              <h3 className="service-card-title">Generative Engine Optimization</h3>
              <p className="service-card-desc">
                Appear in the generative search results across AI search engines like Perplexity and Google AI Overviews.
              </p>
              <Link href="/services/geo" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>

            {/* Service 7 */}
            <div className="service-card-hub">
              <div className="service-card-icon">
                <Zap size={24} />
              </div>
              <h3 className="service-card-title">Google & Meta Ads</h3>
              <p className="service-card-desc">
                Performance campaigns engineered for high-quality leads, WhatsApp conversions, and maximized ROI.
              </p>
              <Link href="/services/ads" className="btn btn-outline" style={{ marginTop: "auto", width: "100%" }}>
                Learn More →
              </Link>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn btn-navy">
              Not sure what you need? → Get a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Differentiator */}
      <section className="section-padding diff-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why Bizy Site?</h2>
            <p className="section-sub">
              What makes us different from typical creative agencies.
            </p>
          </div>

          <div className="pain-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {/* Point 1 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title">We're not a one-trick agency.</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)" }}>
                Most agencies do design OR SEO OR ads. We integrate all seven disciplines. Your growth depends on your website design, SEO, and paid campaigns working in lockstep.
              </p>
            </div>

            {/* Point 2 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title">India-market specialists.</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)" }}>
                We understand local search behaviour, regional languages, mobile-first design, WhatsApp integrations, and Meta targeting specifically for Indian buyers.
              </p>
            </div>

            {/* Point 3 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title">AI-ready from day one.</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)" }}>
                We are one of the few agencies in India that optimizes content for AEO, AIO, and GEO. We make sure your brand is cited and recommended in AI answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Case Study Snapshot */}
      <section className="section-padding case-snapshot-section" style={{ background: "var(--navy-dark)", color: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag light">Our Proof</span>
            <h2 className="section-title text-white">Results We've Delivered</h2>
            <p className="section-sub text-white" style={{ opacity: 0.8 }}>
              Real, verifiable growth numbers from our clients.
            </p>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {/* Case 1 */}
            <div className="work-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)" }}>
              <div className="work-card-content">
                <span className="work-logo" style={{ color: "var(--teal)" }}>Dr. Sajan Hegde</span>
                <h3 className="work-title text-white" style={{ margin: "10px 0" }}>"38% increase in online patient bookings"</h3>
                <span className="work-meta" style={{ color: "rgba(255,255,255,0.5)" }}>Industry: Healthcare | Service: Website Design & Local SEO</span>
                <div className="work-stat-box" style={{ background: "rgba(43, 191, 191, 0.15)", color: "var(--teal)" }}>
                  38% Booking Increase
                </div>
                <Link href="/work/dr-sajan-hegde" className="btn btn-ghost" style={{ marginTop: "auto", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case 2 */}
            <div className="work-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)" }}>
              <div className="work-card-content">
                <span className="work-logo" style={{ color: "var(--teal)" }}>Sound V Pro</span>
                <h3 className="work-title text-white" style={{ margin: "10px 0" }}>"2.1× higher checkout conversion rate"</h3>
                <span className="work-meta" style={{ color: "rgba(255,255,255,0.5)" }}>Industry: Audio Production | Service: CRO & Meta Ads</span>
                <div className="work-stat-box" style={{ background: "rgba(43, 191, 191, 0.15)", color: "var(--teal)" }}>
                  2.1× Checkout Lift
                </div>
                <Link href="/work/sound-v-pro" className="btn btn-ghost" style={{ marginTop: "auto", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case 3 */}
            <div className="work-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--white)" }}>
              <div className="work-card-content">
                <span className="work-logo" style={{ color: "var(--teal)" }}>Miracle Members</span>
                <h3 className="work-title text-white" style={{ margin: "10px 0" }}>"48% reduction in mobile page load speeds"</h3>
                <span className="work-meta" style={{ color: "rgba(255,255,255,0.5)" }}>Industry: Networking | Service: Web Speed CRO</span>
                <div className="work-stat-box" style={{ background: "rgba(43, 191, 191, 0.15)", color: "var(--teal)" }}>
                  48% Speed Increase
                </div>
                <Link href="/work/miracle-members" className="btn btn-ghost" style={{ marginTop: "auto", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/work" className="btn btn-primary">
              See All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 — Process */}
      <section className="section-padding process-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Growth Process</h2>
            <p className="section-sub">
              Four structured steps to systematically increase your website's performance.
            </p>
          </div>

          <div className="success-roadmap">
            {/* Step 1 */}
            <div className="roadmap-step">
              <div className="roadmap-num">1</div>
              <div className="roadmap-details">
                <h4>Audit & Gap Analysis</h4>
                <p>We analyze your current website layout, technical health, search rankings, organic keywords, and conversion points to find where you're losing leads.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="roadmap-step">
              <div className="roadmap-num">2</div>
              <div className="roadmap-details">
                <h4>Integrated Strategy</h4>
                <p>We build a complete marketing roadmap spanning high-converting UI redesign, SEO campaigns, performance ads, and AI search presence tailored for the Indian buyer.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="roadmap-step">
              <div className="roadmap-num">3</div>
              <div className="roadmap-details">
                <h4>Execution & Setup</h4>
                <p>Our developers, copywriters, and ads specialists write copy, deploy code, configure schemas, structure tracking and connect your CRMs.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="roadmap-step">
              <div className="roadmap-num">4</div>
              <div className="roadmap-details">
                <h4>Continuous Optimization</h4>
                <p>We monitor search trends, A/B test layouts, optimize bids, and adapt assets weekly to maximize your lead count and lower CPL.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Testimonials */}
      <section className="section-padding testimonials-section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Client Feedback</span>
            <h2 className="section-title">What Our Partners Say</h2>
          </div>

          <div style={{ maxWidth: "700px", margin: "40px auto", textAlign: "center", position: "relative" }}>
            <div className="faq-card-custom" style={{ padding: "40px", borderRadius: "20px", boxShadow: "var(--shadow-sm)" }}>
              <p style={{ fontSize: "18px", color: "var(--text)", fontWeight: "600", fontStyle: "italic", marginBottom: "20px", lineHeight: "1.6" }}>
                "{testimonials[activeTestimonial].quote}"
              </p>
              <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px" }}>
                {testimonials[activeTestimonial].name}
              </h4>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>
                {testimonials[activeTestimonial].title} ({testimonials[activeTestimonial].city})
              </p>

              {/* Navigation buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "24px" }}>
                <button 
                  onClick={prevTestimonial} 
                  className="btn btn-outline" 
                  style={{ padding: "10px", borderRadius: "50%", width: "40px", height: "40px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="btn btn-outline" 
                  style={{ padding: "10px", borderRadius: "50%", width: "40px", height: "40px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Final CTA Block */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Ready to Make Your Website Work Harder?
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px" }}>
            Get a free audit and know exactly what's holding your site back.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "15px" }}>
              Get My Free Audit (Free) →
            </Link>
            <p className="cta-microcopy light" style={{ marginTop: "12px", opacity: 0.7 }}>
              No commitment. Delivered in 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
