"use client";

import { motion, useReducedMotion } from "framer-motion";

import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { viewportOnce } from "@/lib/animation-variants";
import { frenchArt } from "@/lib/french-art";

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <FullPageArtSection artSrc={frenchArt.manifesto.src} artAlt={frenchArt.manifesto.alt} overlay="light">
      <div className="px-2 py-16 text-center lg:px-8 lg:py-24">
        <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">DOCUMENT FONDATEUR · 2026</MonoLabel>
        <blockquote className="mx-auto mt-8 max-w-[1100px]">
          <p className="text-balance font-serif text-[32px] font-light leading-[1.25] tracking-tight text-ink lg:text-[56px]">
            We are not in the business of making people look better.{" "}
            <em className="font-serif italic text-ink/95">
              We are in the business of predicting which version of a person performs best in the
              environments where they will be evaluated.
            </em>
          </p>
        </blockquote>

        <div className="mx-auto mt-20 flex w-[240px] justify-center">
          {reduce ? (
            <div className="rainbow-stripe w-full" aria-hidden />
          ) : (
            <motion.div
              className="rainbow-stripe w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              aria-hidden
            />
          )}
        </div>

        <MonoLabel className="mt-8 text-[11px] tracking-[0.18em] text-fog">
          HATED BY MANY LLC · DELAWARE · KISS.PHOTOGRAPHY
        </MonoLabel>
      </div>
    </FullPageArtSection>
  );
}
