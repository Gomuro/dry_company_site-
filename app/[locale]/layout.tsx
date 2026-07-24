import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { absoluteImageUrl, HERO_IMAGE } from "@/lib/content/media";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site-url";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tBrand = await getTranslations({ locale, namespace: "brand" });
  const tHero = await getTranslations({ locale, namespace: "hero" });
  const siteName = tBrand("name");
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const heroOgUrl = absoluteImageUrl(HERO_IMAGE.src);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("defaultTitle"),
      template: `%s · ${siteName}`,
    },
    description: t("defaultDescription"),
    openGraph: {
      type: "website",
      siteName,
      locale: locale === "es" ? "es_ES" : "en_GB",
      images: [
        {
          url: heroOgUrl,
          width: HERO_IMAGE.width,
          height: HERO_IMAGE.height,
          alt: tHero("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [heroOgUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    ...(process.env.GOOGLE_SITE_VERIFICATION && {
      verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      },
    }),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} bg-white antialiased text-slate-900`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
