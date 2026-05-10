import { getLocale, getTranslations } from "next-intl/server";

import { getSiteUrl } from "@/lib/site-url";

type ServiceJsonLdProps = {
  pathname: string;
  namespace: "serviceEmergency" | "serviceDrying";
};

export async function ServiceJsonLd({ pathname, namespace }: ServiceJsonLdProps) {
  const locale = await getLocale();
  const t = await getTranslations(namespace);
  const tBrand = await getTranslations("brand");
  const tSchema = await getTranslations("schema");

  const url = `${getSiteUrl().replace(/\/$/, "")}${pathname}`;
  const lang = locale === "es" ? "es-ES" : "en-GB";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}#service`,
    name: tBrand("name"),
    url,
    inLanguage: lang,
    description: `${t("title")}: ${t("intro")}`,
    serviceType: tSchema("serviceType"),
    areaServed: {
      "@type": "AdministrativeArea",
      name: tSchema("areaServed"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
