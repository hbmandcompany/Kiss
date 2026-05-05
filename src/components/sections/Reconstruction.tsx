"use client";

import Image from "next/image";
import * as React from "react";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BEFORE_SRC =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80&auto=format&fit=crop";
const AFTER_SRC =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop";

export function Reconstruction() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [pct, setPct] = React.useState(50);
  const dragging = React.useRef(false);

  const onMove = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPct(Math.round((x / rect.width) * 100));
  }, []);

  return (
    <section className="border-t border-border-bone bg-canvas py-24 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            eyebrow="Reconstruction"
            title="The output is not an edit. It is a reconstruction."
          />
        </SectionReveal>

        <SectionReveal delay={0.06} className="space-y-8">
          <div
            ref={containerRef}
            className="relative aspect-[16/9] w-full max-h-[520px] overflow-hidden rounded-sm border border-border-bone bg-surface shadow-inner-glow"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
              onMove(e.clientX);
            }}
            onPointerMove={(e) => {
              if (!dragging.current) return;
              onMove(e.clientX);
            }}
            onPointerUp={(e) => {
              dragging.current = false;
              try {
                (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
              } catch {
                /* no-op */
              }
            }}
            onPointerCancel={() => {
              dragging.current = false;
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
            }}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pct}
            aria-label="Before and after comparison scrubber"
            tabIndex={0}
          >
            <Image
              src={AFTER_SRC}
              alt="Reconstructed output: professional portrait with controlled studio lighting and sharper focal plane"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1152px, 100vw"
              priority={false}
            />
            <Image
              src={BEFORE_SRC}
              alt="Input reference: casual candid portrait used as identity anchor"
              fill
              className="object-cover"
              style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
              sizes="(min-width: 1024px) 1152px, 100vw"
              priority={false}
            />
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone/90 shadow-[0_0_24px_rgba(200,16,46,0.35)]"
              style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
            />
            <div
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-sm border border-border-emphasis bg-surface px-2 py-1 font-mono text-[10px] tracking-wide text-bone shadow-inner-glow"
              style={{ left: `${pct}%`, transform: "translate(-50%, -50%)" }}
            >
              Scrub
            </div>
          </div>

          <MonoLabel className="block text-center text-mute">
            Input → 32 candidates generated → ranked → top 6 selected
          </MonoLabel>
        </SectionReveal>
      </div>
    </section>
  );
}
