import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em]",
  {
    variants: {
      variant: {
        default: "border-ironHairline bg-gunmetal text-ash",
        accent: "border-dupontBlue/30 bg-dupontBlue/10 text-dupontBlue",
        critical: "border-flameRed/30 bg-flameRed/10 text-flameRed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
