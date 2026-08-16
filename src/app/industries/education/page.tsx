import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design for Coaching Centres & Schools in India | Bizy Site",
  description: "Websites for coaching centres, institutes and schools that fill batches and demo classes. Show results, build trust, capture admissions. Get a free quote.",
  keywords: "coaching centre website design India, education website, institute website design, digital marketing for coaching centres India",
  alternates: {
    canonical: "/industries/education",
  },
  openGraph: {
    title: "Website Design for Coaching Centres & Schools in India | Bizy Site",
    description: "Websites for coaching centres, institutes and schools that fill batches and demo classes. Show results, build trust, capture admissions. Get a free quote.",
    url: "https://bizysite.in/industries/education",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Coaching Centres & Schools in India | Bizy Site",
    description: "Websites for coaching centres, institutes and schools that fill batches and demo classes. Show results, build trust, capture admissions. Get a free quote.",
  },
};

export default function EducationCoaching() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/industries/education/#service",
        "name": "Website Design for Coaching Centres & Schools",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Websites for coaching centres, institutes and schools that fill batches and demo classes.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/industries/education/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a coaching centre or school website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the number of courses, features like demo booking or student portals, and overall size. A single-centre coaching site costs less than a large multi-branch institute. Share your needs for a clear quote."
            }
          },
          {
            "@type": "Question",
            "name": "Can students or parents book a demo class online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We add simple demo booking and enquiry forms, plus WhatsApp options, making it easy for hesitant parents to take a low-pressure first step."
            }
          },
          {
            "@type": "Question",
            "name": "Can we show our toppers and results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and we strongly recommend it. Results are the single most powerful trust signal in education. We design your site to showcase selections and success stories prominently."
            }
          },
          {
            "@type": "Question",
            "name": "Will my coaching centre show up for \"coaching near me\" searches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with local SEO and your Google Business Profile. We optimise you to appear for your subjects and location so nearby parents find you."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle multiple branches or courses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We structure the site for multiple branches, courses and batches, so parents easily find the right option for their child."
            }
          },
          {
            "@type": "Question",
            "name": "We run online classes too. Can the site support that?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can present online and offline programmes clearly, and connect enrolment or class systems you use, so students can join easily."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/industries/education/#breadcrumb",
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
            "name": "Industries",
            "item": "https://bizysite.in/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Education & Coaching",
            "item": "https://bizysite.in/industries/education"
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
      <section className="service-hero" style={{ 
        position: "relative", 
        overflow: "hidden", 
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_education.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Education & Coaching</span>
          <h1 className="service-hero-title">Fill your batches with students who are ready to join.</h1>
          <p className="service-hero-sub">
            Parents and students research before they enrol. We build coaching and education websites that show your results, build trust, and turn interested visitors into demo class bookings and admissions.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">High Stakes Choice</span>
          <h2 className="section-title">Parents choose with their hearts and their research.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            Choosing a coaching centre or school is emotional and high-stakes. Parents want the best for their child, and they research heavily: results, faculty, reviews, fees, and reputation. If your website does not clearly show why you get results, they move to a competitor who does.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Most coaching websites just list courses and timings. They forget the one thing parents and students really want to see: proof that students here succeed. Without that, even a great institute struggles to convert interest into admissions.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting Coaching Website Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to turn interested parents into admissions.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Results and success stories</strong> — Toppers, selections and student outcomes, shown proudly.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Faculty credentials</strong> — Experienced teachers that reassure parents.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear course and batch details</strong> — Subjects, timings, batch sizes and fees structure.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Demo class booking</strong> — An easy, low-pressure first step for hesitant parents.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Genuine reviews and testimonials</strong> — From parents and students, building trust.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Fast, mobile-first design</strong> — Since most parents search and decide on their phones.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Services That Matter Most */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Focus</span>
            <h2 className="section-title">Where we focus for coaching and institutes.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "Website Design", desc: "A results-focused, trust-building site.", href: "/services/web-design" },
              { name: "Local SEO & GBP", desc: "Rank for \"coaching near me\" and your subjects.", href: "/services/google-business-profile" },
              { name: "Meta & Google Ads", desc: "Reach parents and students during admission season.", href: "/services/ads" },
              { name: "CRO", desc: "Turn more visitors into demo class bookings.", href: "/services/cro" }
            ].map((svc, idx) => (
              <div key={idx} className="work-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 className="work-title" style={{ fontSize: "18px", marginBottom: "8px" }}>{svc.name}</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "20px" }}>{svc.desc}</p>
                </div>
                <Link href={svc.href} className="btn btn-outline" style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "center" }}>
                  <span>Explore Service</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Mini Example */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag light">Admissions</span>
          <h2 className="section-title text-white">Results shown well fill batches faster.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            When a coaching centre puts its real results front and centre, \"500+ selections in 2024\", and makes booking a demo class effortless, interested parents stop comparing and start enrolling.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            Proof plus an easy first step is what turns a browsing parent into an admission.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "How much does a coaching centre or school website cost in India?",
                a: "It depends on the number of courses, features like demo booking or student portals, and overall size. A single-centre coaching site costs less than a large multi-branch institute. Share your needs for a clear quote."
              },
              {
                q: "Can students or parents book a demo class online?",
                a: "Yes. We add simple demo booking and enquiry forms, plus WhatsApp options, making it easy for hesitant parents to take a low-pressure first step."
              },
              {
                q: "Can we show our toppers and results?",
                a: "Yes, and we strongly recommend it. Results are the single most powerful trust signal in education. We design your site to showcase selections and success stories prominently."
              },
              {
                q: "Will my coaching centre show up for \"coaching near me\" searches?",
                a: "Yes, with local SEO and your Google Business Profile. We optimise you to appear for your subjects and location so nearby parents find you."
              },
              {
                q: "Can you handle multiple branches or courses?",
                a: "Yes. We structure the site for multiple branches, courses and batches, so parents easily find the right option for their child."
              },
              {
                q: "We run online classes too. Can the site support that?",
                a: "Yes. We can present online and offline programmes clearly, and connect enrolment or class systems you use, so students can join easily."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-card-custom" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="faq-trigger-custom" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", cursor: "default" }}>
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

      {/* SECTION 7 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Fill your next batch, starting with your website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Make it easy for parents to trust you and book a demo class.
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
