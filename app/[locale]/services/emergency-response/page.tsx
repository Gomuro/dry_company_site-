import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ServicePageView } from "@/components/landing/ServicePageView";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import type { AppLocale } from "@/lib/locale-types";
import { buildLanguageAlternates, getLocalizedPath } from "@/lib/language-alternates";
import { getSiteUrl } from "@/lib/site-url";

type Props = {
  params: Promise<{ locale: string }>;
};

const href = "/services/emergency-response" as const;

export default async function EmergencyServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pathname = getLocalizedPath(locale as AppLocale, href);

  return (
    <>
      <ServiceJsonLd pathname={pathname} namespace="serviceEmergency" />
      <ServicePageView locale={locale} ns="serviceEmergency" />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const base = getSiteUrl().replace(/\/$/, "");
  const alts = buildLanguageAlternates(base, href);
  const path = getLocalizedPath(locale as AppLocale, href);

  return {
    title: t("serviceEmergencyTitle"),
    description: t("serviceEmergencyDescription"),
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        es: alts.es,
        en: alts.en,
        "x-default": alts.xDefault,
      },
    },
    openGraph: {
      url: `${base}${path}`,
    },
  };
}
