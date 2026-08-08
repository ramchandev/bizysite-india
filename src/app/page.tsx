import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizysite.in"),
  title: "Website Design & Digital Marketing in India | Bizy Site",
  description: "Best-in-class websites that bring you more calls and customers. 500+ sites built, 10 years of experience. New website or a fix for your current one. Get a free quote.",
  keywords: "website design India, conversion focused website, web design agency India, CRO agency India, SEO agency India, AEO optimization, GEO optimization India, ChatGPT optimization, Google Ads agency India, Meta Ads lead generation, conversion rate optimization India",
  authors: [{ name: "Bizy Site India" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Design & Digital Marketing in India | Bizy Site",
    description: "Best-in-class websites that bring you more calls and customers. 500+ sites built, 10 years of experience. New website or a fix for your current one. Get a free quote.",
    url: "https://bizysite.in",
    siteName: "Bizy Site India",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "Bizy Site India - Website Design & Digital Marketing",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Digital Marketing in India | Bizy Site",
    description: "Best-in-class websites that bring you more calls and customers. 500+ sites built, 10 years of experience. New website or a fix for your current one. Get a free quote.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bizysite.in/#organization",
        "name": "Bizy Site",
        "url": "https://bizysite.in",
        "logo": "https://bizysite.in/logo.png"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bizysite.in/#localbusiness",
        "name": "Bizy Site India",
        "description": "Best-in-class websites that bring you more calls and customers. 500+ sites built, 10 years of experience.",
        "url": "https://bizysite.in",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bizysite.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your goals, number of pages and features. A simple business site costs far less than a custom e-commerce or booking platform. Tell us what you need and we will send a clear, no-obligation quote, with no hidden charges."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites are ready in a few weeks, depending on size and how quickly we get your content and approvals. We will give you a clear timeline before we start."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website come on the first page of Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A new site does not rank on day one, just like a new shop does not get a crowd on opening day. We build strong SEO foundations from the start, and with our SEO service we work to move you up over time for the searches that matter to your business."
            }
          },
          {
            "@type": "Question",
            "name": "Do I own my website after you build it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You own your website, content and data from day one. No lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "Do you give a GST invoice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are GST registered and provide a proper tax invoice for every payment."
            }
          },
          {
            "@type": "Question",
            "name": "I already have a website. Can you just improve it instead of rebuilding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often, yes. We start with a free audit. If your current site has a good base, we improve speed, design and conversion without a full rebuild. If it is holding you back, we will tell you honestly."
            }
          },
          {
            "@type": "Question",
            "name": "Which cities do you work in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve businesses across India, including Chennai, Coimbatore, Mumbai, Bangalore, Pune, Delhi and Hyderabad. Everything is handled online, so location is never a barrier."
            }
          },
          {
            "@type": "Question",
            "name": "Will I get calls and enquiries, or just a nice-looking site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our entire approach is built around enquiries. A good-looking site that does not bring business is a failure in our eyes. We design every page to turn visitors into calls and leads."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bizysite.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bizysite.in"
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
      <HomeClient />
    </>
  );
}
