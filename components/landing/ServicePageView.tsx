import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SERVICE_IMAGES } from "@/lib/content/media";
import { getWhatsAppHref, hasWhatsApp } from "@/lib/social";

import { ContactSection } from "@/components/landing/ContactSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

type Locale = (typeof routing.locales)[number];

type ServicePageViewProps = {
  locale: string;
  ns: "serviceEmergency" | "serviceDrying";
};

function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

export async function ServicePageView({ locale, ns }: ServicePageViewProps) {
  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations(ns);
  const tRoot = await getTranslations();

  const localeTyped = locale;

  const contactHref = `${getPathname({
    locale: localeTyped,
    href: "/",
  })}#contact`;

  const wa =
    hasWhatsApp() ?
      getWhatsAppHref(tRoot("whatsappPrefill"))
    : null;

  const points = [
    { title: t("point1Title"), body: t("point1Body") },
    { title: t("point2Title"), body: t("point2Body") },
    { title: t("point3Title"), body: t("point3Body") },
  ];

  const heroImage =
    ns === "serviceEmergency" ? SERVICE_IMAGES.emergency : SERVICE_IMAGES.drying;

  return (
    <>
      <SiteHeader />
      <main id="top">
        <div className="relative isolate min-h-[280px] overflow-hidden bg-slate-950 sm:min-h-[320px]">
          <Image
            src={heroImage.src}
            alt={t("heroImageAlt")}
            fill
            priority={ns === "serviceEmergency"}
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-cyan-950/55"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200/90">
                {t("lead")}
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {t("title")}
              </h1>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-6 max-w-2xl text-lg text-slate-200/95">
                {t("intro")}
              </p>
            </Reveal>
          </div>
        </div>

        <Section className="bg-white">
          <div className="grid gap-10 lg:grid-cols-3">
            {points.map((point, index) => (
              <Reveal key={point.title} delayMs={index * 90}>
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {point.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {point.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section className="bg-slate-900 text-slate-50">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t("ctaTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-200">{t("ctaBody")}</p>
          </Reveal>
          <Reveal delayMs={100} className="mt-8 flex flex-wrap gap-3">
            <a href={contactHref} className={primaryCtaClass}>
              {t("ctaButton")}
            </a>
            {wa ?
              <Button variant="secondary" href={wa}>
                {t("whatsappButton")}
              </Button>
            : null}
          </Reveal>
        </Section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
