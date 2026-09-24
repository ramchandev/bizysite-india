import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";
import { caseStudyDetails } from "@/data/caseStudyDetails";
import { generatedSearchBodies } from "@/data/generatedSearchBodies";
import { industriesData, locationsData, servicesData } from "@/data/navCatalogs";

export type SearchCategory =
  | "Services"
  | "Industries"
  | "Locations"
  | "Work"
  | "Blog"
  | "Pages";

export interface SearchDocument {
  id: string;
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  keywords?: string[];
  /** Full-page / long-form text used for deep keyword matching */
  body?: string;
}

function blogCategorySlug(category: string): string {
  return category.toLowerCase().replace(/ /g, "-");
}

function bodyFor(href: string, ...extra: string[]): string | undefined {
  const parts = [generatedSearchBodies[href], ...extra].filter(Boolean);
  if (parts.length === 0) return undefined;
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

const serviceDocs: SearchDocument[] = servicesData.flatMap((group) =>
  group.items.map((item) => ({
    id: `service-${item.href}`,
    title: item.name,
    description: item.desc,
    href: item.href,
    category: "Services" as const,
    keywords: [group.category, "service"],
    body: bodyFor(item.href),
  }))
);

const industryDocs: SearchDocument[] = industriesData.flatMap((group) =>
  group.items.map((item) => ({
    id: `industry-${item.href}`,
    title: item.name,
    description: item.desc,
    href: item.href,
    category: "Industries" as const,
    keywords: [group.category, "industry"],
    body: bodyFor(item.href),
  }))
);

const locationDocs: SearchDocument[] = locationsData.map((loc) => ({
  id: `location-${loc.href}`,
  title: `${loc.city} Web Design & Digital Marketing`,
  description: loc.desc,
  href: loc.href,
  category: "Locations" as const,
  keywords: [loc.city, "local", "location"],
  body: bodyFor(loc.href),
}));

const workDocs: SearchDocument[] = caseStudies.map((study) => {
  const detail = caseStudyDetails[study.slug];
  const detailText = detail
    ? [
        detail.title,
        detail.problem,
        detail.approach,
        detail.challenge,
        ...detail.tactics,
        ...(detail.benefits ?? []),
        detail.quote,
      ].join(" ")
    : "";

  return {
    id: `work-${study.slug}`,
    title: study.client,
    description: study.description,
    href: `/work/${study.slug}`,
    category: "Work" as const,
    keywords: [study.industry, study.category, study.result, "case study", "portfolio"],
    body: bodyFor(
      `/work/${study.slug}`,
      study.description,
      study.industry,
      study.result,
      study.client,
      detailText
    ),
  };
});

const blogDocs: SearchDocument[] = blogPosts.map((post) => {
  const bodyText = post.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    id: `blog-${post.slug}`,
    title: post.title,
    description: post.excerpt,
    href: `/blog/${blogCategorySlug(post.category)}/${post.slug}`,
    category: "Blog" as const,
    keywords: [post.category, "article", "guide", post.metaDescription],
    body: bodyText,
  };
});

const pageDocs: SearchDocument[] = [
  {
    id: "page-home",
    title: "Bizy Site — Home",
    description:
      "Best-in-class websites that bring you more calls and customers.",
    href: "/",
    category: "Pages",
    keywords: ["home", "agency"],
    body: bodyFor("/"),
  },
  {
    id: "page-about",
    title: "About Bizy Site",
    description:
      "We spent 10 years building 500+ best-in-class websites for US businesses. Now we bring that same standard to India. Meet the team behind Bizy Site.",
    href: "/about",
    category: "Pages",
    keywords: ["company", "team", "agency", "Vivek", "Ram", "Kantha", "Clinton"],
    body: bodyFor("/about"),
  },
  {
    id: "page-contact",
    title: "Contact Us",
    description: "Get in touch for a free website and marketing audit.",
    href: "/contact",
    category: "Pages",
    keywords: ["audit", "enquiry", "lead", "free audit"],
    body: bodyFor("/contact"),
  },
  {
    id: "page-free-guide",
    title: "Free Guide",
    description: "Download our free guide for growing your business online.",
    href: "/free-guide",
    category: "Pages",
    keywords: ["download", "resource", "ebook"],
    body: bodyFor("/free-guide"),
  },
  {
    id: "page-work",
    title: "Our Work",
    description: "Browse case studies and client results across industries.",
    href: "/work",
    category: "Pages",
    keywords: ["portfolio", "case studies", "results"],
    body: bodyFor("/work"),
  },
  {
    id: "page-blog",
    title: "Blog & Resources",
    description:
      "Practical guides on websites, SEO, and conversions for Indian businesses.",
    href: "/blog",
    category: "Pages",
    keywords: ["articles", "resources", "insights"],
    body: bodyFor("/blog"),
  },
  {
    id: "page-services",
    title: "All Services",
    description:
      "Explore our full suite of web design, SEO, CRO, and growth services.",
    href: "/services",
    category: "Pages",
    keywords: ["services hub"],
    body: bodyFor("/services"),
  },
  {
    id: "page-industries",
    title: "Industries We Serve",
    description: "Digital marketing and websites tailored to your industry.",
    href: "/industries",
    category: "Pages",
    keywords: ["industries hub"],
    body: bodyFor("/industries"),
  },
  {
    id: "page-locations",
    title: "Locations",
    description:
      "Web design and digital marketing for businesses across major Indian cities.",
    href: "/locations",
    category: "Pages",
    keywords: ["cities", "local"],
    body: bodyFor("/locations"),
  },
];

export const searchIndex: SearchDocument[] = [
  ...serviceDocs,
  ...industryDocs,
  ...locationDocs,
  ...workDocs,
  ...blogDocs,
  ...pageDocs,
];

/** Curated suggestions shown when the search query is empty. */
const popularHrefs = [
  "/services/web-design",
  "/services/seo",
  "/services/cro",
  "/services/aeo",
  "/contact",
] as const;

export const popularSuggestions: SearchDocument[] = [
  ...popularHrefs
    .map((href) => [...serviceDocs, ...pageDocs].find((d) => d.href === href))
    .filter((d): d is SearchDocument => Boolean(d)),
  ...blogDocs.slice(0, 3),
];
