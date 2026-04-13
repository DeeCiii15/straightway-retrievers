import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}—our training philosophy and what to expect when you train with us.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
        About {siteConfig.name}
      </h1>
      <div className="mt-8 max-w-none space-y-5 text-base leading-relaxed text-[var(--color-muted)] [&_strong]:font-semibold [&_strong]:text-[var(--color-primary)]">
        <p>
          We train retrievers for real life: quiet homes, safe neighborhoods, and seasons afield. That means teaching
          dogs how to think under pressure—not just how to perform tricks for treats.
        </p>
        <p>
          <strong>Our approach</strong> pairs fair corrections with generous clarity. Dogs learn what “right” feels like
          before we ask for precision. Handlers learn how to maintain standards without nagging or nagging without
          standards.
        </p>
        <p>
          <strong>What to expect</strong> is honesty about timelines, workload, and what your dog needs next. We will
          tell you when to push, when to rest, and when a different program is the kinder choice.
        </p>
        <p>
          Replace this section with your bio, credentials, titles, and photos when you are ready—the site is yours to
          grow into.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-10 inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-accent-soft)]"
      >
        Train with us
      </Link>
    </div>
  );
}
