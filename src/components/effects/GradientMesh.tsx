"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const drift = {
  animate: {
    x: ["-8%", "6%", "-4%", "-8%"],
    y: ["6%", "-4%", "8%", "6%"],
    scale: [1, 1.06, 1.03, 1],
  },
  transition: {
    duration: 48,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

export function GradientMesh({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
      >
        <div className="absolute -left-[20%] -top-[30%] h-[85%] w-[85%] rounded-full bg-accent-violet/25 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[10%] h-[90%] w-[90%] rounded-full bg-accent-oxblood/20 blur-[140px]" />
        <HeroNoiseSvg />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="absolute -left-[25%] -top-[35%] h-[90%] w-[90%] rounded-full bg-accent-violet/30 blur-[128px]"
        {...drift}
      />
      <motion.div
        className="absolute -bottom-[35%] -right-[15%] h-[95%] w-[95%] rounded-full bg-accent-oxblood/25 blur-[140px]"
        animate={{
          x: ["6%", "-6%", "4%", "6%"],
          y: ["-6%", "5%", "-8%", "-6%"],
          scale: [1.02, 1, 1.05, 1.02],
        }}
        transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[10%] bottom-[5%] h-[55%] w-[55%] rounded-full bg-accent-crimson/10 blur-[100px]"
        animate={{
          opacity: [0.15, 0.35, 0.2, 0.15],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />
      <HeroNoiseSvg />
    </div>
  );
}

function HeroNoiseSvg() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay motion-safe-animate"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="hero-noise" x="0" y="0">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" />
    </svg>
  );
}
