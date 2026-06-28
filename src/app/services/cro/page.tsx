"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Percent, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CRO() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need to redesign my entire website to do CRO?",
      a: "No. In fact, many of our biggest wins come from making small, strategic adjustments to form designs, CTA positioning, hero text, and mobile navigations on the current site. We only recommend redesigns if the core layout code is slow or outdated."
    },
    {
      q: "How long before we see improvements in conversion rate?",
      a: "Initial conversion optimizations (such as fixing obvious checkout blockers, adding trust hooks, and fixing broken layouts) can show data improvements in 7 to 14 days. Major A/B testing patterns typically require 30 to 45 days to reach statistical certainty."
    },
    {
      q: "Do you supply the code adjustments, or do we?",
      a: "We do both. We have senior front-end developers who deploy changes directly, or we can package the design layouts and code changes as spec sheets for your in-house team to implement."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">More Conversions. Same Traffic. More Revenue.</h1>
          <p className="service-hero-sub">
            Stop paying Google and Meta to drive traffic that exits without buying. We optimize your website code, copy, and layout to turn more clicks into leads.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free CRO Audit →
          </Link>
        </div>
      </section>

      {/* Stat Hook */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "50%", background: "rgba(43,191,191,0.15)", color: "var(--teal)", marginBottom: "20px" }}>
            <Percent size={28} />
          </div>
          <h2 className="section-title text-white" style={{ fontSize: "clamp(24px, 4vw, 32px)", lineHeight: "1.25" }}>
            The average business website converts at 1.5% - 2.5%. <br />
            Our optimized campaigns average <span>5.4%</span>.
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", marginTop: "16px" }}>
            That means you double your sales from the exact same ad spend or organic traffic.
          </p>
        </div>
      </section>

      {/* What We Optimize */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Optimization Areas</span>
            <h2 className="section-title">Where We Find Conversion Leaks</h2>
            <p className="section-sub">We dissect every interaction on your site to remove friction points.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">Above-the-Fold Layouts</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>The first 3 seconds are critical. We clarify your value proposition and make sure the action button is instantly visible.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Inquiry Form Redesign</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Long forms drop conversions. We design multi-step, low-friction forms that capture information without annoying users.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Mobile Checkout Flows</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We optimize payment portals, remove fields, and add autofills to stop cart abandonment on mobile networks.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Call-to-Action Hierarchy</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We align primary and secondary CTAs so they guide users naturally instead of competing for attention.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Trust Signals & Proof</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We strategically place client reviews, case metrics, certifications, and guarantees at high-anxiety choice points.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Technical Friction</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We fix layout shifts, rendering bugs on specific mobile browsers, slow page weights, and broken links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Our Framework</span>
            <h2 className="section-title">The Scientific CRO Process</h2>
          </div>

          <div className="success-roadmap" style={{ marginTop: "32px" }}>
            <div className="roadmap-step">
              <div className="roadmap-num">1</div>
              <div className="roadmap-details">
                <h4>Heuristic Audit</h4>
                <p>We review your website interface against established UX patterns, accessibility rules, and cognitive behavior guidelines.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">2</div>
              <div className="roadmap-details">
                <h4>Behavioral Analytics</h4>
                <p>We analyze scrollmaps, click heatmaps, and watch session recordings to pinpoint exactly where users get confused or exit.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">3</div>
              <div className="roadmap-details">
                <h4>A/B Testing</h4>
                <p>We deploy design variations of headlines, button labels, and form flows to split traffic and measure which one generates more sales.</p>
              </div>
            </div>
            <div className="roadmap-step">
              <div className="roadmap-num">4</div>
              <div className="roadmap-details">
                <h4>Iterate & Deploy</h4>
                <p>Once a test reaches statistical certainty, we make the winner permanent, learn from the data, and start the next optimization cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Case Study</span>
            <h2 className="section-title">CRO in Action</h2>
          </div>

          <div style={{ background: "var(--off-white)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border)", marginTop: "32px" }}>
            <div className="contact-section-split">
              <div>
                <span className="market-tag" style={{ marginLeft: 0 }}>EdTech Client</span>
                <h3 style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", margin: "16px 0" }}>
                  EdTech Platform: Conversion Rates Raised From 1.4% to 3.8%
                </h3>
                <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  By redesigning their lead capture forms to be multi-step and optimizing the mobile checkout flow, we reduced their marketing acquisition cost per lead and unlocked massive volume.
                </p>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>CPL REDUCTION</span>
                    <p style={{ fontSize: "24px", color: "var(--green)", fontWeight: "800" }}>-68%</p>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>LEAD VOLUME</span>
                    <p style={{ fontSize: "24px", color: "var(--teal-dark)", fontWeight: "800" }}>2.7× More</p>
                  </div>
                </div>
              </div>
              
              <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "12px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>Traffic / month</span>
                  <span style={{ fontWeight: "bold", color: "var(--navy)" }}>1,20,000</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "12px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>Old Leads (at 1.4%)</span>
                  <span style={{ fontWeight: "bold", color: "#EF4444" }}>1,680</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--green)" }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>New Leads (at 3.8%)</span>
                  <span style={{ fontWeight: "900", fontSize: "18px" }}>4,560</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ background: "var(--off-white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">Client Story</span>
          <p style={{ fontSize: "18px", fontStyle: "italic", fontWeight: "600", color: "var(--navy)", marginBottom: "20px" }}>
            "We were driving high traffic to our products but getting low checkout completions. Bizy Site optimized our mobile forms and simplified the payment fields. Our sales increased 50% in the first month."
          </p>
          <h4 style={{ color: "var(--navy)", fontWeight: "800" }}>Ritu Malhotra, D2C Apparel Founder</h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Mumbai</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
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
          <h2 className="section-title text-white">Stop leaking leads. Let's optimize.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free website audit and see where your conversion friction points are.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free CRO Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
