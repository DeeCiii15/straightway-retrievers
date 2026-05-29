import { siteConfig } from "@/lib/siteConfig";
import { PeeDeeRegionIcon } from "./PeeDeeRegionIcon";
import { TrustBandIconPanel } from "./TrustBandIconPanel";

/** Desktop (sm+) only */
const trustLineClass =
  "mt-2 font-[family-name:var(--font-display-face)] text-[clamp(0.6875rem,1.9vw,1.0625rem)] font-medium uppercase leading-tight tracking-[0.04em] text-[var(--color-dark)] sm:whitespace-nowrap";

const iconSizeClass = "h-9 w-11 sm:h-11 sm:w-[3.25rem]";

const mobileBannerIconClass = "h-7 w-[2.125rem]";

const mobileBannerLineClass =
  "font-[family-name:var(--font-display-face)] text-[0.625rem] font-medium uppercase leading-none tracking-wide text-[var(--color-dark)]";

/** Mobile banner only — shortened service area line */
const mobileServiceAreaLine = "Florence, SC surrounding";

/**
 * Locally rooted + service area with a compact SC map accent between them.
 */
export function LocalTrustBand() {
  return (
    <section
      className="section-reveal bg-[var(--color-sand)] max-sm:py-3 sm:py-10"
      aria-label="Locally rooted and service area"
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-10">
        {/* Mobile: thin banner — text blocks vertically centered with map */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 border-y border-[var(--color-dark)]/10 px-3 py-2.5 sm:hidden">
          <div className="translate-y-1.5 text-right">
            <p className="label-caps text-[0.6rem] leading-none">Locally rooted</p>
            <p className={`-mt-0.5 ${mobileBannerLineClass} truncate`}>{siteConfig.familyOwned}</p>
          </div>

          <TrustBandIconPanel className="shrink-0 px-1.5 py-1.5">
            <PeeDeeRegionIcon variant="onDark" className={mobileBannerIconClass} />
          </TrustBandIconPanel>

          <div className="translate-y-1.5 text-left">
            <p className="label-caps text-[0.6rem] leading-none">Service area</p>
            <p className={`-mt-0.5 ${mobileBannerLineClass}`}>{mobileServiceAreaLine}</p>
          </div>
        </div>

        {/* Desktop */}
        <div className="mx-auto hidden w-full max-w-4xl px-4 sm:flex sm:items-center sm:gap-6 lg:max-w-6xl lg:gap-10">
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
