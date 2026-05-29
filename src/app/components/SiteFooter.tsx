import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="h-1 bg-[var(--color-rust)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-3xl sm:grid sm:grid-cols-2 sm:items-center sm:gap-10 lg:max-w-4xl lg:gap-12">
          <div className="pb-8 sm:pb-0 sm:text-left">
            <p className="font-[family-name:var(--font-display-face)] text-xl uppercase tracking-widest sm:text-2xl">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-sm text-sm normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)]">
              {siteConfig.heroTagline}
            </p>
          </div>

          <div className="border-t border-[var(--color-on-dark)]/15 pt-8 sm:border-0 sm:pt-0 sm:text-right">
            <a
              href={`tel:${phoneDigits}`}
              className="flex min-h-12 w-full items-center justify-between gap-3 rounded-sm border border-[var(--color-on-dark)]/15 bg-[var(--color-dark-elevated)] px-4 py-3 font-[family-name:var(--font-display-face)] text-xl uppercase tracking-wide transition hover:border-[var(--color-rust)]/40 hover:text-[var(--color-rust)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)] sm:inline-flex sm:min-h-0 sm:w-auto sm:border-0 sm:bg-transparent sm:p-0 sm:text-2xl sm:hover:border-transparent"
            >
              {siteConfig.phone}
              <span
                className="font-[family-name:var(--font-sans-body)] text-xs font-semibold normal-case tracking-normal text-[var(--color-rust)] sm:hidden"
                aria-hidden
              >
                Tap to call
              </span>
            </a>
            <p className="mt-3 text-sm normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)] sm:mt-2 sm:ml-auto sm:max-w-xs">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-on-dark)]/10 py-4 text-center text-xs normal-case tracking-normal text-[var(--color-on-dark-muted)]">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
