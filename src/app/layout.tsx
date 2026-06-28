import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Bizy Site India | Performance-Driven Digital Agency",
  description: "India's first AEO + GEO & Web Growth Agency. We combine Website Design, SEO, CRO, Paid Ads, and AI Optimization to grow your business.",
  keywords: "web design agency India, CRO agency India, SEO agency India, AEO optimization, GEO optimization India, ChatGPT optimization, Google Ads agency India, Meta Ads lead generation, conversion rate optimization India",
  authors: [{ name: "Bizy Site India" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bizy Site India | Performance-Driven Digital Agency",
    description: "Website Design, SEO, CRO, Paid Ads, and AI Optimization built into every project to generate more traffic, leads, and revenue.",
    url: "https://bizysite.in",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "Bizy Site India - More Traffic. More Leads. More Revenue.",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizy Site India | Performance-Driven Digital Agency",
    description: "Website Design, SEO, CRO, Paid Ads, and AI Optimization built into every project to grow your business.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <FloatingCTA />
        <BackToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
