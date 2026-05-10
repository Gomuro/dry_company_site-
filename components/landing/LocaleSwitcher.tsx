"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold"
      role="navigation"
      aria-label={t("label")}
    >
      <Link
        href={pathname}
        locale="es"
        className={`rounded-full px-2 py-1 transition ${
          locale === "es"
            ? "bg-cyan-600 text-white"
            : "text-slate-600 hover:text-cyan-700"
        }`}
        hrefLang="es"
        aria-current={locale === "es" ? "true" : undefined}
      >
        ES
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={`rounded-full px-2 py-1 transition ${
          locale === "en"
            ? "bg-cyan-600 text-white"
            : "text-slate-600 hover:text-cyan-700"
        }`}
        hrefLang="en"
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
