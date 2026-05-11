import type { Metadata } from "next";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <PageScaffold>
      <div className="border-t border-ironHairline">
        <div className="mx-auto max-w-prose space-y-10 py-16">
          <header className="space-y-3">
            <MonoLabel className="text-ash">LEGAL</MonoLabel>
            <h1 className="font-serif text-4xl font-normal leading-tight text-bone sm:text-5xl">
              Privacy policy
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
              Last updated · 2026-05-03 · Hated By Many LLC
            </p>
          </header>

          <div className="space-y-6 font-body text-sm leading-relaxed text-bone/85">
            <p>
              Hated By Many LLC (&quot;Hated By Many,&quot; &quot;we,&quot; or &quot;us&quot;)
              processes limited personal data through kiss.photography marketing surfaces. This notice
              describes those practices at a summary level. The product environment will publish a
              supplemental data processing addendum where required.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">What we collect</h2>
            <p>
              When you submit the waitlist form, we collect the email address you provide and basic
              request metadata such as user agent and timestamp for abuse prevention. We do not
              intentionally collect sensitive categories through the marketing site.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">How we use data</h2>
            <p>
              Waitlist emails are used to send invitation-related messages and operational notices. We
              do not sell personal data. We do not run behaviorally targeted advertising on this domain.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Retention</h2>
            <p>
              Waitlist records are retained only as long as operations require, typically through the
              relevant launch window plus a narrow archival window for legal compliance. You may
              request deletion subject to constraints imposed by law or active contracts.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Processors</h2>
            <p>
              Infrastructure providers necessary to operate the site — including hosting, transactional
              email, and security monitoring — may process data under agreement. Exact subprocessors
              are listed in enterprise contracts when procurement applies.
            </p>
            <h2 className="font-serif text-lg font-normal text-bone">Your rights</h2>
            <p>
              Depending on jurisdiction, you may have rights of access, correction, deletion, or
              objection. Requests should originate from the email on file and be sent to privacy through
              the support mailbox published on this site.
            </p>
          </div>
        </div>
      </div>
    </PageScaffold>
  );
}
