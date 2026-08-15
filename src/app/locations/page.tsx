import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design & Digital Marketing Across India | Bizy Site",
  description: "Serving businesses in Chennai, Coimbatore, Mumbai, Bangalore, Pune, Delhi and Hyderabad. Local know-how, best-in-class websites. Get a free quote.",
  keywords: "website design company Chennai, web development Coimbatore, SEO Mumbai, website design Bangalore, website development Pune, web design Delhi NCR, SEO Hyderabad",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Website Design & Digital Marketing Across India | Bizy Site",
    description: "Serving businesses in Chennai, Coimbatore, Mumbai, Bangalore, Pune, Delhi and Hyderabad. Local know-how, best-in-class websites. Get a free quote.",
    url: "https://bizysite.in/locations",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Digital Marketing Across India | Bizy Site",
    description: "Serving businesses in Chennai, Coimbatore, Mumbai, Bangalore, Pune, Delhi and Hyderabad. Local know-how, best-in-class websites. Get a free quote.",
  },
};

export default function LocationsHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://bizysite.in/locations/#webpage",
        "url": "https://bizysite.in/locations",
        "name": "Website Design & Digital Marketing Across India",
        "description": "Serving businesses in Chennai, Coimbatore, Mumbai, Bangalore, Pune, Delhi and Hyderabad. Local know-how, best-in-class websites."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/locations/#breadcrumb",
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
            "name": "Locations",
            "item": "https://bizysite.in/locations"
          }
        ]
      }
    ]
  };

  const locationsList = [
    {
      city: "Chennai",
      desc: "Websites for Chennai businesses that get found and get customers.",
      href: "/locations/chennai",
      img: "/chennai_realistic.jpg"
    },
    {
      city: "Coimbatore",
      desc: "Websites for Kovai businesses, from manufacturing to services.",
      href: "/locations/coimbatore"
    },
    {
      city: "Mumbai",
      desc: "Websites for Mumbai businesses that move as fast as the city does.",
      href: "/locations/mumbai"
    },
    {
      city: "Bangalore",
      desc: "Websites for Bengaluru businesses, from startups to local services.",
      href: "/locations/bangalore"
    },
    {
      city: "Pune",
      desc: "Websites for Pune businesses, education to IT to manufacturing.",
      href: "/locations/pune"
    },
    {
      city: "Delhi",
      desc: "Websites for Delhi NCR businesses that stand out in a crowded market.",
      href: "/locations/delhi"
    },
    {
      city: "Hyderabad",
      desc: "Websites for Hyderabad businesses ready to grow online.",
      href: "/locations/hyderabad",
      img: "/hyderabad_realistic.jpg"
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Where We Work</span>
          <h1 className="service-hero-title">Local know-how, best-in-class websites, across India.</h1>
          <p className="service-hero-sub">
            Every city does business a little differently. We serve businesses across seven major Indian cities, and everything is handled online, so distance is never a barrier to working with us.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <div className="cta-wrapper">
              <Link href="/contact?type=quote" className="btn btn-primary">
                Get My Free Quote →
              </Link>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "6px" }}>Wherever you are, we can help. Tell us your city.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — City Cards */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Cities We Serve</span>
            <h2 className="section-title">Find your city.</h2>
          </div>

          <div className="services-grid-hub" style={{ marginTop: "40px" }}>
            {locationsList.map((loc, index) => (
              <div key={index} className="service-card-hub" style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                padding: "0",
                overflow: "hidden"
              }}>
                <div>
                  {loc.img ? (
                    <div style={{ width: "100%", height: "160px", position: "relative", overflow: "hidden" }}>
                      <img 
                        src={loc.img} 
                        alt={loc.city} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                      <div style={{ position: "absolute", left: "16px", bottom: "16px", background: "rgba(13, 31, 60, 0.8)", backdropFilter: "blur(4px)", padding: "4px 12px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "6px", color: "var(--white)" }}>
                        <MapPin size={14} style={{ color: "var(--teal)" }} />
                        <span style={{ fontSize: "12px", fontWeight: "600" }}>Active</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ width: "100%", height: "160px", background: "linear-gradient(135deg, #0D1F3C 0%, #1B3B6F 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <MapPin size={48} style={{ color: "rgba(43, 191, 191, 0.2)" }} />
                      <div style={{ position: "absolute", left: "16px", bottom: "16px", background: "rgba(43, 191, 191, 0.15)", padding: "4px 12px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "6px", color: "var(--teal)" }}>
                        <MapPin size={14} />
                        <span style={{ fontSize: "12px", fontWeight: "600" }}>Support Available</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "24px 24px 12px 24px" }}>
                    <h3 className="service-card-title" style={{ marginTop: "0", marginBottom: "8px" }}>{loc.city}</h3>
                    <p className="service-card-desc" style={{ marginBottom: "0" }}>{loc.desc}</p>
                  </div>
                </div>
                <div style={{ padding: "0 24px 24px 24px" }}>
                  <Link href={loc.href} className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                    Explore {loc.city} Services →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn btn-navy">
              Not in these cities? We still work with you →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why Local Understanding Helps */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span className="section-tag">Local Edge</span>
          <h2 className="section-title">We speak your customer's language, city by city.</h2>
          <p style={{ color: "var(--text-mid)", fontSize: "16px", lineHeight: "1.8" }}>
            A customer in Chennai searches differently from one in Delhi. Local landmarks, languages, buying habits and competition all differ. We bring that local understanding into your website and your search visibility, so you connect with the customers right around you, not a generic audience.
          </p>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Let us build for your city and your customers.
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Get a high-converting website built for the local market context you compete in.
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
