import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SERVICE_IMAGES } from "@/lib/content/media";

import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export async function SolutionSection() {
  const t = await getTranslations("solution");

  const cards = [
    {
      title: t("cardEmergencyTitle"),
      body: t("cardEmergencyBody"),
      cta: t("cardEmergencyCta"),
      href: "/services/emergency-response" as const,
      image: SERVICE_IMAGES.emergency,
      imageAlt: t("imageEmergencyAlt"),
    },
    {
      title: t("cardDryingTitle"),
      body: t("cardDryingBody"),
      cta: t("cardDryingCta"),
      href: "/services/industrial-drying" as const,
      image: SERVICE_IMAGES.drying,
      imageAlt: t("imageDryingAlt"),
    },
  ];

  return (
    <Section id={t("id")} className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("intro")}</p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {cards.map((card, index) => (
          <Reveal key={card.href} delayMs={index * 90}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={card.image.src}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex w-fit rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
