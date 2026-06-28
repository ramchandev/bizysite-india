"use client";

import Link from "next/link";
import { Check, ShieldCheck, Heart, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "Ramachandran",
      title: "Co-Founder & Head of Tech",
      bio: "14+ years experience building web architectures. Former Tech Lead at top tier SaaS systems. Obsessed with page speeds."
    },
    {
      name: "Vivek",
      title: "Co-Founder & Growth Lead",
      bio: "Spent 10+ years scaling performance marketing funnels, managing over ₹15 Cr in media spends across D2C and EdTech."
    },
    {
      name: "Subramaniyan",
      title: "Head of CRO & UX",
      bio: "Specializes in cognitive user behaviour, heatmap modeling, and data-driven A/B layout design."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <h1 className="service-hero-title">We're Bizy Site. We Make Indian Businesses Compete Online.</h1>
          <p className="service-hero-sub">
            We are a team of tech, SEO, ads, and conversion specialists focused entirely on business results, not creative vanity.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get A Free Website Audit →
          </Link>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">Our Origin</span>
          <h2 className="section-title" style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", marginBottom: "20px" }}>
            Why We Started Bizy Site
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            As developers and performance marketers, we watched hundreds of Indian business owners make the same mistake: spending large budgets on beautiful websites that generated absolutely zero business inquiries.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            Agencies handed over projects and vanished. When contact forms broke or page speeds tanked, founders were left stranded. Or worse, agencies recommended driving expensive paid traffic to websites that weren't optimized to convert.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7" }}>
            We started Bizy Site to bridge this exact gap: combining website design, technical SEO, conversion rate optimization, and paid campaigns under a single, unified team. We take full responsibility for your digital funnel.
          </p>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What We Believe</h2>
          </div>

          <div className="pain-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginTop: "32px" }}>
            <div className="pain-card" style={{ background: "var(--white)" }}>
              <div className="pain-icon-wrapper" style={{ background: "var(--teal-light)", color: "var(--teal-dark)" }}>
                <ShieldCheck size={24} />
              </div>
              <h3 className="pain-title">Revenue Over Aesthetics</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px" }}>
                A website that doesn't convert is a liability, not an asset. We prioritize page load speed, clear layout copywriting, and low-friction contact funnels above complex, heavy animations.
              </p>
            </div>

            <div className="pain-card" style={{ background: "var(--white)" }}>
              <div className="pain-icon-wrapper" style={{ background: "var(--teal-light)", color: "var(--teal-dark)" }}>
                <Heart size={24} />
              </div>
              <h3 className="pain-title">Full Funnel Responsibility</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px" }}>
                We don't play the blame game. If your ads are running but not converting, we analyze the landing page. If SEO traffic is high but leads are low, we audit the forms. We optimize the entire path.
              </p>
            </div>

            <div className="pain-card" style={{ background: "var(--white)" }}>
              <div className="pain-icon-wrapper" style={{ background: "var(--teal-light)", color: "var(--teal-dark)" }}>
                <UserCheck size={24} />
              </div>
              <h3 className="pain-title">No Bureaucracy, Just Speed</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px" }}>
                We don't hide behind account managers or ticketing delays. You work directly with senior developers and performance marketers who can audit code, rewrite copy, and launch campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">Senior Experts, No Junior Account Managers</h2>
            <p className="section-sub">You get direct access to the specialists working on your website.</p>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className="work-card" style={{ padding: "32px", textAlign: "center" }}>
                {/* Styled initial circle representing a premium profile */}
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--navy)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold", margin: "0 auto 20px auto" }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="work-title" style={{ fontSize: "18px", margin: "0 0 4px 0" }}>{member.name}</h3>
                <span className="work-meta" style={{ color: "var(--teal-dark)", fontSize: "12px", display: "block", marginBottom: "16px" }}>{member.title}</span>
                <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)" }}>50+</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Indian Businesses Scaled</div>
            </div>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)" }}>₹25+ Cr</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Client Revenue Influenced</div>
            </div>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)" }}>2.4×</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.7)" }}>Average Conversion Lift</div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach (Exclusivity Signal) */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">We Don't Accept Every Client. We Partner With the Right Ones.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
            To maintain absolute quality and deliver massive ROI, we limit our intake to 3 new project engagements per month. We do not work with companies seeking simple, low-effort template sites, nor do we run campaigns without proper tracking configurations.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7" }}>
            We look for partners who understand that their digital marketing funnel is an investment, not a cost center, and who want to build a long-term compound growth machine.
          </p>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Work with a team that takes your growth personally.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit report and see where your digital opportunities lie.
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
