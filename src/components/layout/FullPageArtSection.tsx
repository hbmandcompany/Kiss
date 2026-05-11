"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

import { fadeInOnly, fadeInUp } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

type FullPageArtSectionProps = {
  id?: string;
  artSrc: string;
  artAlt: string;
  priority?: boolean;
  /** First screen: skip scroll gate so content is not stuck at opacity 0 */
  instantReveal?: boolean;
  overlay?: "light" | "medium";
  className?: string;
  children: React.ReactNode;
};

export function FullPageArtSection({
  id,
  artSrc,
  artAlt,
  priority = false,
  instantReveal = false,
  overlay = "medium",
  className,
  children,
}: FullPageArtSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const variants = reduce ? fadeInOnly : fadeInUp;
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px 160px 0px",
    amount: 0.05,
  });
  const isInView = instantReveal || inView;

  const wash =
    overlay === "light"
      ? "bg-plaster/75 backdrop-blur-[1px]"
      : "bg-plaster/[0.82] backdrop-blur-[2px]";

  return (
    <section id={id} className={cn("relative min-h-dvh w-full overflow-hidden", className)}>
      <Image
        src={artSrc}
        alt={artAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={priority}
      />
      <div className={cn("absolute inset-0", wash)} aria-hidden />
      <div className="relative z-10 flex min-h-dvh w-full flex-col justify-center py-20 pt-28 md:py-28 md:pt-32 lg:pt-36">
        <div className="mx-auto w-full max-w-container px-6 md:px-12 lg:px-16">
          <motion.div
            ref={ref}
            className="relative w-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
