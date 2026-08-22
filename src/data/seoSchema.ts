import { siteUrl } from "@/config";

export const socialLinks = [
  "https://facebook.com/bizysite",
  "https://x.com/bizysite",
  "https://instagram.com/bizysite",
  "https://linkedin.com/company/bizysite"
];

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  "name": "Bizy Site",
  "url": siteUrl,
  "logo": `${siteUrl}/Bizy_Site_Logo.png`,
  "sameAs": socialLinks
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  "name": "Bizy Site India",
  "description": "Best-in-class websites that bring you more calls and customers. 500+ sites built, 10 years of experience. Performance-Driven SEO, AEO, GEO and Web Growth Agency.",
  "url": siteUrl,
  "telephone": "+919500728442",
  "logo": `${siteUrl}/Bizy_Site_Logo.png`,
  "priceRange": "$$",
  "image": `${siteUrl}/Bizy_Site_Logo.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "404 Jasmine A wing, Eden Park Phase 2, OMR, Siruseri",
    "addressLocality": "Chennai",
    "postalCode": "603103",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.8224,
    "longitude": 80.2223
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "148",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": socialLinks
};
