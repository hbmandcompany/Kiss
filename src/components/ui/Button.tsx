"use client";

import { type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./button-variants";

export type ButtonProps = HTMLMotionProps<"button"> &
  VariantProps<typeof buttonVariants>;

const MotionButton = motion.button;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <MotionButton
        ref={ref}
        type={type}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
