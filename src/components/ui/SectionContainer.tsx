"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import * as React from "react";

import { fadeInOnly, fadeInUp } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionContainer({ className, children, id }: SectionContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const variants = reduce ? fadeInOnly : fadeInUp;
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px 160px 0px",
    amount: 0.05,
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
