import Link from "next/link";

import { MonoLabel } from "@/components/ui/MonoLabel";
import { footerMaison, footerPlatform, footerResources } from "@/lib/constants";
function UnderlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-block font-body text-sm text-ink/75 transition-colors duration-500 hover:text-ink"
    >
      <span>{children}</span>
      <span
        className="absolute bottom-0 left-0 h-px w-0 bg-tan transition-all duration-500 ease-luxury group-hover:w-full"
        aria-hidden
      />
    </Link>
  );
}

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-normal tracking-wide text-ink">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-linen">
      <div className="mx-auto max-w-container px-6 pb-16 pt-24 md:px-12 lg:px-16 lg:pt-28">
        <div className="racing-deep lift-on-hover rounded-[2.5rem] border border-tanDark/30 px-8 py-12 text-pure shadow-card md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12">
            <div className="space-y-5">
              <MonoLabel className="text-[11px] tracking-[0.22em] text-pure/75">ATELIER FEATURE</MonoLabel>
              <h2 className="max-w-xl font-serif text-[32px] font-normal leading-tight text-pure md:text-[36px]">
                Cohort 01 — Apply for early atelier access before general availability.
              </h2>
              <p className="max-w-xl font-body text-base leading-relaxed text-pure/88">
                Limited invitations to a curated initial cohort. Direct access to the studio team.
                Custom LoRA fine-tuning on your image library included.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Link
                href="/waitlist"
                className="rounded-full bg-pure px-8 py-4 font-body text-base font-medium text-ink transition-colors duration-500 hover:bg-sunYellow"
              >
                Apply to Cohort 01
              </Link>
              <Link
                href="/legal/terms"
                className="font-body text-sm text-pure/85 underline underline-offset-4 transition-colors duration-500 hover:text-sunYellow"
              >
                Read the cohort terms →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-5 md:col-span-2 lg:col-span-2">
            <p className="font-serif text-[30px] font-semibold tracking-tight text-ink">
              kiss<span className="text-tan">.</span>photography
            </p>
            <p className="font-body text-lg text-ink/90">
              Une maison française de reconstruction d&apos;identité photographique.
            </p>
            <p className="max-w-sm font-body text-sm leading-relaxed text-ink/70">
              Generation, ranking, training, and delivery operated in-house. Lab-grade infrastructure.
              Editorial discipline.
            </p>
          </div>
          <Column title="Plateforme">
            {footerPlatform.map((item) => (
              <li key={item.label}>
                <UnderlineLink href={item.href}>{item.label}</UnderlineLink>
              </li>
            ))}
          </Column>
          <Column title="Maison">
            {footerMaison.map((item) => (
              <li key={item.label + item.href}>
                <UnderlineLink href={item.href}>{item.label}</UnderlineLink>
              </li>
            ))}
          </Column>
          <Column title="Ressources">
            {footerResources.map((item) => (
              <li key={item.href + item.label}>
                <UnderlineLink href={item.href}>{item.label}</UnderlineLink>
              </li>
            ))}
          </Column>
        </div>

        <hr className="mt-20 border-ink/10" />
        <div className="mt-8 grid gap-4 pb-16 font-mono text-xs text-fog md:grid-cols-2">
          <p>© 2026 KISS.PHOTOGRAPHY · HATED BY MANY LLC</p>
          <p className="md:text-right">HANDCRAFTED IN-HOUSE · SEATTLE / DELAWARE</p>
        </div>
      </div>
    </footer>
  );
}
