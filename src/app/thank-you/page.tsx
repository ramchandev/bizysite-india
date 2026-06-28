"use client";

import Link from "next/link";
import { CheckCircle2, Calendar, FileText, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <>
      <Header />

      <section className="section-padding" style={{ background: "var(--off-white)", paddingTop: "120px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "72px", height: "72px", borderRadius: "50%", background: "var(--teal-light)", color: "var(--green)", marginBottom: "24px" }}>
            <CheckCircle2 size={36} fill="currentColor" style={{ color: "var(--green)" }} />
          </div>

          <h1 style={{ color: "var(--navy)", fontWeight: "900", fontSize: "clamp(28px, 5vw, 40px)", lineHeight: "1.2", marginBottom: "16px" }}>
            You're In. Expect a Message Within 24 Hours.
          </h1>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", marginBottom: "40px" }}>
            Thank you for requesting a free website audit. Our senior developers are already analyzing your digital footprint.
          </p>

          {/* What Happens Next Roadmap */}
          <div className="text-left" style={{ marginBottom: "48px" }}>
            <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "18px", marginBottom: "20px", textAlign: "center" }}>
              What Happens Next:
            </h3>
            
            <div className="success-roadmap">
              <div className="roadmap-step">
                <div className="roadmap-num">1</div>
                <div className="roadmap-details">
                  <h4>Website & Competitor Review</h4>
                  <p>Our audit team conducts a deep crawl of your website layout, mobile load speeds, core SEO code, and competitor rankings.</p>
                </div>
              </div>
              <div className="roadmap-step">
                <div className="roadmap-num">2</div>
                <div className="roadmap-details">
                  <h4>Custom Report Preparation</h4>
                  <p>We compile a personalized recommendations document focusing on your conversion gaps, technical speed leaks, and AI search presence.</p>
                </div>
              </div>
              <div className="roadmap-step">
                <div className="roadmap-num">3</div>
                <div className="roadmap-details">
                  <h4>Delivery via WhatsApp / Email</h4>
                  <p>Within 24 to 48 hours, we send the complete audit details directly to your provided contact coordinates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Embed Placeholder / Direct Scheduler */}
          <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "20px", padding: "32px", marginBottom: "40px", boxShadow: "var(--shadow-sm)" }}>
            <Calendar size={24} style={{ color: "var(--teal-dark)", marginBottom: "12px" }} />
            <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "18px", marginBottom: "8px" }}>
              Want to skip the wait?
            </h3>
            <p style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.5", marginBottom: "20px" }}>
              Book a live 15-minute strategy call with our co-founder. We'll run through your website audit live and answer your growth questions.
            </p>
            {/* Inline Mock Calendly scheduler or button */}
            <a 
              href="https://calendly.com/mock-bizysite-in/strategy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-navy"
              style={{ width: "100%" }}
            >
              🗓️ Book A Live Strategy Call
            </a>
          </div>

          {/* While you wait resources */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
            <h4 style={{ color: "var(--text-muted)", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
              While You Wait:
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <Link href="/blog" className="btn btn-outline" style={{ display: "inline-flex", gap: "8px" }}>
                <FileText size={16} />
                <span>Read Our Search Guides</span>
              </Link>
              <Link href="/work" className="btn btn-outline" style={{ display: "inline-flex", gap: "8px" }}>
                <span>See Our Case Studies</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
