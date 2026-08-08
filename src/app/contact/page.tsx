import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Contact Bizy Site | Get a Free Quote or Website Audit",
  description: "Tell us where you are starting from, a new website or fixing an existing one. Quick reply, no pressure, no spam. Get a free quote or website audit today.",
  keywords: "contact Bizy Site, free website audit, web design quote, website redesign request India",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Bizy Site | Get a Free Quote or Website Audit",
    description: "Tell us where you are starting from, a new website or fixing an existing one. Quick reply, no pressure, no spam. Get a free quote or website audit today.",
    url: "https://bizysite.in/contact",
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
        "@id": "https://bizysite.in/contact/#webpage",
        "url": "https://bizysite.in/contact",
        "name": "Contact Bizy Site"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/#organization",
        "name": "Bizy Site India",
        "url": "https://bizysite.in",
        "telephone": "+919500728442",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "404 Jasmine A wing, Eden Park Phase 2, OMR, Siruseri",
          "addressLocality": "Chennai",
          "postalCode": "603103",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/contact/#breadcrumb",
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
            "name": "Contact",
            "item": "https://bizysite.in/contact"
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
