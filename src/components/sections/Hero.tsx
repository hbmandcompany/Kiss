"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const ease = [0.4, 0, 0.2, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <FullPageArtSection
      artSrc={frenchArt.hero.src}
      artAlt={frenchArt.hero.alt}
      priority
      instantReveal
      overlay="medium"
    >
      <div className="relative mx-auto flex min-h-[min(88dvh,920px)] w-full max-w-4xl flex-col">
        <div
          className="pointer-events-none absolute -right-1/4 -top-1/4 h-[1200px] w-[1200px] rounded-full bg-tan/12 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.35 : 0.65, ease }}
        >
          <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">
            KISS.PHOTOGRAPHY · MAISON DE RECONSTRUCTION · COHORT 01 — PRIVATE ALPHA
          </MonoLabel>

          <h1 className="mt-8 text-balance font-serif text-[40px] font-normal leading-[1.1] tracking-tight text-ink lg:text-[72px]">
            The version of you that the world{" "}
            <span className="relative inline-block pb-1">
              agrees
              <span
                className="rainbow-stripe pointer-events-none absolute left-0 top-full mt-1 block w-full"
                aria-hidden
              />
            </span>{" "}
            on.
          </h1>

          <p className="mt-10 max-w-prose font-body text-base leading-relaxed text-ink/85 md:text-xl">
            We do not edit photographs. We reconstruct them. A diffusion model trained on lab-grade
            infrastructure produces between sixteen and thirty-two candidate images per upload. A
            ranking engine — modeled on the principles that govern visual recommendation at internet
            scale — selects the six that perform best in the environments where you will be
            evaluated.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-tan px-8 py-4 font-body text-base font-medium text-pure transition-colors duration-500 ease-luxury hover:bg-tanDark"
            >
              Demander l&apos;Accès
            </Link>
            <Link
              href="/technology"
              className="group inline-flex items-center gap-2 rounded-full border-none bg-transparent px-2 font-body text-base text-ink underline-offset-8 transition-colors duration-500 hover:text-tanDark hover:underline"
            >
              Lire la technologie
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
            BUILT ON FLUX <span className="mx-1 text-fog/60">·</span> TRAINED ON LAMBDA LABS{" "}
            <span className="mx-1 text-fog/60">·</span> IDENTITY-PRESERVING{" "}
            <span className="mx-1 text-fog/60">·</span> OFF-CHAIN GENERATION
          </p>
        </motion.div>
        </div>

        <div className="flex-1" aria-hidden />

        <div className="relative z-10 hidden justify-center pb-2 lg:flex">
          {!reduce ? (
            <motion.div
              className="flex flex-col items-center gap-1 text-fog"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MonoLabel className="text-[10px] tracking-[0.22em]">Scroll</MonoLabel>
              <ChevronDown className="h-4 w-4" strokeWidth={1.25} aria-hidden />
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-1 text-fog">
              <MonoLabel className="text-[10px] tracking-[0.22em]">Scroll</MonoLabel>
              <ChevronDown className="h-4 w-4" strokeWidth={1.25} aria-hidden />
            </div>
          )}
        </div>
      </div>
    </FullPageArtSection>
  );
}
