"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  ChevronDown,
  Stethoscope,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Briefcase,
  ShoppingBag,
  User,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function HomeClient() {
  const router = useRouter();

  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // FAQ State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Guide Form State
  const [guideName, setGuideName] = useState("");
  const [guideEmail, setGuideEmail] = useState("");
  const [guidePhone, setGuidePhone] = useState("");
  const [isSubmittingGuide, setIsSubmittingGuide] = useState(false);
  const [guideFormError, setGuideFormError] = useState<string | null>(null);

  const handleGuideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingGuide(true);
    setGuideFormError(null);

    let gRecaptchaToken: string | undefined = undefined;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const isProd = process.env.NODE_ENV === "production";
    
    if (isProd && siteKey) {
      gRecaptchaToken = (window as any).grecaptcha?.getResponse();
      if (!gRecaptchaToken) {
        setGuideFormError("Please complete the reCAPTCHA verification.");
        setIsSubmittingGuide(false);
        return;
      }
    }

    const payload = {
      name: guideName,
      email: guideEmail,
      phone: guidePhone || "not-provided",
      plan: "Free Guide Download",
      notes: "Requested Website Conversion Cheat Sheet from Homepage magnet.",
      gRecaptchaToken
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.ok === false) {
        setGuideFormError(data?.error || "Submission failed. Please check details and try again.");
        return;
      }
      router.push(`/thank-you?name=${encodeURIComponent(guideName)}&guide=true`);
    } catch (err) {
      setGuideFormError("A network error occurred. Please try again.");
    } finally {
      setIsSubmittingGuide(false);
    }
  };

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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
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

      {/* SECTION 1 — Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Hero Left */}
          <div className="hero-left">
            <div className="hero-badge">
              <Sparkles size={12} fill="currentColor" />
              <span>500+ websites built · 10 years of US experience · Now serving India</span>
            </div>
            
            <h1 className="hero-title">
              Your website should bring you customers, <span>not just sit there looking nice.</span>
            </h1>
            
            <p className="hero-subheadline">
              We build fast, conversion-focused websites that turn visitors into calls, enquiries and sales. Whether you are starting fresh or fixing a site that is not working, we have done this 500+ times.
            </p>
            
            <div className="hero-ctas" style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "32px" }}>
              <div className="cta-wrapper" style={{ flex: "1 1 250px" }}>
                <Link href="/contact?type=quote" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Get My Free Quote →
                </Link>
                <p className="cta-microcopy light">Takes 2 minutes. We reply the same day.</p>
              </div>
              
              <div className="cta-wrapper" style={{ flex: "1 1 250px" }}>
                <Link href="/contact?type=audit" className="btn btn-outline" style={{ width: "100%", justifyContent: "center", background: "rgba(255,255,255,0.08)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>
                  Get My Free Website Audit →
                </Link>
                <p className="cta-microcopy light">A real expert reviews your site, not a bot.</p>
              </div>
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
            ⭐ 4.9 Google Rating · GST registered · You own your site
          </p>
        </div>
      </section>

      {/* SECTION 2 — The Audience Split */}
      <section className="section-padding pain-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Tell us where you are starting from</span>
            <h2 className="section-title">Two common situations. We handle both every week.</h2>
          </div>

          <div className="pain-grid" style={{ marginTop: "40px" }}>
            {/* Card A */}
            <div className="pain-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
                <h3 className="pain-title" style={{ fontSize: "20px", marginBottom: "12px", color: "var(--navy)", fontWeight: "800" }}>I don't have a website yet</h3>
                <p className="pain-body" style={{ marginBottom: "24px", fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  You are running a real business on word-of-mouth, WhatsApp, a Google listing or a Facebook page. But when a customer searches your name and finds nothing, they quietly move to a competitor who does show up. Let us fix that.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Found on Google from day one</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Built to bring enquiries, not just look good</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Live faster than you expect</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                <Link href="/contact?type=quote" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Get My Free Quote →
                </Link>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center" }}>
                  Tell us your business. We will show you what is possible.
                </p>
              </div>
            </div>

            {/* Card B */}
            <div className="pain-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
                <h3 className="pain-title" style={{ fontSize: "20px", marginBottom: "12px", color: "var(--navy)", fontWeight: "800" }}>I already have a website</h3>
                <p className="pain-body" style={{ marginBottom: "24px", fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  Maybe it looks old. Maybe it is slow. Maybe it gets visitors but no calls. Maybe the person who built it disappeared. You do not need to know exactly what is wrong to ask us to look.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>A free, honest review of what you have</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Made conversion-focused without starting from zero</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Fixed by a senior team, not a beginner</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                <Link href="/contact?type=audit" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                  Get My Free Website Audit →
                </Link>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center" }}>
                  We tell you straight: keep it, fix it, or rebuild it.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", maxWidth: "600px", margin: "32px auto 0" }}>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Not sure which one is you? <Link href="/contact" style={{ color: "var(--teal)", fontWeight: "600", textDecoration: "underline" }}>Just reach out</Link>. We will tell you honestly whether your current site is worth keeping or worth replacing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Outcome Strip */}
      <section className="section-padding outcome-section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Outcome Focused</span>
            <h2 className="section-title">A good website does one job: it gets you more business.</h2>
            <p className="section-sub" style={{ marginBottom: "48px" }}>
              Everything we build points to a real-world result, not a fancy word.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s ease" }} className="pain-card">
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "var(--teal)" }}>
                <Search size={20} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px", color: "var(--navy)" }}>Get found</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>when people search for what you offer</p>
            </div>

            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s ease" }} className="pain-card">
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "var(--teal)" }}>
                <CheckCircle2 size={20} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px", color: "var(--navy)" }}>Get chosen</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>over competitors in the first 5 seconds</p>
            </div>

            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s ease" }} className="pain-card">
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "var(--teal)" }}>
                <TrendingUp size={20} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px", color: "var(--navy)" }}>Get more calls</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>and enquiries from the same traffic</p>
            </div>

            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s ease" }} className="pain-card">
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "var(--teal)" }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px", color: "var(--navy)" }}>Get recommended</h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>when people ask Google and AI for help</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Reframe (Analogy) */}
      <section className="section-padding analogy-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Analogy</span>
            <h2 className="section-title">Most business websites are built like a brochure.<br />We build yours like a salesperson.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px", marginBottom: "40px" }}>
            <div className="pain-card" style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--red)", background: "rgba(239, 68, 68, 0.08)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE BROCHURE WEBSITE
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                A brochure sits quietly. It looks nice, lists what you do, and waits. If nobody picks it up, nothing happens.
              </p>
            </div>

            <div className="pain-card" style={{ background: "rgba(43, 191, 191, 0.03)", border: "1px solid rgba(43, 191, 191, 0.2)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--teal)", background: "rgba(43, 191, 191, 0.12)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE SALESPERSON WEBSITE
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                A good salesperson is different. They greet the visitor, understand what the visitor needs, answer the common doubts, build trust, and ask for the next step. They work even at 11pm when your shop is closed.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "16px", color: "var(--navy)", fontWeight: "700", lineHeight: "1.7", marginBottom: "32px" }}>
              Most websites in India are brochures. They describe the business but never ask for the sale. We build websites that behave like your best salesperson: clear, helpful, trusted, and always pushing gently toward a call or enquiry.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="/contact?type=quote" className="btn btn-navy" style={{ padding: "14px 32px" }}>
                Build me a website that sells →
              </Link>
              <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px" }}>
                See what a conversion-first site looks like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Services Snapshot */}
      <section className="section-padding services-section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Services</span>
            <h2 className="section-title">Everything your website needs to get found and get customers.</h2>
            <p className="section-sub" style={{ marginBottom: "48px" }}>
              We group our work into three simple jobs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* Group 1: Get Found */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}>
                  <Search size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)" }}>Get Found</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>So the right people discover you</p>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/seo" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Search Engine Optimization (SEO)</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Show up on Google when people search.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/google-business-profile" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Google Business Profile</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Appear on Google Maps and win the local "near me" searches.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/aeo" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Answer Engine Optimization (AEO)</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Be the answer when people ask voice assistants and Google.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/aio" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">AI Optimization (AIO)</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Be visible inside AI tools people now use daily.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/geo" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Generative Engine Optimization (GEO)</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Get recommended by ChatGPT and similar tools.</p>
                </div>
              </div>
            </div>
 
            {/* Group 2: Get Chosen */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)" }}>Get Chosen</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>So visitors become customers</p>
                </div>
              </div>
 
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/web-design" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Website Design & Development</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Fast, clear sites built to convert.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/cro" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Conversion Rate Optimization (CRO)</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Turn more of your existing visitors into leads.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/social-media-management" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Social Media Management</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Stay active and trusted, so customers feel confident choosing you.</p>
                </div>
              </div>
            </div>
 
            {/* Group 3: Get Traffic Now */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column" }} className="pain-card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}>
                  <Zap size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)" }}>Get Traffic Now</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>So you do not have to wait</p>
                </div>
              </div>
 
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>
                    <Link href="/services/ads" style={{ color: "var(--navy)", textDecoration: "none", transition: "color 0.2s" }} className="hover-teal">Meta & Google Ads</Link>
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Bring ready-to-buy customers to your site today.</p>
                </div>
              </div>
 
              <div style={{ marginTop: "auto", paddingTop: "40px" }}>
                <Link href="/services" className="btn btn-navy" style={{ width: "100%", justifyContent: "center" }}>
                  See all services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Proof */}
      <section className="section-padding case-snapshot-section" style={{ background: "var(--navy-dark)", color: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag light">Our Proof</span>
            <h2 className="section-title text-white">500+ businesses. 10 years. One standard: best in class.</h2>
            <p className="section-sub text-white" style={{ opacity: 0.9, maxWidth: "800px", margin: "0 auto 48px", lineHeight: "1.7" }}>
              For 10 years we built websites for businesses in the US, more than 500 of them, with advanced design, smart features, API integrations, automation and custom solutions. The same team now builds for India.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", maxWidth: "960px", margin: "0 auto 48px" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "44px", fontWeight: "900", color: "var(--teal)", marginBottom: "8px" }}>500+</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", fontWeight: "600" }}>websites delivered</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "44px", fontWeight: "900", color: "var(--teal)", marginBottom: "8px" }}>10 years</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", fontWeight: "600" }}>of senior, best-in-class experience</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "44px", fontWeight: "900", color: "var(--teal)", marginBottom: "8px" }}>7 cities</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", fontWeight: "600" }}>served across India</p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/work" className="btn btn-primary" style={{ padding: "14px 32px" }}>
              See our work →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6.5 — Featured Portfolio */}
      <section className="section-padding portfolio-snapshot-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title">Case Studies & Results</h2>
            <p className="section-sub">Websites built for business growth. Real work, real outcomes.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {[
              {
                slug: "dr-sajan-hegde",
                client: "Dr. Sajan Hegde",
                industry: "Healthcare & Spine Care",
                screenshot: "/screenshots/dr-sajan-hegde.png",
                description: "Custom booking platform and clinical branding page for one of India's top spine surgeons, streamlining online patient appointments.",
                result: "38% increase in patient bookings"
              },
              {
                slug: "sound-v-pro",
                client: "Sound V Pro",
                industry: "E-commerce & Pro Audio",
                screenshot: "/screenshots/sound-v-pro.png",
                description: "High-performance online store for professional audio and studio equipment, optimized for mobile checkout transitions.",
                result: "2.1× higher checkout conversion rate"
              },
              {
                slug: "miracle-members",
                client: "Miracle Members",
                industry: "Professional Networking",
                screenshot: "/screenshots/miracle-members.png",
                description: "Speed-optimized custom portal and networking platform with dynamic member directories and lightning-fast search capabilities.",
                result: "48% reduction in page load speed"
              }
            ].map((p, idx) => (
              <div key={idx} className="work-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "var(--white)", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ width: "100%", height: "180px", overflow: "hidden", borderBottom: "1px solid var(--border)", background: "var(--off-white)" }}>
                  <img 
                    src={p.screenshot} 
                    alt={`${p.client} website screenshot`} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                  <div>
                    <span className="section-tag" style={{ background: "rgba(43, 191, 191, 0.12)", color: "var(--teal-dark)", fontSize: "11px", display: "inline-block", marginBottom: "12px" }}>
                      {p.industry}
                    </span>
                    <h3 style={{ fontSize: "18px", margin: "0 0 12px 0", color: "var(--navy)", fontWeight: "800" }}>{p.client}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", margin: "0 0 16px 0", minHeight: "60px" }}>
                      {p.description}
                    </p>
                    <div style={{ background: "var(--teal-light)", color: "var(--teal-dark)", fontWeight: "800", padding: "10px 14px", borderRadius: "8px", fontSize: "13.5px", display: "inline-block", marginBottom: "16px" }}>
                      {p.result}
                    </div>
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <Link href={`/work/${p.slug}`} style={{ fontSize: "13px", fontWeight: "700", color: "var(--navy)", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }} className="hover-teal">
                      <span>View Case Study Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/work" className="btn btn-navy" style={{ padding: "14px 32px" }}>
              See All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Industries */}
      <section className="section-padding industries-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Industries</span>
            <h2 className="section-title">Built for the businesses India runs on.</h2>
            <p className="section-sub" style={{ marginBottom: "48px" }}>
              We know what works for your kind of business, because we have built it before.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "48px" }}>
            {[
              {
                name: "Healthcare & Clinics",
                href: "/industries/healthcare",
                icon: Stethoscope
              },
              {
                name: "Real Estate & Builders",
                href: "/industries/real-estate",
                icon: Building2
              },
              {
                name: "Manufacturing & B2B",
                href: "/industries/manufacturing",
                icon: Factory
              },
              {
                name: "Education & Coaching",
                href: "/industries/education",
                icon: GraduationCap
              },
              {
                name: "Hospitality & Restaurants",
                href: "/industries/hospitality",
                icon: Hotel
              },
              {
                name: "Professional Services (CA, Legal, Consultants)",
                href: "/industries/professional-services",
                icon: Briefcase
              },
              {
                name: "Retail & D2C / E-commerce",
                href: "/industries/retail",
                icon: ShoppingBag
              }
            ].map((ind, index) => {
              const Icon = ind.icon;
              return (
                <Link 
                  key={index} 
                  href={ind.href}
                  style={{ 
                    background: "var(--off-white)", 
                    border: "1px solid var(--border)", 
                    borderRadius: "var(--radius-md)", 
                    padding: "20px 24px", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "12px", 
                    transition: "all 0.2s ease",
                    textDecoration: "none"
                  }}
                  className="pain-card hover-teal"
                >
                  <div style={{ color: "var(--teal)", display: "flex", alignItems: "center" }}>
                    <Icon size={18} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", transition: "color 0.2s" }}>{ind.name}</span>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/contact?type=quote" className="btn btn-navy" style={{ padding: "14px 32px" }}>
              Find my industry →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — How It Works */}
      <section className="section-padding process-section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Process</span>
            <h2 className="section-title">Simple for you. Hard work for us.</h2>
          </div>

          <div className="success-roadmap" style={{ marginTop: "40px" }}>
            {/* Step 1 */}
            <div className="roadmap-step">
              <div className="roadmap-num">1</div>
              <div className="roadmap-details">
                <h4>Tell us about your business</h4>
                <p>A short call or form. About 15 minutes of your time.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="roadmap-step">
              <div className="roadmap-num">2</div>
              <div className="roadmap-details">
                <h4>We plan and build</h4>
                <p>Copy, design, speed, SEO and conversion, handled by our senior team.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="roadmap-step">
              <div className="roadmap-num">3</div>
              <div className="roadmap-details">
                <h4>You review</h4>
                <p>We refine until you are proud to share the link.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="roadmap-step">
              <div className="roadmap-num">4</div>
              <div className="roadmap-details">
                <h4>Go live and grow</h4>
                <p>Your site launches. You own it. We help it keep performing.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", maxWidth: "600px", margin: "32px auto 0" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", fontStyle: "italic", lineHeight: "1.6" }}>
              <strong>Note:</strong> Already have a site? Same process. We just start from what you have and carry over whatever is already working.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Why Bizy Site */}
      <section className="section-padding diff-section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Differentiator</span>
            <h2 className="section-title">Best-in-class websites, made for the Indian market.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {/* Card 1 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title" style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Senior team only</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.6" }}>
                Every site is built and reviewed by experienced experts who have shipped 500+ projects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title" style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Outcomes, not jargon</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.6" }}>
                We talk in calls, leads and sales, not buzzwords.
              </p>
            </div>

            {/* Card 3 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title" style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Conversion built in</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.6" }}>
                Every page is designed to move the visitor toward action.
              </p>
            </div>

            {/* Card 4 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title" style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>No spam culture</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.6" }}>
                When a customer shares their number with you, we build trust into the experience, not pressure.
              </p>
            </div>

            {/* Card 5 */}
            <div className="pain-card">
              <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
              <h3 className="pain-title" style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>You own everything</h3>
              <p className="pain-body" style={{ color: "var(--text-mid)", fontSize: "13px", lineHeight: "1.6" }}>
                Your site, your content, your data. From day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Retained from original design to show case feedback) */}
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

      {/* SECTION 10 — Lead Magnet */}
      <section className="section-padding lead-magnet-section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "40px", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden" }} className="pain-card">
            {/* Decorative gradient corner */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: "radial-gradient(circle, rgba(43, 191, 191, 0.1) 0%, transparent 70%)", pointerEvents: "none" }}></div>
            
            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <span className="section-tag" style={{ margin: "0 auto 12px" }}>Free Resource</span>
              <h2 style={{ fontSize: "26px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>Not ready for a quote? Start here.</h2>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "24px" }}>
                Download our free <strong style={{ fontWeight: "700" }}>Website Conversion Cheat Sheet</strong>: 10 proven tips to turn more visitors into leads, without spending more on ads.
              </p>
              
              <form onSubmit={handleGuideSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left", zIndex: 5, position: "relative" }}>
                <div>
                  <label htmlFor="guideName" style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "var(--navy)", marginBottom: "6px" }}>Name</label>
                  <div className="form-input-wrapper">
                    <User size={16} className="form-input-icon" />
                    <input
                      type="text"
                      id="guideName"
                      value={guideName}
                      onChange={(e) => setGuideName(e.target.value)}
                      placeholder="Rahul Sharma"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guideEmail" style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "var(--navy)", marginBottom: "6px" }}>Email Address</label>
                  <div className="form-input-wrapper">
                    <Mail size={16} className="form-input-icon" />
                    <input
                      type="email"
                      id="guideEmail"
                      value={guideEmail}
                      onChange={(e) => setGuideEmail(e.target.value)}
                      placeholder="rahul@sharma.co"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guidePhone" style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "var(--navy)", marginBottom: "6px" }}>Mobile Number <span style={{ fontWeight: "normal", color: "var(--text-muted)", fontSize: "11px" }}>(Optional)</span></label>
                  <div className="form-input-wrapper">
                    <Phone size={16} className="form-input-icon" />
                    <input
                      type="tel"
                      id="guidePhone"
                      value={guidePhone}
                      onChange={(e) => setGuidePhone(e.target.value)}
                      placeholder="98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                  <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                    <div 
                      className="g-recaptcha" 
                      data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    />
                  </div>
                )}

                {guideFormError && (
                  <div role="alert" style={{ color: "#EF4444", fontSize: "13px", fontWeight: "600", marginTop: "4px" }}>
                    {guideFormError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", justifyContent: "center", marginTop: "8px" }}
                  disabled={isSubmittingGuide}
                >
                  {isSubmittingGuide ? "Preparing Download..." : "Download the Free Guide →"}
                </button>

                <p style={{ fontSize: "11px", color: "var(--text-muted)", textAlign: "center", marginTop: "4px", margin: 0 }}>
                  10 fixes you can start using today. No cost. Your details stay private.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ (Home) */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much does a website cost in India?",
                a: "It depends on your goals, number of pages and features. A simple business site costs far less than a custom e-commerce or booking platform. Tell us what you need and we will send a clear, no-obligation quote, with no hidden charges."
              },
              {
                q: "How long does it take to build a website?",
                a: "Most business websites are ready in a few weeks, depending on size and how quickly we get your content and approvals. We will give you a clear timeline before we start."
              },
              {
                q: "Will my website come on the first page of Google?",
                a: "A new site does not rank on day one, just like a new shop does not get a crowd on opening day. We build strong SEO foundations from the start, and with our SEO service we work to move you up over time for the searches that matter to your business."
              },
              {
                q: "Do I own my website after you build it?",
                a: "Yes. You own your website, content and data from day one. No lock-in."
              },
              {
                q: "Do you give a GST invoice?",
                a: "Yes. We are GST registered and provide a proper tax invoice for every payment."
              },
              {
                q: "I already have a website. Can you just improve it instead of rebuilding?",
                a: "Often, yes. We start with a free audit. If your current site has a good base, we improve speed, design and conversion without a full rebuild. If it is holding you back, we will tell you honestly."
              },
              {
                q: "Which cities do you work in?",
                a: "We serve businesses across India, including Chennai, Coimbatore, Mumbai, Bangalore, Pune, Delhi and Hyderabad. Everything is handled online, so location is never a barrier."
              },
              {
                q: "Will I get calls and enquiries, or just a nice-looking site?",
                a: "Our entire approach is built around enquiries. A good-looking site that does not bring business is a failure in our eyes. We design every page to turn visitors into calls and leads."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-card-custom" style={{ borderBottom: "1px solid var(--border)" }}>
                <div 
                  className="faq-trigger-custom" 
                  style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", cursor: "default" }}
                >
                  <span style={{ textAlign: "left", paddingRight: "16px", fontWeight: "800" }}>{faq.q}</span>
                </div>
                <div className="faq-content-custom" style={{ paddingTop: 0 }}>
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — Final CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Let us get you more customers from your website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=quote" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Quote →
                </Link>
              </div>
              
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-outline" style={{ padding: "14px 32px", background: "rgba(255,255,255,0.08)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>
                  Get My Free Website Audit →
                </Link>
              </div>
            </div>
            
            <p className="cta-microcopy light" style={{ marginTop: "16px", opacity: 0.8 }}>
              Same-day reply. Real experts. Zero pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <Script 
          src={`https://www.google.com/recaptcha/api.js`} 
          async 
          defer 
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
