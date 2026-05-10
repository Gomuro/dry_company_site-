"use client";

import type { JSAnimation } from "animejs";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

import {
  revealHiddenStyle,
  runRevealAnimation,
} from "@/lib/motion/revealPreset";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<JSAnimation | null>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      node.style.opacity = "1";
      node.style.transform = "none";
      node.style.willChange = "auto";
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        animationRef.current?.cancel();
        animationRef.current = runRevealAnimation(node, { delayMs });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      animationRef.current?.cancel();
      animationRef.current = null;
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      style={{
        opacity: revealHiddenStyle.opacity,
        transform: revealHiddenStyle.transform,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
