"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, TrendingDown, Target, Zap, BarChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Ads() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the minimum budget required to start?",
      a: "We recommend a minimum media budget of ₹30,000 to ₹50,000 per month for local campaigns, and ₹1,00,000+ per month for national campaigns to gather enough conversion data for optimization."
    },
    {
      q: "Do you run campaigns on our ad account or a new one?",
      a: "We prefer taking over and auditing your existing Google and Meta ad accounts. This preserves your historical conversion pixel data, which is highly valuable for audience targeting."
    },
    {
      q: "Do we own the ad accounts and creative assets?",
      a: "Yes, 100%. You own your ad accounts, billing methods, and creative assets. There is no account lock-in. If you choose to stop working with us, you retain full access."
    },
    {
      q: "Can you handle both Google and Meta Ads together?",
      a: "Yes. In fact, we recommend it. A full-funnel approach uses Google Search to capture high-intent buyers looking for you, while Meta Ads build awareness, retarget site visitors, and generate cheap WhatsApp leads."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">Stop Paying for Clicks. Start Paying for Leads.</h1>
          <p className="service-hero-sub">
            We run Google and Meta ad campaigns engineered for lead generation, with targeting, dedicated landing pages, and CRO baked in from day one.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get My Free Ads Audit →
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust-strip" style={{ background: "var(--off-white)", borderBottom: "1px solid var(--border)", textAlign: "center", padding: "16px 20px" }}>
        <p style={{ fontWeight: "700", color: "var(--navy)", fontSize: "14px" }}>
          ₹10+ Cr in ad spend managed · Avg. cost-per-lead reduced by 42% · Google Partner
        </p>
      </section>

      {/* Problem / Agitation */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Budget Leak</span>
            <h2 className="section-title">Running Ads? Here's Why They're Underperforming.</h2>
            <p className="section-sub">Most ad campaigns leak money because they ignore post-click design.</p>
          </div>

          <div className="comparison-matrix-wrapper">
            <table className="comparison-matrix">
              <thead>
                <tr>
                  <th>Common Issue</th>
                  <th>Why It Happens</th>
                  <th>What It Costs You</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>High Cost Per Lead</strong></td>
                  <td>Broad targeting, bidding on wrong keywords, poor quality scores.</td>
                  <td>Budget wasted on unqualified clicks from people who will never buy.</td>
                </tr>
                <tr>
                  <td><strong>Clicks but No Conversions</strong></td>
                  <td>Sending paid traffic to a generic homepage instead of a dedicated landing page.</td>
                  <td>You pay Google/Meta for the visit, but make zero revenue.</td>
                </tr>
                <tr>
                  <td><strong>No Visibility into ROI</strong></td>
                  <td>Poor conversion tracking setup, missing GA4 parameters, no CRM loop.</td>
                  <td>You don't know which keyword or creative is driving actual sales.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What We Do - Google Ads */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="contact-section-split">
            <div>
              <span className="section-tag">Google Ads</span>
              <h2 className="section-title">Intent-Based Google Campaigns</h2>
              <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                We capture users actively searching for your service. By targeting high-intent keywords, managing negative lists, and writing benefit-focused copy, we drive buyers ready to purchase.
              </p>
              <ul className="outcome-list">
                <li className="outcome-item"><Check size={14} /> <span>Google Search & Performance Max campaigns</span></li>
                <li className="outcome-item"><Check size={14} /> <span>Negative keyword pruning to stop budget leaks</span></li>
                <li className="outcome-item"><Check size={14} /> <span>GTM & GA4 conversion tracking configuration</span></li>
                <li className="outcome-item"><Check size={14} /> <span>YouTube video and Display remarketing setups</span></li>
              </ul>
            </div>
            
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px" }}>
              <span className="market-tag">Google Partner</span>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "16px", marginBottom: "8px" }}>Search Capture</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>We align search query mapping to local and national user intent, ensuring your ads show up when intent is highest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Meta Ads */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="contact-section-split">
            <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px" }}>
              <span className="market-tag" style={{ background: "rgba(27,63,122,0.1)", color: "var(--navy)" }}>Social Funnels</span>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginTop: "16px", marginBottom: "8px" }}>WhatsApp Lead Generation</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>For the Indian market, native lead forms and direct-to-WhatsApp ad triggers generate highly active and immediate conversation leads.</p>
            </div>

            <div>
              <span className="section-tag">Meta Ads</span>
              <h2 className="section-title">Audience-Driven Meta Campaigns</h2>
              <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                We run campaigns across Facebook and Instagram to build awareness, educate target demographics, retarget website visitors, and drive cheap lead signups.
              </p>
              <ul className="outcome-list">
                <li className="outcome-item"><Check size={14} /> <span>Native Meta Lead Forms & Landing Page setups</span></li>
                <li className="outcome-item"><Check size={14} /> <span>WhatsApp integration for instant sales chat triggers</span></li>
                <li className="outcome-item"><Check size={14} /> <span>Creative strategy: Carousels, stat-pills, and video hooks</span></li>
                <li className="outcome-item"><Check size={14} /> <span>Retargeting stacks and lookalike audience mapping</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Bizy Site Difference */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Full Funnel Integration</span>
            <h2 className="section-title">We Don't Just Run Ads. We Build the Full Funnel.</h2>
            <p className="section-sub">Typical agencies link ads to your homepage and blame your product. We optimize the entire path.</p>
          </div>

          <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "32px", borderRadius: "20px", marginTop: "32px" }}>
            <div className="success-roadmap" style={{ maxWidth: "100%", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", display: "grid", gap: "20px" }}>
              <div style={{ textAlign: "center", padding: "16px" }}>
                <span style={{ fontSize: "12px", color: "var(--teal-dark)", fontWeight: "bold" }}>STEP 1</span>
                <h4 style={{ margin: "10px 0" }}>High-Intent Ads</h4>
                <p style={{ fontSize: "12px", color: "var(--text-mid)" }}>Google Search & Meta Ads targeted strictly to buyer intent.</p>
              </div>
              <div style={{ textAlign: "center", padding: "16px", borderLeft: "1px solid var(--border)" }}>
                <span style={{ fontSize: "12px", color: "var(--teal-dark)", fontWeight: "bold" }}>STEP 2</span>
                <h4 style={{ margin: "10px 0" }}>Dedicated Page</h4>
                <p style={{ fontSize: "12px", color: "var(--text-mid)" }}>Light, mobile-first landing page with clear CTA hierarchies.</p>
              </div>
              <div style={{ textAlign: "center", padding: "16px", borderLeft: "1px solid var(--border)" }}>
                <span style={{ fontSize: "12px", color: "var(--teal-dark)", fontWeight: "bold" }}>STEP 3</span>
                <h4 style={{ margin: "10px 0" }}>Lead Capture</h4>
                <p style={{ fontSize: "12px", color: "var(--text-mid)" }}>Low-friction forms and WhatsApp chat hooks routing instantly.</p>
              </div>
              <div style={{ textAlign: "center", padding: "16px", borderLeft: "1px solid var(--border)" }}>
                <span style={{ fontSize: "12px", color: "var(--teal-dark)", fontWeight: "bold" }}>STEP 4</span>
                <h4 style={{ margin: "10px 0" }}>CRM & Analytics</h4>
                <p style={{ fontSize: "12px", color: "var(--text-mid)" }}>GA4 tracking loop measuring exact keyword-to-sale attribution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad + CRO Bundle Callout */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag light">Multiplied ROI</span>
          <h2 className="section-title text-white">Ads Work Better When Your Landing Page Is Built to Convert.</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
            If your landing page is clunky or slow, visitors leave instantly. Combining Ads with CRO ensures that every rupee you spend driving a click has a 3× higher chance of turning into a lead.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Ask us about the Ads + CRO bundle →
          </Link>
        </div>
      </section>

      {/* Platforms We Work With */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Supported Channels</span>
            <h2 className="section-title">Platforms We Manage</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginTop: "32px" }}>
            <span className="filter-tab active">Google Search</span>
            <span className="filter-tab active">Google Display</span>
            <span className="filter-tab active">YouTube Ads</span>
            <span className="filter-tab active">Facebook Ads</span>
            <span className="filter-tab active">Instagram Ads</span>
            <span className="filter-tab active">WhatsApp Ads</span>
          </div>
        </div>
      </section>

      {/* Reporting & Transparency */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Transparency</span>
            <h2 className="section-title">Clean Reporting. No Hidden Fees.</h2>
            <p className="section-sub">We believe in absolute transparency and direct account ownership.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 className="feature-box-title">Account Ownership</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>You retain full administrative ownership of your ad accounts. We operate as certified partner managers.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Weekly Performance Reports</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>No convoluted jargon. We send weekly video briefings detailing spend, lead counts, and cost-per-lead.</p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-title">Live Looker Studio Dashboard</h3>
              <p style={{ fontSize: "13px", color: "var(--text-mid)" }}>Access a live data link showing impressions, clicks, lead attributions, and campaign spent metrics in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Ad Performance Case</span>
            <h2 className="section-title">Real Lead Generation Results</h2>
          </div>

          <div style={{ background: "var(--off-white)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border)", marginTop: "32px" }}>
            <div className="contact-section-split">
              <div>
                <span className="market-tag" style={{ marginLeft: 0 }}>EdTech Brand</span>
                <h3 style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", margin: "16px 0" }}>
                  EdTech: Lead Volume Multiplied via Ads + CRO Redesign
                </h3>
                <p style={{ color: "var(--text-mid)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  By implementing custom landing pages, optimizing Google Search match terms, and setting up instant WhatsApp conversions, we scaled their inquiry pipeline.
                </p>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>BUDGET / MONTH</span>
                    <p style={{ fontSize: "24px", color: "var(--navy)", fontWeight: "800" }}>₹2,00,000</p>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>LEAD INCREASE</span>
                    <p style={{ fontSize: "24px", color: "var(--green)", fontWeight: "800" }}>3.4× More Leads</p>
                  </div>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "12px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>Before Cost-Per-Lead</span>
                  <span style={{ fontWeight: "bold", color: "#EF4444" }}>₹1,200</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--green)", fontWeight: "bold" }}>
                  <span style={{ fontSize: "14px" }}>After Cost-Per-Lead</span>
                  <span style={{ fontWeight: "900", fontSize: "18px" }}>₹380</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ background: "var(--off-white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">Client Feedback</span>
          <p style={{ fontSize: "18px", fontStyle: "italic", fontWeight: "600", color: "var(--navy)", marginBottom: "20px" }}>
            "Bizy Site rebuilt our search ad campaign and pointed it to optimized landing pages. Our monthly lead counts grew from 40 to 145 within two months, and lead quality is the highest we've seen."
          </p>
          <h4 style={{ color: "var(--navy)", fontWeight: "800" }}>Mohit Chawla, CEO</h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Industrial Supply Brand (Gurugram)</p>
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
          <h2 className="section-title text-white">Let's Make Your Ad Budget Work Harder.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Get a free audit of your current Google or Meta campaigns. We'll show you exactly where the leaks are.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free Ads Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
