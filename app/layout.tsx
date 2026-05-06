import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";

import { brand } from "@/lib/content/site";
import { HERO_IMAGE } from "@/lib/content/media";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} · Deshumidificación tras inundaciones en Málaga`,
    template: `%s · ${brand.name}`,
  },
  description: brand.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brand.name} · Deshumidificación profesional en Málaga`,
    description: brand.tagline,
    locale: "es_ES",
    type: "website",
    url: "/",
    siteName: brand.name,
    images: [
      {
        url: HERO_IMAGE.src,
        width: 1920,
        height: 1080,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} · Málaga`,
    description: brand.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} bg-white antialiased text-slate-900`}>{children}</body>
    </html>
  );
}
