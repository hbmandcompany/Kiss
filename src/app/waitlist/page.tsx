import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export const metadata: Metadata = {
  title: "Collaboration",
};

export default function WaitlistPage() {
  return (
    <PageScaffold>
      <WaitlistCTA />
    </PageScaffold>
  );
}
