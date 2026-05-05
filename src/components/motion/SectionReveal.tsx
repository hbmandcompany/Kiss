"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type SectionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function SectionReveal({
  className,
  children,
  delay = 0,
  ...props
}: SectionRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: reduce ? 0.3 : 0.55,
        delay: reduce ? 0 : delay,
        ease: reduce ? "easeOut" : [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
