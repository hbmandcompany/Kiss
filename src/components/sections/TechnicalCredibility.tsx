import type { ReactNode } from "react";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

function JsonLine({
  indent,
  children,
}: {
  indent: number;
  children: ReactNode;
}) {
  const pad = " ".repeat(indent);
  return (
    <span className="whitespace-pre-wrap">
      <span className="text-mute">{pad}</span>
      {children}
    </span>
  );
}

export function TechnicalCredibility() {
  return (
    <section className="border-t border-border-bone bg-canvas py-24 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            eyebrow="Specifications"
            title="System surfaces without the brochure language"
          />
        </SectionReveal>
        <SectionReveal delay={0.06}>
          <div className="overflow-hidden rounded-sm border border-border-bone bg-surface shadow-inner-glow">
            <div className="flex items-center justify-between border-b border-border-bone bg-canvas/80 px-4 py-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                system_architecture.json
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-violet/90">
                read-only
              </span>
            </div>
            <pre className="max-h-[520px] overflow-auto p-6 font-mono text-[13px] leading-relaxed text-bone sm:text-sm">
              <code className="block space-y-1">
                <JsonLine indent={0}>
                  <span className="text-mute">{"{"}</span>
                </JsonLine>
                <JsonLine indent={2}>
                  <span className="text-accent-violet">&quot;diffusion_backbone&quot;</span>
                  <span className="text-mute">: </span>
                  <span>&quot;FLUX family · latent flow matching&quot;</span>
                  <span className="text-mute">,</span>
                </JsonLine>
                <JsonLine indent={2}>
                  <span className="text-accent-violet">&quot;identity_preservation&quot;</span>
                  <span className="text-mute">: </span>
                  <span>&quot;Frozen embedding · landmark regularization · texture coherence&quot;</span>
                  <span className="text-mute">,</span>
                </JsonLine>
                <JsonLine indent={2}>
                  <span className="text-accent-violet">&quot;ranking_signals&quot;</span>
                  <span className="text-mute">: </span>
                  <span>&quot;Aesthetic · engagement · identity lock · diversity&quot;</span>
                  <span className="text-mute">,</span>
                </JsonLine>
                <JsonLine indent={2}>
                  <span className="text-accent-violet">&quot;training_infrastructure&quot;</span>
                  <span className="text-mute">: </span>
                  <span>&quot;Lambda Labs GPU clusters · deterministic job graph&quot;</span>
                  <span className="text-mute">,</span>
                </JsonLine>
                <JsonLine indent={2}>
                  <span className="text-accent-violet">&quot;deployment_stack&quot;</span>
                  <span className="text-mute">: </span>
                  <span>&quot;Isolated generation workers · signed delivery URLs · optional chain attestations&quot;</span>
                </JsonLine>
                <JsonLine indent={0}>
                  <span className="text-mute">{"}"}</span>
                </JsonLine>
              </code>
            </pre>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
