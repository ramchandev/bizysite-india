export interface NavCatalogItem {
  name: string;
  href: string;
  desc: string;
}

export interface NavCatalogGroup {
  category: string;
  items: NavCatalogItem[];
}

export const servicesData: NavCatalogGroup[] = [
  {
    category: "Get Chosen",
    items: [
      { name: "Website Design & Dev", href: "/services/web-design", desc: "Blazing fast, custom websites" },
      { name: "Conversion Rate Optimization (CRO)", href: "/services/cro", desc: "Turn more traffic into leads" },
      { name: "Social Media Management", href: "/services/social-media-management", desc: "Keep your pages active" },
    ],
  },
  {
    category: "Get Found",
    items: [
      { name: "SEO", href: "/services/seo", desc: "Rank high on Google search" },
      { name: "Google Business Profile", href: "/services/google-business-profile", desc: "Win local map searches" },
      { name: "Answer Engine Optimization (AEO)", href: "/services/aeo", desc: "Voice & snippet answers" },
    ],
  },
  {
    category: "AI & Paid Traffic",
    items: [
      { name: "AI Optimization (AIO)", href: "/services/aio", desc: "Be visible in AI search" },
      { name: "Generative Engine Optimization (GEO)", href: "/services/geo", desc: "ChatGPT recommendations" },
      { name: "Google & Meta Ads", href: "/services/ads", desc: "Get customers today" },
    ],
  },
];

export const industriesData: NavCatalogGroup[] = [
  {
    category: "Commercial & Retail",
    items: [
      { name: "Real Estate & Builders", href: "/industries/real-estate", desc: "Showcase properties cleanly" },
      { name: "Manufacturing & B2B", href: "/industries/manufacturing", desc: "Win B2B quote requests" },
      { name: "Retail & D2C / E-commerce", href: "/industries/retail", desc: "Turn browsers into buyers" },
      { name: "Hospitality & Restaurants", href: "/industries/hospitality", desc: "Drive footfall and bookings" },
    ],
  },
  {
    category: "Services & Care",
    items: [
      { name: "Healthcare & Clinics", href: "/industries/healthcare", desc: "Fill appointment slots" },
      { name: "Education & Coaching", href: "/industries/education", desc: "Fill batches & demo classes" },
      { name: "Professional Services", href: "/industries/professional-services", desc: "Signal trust & win clients" },
    ],
  },
];

export const locationsData = [
  {
    city: "Chennai",
    desc: "Websites for Chennai businesses that get found and get customers.",
    href: "/locations/chennai",
  },
  {
    city: "Coimbatore",
    desc: "Websites for Kovai businesses, from manufacturing to services.",
    href: "/locations/coimbatore",
  },
  {
    city: "Mumbai",
    desc: "Websites for Mumbai businesses that move as fast as the city does.",
    href: "/locations/mumbai",
  },
  {
    city: "Bangalore",
    desc: "Websites for Bengaluru businesses, from startups to local services.",
    href: "/locations/bangalore",
  },
  {
    city: "Pune",
    desc: "Websites for Pune businesses, education to IT to manufacturing.",
    href: "/locations/pune",
  },
  {
    city: "Delhi",
    desc: "Websites for Delhi NCR businesses that stand out in a crowded market.",
    href: "/locations/delhi",
  },
  {
    city: "Hyderabad",
    desc: "Websites for Hyderabad businesses ready to grow online.",
    href: "/locations/hyderabad",
  },
] as const;
