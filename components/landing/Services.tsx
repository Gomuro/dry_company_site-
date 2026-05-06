import Image from "next/image";

import { SERVICE_IMAGES } from "@/lib/content/media";
import { servicesContent } from "@/lib/content/site";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section id={servicesContent.id} className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {servicesContent.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{servicesContent.intro}</p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {servicesContent.items.map((item, index) => {
          const img = SERVICE_IMAGES[index];
          return (
            <Reveal key={item.title} delayMs={index * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
