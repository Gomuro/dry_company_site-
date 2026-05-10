import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Link as LocalizedLink } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan-600 text-white shadow hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  ghost:
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
};

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  );
}

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  type,
  ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          className={cls}
          rel="noopener noreferrer"
          target={
            href.startsWith("http://") || href.startsWith("https://")
              ? "_blank"
              : undefined
          }
        >
          {children}
        </a>
      );
    }

    return (
      <LocalizedLink href={href as "/" | "/services/emergency-response" | "/services/industrial-drying"} className={cls}>
        {children}
      </LocalizedLink>
    );
  }

  return (
    <button type={type ?? "button"} className={cls} {...rest}>
      {children}
    </button>
  );
}
