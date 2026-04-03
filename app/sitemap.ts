import type { MetadataRoute } from "next";

const routes = [
  "",
  "/technology",
  "/outputs",
  "/esg",
  "/india-strategy",
  "/partnerships",
  "/contact",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rare-earth.vercel.app";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
