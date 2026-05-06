import Link from "next/link";

import { brand, navLinks } from "@/lib/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="text-lg font-semibold tracking-tight text-slate-900">
          {brand.name}
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cyan-700">
              {link.label}
            </Link>
          ))}
          <Link href="#contacto" className="rounded-full bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-500">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
