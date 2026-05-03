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
          "h-11 w-full rounded-sm border border-border-bone bg-surface px-3 text-sm text-bone placeholder:text-mute/80",
          "transition-[border-color,box-shadow] duration-hover ease-brand",
          "focus-visible:border-accent-oxblood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-oxblood/35",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
