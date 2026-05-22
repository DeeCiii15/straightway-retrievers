import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-canvas)] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-20 top-24 size-80 rounded-full bg-[var(--color-accent-soft)]/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-16 size-64 rounded-full bg-[var(--color-muted-bg)] blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base font-medium tracking-wide text-[var(--color-accent)]">What we do</p>
          <h2 className="mt-2 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-tight text-[var(--color-primary)]">
            {siteConfig.mission}
          </h2>
          <div
            className="mt-6 h-px w-28 bg-gradient-to-r from-[var(--color-accent)]/80 to-transparent"
            aria-hidden
          />
        </div>

        <figure className="mt-10 max-w-3xl sm:mt-12 lg:mt-14">
          <blockquote className="border-l-[3px] border-[var(--color-accent)]/70 py-1 pl-6 sm:pl-8">
            <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed text-[var(--color-primary)] sm:text-2xl sm:leading-relaxed">
              {siteConfig.introQuote}
            </p>
          </blockquote>
        </figure>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3 lg:mt-16">
          {siteConfig.trainingPrograms.map((program) => (
            <li
              key={program.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-surface)] shadow-[0_8px_30px_-12px_rgba(30,61,47,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_rgba(30,61,47,0.18)]"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 30vw, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-primary)]">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                  {program.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
