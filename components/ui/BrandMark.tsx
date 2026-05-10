import type { SVGProps } from "react";

/** House outline + water drop + a single flowing wave — matches the DRY brand logo. */
export function BrandMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* House outline: left wall up, left roof slope to peak, right slope into chimney,
          chimney up/over/down, rest of right slope, right wall down. No bottom edge —
          the wave below stands in for the ground. */}
      <path
        d="M22 66 V38 L50 16 L60 24 V19 H68 V30 L78 38 V66"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Centered water drop (filled) */}
      <path
        d="M50 36 C56 44 62 50 62 56 A12 12 0 0 1 38 56 C38 50 44 44 50 36 Z"
        fill="currentColor"
      />

      {/* Single flowing wave that extends past the house on both sides */}
      <path
        d="M6 76 C20 66 34 86 50 76 S80 66 94 76"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
