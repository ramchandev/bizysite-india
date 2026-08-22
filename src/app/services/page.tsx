import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Smartphone, 
  BarChart3, 
  Search, 
  MessageSquare, 
  Sparkles, 
  Target, 
  Zap, 
  Check,
  CheckCircle2,
  MapPin,
  Share2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Web Design, SEO & Digital Marketing Services in India | Bizy Site",
  description: "Everything your website needs to get found and get customers. Web design, CRO, SEO, AEO, AIO, GEO and Ads, by a team with 500+ sites. Get a free quote.",
  keywords: "website design services India, digital marketing agency India, SEO services India, local SEO Maps ranking, CRO agency India, AI optimization services",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Design, SEO & Digital Marketing Services in India | Bizy Site",
    description: "Everything your website needs to get found and get customers. Web design, CRO, SEO, AEO, AIO, GEO and Ads, by a team with 500+ sites. Get a free quote.",
    url: `${siteUrl}/services`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, SEO & Digital Marketing Services in India | Bizy Site",
    description: "Everything your website needs to get found and get customers. Web design, CRO, SEO, AEO, AIO, GEO and Ads, by a team with 500+ sites. Get a free quote.",
  },
};

export default function ServicesHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/#service`,
        "name": "Web Design & Digital Marketing Services",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Everything your website needs to get found and get customers. Web design, CRO, SEO, AEO, AIO, GEO and Ads.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${siteUrl}/services`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      {/* SECTION 1 — Hero */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Our Services</span>
          <h1 className="service-hero-title">Everything your website needs to get found and get customers.</h1>
          <p className="service-hero-sub">
            You do not need to understand every technical term. You need more calls, more enquiries and more sales. We handle the rest, with a team that has built 500+ websites.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Tell us your goal. We will tell you what you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Outcome Framing */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Framing Goals</span>
            <h2 className="section-title">Three simple jobs. That is all your website really has to do.</h2>
            <p className="section-sub" style={{ marginBottom: "48px" }}>
              People throw around a lot of short forms: SEO, CRO, AEO, AIO, GEO. It sounds confusing. But every service we offer serves just three goals.
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
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)" }}>1. Get Found</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>So the right people discover you</p>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Search Engine Optimization (SEO)</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Show up on Google search.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Google Business Profile</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Appear on Google Maps and win the local "near me" searches.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Answer Engine Optimization (AEO)</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Be the answer in voice search and Google's instant answers.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>AI Optimization (AIO)</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Be visible inside the AI tools people now use every day.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Generative Engine Optimization (GEO)</h4>
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
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)" }}>2. Get Chosen</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>So visitors become customers</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Website Design & Development</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>A fast, clear site that earns trust in seconds.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Conversion Rate Optimization (CRO)</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Turn more of your visitors into enquiries.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Social Media Management</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Stay active and trusted, so customers feel confident choosing you.</p>
                </div>
              </div>
            </div>

            {/* Group 3: Get Traffic Now */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(43, 191, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}>
                  <Zap size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)" }}>3. Get Traffic Now</h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>So you do not have to wait</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--navy)", marginBottom: "4px" }}>Meta & Google Ads</h4>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.5" }}>Put your business in front of ready-to-buy customers today.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How They Work Together (Analogy) */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Analogy</span>
            <h2 className="section-title">Think of it like opening a successful shop.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            <div className="pain-card" style={{ background: "var(--white)", padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Smartphone size={18} style={{ color: "var(--teal)" }} />
                <h4 style={{ fontSize: "15px", fontWeight: "800", color: "var(--navy)", margin: 0 }}>Website Design</h4>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                Your shop itself: clean, welcoming, easy to walk through.
              </p>
            </div>

            <div className="pain-card" style={{ background: "var(--white)", padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <BarChart3 size={18} style={{ color: "var(--teal)" }} />
                <h4 style={{ fontSize: "15px", fontWeight: "800", color: "var(--navy)", margin: 0 }}>CRO</h4>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                The layout inside that gently guides every visitor toward the billing counter.
              </p>
            </div>

            <div className="pain-card" style={{ background: "var(--white)", padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Search size={18} style={{ color: "var(--teal)" }} />
                <h4 style={{ fontSize: "15px", fontWeight: "800", color: "var(--navy)", margin: 0 }}>SEO & Map & AI</h4>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                The signboards, directions and word-of-mouth that bring people to your door from every search engine, Maps and AI tool.
              </p>
            </div>

            <div className="pain-card" style={{ background: "var(--white)", padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Share2 size={18} style={{ color: "var(--teal)" }} />
                <h4 style={{ fontSize: "15px", fontWeight: "800", color: "var(--navy)", margin: 0 }}>Social Media</h4>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                Your shop looking busy and well-kept, so passers-by trust it enough to step in.
              </p>
            </div>

            <div className="pain-card" style={{ background: "var(--white)", padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Zap size={18} style={{ color: "var(--teal)" }} />
                <h4 style={{ fontSize: "15px", fontWeight: "800", color: "var(--navy)", margin: 0 }}>Ads</h4>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                Like putting a stall at the busiest junction in town, so customers come in from day one while everything else builds.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: "600" }}>
              You do not need all of them on day one. We help you start with what moves the needle for your business, and grow from there.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Service Cards */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Pick what you need, or let us guide you.</h2>
          </div>

          <div className="services-grid-hub" style={{ marginTop: "40px" }}>
            {[
              { name: "Website Design & Development", href: "/services/web-design", desc: "A site built to bring you business." },
              { name: "Conversion Rate Optimization", href: "/services/cro", desc: "More leads from the same traffic." },
              { name: "Search Engine Optimization", href: "/services/seo", desc: "Get found on Google." },
              { name: "Google Business Profile", href: "/services/google-business-profile", desc: "Win the local map and \"near me\" searches." },
              { name: "Answer Engine Optimization", href: "/services/aeo", desc: "Be the answer to spoken questions." },
              { name: "AI Optimization", href: "/services/aio", desc: "Stay visible as people switch to AI." },
              { name: "Generative Engine Optimization", href: "/services/geo", desc: "Get recommended by AI tools." },
              { name: "Social Media Management", href: "/services/social-media-management", desc: "Stay active, trusted and top-of-mind." },
              { name: "Meta & Google Ads", href: "/services/ads", desc: "Customers today, not next year." }
            ].map((svc, index) => (
              <div key={index} className="service-card-hub" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 className="service-card-title">{svc.name}</h3>
                  <p className="service-card-desc" style={{ marginBottom: "20px" }}>{svc.desc}</p>
                </div>
                <Link href={svc.href} className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn btn-navy">
              Not sure where to start? Get a free recommendation →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Let us build a plan around your goals.
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

      <Footer />
    </>
  );
}
