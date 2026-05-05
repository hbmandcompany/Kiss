"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import * as React from "react";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { rankingSignals } from "@/lib/constants";
import { cn } from "@/lib/utils";

const terms = [
  { id: "aesthetic", symbol: "w₁·Aesthetic", label: "Aesthetic term" },
  { id: "engagement", symbol: "w₂·Engagement", label: "Engagement term" },
  { id: "identity", symbol: "w₃·Identity", label: "Identity term" },
  { id: "diversity", symbol: "w₄·Diversity", label: "Diversity term" },
] as const;

export function RankingEngine() {
  const [open, setOpen] = React.useState<string | null>(null);
  const active = rankingSignals.find((s) => s.id === open);

  return (
    <section className="border-t border-border-bone bg-surface/35 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            eyebrow="Ranking"
            title="Composite score, explicit weights"
          />
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-6">
          <Dialog.Root
            open={open !== null}
            onOpenChange={(next) => {
              if (!next) setOpen(null);
            }}
          >
            <p className="break-words font-mono text-lg leading-relaxed text-bone sm:text-2xl md:text-3xl">
              <span className="text-mute">R = </span>
              {terms.map((t, idx) => (
                <React.Fragment key={t.id}>
                  {idx > 0 ? <span className="text-mute"> + </span> : null}
                  <button
                    type="button"
                    onClick={() => setOpen(t.id)}
                    className={cn(
                      "inline-flex items-baseline rounded-sm px-1 font-mono text-accent-crimson underline decoration-border-emphasis decoration-1 underline-offset-[6px] transition-colors duration-hover hover:text-bone hover:decoration-accent-oxblood focus-visible:outline-none",
                    )}
                    aria-label={`Open details for ${t.label}`}
                  >
                    {t.symbol}
                  </button>
                </React.Fragment>
              ))}
            </p>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[100] bg-canvas/80 backdrop-blur-sm" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[min(520px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-border-emphasis bg-surface p-6 shadow-inner-glow-strong">
                <Dialog.Title className="font-mono text-xs tracking-wide text-mute">
                  Signal detail
                </Dialog.Title>
                <Dialog.Description className="mt-4 space-y-3 text-sm leading-relaxed text-bone">
                  {active ? (
                    <>
                      <span className="font-mono text-accent-violet">{active.sub}</span>{" "}
                      <span className="font-semibold text-bone">{active.label}</span>
                      <p className="text-mute">{active.body}</p>
                    </>
                  ) : null}
                </Dialog.Description>
                <div className="mt-6 flex justify-end">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="rounded-sm border border-border-bone px-4 py-2 font-mono text-[11px] tracking-wide text-bone transition-colors duration-hover hover:border-accent-oxblood"
                    >
                      Close
                    </button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rankingSignals.map((signal, i) => (
            <SectionReveal key={signal.id} delay={0.08 * i}>
              <Card variant="elevated" className="h-full">
                <CardContent className="space-y-3 pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm text-accent-violet">{signal.sub}</span>
                    <span className="text-lg font-semibold text-bone">{signal.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-mute">{signal.body}</p>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <motion.p
          className="max-ch font-mono text-xs text-mute"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Weights are not magic. They encode which environments you plan to enter and which failure modes you refuse to tolerate.
        </motion.p>
      </div>
    </section>
  );
}
