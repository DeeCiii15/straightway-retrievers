import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import { ContactRibbon } from "./components/ContactRibbon";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const display = Merriweather({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sans = Open_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
      <body className="min-h-screen bg-[var(--color-canvas)] text-[var(--foreground)]">
        <main>
          <SiteHeader />
          {children}
        </main>
        <SiteFooter />
        <ContactRibbon />
      </body>
    </html>
  );
}
