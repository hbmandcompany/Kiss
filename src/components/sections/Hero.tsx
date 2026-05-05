"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { GradientMesh } from "@/components/effects/GradientMesh";
import { buttonVariants } from "@/components/ui/button-variants";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <GradientMesh className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-canvas/70" aria-hidden />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.08 },
            },
          }}
          className="flex max-w-5xl flex-col gap-8"
        >
          <motion.div custom={0} variants={lineVariants}>
            <MonoLabel className="text-mute">
              Kiss.photography · v0.1 private alpha
            </MonoLabel>
          </motion.div>

          <motion.h1
            custom={1}
            variants={lineVariants}
            className="font-sans text-[56px] font-extrabold leading-[0.95] tracking-[-0.02em] text-bone sm:text-7xl md:text-[96px]"
          >
            <span className="block">Reconstruct the version</span>
            <span className="block">
              of you that{" "}
              <span className="text-gradient-brand">wins</span>.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={lineVariants}
            className="max-ch text-base font-normal leading-relaxed text-bone sm:text-lg"
          >
            An AI system that doesn&apos;t edit your photos. It generates the photographs you would have taken if every variable had aligned.
          </motion.p>

          <motion.div
            custom={3}
            variants={lineVariants}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MotionLink
              href="/waitlist"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </MotionLink>
            <MotionLink
              href="/technology"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Read the technology
            </MotionLink>
          </motion.div>

          <motion.div custom={4} variants={lineVariants}>
            <p className="font-mono text-[11px] leading-relaxed tracking-wide text-mute sm:text-xs">
              Built on FLUX · trained on Lambda Labs · identity-preserving · off-chain generation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
