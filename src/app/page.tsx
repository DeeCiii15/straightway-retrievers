import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-primary-fg)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--color-accent-soft), transparent 45%), radial-gradient(circle at 80% 0%, #fff, transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-fg-muted)]">
            Retriever training
          </p>
          <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Clear standards. Calm dogs. Confident handlers.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-primary-fg-muted)]">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-accent-soft)]"
            >
              Book a consult
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View programs
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
          What we focus on
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
          Training that respects the dog—steady progress, fair expectations, and skills that hold up in the field and at home.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Foundations",
              body: "Leash manners, place, recall, and crate routines that make advanced work possible.",
            },
            {
              title: "Steadiness & marks",
              body: "Line manners, patience at the line, marking fundamentals, and controlled retrieves.",
            },
            {
              title: "Handler coaching",
              body: "You learn timing, body language, and how to maintain standards between sessions.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-primary)]">
              Ready to get on the same page as your dog?
            </h2>
            <p className="mt-2 max-w-xl text-[var(--color-muted)]">
              Tell us about your dog, your goals, and your timeline—we will recommend a path forward.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-fg)] transition hover:bg-[var(--color-primary-hover)]"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
