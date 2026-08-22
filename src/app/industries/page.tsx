import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Heart, 
  Home, 
  Settings, 
  GraduationCap, 
  Coffee, 
  Briefcase, 
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Website Design for Your Industry in India | Bizy Site",
  description: "Websites built for how your industry actually wins customers. Clinics, builders, coaching, restaurants, CA firms, manufacturers and retail. Get a free quote.",
  keywords: "website design India, web design for doctors India, real estate website design India, B2B website development, education website design",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Website Design for Your Industry in India | Bizy Site",
    description: "Websites built for how your industry actually wins customers. Clinics, builders, coaching, restaurants, CA firms, manufacturers and retail. Get a free quote.",
    url: `${siteUrl}/industries`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Your Industry in India | Bizy Site",
    description: "Websites built for how your industry actually wins customers. Clinics, builders, coaching, restaurants, CA firms, manufacturers and retail. Get a free quote.",
  },
};

export default function IndustriesHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/industries/#webpage`,
        "url": `${siteUrl}/industries`,
        "name": "Website Design for Your Industry in India",
        "description": "Websites built for how your industry actually wins customers. Clinics, builders, coaching, restaurants, CA firms, manufacturers and retail."
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/industries/#breadcrumb`,
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
          }
        ]
      }
    ]
  };

  const industriesList = [
    {
      icon: <Heart size={20} />,
      name: "Healthcare & Clinics",
      description: "Websites that fill appointment slots.",
      href: "/industries/healthcare",
      img: "/industry_healthcare.jpg"
    },
    {
      icon: <Home size={20} />,
      name: "Real Estate & Builders",
      description: "Sites that turn projects into enquiries.",
      href: "/industries/real-estate",
      img: "/industry_realestate.jpg"
    },
    {
      icon: <Settings size={20} />,
      name: "Manufacturing & B2B",
      description: "Sites that win serious buyers and quote requests.",
      href: "/industries/manufacturing",
      img: "/industry_manufacturing.jpg"
    },
    {
      icon: <GraduationCap size={20} />,
      name: "Education & Coaching",
      description: "Sites that fill batches and demo classes.",
      href: "/industries/education",
      img: "/industry_education.jpg"
    },
    {
      icon: <Coffee size={20} />,
      name: "Hospitality & Restaurants",
      description: "Sites that drive bookings and footfall.",
      href: "/industries/hospitality",
      img: "/industry_hospitality.jpg"
    },
    {
      icon: <Briefcase size={20} />,
      name: "Professional Services (CA, Legal, Consultants)",
      description: "Sites that signal trust and win clients.",
      href: "/industries/professional-services",
      img: "/industry_professional.jpg"
    },
    {
      icon: <ShoppingBag size={20} />,
      name: "Retail & D2C / E-commerce",
      description: "Sites that turn browsers into buyers.",
      href: "/industries/retail",
      img: "/industry_retail.jpg"
    }
  ];

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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Industries We Serve</span>
          <h1 className="service-hero-title">We already know what works for your kind of business.</h1>
          <p className="service-hero-sub">
            A clinic wins customers differently from a builder or a coaching centre. We have built websites across industries, so we start with what already works for yours, instead of guessing.
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

      {/* SECTION 2 — Why Industry Matters (Analogy) */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Stitched to Fit</span>
          <h2 className="section-title">A tailor who knows your trade stitches a better fit.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8", marginBottom: "24px" }}>
            A good tailor does not cut every garment the same way. A shirt for a farmer and a shirt for an office worker are built differently, because the wearer's life is different.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            Websites are the same. A dental clinic needs easy appointment booking and trust. A builder needs a portfolio of finished projects. A CA firm needs to signal reliability and compliance. We do not stitch the same site for everyone. We build for how your industry actually earns customers.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Industry Cards */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Industries</span>
            <h2 className="section-title">Find your industry.</h2>
          </div>

          <div className="services-grid-hub" style={{ marginTop: "40px" }}>
            {industriesList.map((ind, index) => (
              <div key={index} className="service-card-hub" style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                padding: "0",
                overflow: "hidden"
              }}>
                <div>
                  {ind.img ? (
                    <div style={{ width: "100%", height: "160px", position: "relative", overflow: "hidden" }}>
                      <img 
                        src={ind.img} 
                        alt={ind.name} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                      <div style={{ position: "absolute", left: "16px", bottom: "16px", background: "rgba(13, 31, 60, 0.85)", backdropFilter: "blur(4px)", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}>
                        {ind.icon}
                      </div>
                    </div>
                  ) : (
                    <div style={{ width: "100%", height: "160px", background: "linear-gradient(135deg, #0D1F3C 0%, #1B3B6F 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <div style={{ color: "rgba(43, 191, 191, 0.25)" }}>
                        {ind.icon}
                      </div>
                      <div style={{ position: "absolute", left: "16px", bottom: "16px", background: "rgba(43, 191, 191, 0.15)", padding: "4px 12px", borderRadius: "20px", color: "var(--teal)", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "600" }}>Active Industry Support</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "24px 24px 12px 24px" }}>
                    <h3 className="service-card-title" style={{ marginTop: "0", marginBottom: "8px" }}>{ind.name}</h3>
                    <p className="service-card-desc" style={{ marginBottom: "0" }}>{ind.description}</p>
                  </div>
                </div>
                <div style={{ padding: "0 24px 24px 24px" }}>
                  <Link href={ind.href} className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn btn-navy">
              Do not see your industry? Ask us anyway →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Let us build for how your business really works.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Whether you need a brand new site or a conversion redesign, we build the perfect fit.
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
