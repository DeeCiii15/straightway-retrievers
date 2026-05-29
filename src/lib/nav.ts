export const HEADER_OFFSET = 72;

export function navLinkClass(isActive: boolean): string {
  const base =
    "px-2 py-1.5 font-[family-name:var(--font-display-face)] text-xs uppercase tracking-widest transition sm:px-3 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]";

  return isActive
    ? `${base} text-[var(--color-on-dark)] underline decoration-[var(--color-rust)] decoration-2 underline-offset-[0.35rem]`
    : `${base} text-[var(--color-on-dark-muted)] hover:text-[var(--color-on-dark)]`;
}
