import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Atelier",
};

export default function AtelierPage() {
  return (
    <PageScaffold>
      <div className="border-t border-ironHairline py-16">
        <div className="mx-auto max-w-prose">
          <MonoLabel className="text-ash">ATELIER</MonoLabel>
          <h1 className="mt-4 font-serif text-[44px] font-normal text-bone">Studio access</h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-bone/85">
            The working atelier lives behind authentication. This route documents posture and process;
            execution requires cohort admission.
          </p>
        </div>
      </div>
    </PageScaffold>
  );
}
