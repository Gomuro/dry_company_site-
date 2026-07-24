import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { BrandMark } from "@/components/ui/BrandMark";
import { LocaleSwitcher } from "@/components/landing/LocaleSwitcher";

export async function SiteHeader() {
  const tBrand = await getTranslations("brand");
  const tNav = await getTranslations("nav");
  const tProblem = await getTranslations("problem");
  const tSolution = await getTranslations("solution");
  const tProcess = await getTranslations("process");
  const tContact = await getTranslations("contact");

  const problemId = tProblem("id");
  const solutionId = tSolution("id");
  const processId = tProcess("id");
  const contactId = tContact("id");

  // Detect if we're on a subpage so nav hash links point to home
  const h = await headers();
  const pathname = h.get("x-invoke-path") || h.get("x-pathname") || "/";
  const isSubPage = pathname.includes("/services/");

  const hashPrefix = isSubPage ? "/" : "";

  const navItemClass = "hover:text-cyan-700";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          <BrandMark className="size-9 shrink-0 text-cyan-700" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {tBrand("name")}
          </span>
        </Link>

        <nav
          aria-label={tNav("aria")}
          className="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700 sm:order-none sm:flex-1 sm:justify-end lg:w-auto lg:gap-7"
        >
          <a className={navItemClass} href={`${hashPrefix}#${problemId}`}>
            {tNav("problem")}
          </a>
          <a className={navItemClass} href={`${hashPrefix}#${solutionId}`}>
            {tNav("solution")}
          </a>
          <a className={navItemClass} href={`${hashPrefix}#${processId}`}>
            {tNav("process")}
          </a>
          <LocaleSwitcher />
          <a
            href={`${hashPrefix}#${contactId}`}
            className="rounded-full bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-500"
          >
            {tNav("contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}
