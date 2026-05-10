import type { MetadataRoute } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site-url";

const internalPaths = [
  "/",
  "/services/emergency-response",
  "/services/industrial-drying",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const href of internalPaths) {
      const path = getPathname({ locale, href });
      entries.push({
        url: `${base}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: href === "/" ? 1 : 0.85,
      });
    }
  }

  return entries;
}
