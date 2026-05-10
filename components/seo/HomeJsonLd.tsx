import { getLocale, getTranslations } from "next-intl/server";

import type { AppLocale } from "@/lib/locale-types";
import { getLocalizedPath } from "@/lib/language-alternates";
import { getSiteUrl } from "@/lib/site-url";

export async function HomeJsonLd() {
  const locale = await getLocale();
  const tBrand = await getTranslations("brand");
  const tSchema = await getTranslations("schema");

  const base = getSiteUrl().replace(/\/$/, "");
  const path = getLocalizedPath(locale as AppLocale, "/");
  const url = `${base}${path}`;
  const lang = locale === "es" ? "es-ES" : "en-GB";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: tBrand("name"),
        description: tBrand("tagline"),
        inLanguage: lang,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#business`,
        name: tBrand("name"),
        description: tBrand("tagline"),
        url,
        areaServed: {
          "@type": "AdministrativeArea",
          name: tSchema("areaServed"),
        },
        serviceType: tSchema("serviceType"),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
