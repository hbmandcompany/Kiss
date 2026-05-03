import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const site = "https://kiss.photography";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Kiss.photography",
    template: "%s — Kiss.photography",
  },
  description:
    "Kiss.photography is an AI system for photorealistic identity reconstruction and ranked output selection — built for the surfaces where people are evaluated, not edited.",
  applicationName: "Kiss.photography",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site,
    siteName: "Kiss.photography",
    title: "Kiss.photography — Identity reconstruction / ranked photography",
    description:
      "AI-driven photorealistic identity reconstruction with explicit ranking, identity preservation, and deployment-ready outputs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kiss.photography wordmark on a dark canvas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiss.photography — Identity reconstruction / ranked photography",
    description:
      "AI-driven photorealistic identity reconstruction with explicit ranking and identity preservation.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-dvh bg-canvas font-sans text-bone antialiased`}
      >
        <NoiseOverlay />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
