import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: SITE_ORIGIN + "/work/portfolio",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: SITE_ORIGIN + "/about",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/contact",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  ];
}
