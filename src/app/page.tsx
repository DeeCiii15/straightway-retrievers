import Image from "next/image";
import Link from "next/link";
import { AboutPhotoCollage } from "./components/AboutPhotoCollage";
import { MeetOurDogsSection } from "./components/MeetOurDogsSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="relative min-h-[min(88vh,52rem)] w-full overflow-hidden border-b border-[var(--color-border)]"
      >
        <Image
          src={siteConfig.heroImage}
          alt={siteConfig.heroImageAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[38%_56%] sm:object-[40%_58%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/92 via-[var(--color-primary)]/75 to-[var(--color-primary)]/35 sm:via-[var(--color-primary)]/65 sm:to-[var(--color-primary)]/25"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(88vh,52rem)] max-w-5xl flex-col justify-center px-4 py-20 text-[var(--color-primary-fg)] sm:px-6 sm:py-24">
          <div className="w-full max-w-xl -translate-x-3 -translate-y-12 sm:-translate-x-5 sm:-translate-y-16 lg:-translate-x-6 lg:-translate-y-20">
            <h1 className="max-w-lg text-balance font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:whitespace-nowrap">
              {siteConfig.heroHeadline}
            </h1>
            <div
              className="mt-5 h-px w-20 bg-gradient-to-r from-[var(--color-accent)] to-transparent"
              aria-hidden
            />
            <p className="mt-6 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(1rem,2.8vw,1.75rem)] font-medium leading-snug text-[var(--color-primary-fg-muted)] drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
              {siteConfig.heroTagline}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-accent-soft)] sm:mt-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative scroll-mt-[5.5rem] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-canvas)] py-20 sm:py-28"
      >
        <div
          className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-[var(--color-accent-soft)]/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-8 size-56 rounded-full bg-[var(--color-muted-bg)] blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="text-base font-medium tracking-wide text-[var(--color-accent)]">
              Who We are
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.12] text-[var(--color-primary)] sm:text-6xl lg:text-[3.25rem]">
              {siteConfig.aboutHeading}
            </h2>
            <div
              className="mt-6 h-px w-28 bg-gradient-to-r from-[var(--color-accent)]/80 to-transparent"
              aria-hidden
            />
          </div>

          <div className="mt-12 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
            <figure className="w-full min-w-0 lg:w-[48%] lg:shrink-0 xl:w-[46%]">
              <AboutPhotoCollage />
            </figure>

            <div className="relative flex-1 lg:pl-2 xl:pl-6">
              <div
                className="pointer-events-none absolute -left-2 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[var(--color-accent)]/50 via-[var(--color-border)] to-transparent lg:block"
                aria-hidden
              />
              <p className="text-lg leading-[1.85] text-[var(--color-muted)] sm:text-xl sm:leading-[1.85] lg:pl-8">
                {siteConfig.aboutSummary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-primary)] py-10 sm:py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, var(--color-accent-soft), transparent 45%), radial-gradient(circle at 85% 50%, rgba(255,255,255,0.08), transparent 40%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            <div className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5 shadow-sm backdrop-blur-sm sm:p-6">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent-soft)]"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9.5 12 4l9 5.5M5 10v8.5h14V10M9 21v-6h6v6"
                  />
                </svg>
              </span>
              <div className="text-[var(--color-primary-fg)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
                  Locally rooted
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug sm:text-2xl">
                  {siteConfig.familyOwned}
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5 shadow-sm backdrop-blur-sm sm:p-6">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent-soft)]"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div className="text-[var(--color-primary-fg)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
                  Service area
                </p>
                <p className="mt-1 text-base leading-snug text-[var(--color-primary-fg-muted)] sm:text-lg">
                  {siteConfig.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDoSection />
      <MeetOurDogsSection />
    </div>
  );
}
