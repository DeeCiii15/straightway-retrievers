import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function WhatWeDoSection() {
  return (
    <section className="section-reveal bg-[var(--color-dark)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="label-caps text-[var(--color-rust)]">What we do</p>
          <h2 className="heading-section mt-3 text-balance text-[clamp(1.35rem,4vw,3rem)] text-[var(--color-on-dark)] sm:whitespace-nowrap">
            {siteConfig.mission}
          </h2>
        </div>

        <blockquote className="mt-10 max-w-3xl border-l-4 border-[var(--color-rust)] pl-6 sm:mt-12 sm:pl-8">
          <p className="text-xl normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)] sm:text-2xl">
            &ldquo;{siteConfig.introQuote}&rdquo;
          </p>
        </blockquote>

        <ul className="mt-14 space-y-0 sm:mt-20">
          {siteConfig.trainingPrograms.map((program, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <li
                key={program.title}
                className={`grid border-t border-[var(--color-on-dark)]/15 md:grid-cols-2 ${
                  index === siteConfig.trainingPrograms.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <div
                  className={`group relative min-h-[16rem] overflow-hidden md:min-h-[20rem] ${
                    imageFirst ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 ${
                    imageFirst ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-2xl text-[var(--color-on-dark)] sm:text-3xl">
                    {program.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)]">
                    {program.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/services"
            className="btn-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-on-dark)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
          >
            All programs
          </Link>
        </div>
      </div>
    </section>
  );
}
