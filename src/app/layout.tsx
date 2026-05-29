import type { Metadata } from "next";
import { Oswald, Nunito_Sans } from "next/font/google";
import { Suspense } from "react";
import { ContactModalShell } from "./components/ContactModalShell";
import { ContactRibbon } from "./components/ContactRibbon";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SkipToContent } from "./components/SkipToContent";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const display = Oswald({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Nunito_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://straightwayretrievers.com"),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [{ url: siteConfig.heroImage, alt: siteConfig.heroImageAlt }],
  },
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--color-cream)] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] text-[var(--foreground)] md:pb-0">
        <SkipToContent />
        <Suspense fallback={null}>
          <ContactModalShell>
            <SiteHeader />
            <main id="main-content" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <SiteFooter />
            <ContactRibbon />
          </ContactModalShell>
        </Suspense>
      </body>
    </html>
  );
}
