import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/gallery", "/notice", "/reservation", "/reveiw"].map((route) => ({
    url: `https://michelangolf.co.kr${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes];
}
