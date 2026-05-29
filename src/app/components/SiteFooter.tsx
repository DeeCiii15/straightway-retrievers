import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="h-1 bg-[var(--color-rust)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:grid sm:grid-cols-2 sm:items-center sm:gap-10 lg:max-w-4xl lg:gap-12">
          <div className="text-center sm:text-left">
            <p className="font-[family-name:var(--font-display-face)] text-xl uppercase tracking-widest sm:text-2xl">
              {siteConfig.name}
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)] sm:mx-0">
              {siteConfig.heroTagline}
            </p>
          </div>

          <div className="text-center sm:text-right">
            <a
              href={`tel:${phoneDigits}`}
              className="inline-block rounded-sm font-[family-name:var(--font-display-face)] text-xl uppercase tracking-wide transition hover:text-[var(--color-rust)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)] sm:text-2xl"
            >
              {siteConfig.phone}
            </a>
            <p className="mx-auto mt-2 max-w-sm text-sm normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)] sm:ml-auto sm:mr-0">
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
