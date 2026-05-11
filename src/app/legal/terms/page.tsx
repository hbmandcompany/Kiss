import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <PageScaffold>
      <div className="border-t border-ironHairline">
        <div className="mx-auto max-w-prose space-y-10 py-16">
          <header className="space-y-3">
            <MonoLabel className="text-ash">LEGAL</MonoLabel>
            <h1 className="font-serif text-4xl font-normal leading-tight text-bone sm:text-5xl">
              Terms of service
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
              Last updated · 2026-05-03 · Hated By Many LLC
            </p>
          </header>

          <div className="space-y-6 font-body text-sm leading-relaxed text-bone/85">
            <p>
              These terms govern your use of the public marketing website at kiss.photography and
              any related pre-release surfaces operated by Hated By Many LLC, a Delaware limited
              liability company (&quot;Hated By Many,&quot; &quot;we,&quot; or &quot;us&quot;).
              Separate terms apply to the authenticated product subdomain once provisioned.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Acceptable use</h2>
            <p>
              You agree not to probe, scrape, or stress-test our infrastructure without written
              authorization. You agree not to misrepresent affiliation with Hated By Many,
              kiss.photography, or our hardware and model providers.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Waitlist submissions</h2>
            <p>
              Submitting an email through the waitlist does not guarantee access. Invitations are
              issued at our discretion based on capacity, eligibility, and operational readiness.
              Communications about your status will comply with the privacy notice.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Intellectual property</h2>
            <p>
              Site copy, visual design, and aggregated technical documentation are owned by Hated By
              Many or used under license. You receive no license to our trademarks beyond ordinary
              linking and citation.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Disclaimer</h2>
            <p>
              Marketing materials describe intended capabilities. They are not performance warranties.
              The product, when available, will ship with its own service level commitments where
              contractually agreed.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Contact</h2>
            <p>For legal notices, contact legal through the support mailbox published on this site.</p>
          </div>
        </div>
      </div>
    </PageScaffold>
  );
}
