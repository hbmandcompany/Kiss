import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Tarification",
};

export default function PricingPage() {
  return (
    <PageScaffold>
      <Pricing />
    </PageScaffold>
  );
}
