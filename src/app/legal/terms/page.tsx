import type { Metadata } from "next";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="border-t border-border-bone">
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-20 sm:px-6 lg:max-w-[65ch] lg:px-8">
        <header className="space-y-3">
          <SectionReveal>
            <MonoLabel className="text-mute">Legal</MonoLabel>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-4xl">
              Terms of service
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p className="text-xs font-mono tracking-wide text-mute">
              Last updated · 2026-05-03 · Hated By Many LLC
            </p>
          </SectionReveal>
        </header>

        <SectionReveal className="space-y-6 text-sm leading-relaxed text-mute">
          <p>
            These terms govern your use of the public marketing website at kiss.photography and any related pre-release surfaces operated by Hated By Many LLC, a Wyoming limited liability company (“Hated By Many,” “we,” or “us”). Separate terms apply to the authenticated product subdomain once provisioned.
          </p>
          <h2 className="text-base font-semibold text-bone">Acceptable use</h2>
          <p>
            You agree not to probe, scrape, or stress-test our infrastructure without written authorization. You agree not to misrepresent affiliation with Hated By Many, Kiss.photography, or our hardware and model providers.
          </p>
          <h2 className="text-base font-semibold text-bone">Waitlist submissions</h2>
          <p>
            Submitting an email through the waitlist does not guarantee access. Invitations are issued at our discretion based on capacity, eligibility, and operational readiness. Communications about your status will comply with the privacy notice.
          </p>
          <h2 className="text-base font-semibold text-bone">Intellectual property</h2>
          <p>
            Site copy, visual design, and aggregated technical documentation are owned by Hated By Many or used under license. You receive no license to our trademarks beyond ordinary linking and citation.
          </p>
          <h2 className="text-base font-semibold text-bone">Disclaimer</h2>
          <p>
            Marketing materials describe intended capabilities. They are not performance warranties. The product, when available, will ship with its own service level commitments where contractually agreed.
          </p>
          <h2 className="text-base font-semibold text-bone">Contact</h2>
          <p>
            For legal notices, contact legal through the support mailbox published on this site.
          </p>
        </SectionReveal>
      </div>
    </div>
  );
}
