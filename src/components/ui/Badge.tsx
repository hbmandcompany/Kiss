import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wide",
  {
    variants: {
      variant: {
        default: "border-border-bone bg-canvas text-mute",
        accent: "border-accent-violet/50 bg-accent-violet/15 text-bone",
        warning: "border-accent-crimson/40 bg-accent-crimson/10 text-bone",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
