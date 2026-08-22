import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, Users, ShieldCheck, Heart, UserCheck, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "About Bizy Site | 500+ Websites, 10 Years, Now in India",
  description: "We spent 10 years building 500+ best-in-class websites for US businesses. Now we bring that same standard to India. Meet the team behind Bizy Site.",
  keywords: "about Bizy Site, web design company India, website developers India, conversion rate optimization company",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bizy Site | 500+ Websites, 10 Years, Now in India",
    description: "We spent 10 years building 500+ best-in-class websites for US businesses. Now we bring that same standard to India. Meet the team behind Bizy Site.",
    url: `${siteUrl}/about`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bizy Site | 500+ Websites, 10 Years, Now in India",
    description: "We spent 10 years building 500+ best-in-class websites for US businesses. Now we bring that same standard to India. Meet the team behind Bizy Site.",
  },
};

export default function About() {
  const teamMembers = [
    {
      name: "Vivek",
      title: "Co-Founder",
      bio: "Vivek lives and breathes conversion. He looks at a website and immediately sees what is stopping visitors from becoming customers, and how to fix it. He leads conversion, quality and marketing, making sure every site we ship is not just clean and tested, but built to actually bring in business. If your site turns visitors into enquiries, Vivek's fingerprints are on it."
    },
    {
      name: "Ram",
      title: "Co-Founder",
      bio: "Ram is the technical and logical backbone of Bizy Site. Give him a complex problem and he calmly breaks it down into a clear, structured solution. He thinks in systems, plans for what could go wrong, and makes sure the foundation under every project is rock solid. When a build has tricky requirements or moving parts, Ram is the steady hand that keeps everything aligned."
    },
    {
      name: "Kantha",
      title: "Chief Technology Officer",
      bio: "Kantha turns ideas into working reality. Strong in technical implementation, he is the person who makes ambitious builds actually function, smoothly, reliably and at speed. Integrations, automation, custom features: if it needs to work flawlessly behind the scenes, Kantha makes sure it does. Complexity does not scare him. It is where he does his best work."
    },
    {
      name: "Clinton",
      title: "Head of SEO",
      bio: "Clinton makes sure people can find you. He leads our search work, getting clients to show up on Google, in voice search, and increasingly inside AI tools that people now ask for recommendations. He stays ahead of how search is changing, so your business stays visible no matter where your customers go looking. If you get found, thank Clinton."
    }
  ];



  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Bizy Site",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`
      },
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about/#webpage`,
        "url": `${siteUrl}/about`,
        "name": "About Bizy Site",
        "description": "We spent 10 years building 500+ best-in-class websites for US businesses. Now we bring that same standard to India."
      },
      ...teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.title,
        "worksFor": {
          "@type": "Organization",
          "name": "Bizy Site"
        },
        "description": member.bio
      }))
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Our Story</span>
          <h1 className="service-hero-title">We built world-class websites for 10 years. Now we build them for India.</h1>
          <p className="service-hero-sub">
            500+ best-in-class websites. A decade of working at the highest level. One simple belief: businesses in India deserve exactly the same quality. That belief is why Bizy Site exists.
          </p>
        </div>
      </section>

      {/* SECTION 2 — The Origin Story */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">The Origin</span>
          <h2 className="section-title" style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", marginBottom: "20px" }}>
            Ten years. Five hundred websites. One high standard.
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            For 10 years, our team built websites for businesses in the United States. Not simple template sites, but best-in-class work: advanced design, powerful features, API integrations, automation, custom solutions, and complex systems connected smoothly behind the scenes.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            We built more than 500 of them. We learned what makes a website fast. What makes a visitor trust it. What makes them pick up the phone. And what separates a website that just exists from one that actually grows a business.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7" }}>
            We were good at it. Really good. But something kept tugging at us.
          </p>
        </div>
      </section>

      {/* SECTION 3 — The Realization */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">The Realization</span>
          <h2 className="section-title" style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", marginBottom: "20px" }}>
            Right here at home, we saw a gap that bothered us.
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            Here is the thing: we were doing this work from right here in India, building for clients on the other side of the world. And all around us, we noticed the same thing. Brilliant businesses, hardworking owners, genuinely good products and services, all let down by websites that did not do them justice. Slow sites. Confusing pages. Designs that looked like they belonged to another decade. Sites that brought no calls.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            These owners were not putting in less effort. They simply were not getting the same standard we were delivering to clients overseas, from right here in India. And that did not sit right with us.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7" }}>
            We kept asking: why should a business in Chennai or Coimbatore or Pune settle for less than a business in the US? The talent was here. The experience was here. We were here.
          </p>
        </div>
      </section>

      {/* SECTION 4 — The Mission */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag">Our Mission</span>
          <h2 className="section-title" style={{ fontSize: "28px", color: "var(--navy)", fontWeight: "800", marginBottom: "20px" }}>
            So we started Bizy Site.
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            Bizy Site is our answer to that gap. We take the exact standard we spent a decade perfecting for US clients, the speed, the design, the conversion focus, the smart engineering, and we deliver it to Indian businesses on terms that make sense here.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
            No watered-down quality. No shortcuts. No jargon to confuse you. Just the same best-in-class websites we are known for, built to bring you more customers, explained in language you can actually understand.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "15px", lineHeight: "1.7" }}>
            This is the work we love, finally serving the place we call home.
          </p>
        </div>
      </section>

      {/* SECTION 5 — Meet the Team */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">The people behind your website.</h2>
          </div>

          <div className="work-grid" style={{ marginTop: "32px" }}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className="work-card" style={{ padding: "32px", textAlign: "center", display: "flex", flexDirection: "column", background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
                {/* Styled initial circle representing a premium profile */}
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--navy)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold", margin: "0 auto 20px auto" }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="work-title" style={{ fontSize: "18px", margin: "0 0 4px 0" }}>{member.name}</h3>
                <span className="work-meta" style={{ color: "var(--teal-dark)", fontSize: "12px", display: "block", marginBottom: "16px", fontWeight: "700" }}>{member.title}</span>
                <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.6" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — By The Numbers */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag light">Metrics</span>
            <h2 className="section-title text-white">A track record you can trust.</h2>
          </div>
          
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)", fontSize: "40px", fontWeight: "900" }}>500+</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.75)" }}>websites delivered</div>
            </div>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)", fontSize: "40px", fontWeight: "900" }}>10 years</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.75)" }}>of senior experience</div>
            </div>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)", fontSize: "40px", fontWeight: "900" }}>7+ cities</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.75)" }}>served across India</div>
            </div>
            <div className="stat-pill" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="stat-value" style={{ color: "var(--white)", fontSize: "40px", fontWeight: "900", display: "inline-flex", alignItems: "center", gap: "4px", justifyContent: "center" }}>
                <Star size={24} fill="var(--teal)" style={{ color: "var(--teal)" }} /> 4.9
              </div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.75)" }}>average client rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — What We Stand For */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <span className="section-tag">Values</span>
            <h2 className="section-title">How we work, every single time.</h2>
          </div>
          
          <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Quality with no compromise.</strong> The same standard we built for US clients, now for you.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Outcomes over jargon.</strong> We measure success in calls, leads and sales, not buzzwords.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Honesty first.</strong> If your current site is fine, we will say so. We earn trust before we earn business.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Respect for your customers.</strong> No spammy tricks. We build experiences people trust.
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text)", lineHeight: "1.6" }}>
              <CheckCircle2 size={18} style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Ownership for you.</strong> Your site, your data, your business. Always.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="section-padding final-cta-section" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 4vw, 36px)", marginBottom: "16px" }}>
            Want this team building your website?
          </h2>
          <p className="section-sub text-white" style={{ opacity: 0.9, marginBottom: "32px", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.7" }}>
            Let us bring 10 years and 500+ websites of experience to your business.
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
