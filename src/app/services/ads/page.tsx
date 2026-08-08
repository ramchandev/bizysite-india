import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Search, TrendingUp, Sparkles, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Google & Meta Ads Management in India | Customers Today | Bizy Site",
  description: "Get ready-to-buy customers to your website now with Google and Meta Ads that are managed to bring real enquiries, not wasted clicks. Get a free ads review.",
  keywords: "Google Ads management India, Meta Ads agency India, Facebook advertising India, pay per click marketing, lead generation ads",
  alternates: {
    canonical: "/services/ads",
  },
  openGraph: {
    title: "Google & Meta Ads Management in India | Customers Today | Bizy Site",
    description: "Get ready-to-buy customers to your website now with Google and Meta Ads that are managed to bring real enquiries, not wasted clicks. Get a free ads review.",
    url: "https://bizysite.in/services/ads",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google & Meta Ads Management in India | Customers Today | Bizy Site",
    description: "Get ready-to-buy customers to your website now with Google and Meta Ads that are managed to bring real enquiries, not wasted clicks. Get a free ads review.",
  },
};

export default function Ads() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/services/ads/#service",
        "name": "Meta & Google Ads",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Run Google and Meta ad campaigns engineered for lead generation.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/services/ads/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I spend on Google or Meta ads in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your industry, city and goals. We help you start with a sensible budget, prove what works, and scale up only once the ads are bringing profitable enquiries. We never push you to overspend."
            }
          },
          {
            "@type": "Question",
            "name": "How soon will I get enquiries from ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often within the first few days of going live. Unlike SEO, ads can bring customers almost immediately, which is why they pair so well with longer-term efforts."
            }
          },
          {
            "@type": "Question",
            "name": "Why are my current ads not working?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually one of three reasons: the targeting is off, the keywords are wrong, or the landing page does not convert. We review all three and fix the weakest link."
            }
          },
          {
            "@type": "Question",
            "name": "Should I do Google Ads or Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is best for people actively searching for your service. Meta Ads is great for reaching the right people and building demand. The right mix depends on your business, and we help you choose."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage the ads or just set them up?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage them on an ongoing basis: watching performance, cutting waste, and improving results over time. Ads need regular attention to stay profitable."
            }
          },
          {
            "@type": "Question",
            "name": "Will you also improve my landing page?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. There is no point sending paid traffic to a page that loses visitors. We make sure your landing page is built to convert, so your ad spend actually turns into enquiries."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a website to run ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A strong landing page or website makes ads far more effective. If you do not have one, we can build it. If you do, we make sure it is ready to convert before we spend on ads."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/services/ads/#breadcrumb",
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
            "name": "Meta & Google Ads",
            "item": "https://bizysite.in/services/ads"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Meta & Google Ads</span>
          <h1 className="service-hero-title">Need customers this week, not next year? Ads put you in front of them today.</h1>
          <p className="service-hero-sub">
            SEO builds over time. Ads work now. We run Google and Meta (Facebook and Instagram) ads that bring ready-to-buy customers to your website, managed carefully so your money brings enquiries, not just clicks.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free Ads Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>See where your ad budget could work harder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Instant Reach</span>
          <h2 className="section-title">Two ways customers find you. One is instant.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            When someone in Delhi searches "emergency plumber near me," the businesses at the very top, marked as ads, get the call first. They did not wait months to rank. They paid to be there at the exact moment a customer needed them.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            That is the power of ads: you appear right when someone is ready to buy. Google Ads catches people actively searching. Meta Ads puts you in front of the right people while they scroll Instagram and Facebook. Used well, both bring enquiries fast.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Analogy */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Analogy</span>
          <h2 className="section-title">Ads are like a stall at the busiest junction in town.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            SEO is like building a reputation so people slowly start coming to your shop. It works, but it takes time. Ads are like setting up a bright stall at the busiest junction in the city, today. The crowd is already there. You just have to show up where they are looking.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            The catch: a stall in a busy spot costs money for every day you run it. So it must be set up well, or you pay for footfall that never buys. That is where careful management makes all the difference, and it is what we do.
          </p>
        </div>
      </section>

      {/* SECTION 4 — The Problem We Fix */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Wasted Budgets</span>
          <h2 className="section-title">Most ad budgets in India are quietly wasted.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Many businesses run ads and see little return. The money goes to the wrong audience, the wrong keywords, or a slow landing page that loses the visitor after the click. The ad works, but the website does not convert, so the budget burns.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            We fix both sides: sharp targeting so the right people click, and a strong landing experience so those clicks become enquiries.
          </p>
        </div>
      </section>

      {/* SECTION 5 — What We Do */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Ads managed to bring enquiries, not just clicks.</h2>
            <p className="section-sub" style={{ marginBottom: "40px" }}>
              Profitable ads need two things working together: smart campaign choices, and the technical setup that makes every rupee measurable and every click land well.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
            {/* Campaign Work */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The campaign work you see</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Google Search Ads</strong> — Appear right when people search for what you offer.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Meta Ads (Facebook & Instagram)</strong> — Reach the right people as they scroll.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Sharp targeting</strong> — Your city, your audience, your ideal customer. No wasted spend.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Ongoing optimisation</strong> — We cut what does not work and double down on what does.
                  </div>
                </li>
              </ul>
            </div>

            {/* Technical Setup */}
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }} className="pain-card">
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "var(--navy)", marginBottom: "20px" }}>The technical setup we handle behind the scenes</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Conversion tracking and pixels</strong> — Google and Meta tracking set up correctly, so you see real leads and cost per enquiry, not vanity clicks.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Strong, fast landing pages</strong> — Where the click turns into a call or form, built to load quickly and convert.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Audience and retargeting setup</strong> — Reaching people who showed interest but did not enquire yet.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: "1.5" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Clean measurement</strong> — Analytics connected properly, so every rupee is accounted for.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", maxWidth: "700px", margin: "32px auto 0" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              You do not need to touch the technical side. You just need to know your budget is spent on the right people and fully tracked, so you always know what you are getting back.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — What You Get */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Ads Outcomes</span>
            <h2 className="section-title">The result.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Enquiries coming in within days, not months",
              "Your budget spent on people likely to buy, not random clicks",
              "Clear numbers, so you know exactly what you are getting back",
              "A trusted team watching your spend like it is their own money"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much should I spend on Google or Meta ads in India?",
                a: "It depends on your industry, city and goals. We help you start with a sensible budget, prove what works, and scale up only once the ads are bringing profitable enquiries. We never push you to overspend."
              },
              {
                q: "How soon will I get enquiries from ads?",
                a: "Often within the first few days of going live. Unlike SEO, ads can bring customers almost immediately, which is why they pair so well with longer-term efforts."
              },
              {
                q: "Why are my current ads not working?",
                a: "Usually one of three reasons: the targeting is off, the keywords are wrong, or the landing page does not convert. We review all three and fix the weakest link."
              },
              {
                q: "Should I do Google Ads or Meta Ads?",
                a: "Google Ads is best for people actively searching for your service. Meta Ads is great for reaching the right people and building demand. The right mix depends on your business, and we help you choose."
              },
              {
                q: "Do you manage the ads or just set them up?",
                a: "We manage them on an ongoing basis: watching performance, cutting waste, and improving results over time. Ads need regular attention to stay profitable."
              },
              {
                q: "Will you also improve my landing page?",
                a: "Yes. There is no point sending paid traffic to a page that loses visitors. We make sure your landing page is built to convert, so your ad spend actually turns into enquiries."
              },
              {
                q: "Do I need a website to run ads?",
                a: "A strong landing page or website makes ads far more effective. If you do not have one, we can build it. If you do, we make sure it is ready to convert before we spend on ads."
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

      {/* SECTION 8 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Get customers knocking this week.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Ads Review →
                </Link>
              </div>
              <div className="cta-wrapper">
                <Link href="/contact?type=quote" className="btn btn-outline" style={{ padding: "14px 32px", background: "rgba(255,255,255,0.08)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>
                  Get My Free Quote →
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
