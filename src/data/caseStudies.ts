export interface CaseStudy {
  slug: string;
  client: string;
  url: string;
  screenshot: string;
  industry: string;
  description: string;
  result: string;
  category: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "millet-bakes",
    client: "Millet Bakes",
    url: "https://www.milletbakes.in/",
    screenshot: "/screenshots/millet-bakes.jpg",
    industry: "Food & Bakery",
    description:
      "A WhatsApp-first product journey for an ancient-grain bakery — discover bakes, understand what makes each one special, and start an order conversation in seconds.",
    result: "WhatsApp-ready cart & clearer product journey",
    category: "Food & Bakery",
  },
  {
    slug: "hitech-fluid-system",
    client: "Hitech Fluid System",
    url: "https://www.hitechfluidsystem.com/",
    screenshot: "/screenshots/hitech-fluid-system.jpg",
    industry: "Industrial Water Treatment",
    description:
      "An engineered digital experience for an industrial water & wastewater company — proof, process storytelling, and requirement-focused enquiries online.",
    result: "Interactive proof + stronger enquiry flow",
    category: "Manufacturing",
  },
  {
    slug: "dss-corp",
    client: "DSS Dynamic Strategic Solutions",
    url: "https://www.dsscorp.in/",
    screenshot: "/screenshots/dss-corp.jpg",
    industry: "Chartered Accountancy",
    description:
      "A trust-building website for a Chennai CA firm — calculators, blogs, consultation forms, and WhatsApp — so founders get clarity and book advice faster.",
    result: "Tools + content that turn visitors into consultations",
    category: "Professional Services",
  },
  {
    slug: "dr-sajan-hegde",
    client: "Dr. Sajan Hegde",
    url: "https://drsajankhegde.com",
    screenshot: "/screenshots/dr-sajan-hegde.png",
    industry: "Healthcare & Spine Care",
    description:
      "Custom booking platform and clinical branding page for one of India's top spine surgeons, streamlining online patient appointments.",
    result: "38% increase in patient bookings",
    category: "Healthcare",
  },
  {
    slug: "sound-v-pro",
    client: "Sound V Pro",
    url: "https://soundvpro.com/",
    screenshot: "/screenshots/sound-v-pro.png",
    industry: "E-commerce & Pro Audio",
    description:
      "High-performance online store for professional audio and studio equipment, optimized for mobile checkout transitions.",
    result: "2.1× higher checkout conversion rate",
    category: "E-commerce",
  },
  {
    slug: "miracle-members",
    client: "Miracle Members",
    url: "https://miraclemembers.in",
    screenshot: "/screenshots/miracle-members.png",
    industry: "Professional Networking",
    description:
      "Speed-optimized custom portal and networking platform with dynamic member directories and lightning-fast search capabilities.",
    result: "48% reduction in page load speed",
    category: "Professional Services",
  },
  {
    slug: "an-art-by",
    client: "An Art By",
    url: "https://anartby.com/",
    screenshot: "/screenshots/an-art-by.png",
    industry: "E-commerce & Art Gallery",
    description:
      "Interactive art portfolio and online store built with high visual engagement and smooth catalog zoom configurations.",
    result: "62% increase in visual engagement CTR",
    category: "E-commerce",
  },
  {
    slug: "idea-heavens",
    client: "Idea Heavens",
    url: "https://ideaheavens.com/",
    screenshot: "/screenshots/idea-heavens.png",
    industry: "Creative Agency",
    description:
      "Conversion-optimized landing pages and marketing asset portal for a prominent digital branding and design agency.",
    result: "3.4× lower cost-per-lead (CPL)",
    category: "Professional Services",
  },
];
