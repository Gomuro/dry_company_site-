import { getPathname } from "@/i18n/navigation";
import type { AppLocale } from "@/lib/locale-types";
import { routing } from "@/i18n/routing";

export type LocalizedHref =
  | "/"
  | "/services/emergency-response"
  | "/services/industrial-drying";

export function getLocalizedPath(
  locale: AppLocale,
  href: LocalizedHref,
): string {
  return getPathname({ locale, href });
}

export function buildLanguageAlternates(
  baseUrl: string,
  href: LocalizedHref,
): { es: string; en: string; xDefault: string } {
  const base = baseUrl.replace(/\/$/, "");
  const esPath = getPathname({ locale: "es", href });
  const enPath = getPathname({ locale: "en", href });

  const xDefaultPath = getPathname({
    locale: routing.defaultLocale,
    href,
  });

  return {
    es: `${base}${esPath}`,
    en: `${base}${enPath}`,
    xDefault: `${base}${xDefaultPath}`,
  };
}
