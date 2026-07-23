import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import { ContactSection } from "@/components/landing/ContactSection";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { TrustGallery } from "@/components/landing/TrustGallery";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { WhyUs } from "@/components/landing/WhyUs";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import type { AppLocale } from "@/lib/locale-types";
import { buildLanguageAlternates, getLocalizedPath } from "@/lib/language-alternates";
import { getSiteUrl } from "@/lib/site-url";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeJsonLd />
      <SiteHeader />
      <main id="top">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <TrustGallery />
        <WhyUs />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const base = getSiteUrl().replace(/\/$/, "");
  const alts = buildLanguageAlternates(base, "/");
  const path = getLocalizedPath(locale as AppLocale, "/");

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
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
