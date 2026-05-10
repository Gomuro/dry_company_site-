import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export async function WhyUs() {
  const t = await getTranslations("whyUs");

  const points = [
    { title: t("point1Title"), body: t("point1Body") },
    { title: t("point2Title"), body: t("point2Body") },
    { title: t("point3Title"), body: t("point3Body") },
  ];

  return (
    <Section className="bg-slate-900 text-slate-50">
      <Reveal>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("heading")}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {points.map((point, index) => (
          <Reveal key={point.title} delayMs={index * 90}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                {point.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
