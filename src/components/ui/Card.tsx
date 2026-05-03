import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-sm border border-border-bone bg-surface/90 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "shadow-none",
        elevated:
          "border-border-emphasis/80 shadow-inner-glow-strong [background-image:linear-gradient(180deg,rgba(59,17,68,0.12),rgba(19,9,13,0.96))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  ),
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1 p-6 pb-4", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";
