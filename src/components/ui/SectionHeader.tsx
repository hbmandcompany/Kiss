import * as React from "react";

import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  maxWidth?: string;
  className?: string;
  eyebrowClassName?: string;
  headingClassName?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  align = "left",
  maxWidth,
  className,
  eyebrowClassName,
  headingClassName,
}: SectionHeaderProps) {
  const lines = heading.split(" / ").filter(Boolean);
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("space-y-4", alignClass, className)}>
      <MonoLabel className={cn("text-[12px] tracking-[0.28em]", eyebrowClassName)}>{eyebrow}</MonoLabel>
      <h2
        className={cn(
          "text-balance font-serif text-[32px] font-normal leading-[1.15] tracking-tight text-bone sm:text-[40px] lg:text-[48px]",
          maxWidth,
          headingClassName,
        )}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}
