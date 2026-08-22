import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Heart, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Website Design for Clinics & Doctors in India | Bizy Site",
  description: "Websites for clinics, doctors and hospitals that fill appointment slots and build patient trust. Fast, mobile-first, easy to book. Get a free quote.",
  keywords: "website design for doctors India, clinic website design, hospital website, healthcare digital marketing India",
  alternates: {
    canonical: "/industries/healthcare",
  },
  openGraph: {
    title: "Website Design for Clinics & Doctors in India | Bizy Site",
    description: "Websites for clinics, doctors and hospitals that fill appointment slots and build patient trust. Fast, mobile-first, easy to book. Get a free quote.",
    url: `${siteUrl}/industries/healthcare`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Clinics & Doctors in India | Bizy Site",
    description: "Websites for clinics, doctors and hospitals that fill appointment slots and build patient trust. Fast, mobile-first, easy to book. Get a free quote.",
  },
};

export default function HealthcareClinic() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/industries/healthcare/#service`,
        "name": "Website Design for Clinics & Doctors",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          "name": "Bizy Site India",
          "url": siteUrl
        },
        "description": "Websites for clinics, doctors and hospitals that fill appointment slots and build patient trust.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/industries/healthcare/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a clinic or doctor website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your services, number of pages and features like online booking. A single-doctor clinic site costs far less than a multi-speciality hospital site. Share your needs and we will send a clear, no-obligation quote."
            }
          },
          {
            "@type": "Question",
            "name": "Can patients book appointments directly on the website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can add simple appointment forms, WhatsApp booking, or connect to a booking or clinic management system you already use, whichever suits your workflow."
            }
          },
          {
            "@type": "Question",
            "name": "Will my clinic show up on Google Maps and \"doctor near me\" searches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That is exactly what local SEO and your Google Business Profile do. We optimise both so nearby patients find and call you first."
            }
          },
          {
            "@type": "Question",
            "name": "Is a website useful if I already get patients by referral?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Today, even referred patients check you online before their first visit. A professional, trustworthy site confirms their decision. A weak or missing one can make them hesitate."
            }
          },
          {
            "@type": "Question",
            "name": "Do you follow patient privacy and medical guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build with appropriate care for patient information and follow the practices expected for medical websites. We will discuss your specific compliance needs during the project."
            }
          },
          {
            "@type": "Question",
            "name": "I run a multi-speciality hospital. Can you handle a larger site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We have deep experience with complex sites, multiple departments, doctor directories and integrations. We scale the build to your size."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/industries/healthcare/#breadcrumb`,
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
            "name": "Industries",
            "item": `${siteUrl}/industries`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Healthcare & Clinics",
            "item": `${siteUrl}/industries/healthcare`
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
        backgroundImage: "linear-gradient(to bottom, rgba(13, 31, 60, 0.94), rgba(13, 31, 60, 0.82)), url('/industry_healthcare.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container service-hero-content">
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Healthcare & Clinics</span>
          <h1 className="service-hero-title">Turn patient searches into booked appointments.</h1>
          <p className="service-hero-sub">
            When someone needs a doctor, they search fast and decide fast. We build clinic and hospital websites that show up, build trust in seconds, and make booking an appointment effortless.
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
          <span className="section-tag">First Impressions</span>
          <h2 className="section-title">Patients decide in seconds, and most clinic sites lose them.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A patient with a toothache or a worried parent at midnight does not read your whole website. They want three things fast: are you nearby, can you help, and how do I reach you now. Most clinic websites bury this under long paragraphs, slow pages, and no clear way to book.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Meanwhile, patients judge a clinic online the way they judge it in person. A slow, dated website makes them quietly wonder about the care inside. Trust is everything in healthcare, and your website is often the first impression.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What a High-Converting Clinic Website Includes */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Built to turn worried searchers into confident patients.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Easy appointment booking</strong> — Call, WhatsApp or a simple form, visible on every page.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Clear services and specialities</strong> — So patients instantly know you treat their problem.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Doctor profiles and credentials</strong> — Qualifications and experience that build trust.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Real reviews and patient trust signals</strong> — Ratings and genuine testimonials placed where doubt is highest.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Timings, location and directions</strong> — Answered instantly, with a map and one-tap call.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Fast, mobile-first pages</strong> — Since most patients search on a phone, often urgently.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Services That Matter Most for Clinics */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Focus</span>
            <h2 className="section-title">Where we focus for healthcare.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {[
              { name: "Website Design", desc: "A trustworthy, easy-to-book site.", href: "/services/web-design" },
              { name: "Local SEO & GBP", desc: "Show up for \"doctor near me\" and on Google Maps.", href: "/services/google-business-profile" },
              { name: "CRO", desc: "Turn more visitors into booked appointments.", href: "/services/cro" },
              { name: "Answer Engine Optimization", desc: "Be the answer to \"which clinic is open now near me\".", href: "/services/aeo" }
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
          <span className="section-tag light">Case Result</span>
          <h2 className="section-title text-white">Faster site, 38% more appointment enquiries.</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", margin: "20px 0" }}>
            A clinic website we optimised was loading in 7 seconds and losing patients before the page even opened. We brought it down to just over 2 seconds and made booking clearer. Appointment enquiries rose 38% the next month, with the same traffic.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--teal)" }}>
            In healthcare, speed and clarity are not luxuries. They are patients.
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
                q: "How much does a clinic or doctor website cost in India?",
                a: "It depends on your services, number of pages and features like online booking. A single-doctor clinic site costs far less than a multi-speciality hospital site. Share your needs and we will send a clear, no-obligation quote."
              },
              {
                q: "Can patients book appointments directly on the website?",
                a: "Yes. We can add simple appointment forms, WhatsApp booking, or connect to a booking or clinic management system you already use, whichever suits your workflow."
              },
              {
                q: "Will my clinic show up on Google Maps and \"doctor near me\" searches?",
                a: "That is exactly what local SEO and your Google Business Profile do. We optimise both so nearby patients find and call you first."
              },
              {
                q: "Is a website useful if I already get patients by referral?",
                a: "Yes. Today, even referred patients check you online before their first visit. A professional, trustworthy site confirms their decision. A weak or missing one can make them hesitate."
              },
              {
                q: "Do you follow patient privacy and medical guidelines?",
                a: "We build with appropriate care for patient information and follow the practices expected for medical websites. We will discuss your specific compliance needs during the project."
              },
              {
                q: "I run a multi-speciality hospital. Can you handle a larger site?",
                a: "Yes. We have deep experience with complex sites, multiple departments, doctor directories and integrations. We scale the build to your size."
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
            Fill more appointment slots, starting with your website.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you need a new build or a redesign, we help patients find and book you.
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
