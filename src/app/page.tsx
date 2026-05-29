import Image from "next/image";
import Link from "next/link";
import { AboutPhotoCollage } from "./components/AboutPhotoCollage";
import { LocalTrustBand } from "./components/LocalTrustBand";
import { ContactTrigger } from "./components/ContactTrigger";
import { MeetOurDogsSection } from "./components/MeetOurDogsSection";
import { ScrollOnHash } from "./components/ScrollOnHash";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div>
      <ScrollOnHash />
      <section
        id="hero"
        className="grid min-h-[100svh] lg:grid-cols-2"
      >
        <div className="section-reveal flex flex-col justify-center bg-[var(--color-dark)] px-4 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <p className="label-caps text-[var(--color-rust)]">Florence · Pee Dee</p>
          <h1 className="heading-display mt-4 text-[var(--color-on-dark)]">
            {siteConfig.heroHeadline}
          </h1>
          <p className="mt-6 max-w-md text-lg normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)]">
            {siteConfig.heroTagline}
          </p>
          <div className="mt-6 flex w-full flex-row gap-2 sm:mt-10 sm:max-w-none sm:items-center sm:gap-4">
            <ContactTrigger className="btn-rust min-h-9 flex-1 px-3 py-2 text-xs tracking-[0.1em] sm:min-h-0 sm:flex-none sm:px-8 sm:py-[0.875rem] sm:text-sm sm:tracking-[0.12em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-on-dark)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]">
              Contact us
            </ContactTrigger>
            <Link
              href="/services"
              className="btn-outline-light min-h-9 flex-1 border px-3 py-2 text-xs tracking-[0.1em] sm:min-h-0 sm:flex-none sm:border-2 sm:px-7 sm:py-3 sm:text-sm sm:tracking-[0.12em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-on-dark)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
            >
              Programs
            </Link>
          </div>
        </div>

        <div className="relative min-h-[52vh] sm:min-h-[45vh] lg:min-h-0">
          <Image
            src={siteConfig.heroImage}
            alt={siteConfig.heroImageAlt}
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[38%_56%]"
          />
        </div>
      </section>

      <LocalTrustBand />

      <section
        id="about"
        className="section-reveal scroll-mt-20 bg-[var(--color-surface)] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="flex flex-col items-center justify-center lg:items-center lg:pr-4">
              <AboutPhotoCollage />
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left">
              <p className="label-caps">Who we are</p>
              <h2 className="heading-section mt-3">{siteConfig.aboutHeading}</h2>
              <p className="mx-auto mt-6 max-w-xl text-base normal-case leading-[1.85] tracking-normal text-[var(--color-muted)] sm:text-lg lg:mx-0">
                {siteConfig.aboutSummary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDoSection />
      <MeetOurDogsSection />
    </div>
  );
}
