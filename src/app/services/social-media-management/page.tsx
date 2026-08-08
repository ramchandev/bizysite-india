import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle2, Award, Search, TrendingUp, Sparkles, HelpCircle, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Social Media Management in India | Instagram, Facebook & LinkedIn | Bizy Site",
  description: "Stay active, trusted and top-of-mind so customers choose you with confidence. We manage your Instagram, Facebook and LinkedIn. Get a free social media review.",
  keywords: "social media management India, Instagram Facebook management, social media agency, social media marketer India, business social page manager",
  alternates: {
    canonical: "/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management in India | Instagram, Facebook & LinkedIn | Bizy Site",
    description: "Stay active, trusted and top-of-mind so customers choose you with confidence. We manage your Instagram, Facebook and LinkedIn. Get a free social media review.",
    url: "https://bizysite.in/services/social-media-management",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management in India | Instagram, Facebook & LinkedIn | Bizy Site",
    description: "Stay active, trusted and top-of-mind so customers choose you with confidence. We manage your Instagram, Facebook and LinkedIn. Get a free social media review.",
  },
};

export default function SocialMediaManagement() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bizysite.in/services/social-media-management/#service",
        "name": "Social Media Management",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bizy Site India",
          "url": "https://bizysite.in"
        },
        "description": "Stay active, trusted and top-of-mind so customers choose you with confidence. We manage your Instagram, Facebook and LinkedIn.",
        "areaServed": {
          "@type": "Country",
          "name": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/services/social-media-management/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which social media platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We lead with Instagram, Facebook and LinkedIn, since these are where Indian customers and businesses are most active. X (Twitter) is available on request. We recommend the platforms that suit your specific business rather than spreading you thin across all of them."
            }
          },
          {
            "@type": "Question",
            "name": "Why does my business need social media if I already get customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because most customers check your social pages before they contact you, even ones who found you elsewhere. An active, professional page confirms you are real and trustworthy. An empty one plants doubt at the exact moment they are deciding."
            }
          },
          {
            "@type": "Question",
            "name": "How often will you post?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We agree on a consistent schedule that keeps your pages looking active without spamming your audience. The right frequency depends on your business and platform. We plan it with you."
            }
          },
          {
            "@type": "Question",
            "name": "Will you create the content, or do I have to provide it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle the content: the writing, design and scheduling. We may ask you for photos of your real work or updates from your business, since genuine content performs best. We make this easy and light for you."
            }
          },
          {
            "@type": "Question",
            "name": "Can social media actually bring me enquiries, not just likes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, when done with that goal. We focus on building trust and guiding interested people to contact you, not on chasing empty likes. Real engagement from the right local audience is what turns into enquiries."
            }
          },
          {
            "@type": "Question",
            "name": "Do you run paid social media ads too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Managing your pages and running paid ads are two different services. Social media management keeps your pages active and trusted. For paid campaigns to reach more people fast, see our Meta and Google Ads service. Many businesses use both together."
            }
          },
          {
            "@type": "Question",
            "name": "How much does social media management cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the number of platforms, posting frequency and content needed. We will suggest a sensible plan for your business and send a clear quote, with no hidden charges."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/services/social-media-management/#breadcrumb",
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
            "name": "Social Media Management",
            "item": "https://bizysite.in/services/social-media-management"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Social Media Management</span>
          <h1 className="service-hero-title">When a customer checks your Instagram before calling, make sure they like what they see.</h1>
          <p className="service-hero-sub">
            Before people buy, they check if you are real, active and trusted. A quiet or empty social page makes them hesitate. We keep your Instagram, Facebook and LinkedIn active and professional, so customers choose you with confidence. X (Twitter) available on request.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=audit" className="btn btn-primary">
                Get My Free Social Media Review →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>See how your pages look to a new customer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why It Matters */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Trust Checks</span>
          <h2 className="section-title">The silent check every customer does before they call.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A family in Mumbai is choosing an interior designer. They find two good options. Before calling, they do what everyone does now: they open Instagram. The first designer has recent posts of finished projects, happy clients and active replies. The second has three blurry posts from two years ago.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            They call the first one. Same skill, maybe even better work at the second, but the active, trusted page won. Your social media is no longer decoration. It is the trust check that happens right before someone decides to contact you.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Analogy */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">The Analogy</span>
          <h2 className="section-title">Social media is like the lights being on in your shop.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Walk past a shop with the lights on, fresh displays and people inside, and you feel it is open, alive and trustworthy. Walk past one that is dark and dusty, and you assume it is closed or struggling, even if it is not.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            Your social pages are those lights. An active, well-kept page tells every visitor you are open, busy and worth trusting. We keep your lights on, so nobody walks past assuming you are shut.
          </p>
        </div>
      </section>

      {/* SECTION 4 — What We Do */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">We keep you active, professional and worth choosing.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Content that fits your business.</strong> Posts, images and updates that show your work, build trust and stay true to your brand.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Consistent posting.</strong> A steady, planned schedule so your pages never look abandoned.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Instagram, Facebook and LinkedIn.</strong> Managed as your main platforms, where Indian customers and businesses actually pay attention. X (Twitter) available on request.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Engagement.</strong> Replying to comments and messages so genuine customers are not left ignored.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Profile clean-up.</strong> Making sure your bio, photos, links and contact details are complete and professional.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Simple reporting.</strong> A clear view of what is growing and what is working, without confusing numbers.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 — What You Get */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Social Outcomes</span>
            <h2 className="section-title">The result.</h2>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0 0", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Pages that make new customers trust you at a glance",
              "A consistent, professional presence you do not have to maintain yourself",
              "More engagement and enquiries from people already interested in you",
              "Time back, since we handle the posting and replying for you"
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text)", fontWeight: "600" }}>
                <CheckCircle2 size={20} style={{ color: "var(--teal)", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — Our Honest Approach */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Our Approach</span>
          <h2 className="section-title">We focus on trust and enquiries, not vanity numbers.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            We will be straight with you. Chasing thousands of random followers rarely brings a local business real customers. A hundred genuine local followers who trust you are worth more than ten thousand who will never buy.
          </p>
          <p style={{ color: "var(--navy)", fontSize: "16px", fontWeight: "700", lineHeight: "1.8" }}>
            So we focus on what actually helps your business: looking active and trustworthy, showing your real work, and turning interested people into enquiries. Not vanity numbers that look nice and do nothing.
          </p>
        </div>
      </section>

      {/* SECTION 7 — FAQ (Social Media Management) */}
      <section className="section-padding faq-section" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions people ask us before getting started</h2>
          </div>

          <div className="faq-grid-custom" style={{ marginTop: "40px" }}>
            {[
              {
                q: "Which social media platforms do you manage?",
                a: "We lead with Instagram, Facebook and LinkedIn, since these are where Indian customers and businesses are most active. X (Twitter) is available on request. We recommend the platforms that suit your specific business rather than spreading you thin across all of them."
              },
              {
                q: "Why does my business need social media if I already get customers?",
                a: "Because most customers check your social pages before they contact you, even ones who found you elsewhere. An active, professional page confirms you are real and trustworthy. An empty one plants doubt at the exact moment they are deciding."
              },
              {
                q: "How often will you post?",
                a: "We agree on a consistent schedule that keeps your pages looking active without spamming your audience. The right frequency depends on your business and platform. We plan it with you."
              },
              {
                q: "Will you create the content, or do I have to provide it?",
                a: "We handle the content: the writing, design and scheduling. We may ask you for photos of your real work or updates from your business, since genuine content performs best. We make this easy and light for you."
              },
              {
                q: "Can social media actually bring me enquiries, not just likes?",
                a: "Yes, when done with that goal. We focus on building trust and guiding interested people to contact you, not on chasing empty likes. Real engagement from the right local audience is what turns into enquiries."
              },
              {
                q: "Do you run paid social media ads too?",
                a: "Managing your pages and running paid ads are two different services. Social media management keeps your pages active and trusted. For paid campaigns to reach more people fast, see our Meta and Google Ads service. Many businesses use both together."
              },
              {
                q: "How much does social media management cost in India?",
                a: "It depends on the number of platforms, posting frequency and content needed. We will suggest a sensible plan for your business and send a clear quote, with no hidden charges."
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
            Keep your lights on. Keep customers choosing you.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you are starting fresh or fixing what you have, the first step is the same: a quick, honest conversation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <div className="cta-wrapper">
                <Link href="/contact?type=audit" className="btn btn-primary" style={{ padding: "14px 32px" }}>
                  Get My Free Social Media Review →
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
