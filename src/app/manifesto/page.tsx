import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Manifeste",
};

function Divider() {
  return <div className="my-12 h-px w-full bg-ironHairline" aria-hidden />;
}

export default function ManifestoPage() {
  return (
    <PageScaffold>
      <article className="border-t border-ironHairline py-16">
        <div className="mx-auto max-w-prose">
          <MonoLabel className="text-ash">DOCUMENT FONDATEUR</MonoLabel>
          <h1 className="mt-6 font-serif text-[44px] font-normal leading-tight text-bone lg:text-[56px]">
            La maison et le moteur
          </h1>
          <p className="mt-8 font-body text-xl leading-relaxed text-bone/85">
            Kiss.photography treats portraiture as an operational surface. The same image must read
            correctly in a casting PDF, a dating grid, and a print proof. That requires more than a
            filter — it requires a system that can propose, constrain, and rank.
          </p>

          <Divider />

          <h2 className="font-serif text-3xl font-normal text-bone">Rendering versus decision</h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-bone/85">
            Diffusion answers the question of what is plausible. The ranking engine answers what is
            defensible. The two are separated on purpose: one can be swapped as models improve; the
            other accumulates your editorial judgment.
          </p>

          <Divider />

          <h2 className="font-serif text-3xl font-normal text-bone">Cohort discipline</h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-bone/85">
            We admit slowly. Each cohort tightens latency, identity stability, and calibration before
            the next window opens. The waitlist is not marketing — it is capacity planning.
          </p>
        </div>
      </article>
    </PageScaffold>
  );
}
