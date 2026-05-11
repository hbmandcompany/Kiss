import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Documentation",
};

function Divider() {
  return <div className="my-12 h-px w-full bg-ironHairline" aria-hidden />;
}

export default function TechnologyPage() {
  return (
    <PageScaffold>
      <div className="border-t border-ironHairline">
        <div className="mx-auto max-w-prose space-y-4 py-16">
          <MonoLabel className="text-ash">DEEP READ</MonoLabel>
          <h1 className="mt-4 font-serif text-[40px] font-normal leading-tight text-bone lg:text-[48px]">
            Architecture memo
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-bone/85">
            This page exists for investors, research partners, and buyers who already understand
            diffusion models and want to know what we built around them.
          </p>

          <Divider />

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-bone">Candidate generation</h2>
            <p className="font-body text-base leading-relaxed text-bone/85">
              FLUX provides the pixel engine. Each run is a structured sweep through a constrained
              latent neighborhood rather than a single guess. Variance is budgeted. Identity drift is
              capped before ranking runs.
            </p>
          </section>

          <Divider />

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-bone">Identity preservation</h2>
            <p className="font-body text-base leading-relaxed text-bone/85">
              The embedding is a contract, not a soft prompt. Landmarks, micro-texture, and lighting
              response must remain coherent across the candidate set or the frame is discarded
              upstream.
            </p>
          </section>

          <Divider />

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-bone">Ranking and selection</h2>
            <p className="font-body text-base leading-relaxed text-bone/85">
              The composite score is explicit: aesthetic coherence, predicted engagement under
              calibrated assumptions, identity lock, and diversity across the final basket. Weights
              encode policy you set per channel or per launch.
            </p>
          </section>

          <Divider />

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-bone">Training and compute</h2>
            <p className="font-body text-base leading-relaxed text-bone/85">
              Training and fine runs execute on Lambda Labs H100 clusters with deterministic job
              graphs. Private throughput routing is available when latency and custody requirements
              demand it.
            </p>
          </section>

          <Divider />

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-bone">Deployment posture</h2>
            <p className="font-body text-base leading-relaxed text-bone/85">
              Default delivery is off-chain generation with signed URLs and lineage metadata. Optional
              chain attestations exist for teams that require an external witness. Neither path
              changes the core claim: reconstructed photography, ranked, identity-bound.
            </p>
          </section>
        </div>
      </div>
    </PageScaffold>
  );
}
