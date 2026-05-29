import type { Metadata } from "next";
import Image from "next/image";
import { ServicesConsultCta } from "./ServicesConsultCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retriever training programs: private lessons, board-and-train options, and gun dog preparation tailored to your dog.",
};

const programs = [
  {
    name: "Private lessons",
    detail:
      "One-on-one sessions at our facility or agreed field locations. Ideal for targeted skills, tune-ups, or new handlers.",
    bullets: ["Custom session plans", "Video notes available on request", "Progress homework each week"],
    image: "/images/training/training_1.jpg",
    imageAlt: "Private retriever training session",
  },
  {
    name: "Immersion training",
    detail:
      "Structured stay-and-train blocks for dogs that benefit from consistent daily reps and professional handling.",
    bullets: ["Daily training logs", "Go-home lesson included", "Follow-up support window"],
    image: "/images/training/training_3.jpg",
    imageAlt: "Immersion training with Labrador retriever",
  },
  {
    name: "Gun dog prep",
    detail:
      "From basic steadiness through marking and simple doubles—built for hunting seasons and hunt tests.",
    bullets: ["Shot introduction protocols", "Water and cover work", "Honoring and line manners"],
    image: "/images/training/training_2.jpg",
    imageAlt: "Gun dog field preparation",
  },
] as const;

export default function ServicesPage() {
  return (
    <div>
      <header className="bg-[var(--color-dark)] px-6 py-20 sm:px-10 sm:py-24 lg:px-10">
        <p className="label-caps text-[var(--color-rust)]">Programs</p>
        <h1 className="heading-display mt-3 text-[var(--color-on-dark)]">Services</h1>
        <p className="mt-6 max-w-2xl text-lg normal-case leading-relaxed tracking-normal text-[var(--color-on-dark-muted)]">
          Every dog is different. We match the program to the dog—not the other way around. Pricing and availability are confirmed after an initial consult.
        </p>
      </header>

      <div className="pb-8 md:pb-16">
        {programs.map((p, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={p.name}
              className="grid border-b border-[var(--color-border)] md:grid-cols-2"
            >
              <div
                className={`relative min-h-[16rem] md:min-h-[22rem] ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image src={p.image} alt={p.imageAlt} fill className="object-cover" sizes="50vw" />
              </div>
              <div
                className={`flex flex-col justify-center bg-[var(--color-surface)] px-6 py-10 sm:px-10 sm:py-14 ${
                  imageFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <h2 className="heading-section text-2xl sm:text-3xl">{p.name}</h2>
                <p className="mt-4 normal-case tracking-normal text-[var(--color-muted)]">{p.detail}</p>
                <ul className="mt-6 space-y-2 border-t border-[var(--color-border)] pt-6 text-sm normal-case tracking-normal text-[var(--color-muted)]">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--color-rust)]" aria-hidden>
                        —
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto max-w-xl px-6 pb-20 text-center">
        <p className="heading-section text-2xl">Not sure which fit?</p>
        <p className="mt-2 normal-case tracking-normal text-[var(--color-muted)]">
          We will help you choose after we meet your dog.
        </p>
        <ServicesConsultCta />
      </div>
    </div>
  );
}
