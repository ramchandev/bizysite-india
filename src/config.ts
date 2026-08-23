const isProd = process.env.NODE_ENV === "production";
export const siteUrl = isProd
  ? "https://www.bizysite.in"
  : (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");

