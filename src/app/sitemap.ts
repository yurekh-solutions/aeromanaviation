import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aeromanaviation.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/services/aircraft-parts",
    "/services/charter-flights",
    "/services/flight-calibration",
    "/services/cabin-repair",
    "/products/aero-sense",
    "/products/arms",
    "/certifications",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
