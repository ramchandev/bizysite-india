import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactClient from "./ContactClient";
import { localBusinessSchema } from "@/data/seoSchema";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact Bizy Site | Get a Free Quote or Website Audit",
  description: "Tell us where you are starting from, a new website or fixing an existing one. Quick reply, no pressure, no spam. Get a free quote or website audit today.",
  keywords: "contact Bizy Site, free website audit, web design quote, website redesign request India",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Bizy Site | Get a Free Quote or Website Audit",
    description: "Tell us where you are starting from, a new website or fixing an existing one. Quick reply, no pressure, no spam. Get a free quote or website audit today.",
    url: `${siteUrl}/contact`,
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bizy Site | Get a Free Quote or Website Audit",
    description: "Tell us where you are starting from, a new website or fixing an existing one. Quick reply, no pressure, no spam. Get a free quote or website audit today.",
  },
};

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact/#webpage`,
        "url": `${siteUrl}/contact`,
        "name": "Contact Bizy Site"
      },
      localBusinessSchema,
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/contact/#breadcrumb`,
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
            "name": "Contact",
            "item": `${siteUrl}/contact`
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
          <span className="section-tag light" style={{ color: "rgba(255,255,255,0.85)" }}>Contact Us</span>
          <h1 className="service-hero-title">Tell us where you are starting from. We will take it from there.</h1>
          <p className="service-hero-sub">
            Whether you need a brand new website or want to fix the one you have, the first step is a simple, no-pressure conversation. Tell us about your business and we will reply the same day.
          </p>
        </div>
      </section>

      <ContactClient />

      <Footer />
    </>
  );
}
