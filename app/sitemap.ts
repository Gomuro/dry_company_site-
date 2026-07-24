import type { MetadataRoute } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site-url";

const internalPaths = [
  "/",
  "/services/emergency-response",
  "/services/industrial-drying",
] as const;

/** Fixed modification date — bump when pages are updated */
const LAST_MODIFIED = new Date("2026-07-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const href of internalPaths) {
      const path = getPathname({ locale, href });

      // Build all language alternates including self-reference
      const languages: Record<string, string> = {};
      for (const altLocale of routing.locales) {
        languages[altLocale] = `${base}${getPathname({ locale: altLocale, href })}`;
      }
      // x-default always points to the default locale
      languages["x-default"] = `${base}${getPathname({ locale: routing.defaultLocale, href })}`;

      entries.push({
        url: `${base}${path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: href === "/" ? 1 : 0.85,
        alternates: { languages },
      });
    }
  }

  return entries;
}
