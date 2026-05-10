import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { HERO_IMAGE } from "@/lib/content/media";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <div className="relative isolate overflow-hidden bg-slate-950">
      <Image
        src={HERO_IMAGE.src}
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/65 to-cyan-950/55"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:py-32 lg:px-8">
        <div className="max-w-2xl space-y-6 text-white">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200/90">
              {t("kicker")}
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="text-lg text-slate-200/95">{t("subtitle")}</p>
          </Reveal>
          <Reveal delayMs={200}>
            <div className="flex flex-wrap gap-2">
              {[t("badge1"), t("badge2"), t("badge3")].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={260}>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary" href="#contact">
                {t("primaryCta")}
              </Button>
              <Button variant="secondary" href="#solution">
                {t("secondaryCta")}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
