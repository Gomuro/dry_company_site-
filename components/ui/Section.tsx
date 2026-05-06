import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
