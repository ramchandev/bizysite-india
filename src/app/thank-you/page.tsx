import { siteUrl } from "@/config";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Bizy Site",
  description: "Your request has been received. Here is what happens next.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/thank-you/#webpage`,
    "url": `${siteUrl}/thank-you`,
    "name": "Thank You"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <ThankYouClient />

      <Footer />
    </>
  );
}
