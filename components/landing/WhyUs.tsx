import { whyUsContent } from "@/lib/content/site";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function WhyUs() {
  return (
    <Section className="bg-slate-900 text-slate-50">
      <Reveal>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {whyUsContent.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {whyUsContent.points.map((point, index) => (
          <Reveal key={point.title} delayMs={index * 90}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
