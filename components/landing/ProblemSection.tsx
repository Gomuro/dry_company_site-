import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export async function ProblemSection() {
  const t = await getTranslations("problem");

  return (
    <Section id={t("id")} className="bg-slate-50">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t("heading")}
        </h2>
      </Reveal>
      <Reveal delayMs={80}>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{t("intro")}</p>
      </Reveal>
      <ul className="mt-10 space-y-4 text-slate-700">
        {(["point1", "point2", "point3"] as const).map((key, index) => (
          <Reveal key={key} delayMs={100 + index * 60}>
            <li className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="mt-0.5 text-cyan-600" aria-hidden>
                •
              </span>
              <span className="text-sm leading-relaxed">{t(key)}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
