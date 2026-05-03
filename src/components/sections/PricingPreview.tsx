"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

const tiers = [
  {
    name: "Standard",
    credits: "120 credits / month",
    generations: "~30 full reconstructions (4 candidates / credit)",
    features: [
      "Single identity lock per seat",
      "Standard ranking profile",
      "Email support · 48h SLA",
      "Signed delivery links",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    credits: "420 credits / month",
    generations: "~105 full reconstructions (4 candidates / credit)",
    features: [
      "Three identity locks with shared policy",
      "Custom weight presets per channel",
      "Expedited support · 12h SLA",
      "Batch export to DAM",
    ],
    highlighted: true,
  },
  {
    name: "Power",
    credits: "1200 credits / month",
    generations: "~300 full reconstructions (4 candidates / credit)",
    features: [
      "Org-wide policy graph",
      "Dedicated ranking review UI",
      "Private throughput reservation",
      "Optional on-prem routing",
    ],
    highlighted: false,
  },
] as const;

export function PricingPreview() {
  return (
    <section className="border-t border-border-bone bg-canvas py-24 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            eyebrow="Allocation"
            title="Credits before retail pricing"
          />
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <SectionReveal key={tier.name} delay={0.07 * i}>
              <Card
                className={cn(
                  "relative flex h-full flex-col transition-[border-color,transform] duration-hover",
                  tier.highlighted &&
                    "border-accent-oxblood shadow-[0_0_0_1px_rgba(123,15,31,0.45)] lg:-translate-y-1.5",
                )}
              >
                {tier.highlighted ? (
                  <div className="absolute right-4 top-4">
                    <Badge variant="accent">Most selected</Badge>
                  </div>
                ) : null}
                <CardContent className="flex flex-1 flex-col gap-6 pt-8">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-[0.16em] text-bone">
                      {tier.name}
                    </h3>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-mute">
                      {tier.credits}
                    </p>
                  </div>
                  <p className="text-sm text-bone/90">{tier.generations}</p>
                  <ul className="space-y-3 text-sm leading-relaxed text-mute">
                    {tier.features.map((f) => (
                      <li key={f} className="border-l border-border-bone pl-3">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-3 border-t border-border-bone pt-6">
                    <p className="font-mono text-lg text-bone">$XX / mo</p>
                    <MotionLink
                      href="/waitlist"
                      className={cn(buttonVariants({ variant: "secondary", size: "md" }), "w-full")}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      Request access
                    </MotionLink>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <motion.p
          className="max-ch text-sm leading-relaxed text-mute"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Dollar amounts finalize at general availability. Current tiers communicate capability density, not a public price sheet.
        </motion.p>
      </div>
    </section>
  );
}
