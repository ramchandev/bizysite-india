import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { siteUrl } from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  const coreRoutes = [
    "",
    "/about",
    "/work",
    "/blog",
    "/contact",
    "/free-guide",
    "/services",
    "/industries",
    "/locations",
    "/service-index",
    "/sitemap"
  ];

  const serviceRoutes = [
    "/services/web-design",
    "/services/cro",
    "/services/seo",
    "/services/aeo",
    "/services/aio",
    "/services/geo",
    "/services/google-business-profile",
    "/services/ads",
    "/services/social-media-management"
  ];

  const industryRoutes = [
    "/industries/healthcare",
    "/industries/real-estate",
    "/industries/manufacturing",
    "/industries/education",
    "/industries/hospitality",
    "/industries/professional-services",
    "/industries/retail"
  ];

  const locationRoutes = [
    "/locations/chennai",
    "/locations/coimbatore",
    "/locations/mumbai",
    "/locations/bangalore",
    "/locations/pune",
    "/locations/delhi",
    "/locations/hyderabad"
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.category.toLowerCase().replace(/ /g, "-")}/${post.slug}`);

  const legalRoutes = [
    "/privacy",
    "/terms",
    "/refund",
    "/cookie-policy",
    "/ai-policy"
  ];

  const allRoutes = [
    ...coreRoutes.map(route => ({ path: route, priority: route === "" ? 1.0 : 0.8 })),
    ...serviceRoutes.map(route => ({ path: route, priority: 0.8 })),
    ...industryRoutes.map(route => ({ path: route, priority: 0.7 })),
    ...locationRoutes.map(route => ({ path: route, priority: 0.8 })),
    ...blogRoutes.map(route => ({ path: route, priority: 0.6 })),
    ...legalRoutes.map(route => ({ path: route, priority: 0.3 }))
  ];

  return allRoutes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority
  }));
}
