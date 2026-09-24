import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/config";
import { caseStudies } from "@/data/caseStudies";
import { caseStudyDetails } from "@/data/caseStudyDetails";
import type { Metadata } from "next";

type ParamsPromise = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(caseStudyDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyDetails[slug];

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  const title = `${study.logo} Case Study | Bizy Site India`;
  const description = study.title;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/work/${slug}`,
      siteName: "Bizy Site India",
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function CaseStudyDetail({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const study = caseStudyDetails[slug];
  const listing = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="service-hero">
        <div className="container service-hero-content" style={{ textAlign: "left" }}>
          <Link href="/work" style={{ color: "var(--teal)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", fontWeight: "700", width: "fit-content" }}>
            <ArrowLeft size={16} /> Back to All Work
          </Link>
          <span className="market-tag" style={{ marginLeft: 0, display: "inline-block", marginBottom: "16px" }}>{study.industry}</span>
          <h1 className="service-hero-title" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.2" }}>{study.title}</h1>
          {listing?.url ? (
            <a
              href={listing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", padding: "12px 20px", fontSize: "14px" }}
            >
              Visit {new URL(listing.url).hostname}
              <ExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>

          {listing?.screenshot ? (
            <div style={{ marginBottom: "40px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
              <img
                src={listing.screenshot}
                alt={`${study.logo} website`}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: "420px" }}
              />
            </div>
          ) : null}

          {/* Metadata Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "24px", background: "var(--off-white)", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "40px" }}>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>Industry</span>
              <p style={{ fontWeight: "700", color: "var(--navy)" }}>{study.industry}</p>
            </div>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>Company Size</span>
              <p style={{ fontWeight: "700", color: "var(--navy)" }}>{study.size}</p>
            </div>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold", textTransform: "uppercase" }}>Key Challenge</span>
              <p style={{ fontWeight: "700", color: "var(--navy)" }}>{study.challenge}</p>
            </div>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>1. The Problem</h3>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.7", fontSize: "15px" }}>{study.problem}</p>
            </div>

            <div>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>2. Our Approach</h3>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.7", fontSize: "15px" }}>{study.approach}</p>
            </div>

            <div>
              <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>3. What We Did (Tactics)</h3>
              <ul className="outcome-list" style={{ gap: "12px", marginTop: "12px" }}>
                {study.tactics.map((tactic, idx) => (
                  <li key={idx} className="outcome-item" style={{ alignItems: "flex-start" }}>
                    <Check size={16} style={{ marginTop: "4px" }} />
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>{tactic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {study.benefits && study.benefits.length > 0 ? (
              <div>
                <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: "800", marginBottom: "12px" }}>4. How the business benefits</h3>
                <ul className="outcome-list" style={{ gap: "12px", marginTop: "12px" }}>
                  {study.benefits.map((benefit, idx) => (
                    <li key={idx} className="outcome-item" style={{ alignItems: "flex-start" }}>
                      <Check size={16} style={{ marginTop: "4px" }} />
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Results Grid */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden", marginTop: "16px" }}>
              <div style={{ background: "var(--navy)", color: "var(--white)", padding: "16px 24px", fontWeight: "bold" }}>
                {study.benefits ? "5. Performance Comparison" : "4. Performance Comparison"}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
                <div style={{ background: "var(--white)", padding: "24px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>BEFORE BIZY SITE</span>
                  <p style={{ fontSize: "14px", color: "#EF4444", fontWeight: "700", marginTop: "8px" }}>{study.beforeStats}</p>
                </div>
                <div style={{ background: "var(--white)", padding: "24px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "bold" }}>AFTER BIZY SITE</span>
                  <p style={{ fontSize: "14px", color: "var(--green)", fontWeight: "700", marginTop: "8px" }}>{study.afterStats}</p>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div style={{ background: "var(--teal-light)", borderLeft: "4px solid var(--teal)", padding: "24px", borderRadius: "0 12px 12px 0", marginTop: "16px" }}>
              <p style={{ fontSize: "16px", fontStyle: "italic", fontWeight: "600", color: "var(--navy)", marginBottom: "12px" }}>
                &ldquo;{study.quote}&rdquo;
              </p>
              <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "14px" }}>{study.author}</h4>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Block */}
      <section className="section-padding" style={{ background: "var(--grad-hero)", color: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title text-white">Get results like this for your business.</h2>
          <p className="section-sub text-white" style={{ opacity: 0.9 }}>
            Claim your free audit report and let our experts show you where the growth gaps are.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px" }}>
            Get My Free Website Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
