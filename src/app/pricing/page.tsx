import type { Metadata } from "next";
import Link from "next/link";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent } from "@/components/ui/Card";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Standard",
    credits: "120 credits / month",
    generations: "~30 full reconstructions",
    features: [
      "Single identity lock per seat",
      "Standard ranking profile",
      "Email support · 48h SLA",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    credits: "420 credits / month",
    generations: "~105 full reconstructions",
    features: [
      "Three identity locks with shared policy",
      "Custom weight presets per channel",
      "Expedited support · 12h SLA",
    ],
    highlighted: true,
  },
  {
    name: "Power",
    credits: "1200 credits / month",
    generations: "~300 full reconstructions",
    features: [
      "Org-wide policy graph",
      "Dedicated ranking review UI",
      "Private throughput reservation",
    ],
    highlighted: false,
  },
] as const;

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="border-t border-border-bone">
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-3xl space-y-4">
          <MonoLabel className="text-accent-violet">Allocation only</MonoLabel>
          <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-bone sm:text-5xl md:text-[56px]">
            Tiers before sticker price
          </h1>
          <p className="text-sm leading-relaxed text-mute">
            Credits measure generation and ranking cycles. Dollar amounts are withheld until general availability. Numbers below describe density, not a public quote.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <SectionReveal key={tier.name} delay={0.06 * i}>
              <Card
                className={cn(
                  "relative h-full",
                  tier.highlighted &&
                    "border-accent-oxblood shadow-[0_0_0_1px_rgba(123,15,31,0.45)] lg:-translate-y-1.5",
                )}
              >
                {tier.highlighted ? (
                  <div className="absolute right-4 top-4">
                    <Badge variant="accent">Most selected</Badge>
                  </div>
                ) : null}
                <CardContent className="flex h-full flex-col gap-5 pt-8">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-bone">
                      {tier.name}
                    </h2>
                    <p className="mt-3 font-mono text-xs tracking-wide text-mute">
                      {tier.credits}
                    </p>
                  </div>
                  <p className="text-sm text-bone/90">{tier.generations}</p>
                  <ul className="space-y-2 text-sm text-mute">
                    {tier.features.map((f) => (
                      <li key={f} className="border-l border-border-bone pl-3">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-2 border-t border-border-bone pt-6">
                    <p className="font-mono text-lg text-bone">$XX / mo</p>
                    <Link
                      href="/waitlist"
                      className={cn(buttonVariants({ variant: "secondary", size: "md" }), "inline-flex w-full justify-center")}
                    >
                      Request access
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="max-w-3xl space-y-4 border-t border-border-bone pt-12">
          <h2 className="text-xl font-semibold text-bone">Footnote</h2>
          <p className="text-sm leading-relaxed text-mute">
            Enterprise contracts layer SLAs, retention policy, and optional on-prem routing on top of these baselines. If you are pricing a procurement cycle, use the waitlist and include jurisdiction — Wyoming law, US-hosted defaults, EU routing available under separate agreement.
          </p>
        </SectionReveal>
      </div>
    </div>
  );
}
