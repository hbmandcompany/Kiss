import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Gallerie",
};

export default function GalleryPage() {
  return (
    <PageScaffold>
      <div className="border-t border-ironHairline py-16">
        <div className="mx-auto max-w-prose">
          <MonoLabel className="text-ash">ACCROCHAGE</MonoLabel>
          <h1 className="mt-4 font-serif text-[44px] font-normal text-bone">Work from the atelier</h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-bone/85">
            Invite-only releases during private alpha. Full gallery surfaces inside the authenticated
            atelier after admission.
          </p>
        </div>
      </div>
    </PageScaffold>
  );
}
