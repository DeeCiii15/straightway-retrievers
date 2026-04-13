import type { Metadata } from "next";
import Link from "next/link";

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
  },
  {
    name: "Immersion training",
    detail:
      "Structured stay-and-train blocks for dogs that benefit from consistent daily reps and professional handling.",
    bullets: ["Daily training logs", "Go-home lesson included", "Follow-up support window"],
  },
  {
    name: "Gun dog prep",
    detail:
      "From basic steadiness through marking and simple doubles—built for hunting seasons and hunt tests.",
    bullets: ["Shot introduction protocols", "Water and cover work", "Honoring and line manners"],
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
        Programs
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
        Every dog is different. We match the program to the dog—not the other way around. Pricing and availability are confirmed after an initial consult.
      </p>

      <div className="mt-12 space-y-10">
        {programs.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-primary)]">
              {p.name}
            </h2>
            <p className="mt-3 max-w-3xl text-[var(--color-muted)]">{p.detail}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-muted-bg)] p-6 text-center">
        <p className="font-medium text-[var(--color-primary)]">Not sure which fit is right?</p>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          We will help you choose after we meet your dog.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary-fg)] transition hover:bg-[var(--color-primary-hover)]"
        >
          Schedule a consult
        </Link>
      </div>
    </div>
  );
}
