import { animate, type JSAnimation } from "animejs";

export const REVEAL_DURATION_MS = 760;
export const REVEAL_TRANSLATE_PX = 22;

/** Inline styles for SSR + first paint (must match animation start keyframes). */
export const revealHiddenStyle = {
  opacity: 0,
  transform: `translateY(${REVEAL_TRANSLATE_PX}px)`,
} as const;

export type RunRevealOptions = {
  delayMs: number;
};

/**
 * Scroll-reveal preset: opacity + vertical slide with smooth ease-out.
 * Returns JSAnimation so callers can cancel on unmount.
 */
export function runRevealAnimation(
  target: HTMLElement,
  options: RunRevealOptions,
): JSAnimation {
  return animate(target, {
    opacity: [0, 1],
    y: [REVEAL_TRANSLATE_PX, 0],
    duration: REVEAL_DURATION_MS,
    delay: options.delayMs,
    ease: "outCubic",
    autoplay: true,
  });
}
