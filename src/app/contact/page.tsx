import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} to book a consult or ask about availability.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)]">
        Reach out with your dog&apos;s age, breed, and what you would like to accomplish. We typically reply within one
        business day.
      </p>

      <dl className="mt-10 space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Email</dt>
          <dd className="mt-1">
            <a
              className="text-lg font-medium text-[var(--color-primary)] underline-offset-4 hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Phone</dt>
          <dd className="mt-1">
            <a
              className="text-lg font-medium text-[var(--color-primary)] underline-offset-4 hover:underline"
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            >
              {siteConfig.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Location</dt>
          <dd className="mt-1 text-lg text-[var(--color-primary)]">{siteConfig.location}</dd>
        </div>
      </dl>

      <p className="mt-8 text-sm text-[var(--color-muted)]">
        Update placeholder contact details in{" "}
        <code className="rounded bg-[var(--color-muted-bg)] px-1.5 py-0.5 text-xs">src/lib/siteConfig.ts</code>.
      </p>
    </div>
  );
}
