"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { DogVideoPlayer } from "./DogVideoPlayer";
import { siteConfig } from "@/lib/siteConfig";

type MeetOurDogId = (typeof siteConfig.meetOurDogs)[number]["id"];

export function MeetOurDogsSection() {
  const dogs = siteConfig.meetOurDogs;
  const [activeId, setActiveId] = useState<MeetOurDogId>(dogs[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  const activeIndex = dogs.findIndex((d) => d.id === activeId);
  const activeDog = dogs[activeIndex >= 0 ? activeIndex : 0];

  const goTo = useCallback(
    (index: number) => {
      const next = dogs[index];
      if (next) setActiveId(next.id);
    },
    [dogs],
  );

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + dogs.length) % dogs.length);
  }, [activeIndex, dogs.length, goTo]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % dogs.length);
  }, [activeIndex, dogs.length, goTo]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!section.contains(document.activeElement)) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  return (
    <section
      ref={sectionRef}
      id="our-dogs"
      className="section-reveal scroll-mt-20 bg-[var(--color-sand)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="label-caps">In the field</p>
          <h2 className="heading-section mt-3">Meet our dogs</h2>
          <p className="mx-auto mt-4 max-w-lg text-base normal-case tracking-normal text-[var(--color-muted)]">
            Select a dog to watch training footage.
          </p>
        </div>

        <div
          className="mt-10 grid grid-cols-3 justify-items-center gap-3 sm:mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-5"
          role="tablist"
          aria-label="Choose a dog"
        >
          {dogs.map((dog) => {
            const isActive = dog.id === activeDog.id;

            return (
              <button
                key={dog.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`dog-panel-${dog.id}`}
                id={`dog-tab-${dog.id}`}
                onClick={() => setActiveId(dog.id)}
                className={`group w-full max-w-[7.5rem] transition-all duration-300 sm:w-36 ${
                  isActive ? "sm:scale-105" : "sm:scale-100 opacity-85 sm:hover:scale-[1.02] sm:hover:opacity-100"
                } ${isActive ? "opacity-100" : "opacity-85"}`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)] shadow-md ring-2 transition-all ${
                    isActive
                      ? "ring-[var(--color-rust)] shadow-lg"
                      : "ring-[var(--color-dark)]/15 group-hover:ring-[var(--color-dark)]/35"
                  }`}
                >
                  <Image
                    src={dog.poster}
                    alt={dog.posterAlt}
                    fill
                    className="object-cover object-center"
                    sizes="144px"
                  />
                  {!isActive && (
                    <span className="absolute inset-0 flex items-center justify-center bg-[var(--color-dark)]/20 transition group-hover:bg-[var(--color-dark)]/10">
                      <span className="flex size-9 items-center justify-center rounded-full bg-white/95 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-3.5 text-[var(--color-dark)]"
                          aria-hidden
                        >
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </span>
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2.5 text-center font-[family-name:var(--font-display-face)] text-sm uppercase tracking-[0.15em] sm:text-base ${
                    isActive ? "text-[var(--color-rust)]" : "text-[var(--color-dark)]"
                  }`}
                >
                  {dog.name}
                </p>
              </button>
            );
          })}
        </div>

        <div
          id={`dog-panel-${activeDog.id}`}
          role="tabpanel"
          aria-labelledby={`dog-tab-${activeDog.id}`}
          className="mt-10 overflow-hidden bg-[var(--color-dark)] shadow-[0_12px_40px_-12px_rgba(18,26,23,0.35)] ring-1 ring-[var(--color-dark)]/20 sm:mt-12"
        >
          <div className="flex flex-col gap-3 border-b border-[var(--color-on-dark)]/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
            <p
              className="font-[family-name:var(--font-display-face)] text-xl uppercase tracking-wide text-[var(--color-on-dark)] sm:text-2xl"
              aria-live="polite"
            >
              {activeDog.name}
            </p>
            <div className="flex items-center justify-center gap-2 sm:justify-end">
              <button
                type="button"
                onClick={goPrev}
                className="flex size-9 items-center justify-center border border-[var(--color-on-dark)]/25 text-[var(--color-on-dark-muted)] transition hover:border-[var(--color-rust)] hover:bg-[var(--color-rust)] hover:text-[var(--color-on-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)]"
                aria-label="Previous dog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="min-w-[3rem] text-center text-xs uppercase tracking-widest text-[var(--color-on-dark-muted)]">
                {activeIndex + 1} / {dogs.length}
              </span>
              <button
                type="button"
                onClick={goNext}
                className="flex size-9 items-center justify-center border border-[var(--color-on-dark)]/25 text-[var(--color-on-dark-muted)] transition hover:border-[var(--color-rust)] hover:bg-[var(--color-rust)] hover:text-[var(--color-on-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rust)]"
                aria-label="Next dog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <DogVideoPlayer
            key={activeDog.id}
            src={activeDog.video}
            poster={activeDog.poster}
            label={`Training video for ${activeDog.name}`}
          />
        </div>
      </div>
    </section>
  );
}
