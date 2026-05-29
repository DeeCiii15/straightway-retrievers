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
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6 lg:max-w-6xl lg:gap-10">
          {/* Text then flexible spacer — mirrors right column so map gaps match */}
          <div className="grid w-full min-w-0 sm:flex-1 sm:grid-cols-[auto_1fr]">
            <div className="text-center sm:translate-x-32 sm:text-right lg:translate-x-40">
              <p className="label-caps max-sm:text-[0.65rem]">Locally rooted</p>
              <p className={`${trustLineClass} max-sm:mt-1.5`}>{siteConfig.familyOwned}</p>
            </div>
            <div className="hidden sm:block" aria-hidden />
          </div>

          <TrustBandIconPanel>
            <PeeDeeRegionIcon variant="onDark" className={iconSizeClass} />
          </TrustBandIconPanel>

          <div className="grid w-full min-w-0 sm:flex-1 sm:grid-cols-[1fr_auto]">
            <div className="hidden sm:block" aria-hidden />
            <div className="text-center sm:text-left">
              <p className="label-caps max-sm:text-[0.65rem]">Service area</p>
              <p className={`${trustLineClass} max-sm:mt-1.5`}>{siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
