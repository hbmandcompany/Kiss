import Link from "next/link";

import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { Badge } from "@/components/ui/Badge";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const tiers = [
  {
    id: "standard",
    name: "STANDARD",
    credits: "500",
    generations: "approximately 80 image generations",
    highlight: false,
    features: [
      "FLUX generation pipeline",
      "6-image deliverable set",
      "basic ranking engine",
      "standard support",
      "30-day asset retention",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    credits: "2,000",
    generations: "approximately 320 image generations",
    highlight: true,
    features: [
      "everything in Standard",
      "priority queue",
      "contextual adapter selection",
      "extended ranking signals",
      "90-day retention",
      "priority support",
    ],
  },
  {
    id: "atelier",
    name: "ATELIER",
    credits: "10,000",
    generations: "approximately 1,600 image generations",
    highlight: false,
    features: [
      "everything in Pro",
      "dedicated GPU allocation",
      "custom LoRA on your image library",
      "named studio contact",
      "indefinite retention",
      "white-glove onboarding",
    ],
  },
] as const;

export function Pricing() {
  return (
    <FullPageArtSection artSrc={frenchArt.pricing.src} artAlt={frenchArt.pricing.alt} overlay="medium">
      <div className="vellum-panel rounded-[2.5rem] border border-stone/50 bg-pure/78 px-8 py-20 backdrop-blur-md lg:px-20">
        <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">
          TARIFICATION · ACCÈS LIMITÉ
        </MonoLabel>
        <h2 className="mt-6 font-serif text-[40px] font-normal leading-tight text-ink lg:text-[48px]">
          Trois niveaux. Admission par cohorte.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`lift-on-hover relative rounded-[2rem] border bg-linen/90 p-8 backdrop-blur-sm ${
                tier.highlight ? "border-tan/55 shadow-card" : "border-stone/45"
              }`}
            >
              {tier.highlight ? (
                <div className="absolute right-4 top-4">
                  <Badge variant="accent" className="tracking-[0.18em] text-tanDark">
                    SELECTED BY MOST
                  </Badge>
                </div>
              ) : null}
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-tanDark">
                {tier.name}
              </p>
              <p className="mt-4 font-serif text-[56px] font-normal leading-none text-ink">{tier.credits}</p>
              <p className="mt-2 font-mono text-[11px] normal-case tracking-normal text-fog">
                {tier.generations}
              </p>
              <div className="my-6 border-t border-stone/40" />
              <ul className="space-y-3 font-body text-[15px] text-ink/85">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-tan">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/waitlist"
                  className="inline-flex rounded-full border border-stone/50 px-6 py-3 font-body text-sm text-ink transition-colors duration-500 hover:border-tan hover:text-tanDark"
                >
                  Réserver une Place
                </Link>
              </div>
            </div>
          ))}
        </div>

        <MonoLabel className="mt-12 block text-center text-[10px] tracking-[0.2em] text-fog">
          PRICING FINALIZES AT GENERAL AVAILABILITY · COHORT 01 OPENS Q3 2026
        </MonoLabel>
      </div>
    </FullPageArtSection>
  );
}
