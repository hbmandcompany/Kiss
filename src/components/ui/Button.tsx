"use client";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import { buttonVariants } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

const motionLift =
  "hover:scale-[1.02] active:scale-[0.99] transition-transform duration-500 ease-luxury";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    motionLift?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild, motionLift: lift = true, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant }), lift && motionLift, className)}
        ref={ref as never}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
