import { siteConfig } from "@/lib/siteConfig";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-primary-fg)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-md text-sm text-[var(--color-primary-fg-muted)]">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-[var(--color-primary-fg-muted)]">
          <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <a className="hover:text-white" href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>
            {siteConfig.phone}
          </a>
          <p>{siteConfig.location}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[var(--color-primary-fg-muted)]">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
