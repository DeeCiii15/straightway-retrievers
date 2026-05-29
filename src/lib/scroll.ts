export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

export function scrollToElement(
  element: HTMLElement,
  offset = 0,
): void {
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: scrollBehavior() });
}
