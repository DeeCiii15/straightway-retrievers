import { siteConfig } from "@/lib/siteConfig";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-primary-fg)]">
      <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <p className="font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
          {siteConfig.name}
        </p>
        <p className="mx-auto mt-2 text-sm tracking-wide text-[var(--color-primary-fg-muted)] sm:text-base">
          {siteConfig.heroTagline}
        </p>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[var(--color-primary-fg-muted)]">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
