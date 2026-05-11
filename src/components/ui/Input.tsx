import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "h-auto w-full rounded-full border border-stone/50 bg-pure/90 px-6 py-4 font-body text-base text-ink placeholder:text-fog/70",
          "transition-colors duration-500 ease-luxury",
          "focus-visible:border-tan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan/35",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
