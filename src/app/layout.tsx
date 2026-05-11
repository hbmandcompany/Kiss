import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Pro, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-crimson",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const site = "https://kiss.photography";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Kiss Photography - Maison Noire",
    template: "%s - Kiss Photography",
  },
  description:
    "Maison française de reconstruction d'identité photographique. Moteur de classement, pipeline FLUX, accès cohorte — luxe obscur, précision labo.",
  applicationName: "kiss.photography",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site,
    siteName: "kiss.photography",
    title: "kiss.photography — Maison de reconstruction",
    description:
      "Diffusion contrainte, triage par moteur de classement, livraison en six épreuves. Alpha privée.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "kiss.photography" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kiss.photography — Maison Noire",
    description: "Reconstruction d'identité à l'échelle du laboratoire.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${crimson.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-plaster font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-tan focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-pure"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main" className="min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
