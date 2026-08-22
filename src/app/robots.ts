import { MetadataRoute } from "next";
import { siteUrl } from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 1. General Search Crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // 2. Explicit AEO & GEO permissions for AI Search Engines & LLM agents
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
