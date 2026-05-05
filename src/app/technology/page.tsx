import type { Metadata } from "next";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Technology",
};

export default function TechnologyPage() {
  return (
    <div className="border-t border-border-bone">
      <div className="mx-auto max-w-3xl space-y-16 px-4 py-20 sm:px-6 lg:max-w-[65ch] lg:px-8">
        <SectionReveal>
          <div className="space-y-6">
            <MonoLabel className="text-accent-violet">Deep read</MonoLabel>
            <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-bone sm:text-5xl md:text-[56px]">
              Architecture memo
            </h1>
            <p className="text-base leading-relaxed text-mute">
              This page exists for investors, research partners, and buyers who already understand diffusion models and want to know what we actually built around them.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-bone sm:text-2xl">
            Candidate generation
          </h2>
          <p className="text-sm leading-relaxed text-mute">
            FLUX provides the pixel engine. We treat each run as a structured sweep through a constrained latent neighborhood rather than a single “best guess.” Variance is budgeted. Identity drift is capped before ranking ever runs.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-bone sm:text-2xl">
            Identity preservation
          </h2>
          <p className="text-sm leading-relaxed text-mute">
            The embedding is not a soft prompt. It is a contract. Landmarks, micro-texture, and lighting response must remain coherent across the candidate set or the frame is discarded upstream. Pretty pictures that are not you are treated as defects, not accidents.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-bone sm:text-2xl">
            Ranking and selection
          </h2>
          <p className="text-sm leading-relaxed text-mute">
            The composite score is explicit: aesthetic coherence, predicted engagement under calibrated assumptions, identity lock, and diversity across the final basket. Weights are not hidden. They are policy you set once per channel or per launch.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-bone sm:text-2xl">
            Training and compute
          </h2>
          <p className="text-sm leading-relaxed text-mute">
            Training and fine runs execute on Lambda Labs GPU clusters with deterministic job graphs. You do not need to care about our orchestration layer until you ask for private throughput. Then it matters a great deal.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-bone sm:text-2xl">
            Deployment posture
          </h2>
          <p className="text-sm leading-relaxed text-mute">
            Default delivery is off-chain generation with signed URLs and lineage metadata. Optional chain attestations exist for teams that require an external witness. Neither path changes the core claim: reconstructed photography, ranked, identity-bound.
          </p>
        </SectionReveal>
      </div>
    </div>
  );
}
