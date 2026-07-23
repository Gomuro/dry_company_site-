import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { TRUST_GALLERY_IMAGES } from "@/lib/content/media";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const ALT_KEYS = [
  "image1Alt",
  "image2Alt",
  "image3Alt",
  "image4Alt",
  "image5Alt",
  "image6Alt",
] as const;

export async function TrustGallery() {
  const t = await getTranslations("trustGallery");

  return (
    <Section className="bg-slate-50">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t("intro")}</p>
        </div>
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {TRUST_GALLERY_IMAGES.map((src, index) => (
          <Reveal key={src} delayMs={index * 60}>
            <li className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={t(ALT_KEYS[index])}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
