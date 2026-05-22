"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

type MeetOurDogId = (typeof siteConfig.meetOurDogs)[number]["id"];

export function MeetOurDogsSection() {
  const dogs = siteConfig.meetOurDogs;
  const [activeId, setActiveId] = useState<MeetOurDogId>(dogs[0].id);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeDog = dogs.find((dog) => dog.id === activeId) ?? dogs[0];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }, [activeDog]);

  return (
    <section
      id="our-dogs"
      className="scroll-mt-[5.5rem] border-b border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.12] text-[var(--color-primary)] sm:text-6xl lg:text-[3.25rem]">
            Our Dogs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
            Choose a dog below to watch them train.
          </p>
          <div
            className="mt-6 h-px w-28 bg-gradient-to-r from-[var(--color-accent)]/80 to-transparent"
            aria-hidden
          />
        </div>

        <div className="mt-12 lg:mt-14">
          <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl lg:text-[3rem]">
            Meet {activeDog.name}
          </h3>

          <div className="mt-5 overflow-hidden rounded-2xl bg-[var(--color-primary)] shadow-[0_12px_40px_-16px_rgba(30,61,47,0.35)] sm:mt-6">
            <video
              ref={videoRef}
              key={activeDog.id}
              className="aspect-video max-h-[min(70vh,36rem)] w-full object-cover sm:aspect-[16/9]"
              controls
              playsInline
              preload="metadata"
              poster={activeDog.poster}
              aria-label={`Training video for ${activeDog.name}`}
            >
              <source src={activeDog.video} type="video/mp4" />
            </video>
          </div>

          <div className="relative mx-auto mt-10 max-w-4xl sm:mt-12">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--color-surface)] to-transparent sm:w-14"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--color-surface)] to-transparent sm:w-14"
              aria-hidden
            />

            <ul className="mx-auto flex w-max max-w-full justify-center gap-5 overflow-x-auto px-8 py-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-10">
              {dogs.map((dog) => {
                const isActive = dog.id === activeDog.id;

                return (
                  <li key={dog.id} className="shrink-0 snap-center">
                    <button
                      type="button"
                      onClick={() => setActiveId(dog.id)}
                      aria-pressed={isActive}
                      aria-label={`Watch training video for ${dog.name}`}
                      className={`group block w-[10.5rem] overflow-hidden rounded-2xl text-left transition duration-300 sm:w-[11.5rem] ${
                        isActive
                          ? "scale-[1.03] shadow-[0_14px_32px_-12px_rgba(30,61,47,0.28)] ring-2 ring-[var(--color-accent)]"
                          : "shadow-[0_6px_20px_-10px_rgba(30,61,47,0.15)] ring-1 ring-[var(--color-border)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-12px_rgba(30,61,47,0.22)] hover:ring-[var(--color-accent)]/40"
                      }`}
                    >
                      <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-canvas)]">
                        <Image
                          src={dog.poster}
                          alt={dog.posterAlt}
                          fill
                          className="object-cover object-center transition duration-500 group-hover:scale-105"
                          sizes="184px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/75 via-[var(--color-primary)]/10 to-transparent" />
                        <span className="absolute inset-0 flex items-center justify-center opacity-90 transition group-hover:opacity-100">
                          <span
                            className={`flex items-center justify-center rounded-full bg-[var(--color-surface)]/95 shadow-md transition ${
                              isActive ? "size-11" : "size-9 group-hover:size-10"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 text-[var(--color-primary)]"
                              aria-hidden
                            >
                              <path d="M8 5v14l11-7L8 5z" />
                            </svg>
                          </span>
                        </span>
                        <p className="absolute inset-x-0 bottom-0 px-3 pb-2.5 pt-8 text-center font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-primary-fg)] drop-shadow-sm">
                          Meet {dog.name}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
