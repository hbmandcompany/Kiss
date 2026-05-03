import { SectionReveal } from "@/components/motion/SectionReveal";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    n: "01",
    title: "Upload",
    body: "Ingestion normalizes color profiles, pose metadata, and lighting cues. Identity is embedded once and frozen as a hard constraint for every downstream candidate.",
  },
  {
    n: "02",
    title: "Generate",
    body: "FLUX emits 16–32 photoreal candidates per pass. Each is a full frame, not a patch edit. The spread is deliberate variance, not random noise.",
  },
  {
    n: "03",
    title: "Rank",
    body: "A composite score orders outputs for aesthetic coherence, predicted engagement, identity lock-in, and pairwise diversity. You rank what matters; the model enforces the guardrails.",
  },
  {
    n: "04",
    title: "Deploy",
    body: "You receive a ranked set ready for profiles, decks, and launch surfaces. Outputs ship with lineage metadata so teams know what was generated versus archived.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="border-t border-border-bone bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader eyebrow="Pipeline" title="How it works" />
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <SectionReveal key={step.n} delay={0.06 * i}>
              <Card className="group h-full transition-[border-color,box-shadow] duration-hover hover:border-border-emphasis hover:shadow-inner-glow">
                <CardContent className="space-y-4 pt-6">
                  <p className="font-mono text-3xl font-semibold text-accent-violet">
                    {step.n}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mute">{step.body}</p>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
