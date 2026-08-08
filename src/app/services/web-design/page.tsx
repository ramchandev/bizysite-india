import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Award, Search, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design & Development in India | Conversion-Focused | Bizy Site",
  description: "Fast, mobile-first websites built to bring you calls and customers. New build or redesign, by a team with 500+ sites and 10 years of experience. Get a free quote.",
  keywords: "website design and development India, conversion focused website design, mobile first website India, custom website redesign, business website design India",
  alternates: {
    canonical: "/services/web-design",
  },
  openGraph: {
    title: "Website Design & Development in India | Conversion-Focused | Bizy Site",
    description: "Fast, mobile-first websites built to bring you calls and customers. New build or redesign, by a team with 500+ sites and 10 years of experience. Get a free quote.",
    url: "https://bizysite.in/services/web-design",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development in India | Conversion-Focused | Bizy Site",
    description: "Fast, mobile-first websites built to bring you calls and customers. New build or redesign, by a team with 500+ sites and 10 years of experience. Get a free quote.",
  },
};

export default function WebDesign() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/services/web-design/#service",
        "name": "Website Design & Development",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Fast, mobile-first websites built to bring you calls and customers.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/services/web-design/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to build a website in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the number of pages and features you need. A simple service-business website costs much less than a custom booking or e-commerce platform. Share your requirement and we will send a clear quote with no hidden charges."
            }
          },
          {
            "@type": "Question",
            "name": "How long will my website take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites are ready within a few weeks. The exact timeline depends on size and how quickly we receive your content and feedback. We share a clear schedule before starting."
            }
          },
          {
            "@type": "Question",
            "name": "I already have a website. Do I have to start from scratch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not always. We review your current site first. If the base is solid, we improve it. If it is genuinely holding you back, we will recommend a rebuild and explain why."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website work well on mobile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and that is the priority. Since most Indian visitors come from mobile, we design mobile-first and test on real phones and 4G speeds."
            }
          },
          {
            "@type": "Question",
            "name": "Do I own my website and content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, completely. Your site, design, copy and data are yours from day one. No lock-in, no exit penalty."
            }
          },
          {
            "@type": "Question",
            "name": "Can you connect my website to other tools, like WhatsApp, CRM or payment systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We have years of experience with integrations, automation and custom solutions. Tell us what you use and we will connect it."
            }
          },
          {
            "@type": "Question",
            "name": "Will the website help me get more customers, or just look good?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Getting you customers is the whole point. Every page is built to convert visitors into enquiries. A good-looking site that brings no business is not a success to us."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide hosting and maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can handle hosting, security and ongoing updates so your site stays fast and safe. You can also host it yourself, since you own it."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/services/web-design/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bizysite.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://bizysite.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Website Design & Development",
            "item": "https://bizysite.in/services/web-design"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Website Design & Development</span>
          <h1 className="service-hero-title">A website that works as hard as you do.</h1>
          <p className="service-hero-sub">
            Most websites just sit there. We build sites that bring calls, enquiries and sales, fast to load, easy to use, and designed to turn visitors into customers. New build or redesign, you own it from day one.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Takes 2 minutes. We reply the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Aesthetic Trap</span>
          <h2 className="section-title">A pretty website is not the goal. Customers are.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
            Many Indian businesses spend good money on a website and still get no calls from it. Why? Because it was built to look nice, not to sell. It loads slowly on mobile. The message is unclear. There is no obvious next step for the visitor.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.7" }}>
            Meanwhile, more than 75% of your visitors are on mobile, often on a 4G connection, and they decide in about 5 seconds whether to stay or leave. If your site is slow or confusing, they are gone, and you never even knew they came.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What This Means In Real Life (Analogy) */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Analogy</span>
            <h2 className="section-title">Think of your website as your shop on the busiest street in India.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px", marginBottom: "40px" }}>
            <div className="pain-card" style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--red)", background: "rgba(239, 68, 68, 0.08)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE CLOSED SHUTTER
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                Imagine your shop is on the busiest road in your city. Thousands walk past every day. But your shutter is half closed, the board is faded, and nobody is at the counter to greet people. Most walk on.
              </p>
            </div>

            <div className="pain-card" style={{ background: "rgba(43, 191, 191, 0.03)", border: "1px solid rgba(43, 191, 191, 0.2)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "var(--teal)", background: "rgba(43, 191, 191, 0.12)", padding: "6px 14px", borderRadius: "30px", width: "fit-content", marginBottom: "20px" }}>
                THE ACTIVE SALESPERSON
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-mid)", lineHeight: "1.8" }}>
                Now imagine the same shop with a bright board, an open door, a friendly person who greets every visitor, answers their questions, and guides them to buy. Same street, same footfall, far more sales.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "16px", color: "var(--navy)", fontWeight: "700", lineHeight: "1.7" }}>
              Your website is that shop. We make sure the board is bright, the door is open, and a great salesperson is always at the counter, even at midnight.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Two-Path Split */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Paths</span>
            <h2 className="section-title">Pick the path that sounds like you.</h2>
          </div>

          <div className="pain-grid" style={{ marginTop: "40px" }}>
            {/* Path A */}
            <div className="pain-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
                <h3 className="pain-title" style={{ fontSize: "20px", marginBottom: "12px", color: "var(--navy)", fontWeight: "800" }}>I need a brand new website</h3>
                <p className="pain-body" style={{ marginBottom: "24px", fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  You do not have a website yet, or what you have barely counts. You are losing customers who search for you and find nothing.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Built conversion-first from day one</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Fast on mobile, found on Google</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Clear message, strong call-to-action on every page</span>
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

            {/* Path B */}
            <div className="pain-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="pain-top-border" style={{ background: "var(--teal)" }}></div>
                <h3 className="pain-title" style={{ fontSize: "20px", marginBottom: "12px", color: "var(--navy)", fontWeight: "800" }}>I need to fix my current website</h3>
                <p className="pain-body" style={{ marginBottom: "24px", fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6" }}>
                  You have a site, but it is slow, dated, or simply not bringing business. You do not have to throw it away.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Free, honest audit of what you have</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Improved speed, design and conversion</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text)", fontWeight: "600" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    <span>Rebuilt only if it truly needs it</span>
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
        </div>
      </section>

      {/* SECTION 5 — What Goes Into Every Website We Build */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Deliverables & Details</span>
            <h2 className="section-title">Two kinds of work go into every site:<br />what you get, and what we quietly handle for you.</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              A great website is like a great restaurant. You enjoy the food and the comfortable seating. You never see the clean kitchen or the trained staff behind it, but you would feel it instantly if they were missing. Your website works the same way. Here is both sides of it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* What you get */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>What you get</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Conversion-first design</strong> so every page guides the visitor toward a call or enquiry
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Clear, benefit-driven copywriting</strong> that speaks to your customer, not at them
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Lead forms that work</strong> with simple fields and trust built in
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Easy to update</strong> so you are never stuck depending on us
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Full ownership</strong> of your site, content and data, from day one
                  </div>
                </li>
              </ul>
            </div>

            {/* What we handle behind the scenes */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>What we handle behind the scenes</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Clean, fast code</strong> that loads in under 3 seconds, even on 4G, because speed wins both rankings and customers
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Mobile-first and responsive build</strong> that looks perfect on every screen, since most of India browses on a phone
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Technical SEO</strong> done right: proper page structure, clean URLs, correct heading tags, image optimisation, sitemaps and structured data (schema), so Google can read and rank you from day one
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Core Web Vitals</strong> passed, meaning your site meets Google's checks for speed, stability and responsiveness
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Security and reliability</strong> with SSL encryption and dependable hosting
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Integrations and automation</strong> connecting your site to WhatsApp, CRMs, payment gateways and booking systems, backed by years of API and custom development experience
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Analytics and tracking</strong> set up properly, so you can see your visitors, enquiries and ad results instead of guessing
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", maxWidth: "700px", margin: "32px auto 0" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              You do not need to understand the second list. That is our job. You just need to know it is being done properly, so your site is fast, secure, easy to find, and ready to grow.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — What You Get */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Your Results</span>
            <h2 className="section-title">The result you can actually measure.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "More visitors turning into calls and enquiries",
              "A site you are proud to share on WhatsApp and your visiting card",
              "A faster site that Google and customers both reward",
              "A foundation ready for SEO, ads and AI visibility",
              "Full ownership, no lock-in, no surprises"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 7 — Why Bizy Site */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Why Us</span>
          <h2 className="section-title">Best-in-class websites, built by people who have done it 500+ times.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            For 10 years we built best-in-class websites for US businesses: advanced design, smart features, API integrations, automation and custom solutions. We brought that same standard to India, at terms that make sense here.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            Every site is built and reviewed by a senior team. You get experience, not experiments.
          </p>
        </div>
      </section>

      {/* SECTION 8 — Mini Result */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "var(--radius-lg)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag light">A small change, a real difference</span>
          <h2 className="section-title text-white">We rebuilt a clinic website that was loading in 7 seconds.</h2>
          <p style={{ fontSize: "18px", fontStyle: "italic", fontWeight: "600", color: "var(--teal)", marginBottom: "20px", lineHeight: "1.7" }}>
            "After our work, it loaded in just over 2 seconds. With the same traffic and the same ad spend, appointment enquiries went up by 38% the very next month."
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: "600" }}>
            Speed and clarity are not technical luxuries. They are sales.
          </p>
        </div>
      </section>

      {/* SECTION 9 — FAQ (Web Design) */}
      <section className="section-padding faq-section" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much does it cost to build a website in India?",
                a: "It depends on the number of pages and features you need. A simple service-business website costs much less than a custom booking or e-commerce platform. Share your requirement and we will send a clear quote with no hidden charges."
              },
              {
                q: "How long will my website take?",
                a: "Most business websites are ready within a few weeks. The exact timeline depends on size and how quickly we receive your content and feedback. We share a clear schedule before starting."
              },
              {
                q: "I already have a website. Do I have to start from scratch?",
                a: "Not always. We review your current site first. If the base is solid, we improve it. If it is genuinely holding you back, we will recommend a rebuild and explain why."
              },
              {
                q: "Will my website work well on mobile?",
                a: "Yes, and that is the priority. Since most Indian visitors come from mobile, we design mobile-first and test on real phones and 4G speeds."
              },
              {
                q: "Do I own my website and content?",
                a: "Yes, completely. Your site, design, copy and data are yours from day one. No lock-in, no exit penalty."
              },
              {
                q: "Can you connect my website to other tools, like WhatsApp, CRM or payment systems?",
                a: "Yes. We have years of experience with integrations, automation and custom solutions. Tell us what you use and we will connect it."
              },
              {
                q: "Will the website help me get more customers, or just look good?",
                a: "Getting you customers is the whole point. Every page is built to convert visitors into enquiries. A good-looking site that brings no business is not a success to us."
              },
              {
                q: "Do you provide hosting and maintenance?",
                a: "Yes. We can handle hosting, security and ongoing updates so your site stays fast and safe. You can also host it yourself, since you own it."
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

      {/* SECTION 10 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Ready for a website that brings you business?
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
              Same-day reply. Senior team. Zero pressure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
