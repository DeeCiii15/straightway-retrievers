import { siteConfig } from "@/lib/siteConfig";
import { PeeDeeRegionIcon } from "./PeeDeeRegionIcon";
import { TrustBandIconPanel } from "./TrustBandIconPanel";

const trustLineClass =
  "mt-2 font-[family-name:var(--font-display-face)] text-[clamp(0.6875rem,1.9vw,1.0625rem)] font-medium uppercase leading-tight tracking-[0.04em] text-[var(--color-dark)] max-sm:text-balance sm:whitespace-nowrap";

const iconSizeClass = "h-9 w-11 sm:h-11 sm:w-[3.25rem]";

/**
 * Locally rooted + service area with a compact SC map accent between them.
 */
export function LocalTrustBand() {
  return (
    <section
      className="section-reveal bg-[var(--color-sand)] py-8 sm:py-10"
      aria-label="Locally rooted and service area"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Mobile: stacked copy left, map right */}
        <div className="mx-auto flex w-full max-w-md items-center gap-5 sm:hidden">
          <div className="flex min-w-0 flex-1 flex-col gap-0">
            <div className="border-b border-[var(--color-dark)]/12 pb-4">
              <p className="label-caps">Locally rooted</p>
              <p className="mt-1.5 font-[family-name:var(--font-display-face)] text-base font-medium uppercase leading-snug tracking-wide text-[var(--color-dark)]">
                {siteConfig.familyOwned}
              </p>
            </div>
            <div className="pt-4">
              <p className="label-caps">Service area</p>
              <p className="mt-1.5 text-sm normal-case leading-relaxed tracking-normal text-[var(--color-muted)]">
                {siteConfig.serviceArea}
              </p>
            </div>
          </div>
          <TrustBandIconPanel className="shrink-0">
            <PeeDeeRegionIcon variant="onDark" className="h-10 w-12" />
          </TrustBandIconPanel>
        </div>

        {/* Desktop */}
        <div className="mx-auto hidden w-full max-w-4xl sm:flex sm:items-center sm:gap-6 lg:max-w-6xl lg:gap-10">
          <div className="grid min-w-0 sm:flex-1 sm:grid-cols-[auto_1fr]">
            <div className="text-right sm:translate-x-32 lg:translate-x-40">
              <p className="label-caps">Locally rooted</p>
              <p className={`${trustLineClass} mt-2`}>{siteConfig.familyOwned}</p>
            </div>
            <div aria-hidden />
          </div>

          <TrustBandIconPanel>
            <PeeDeeRegionIcon variant="onDark" className={iconSizeClass} />
          </TrustBandIconPanel>

          <div className="grid min-w-0 sm:flex-1 sm:grid-cols-[1fr_auto]">
            <div aria-hidden />
            <div className="text-left">
              <p className="label-caps">Service area</p>
              <p className={`${trustLineClass} mt-2`}>{siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
