import type { Metadata } from "next";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Manifesto",
};

export default function ManifestoPage() {
  return (
    <div className="border-t border-border-bone">
      <article className="mx-auto max-w-3xl space-y-12 px-4 py-20 sm:px-6 lg:max-w-[65ch] lg:px-8">
        <header className="space-y-4">
          <SectionReveal>
            <MonoLabel className="text-accent-oxblood">Hated By Many LLC</MonoLabel>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-bone sm:text-5xl md:text-[56px]">
              Founding thesis
            </h1>
          </SectionReveal>
        </header>

        <SectionReveal delay={0.08} className="space-y-6 text-sm leading-relaxed text-mute">
          <p>
            Public images are not memories. They are bets. Every profile frame, press still, and launch photo is a prediction about which version of a person the world will accept as real.
          </p>
          <p>
            Classic retouching assumes there is a “true” capture hiding in a bad one. We do not operate on that assumption. We assume there are many plausible captures that never happened because the shutter, the light, and the room failed to agree.
          </p>
          <p>
            Kiss.photography generates that missing stack. It ranks against environments where those bets are cashed — hiring panels, investor meetings, nightlife optics, publication crops. The output is not a moral claim about beauty. It is a forecast about performance.
          </p>
          <p>
            We are uncomfortable with vague “AI photo” language. If you cannot point to the backbone, the constraint layer, the ranking function, and the deployment path, you do not have a product. You have a filter.
          </p>
          <p className="border-l border-border-emphasis pl-4 text-bone/90">
            We are not in the business of making people look better. We are in the business of predicting which version of a person performs best in the environments where they will be evaluated.
          </p>
          <p>
            If that sentence reads cold, good. Precision is colder than persuasion. We would rather lose a sale than lie about what the system optimizes.
          </p>
        </SectionReveal>
      </article>
    </div>
  );
}
