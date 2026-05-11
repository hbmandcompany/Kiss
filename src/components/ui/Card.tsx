"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  lift?: boolean;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, lift = true, children }, ref) => {
    const reduce = useReducedMotion();

    if (reduce || !lift) {
      return (
        <div
          ref={ref}
          className={cn(
            "rounded-[2rem] border border-ironHairline bg-gunmetal p-8 shadow-card backdrop-blur-sm transition-shadow duration-600 ease-luxury md:p-10",
            className,
          )}
        >
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-[2rem] border border-ironHairline bg-gunmetal p-8 shadow-card backdrop-blur-sm transition-shadow duration-600 ease-luxury md:p-10",
          className,
        )}
        whileHover={{
          y: -4,
          boxShadow: "0 32px 64px -20px rgba(44, 40, 36, 0.14)",
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    );
  },
);
Card.displayName = "Card";
