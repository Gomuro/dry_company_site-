import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export async function ProcessSection() {
  const t = await getTranslations("process");

  const steps = [
    { title: t("step1Title"), body: t("step1Body") },
    { title: t("step2Title"), body: t("step2Body") },
    { title: t("step3Title"), body: t("step3Body") },
    { title: t("step4Title"), body: t("step4Body") },
    { title: t("step5Title"), body: t("step5Body") },
  ];

  return (
    <Section id={t("id")} className="bg-slate-50">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("intro")}</p>
        </div>
      </Reveal>

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal key={step.title} delayMs={index * 70}>
            <li className="relative flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
