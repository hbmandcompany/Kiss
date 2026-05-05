import type { Metadata } from "next";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="border-t border-border-bone">
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-20 sm:px-6 lg:max-w-[65ch] lg:px-8">
        <header className="space-y-3">
          <SectionReveal>
            <MonoLabel className="text-mute">Legal</MonoLabel>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-4xl">
              Privacy policy
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
            Hated By Many LLC (“Hated By Many,” “we,” or “us”) processes limited personal data through kiss.photography marketing surfaces. This notice describes those practices at a summary level. The product environment will publish a supplemental data processing addendum where required.
          </p>
          <h2 className="text-base font-semibold text-bone">What we collect</h2>
          <p>
            When you submit the waitlist form, we collect the email address you provide and basic request metadata such as user agent and timestamp for abuse prevention. We do not intentionally collect sensitive categories through the marketing site.
          </p>
          <h2 className="text-base font-semibold text-bone">How we use data</h2>
          <p>
            Waitlist emails are used to send invitation-related messages and operational notices. We do not sell personal data. We do not run behaviorally targeted advertising on this domain.
          </p>
          <h2 className="text-base font-semibold text-bone">Retention</h2>
          <p>
            Waitlist records are retained only as long as operations require, typically through the relevant launch window plus a narrow archival window for legal compliance. You may request deletion subject to constraints imposed by law or active contracts.
          </p>
          <h2 className="text-base font-semibold text-bone">Processors</h2>
          <p>
            Infrastructure providers necessary to operate the site — including hosting, transactional email, and security monitoring — may process data under agreement. Exact subprocessors are listed in enterprise contracts when procurement applies.
          </p>
          <h2 className="text-base font-semibold text-bone">Your rights</h2>
          <p>
            Depending on jurisdiction, you may have rights of access, correction, deletion, or objection. Requests should originate from the email on file and be sent to privacy through the support mailbox published on this site.
          </p>
        </SectionReveal>
      </div>
    </div>
  );
}
