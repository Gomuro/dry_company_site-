import { getTranslations } from "next-intl/server";

import { SocialLinks } from "@/components/landing/SocialLinks";

export async function SiteFooter() {
  const year = new Date().getFullYear();
  const tFooter = await getTranslations("footer");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>{tFooter("line1", { year })}</p>
          <SocialLinks className="text-slate-600" />
        </div>
        <p className="text-xs text-slate-500">{tFooter("line2")}</p>
      </div>
    </footer>
  );
}
