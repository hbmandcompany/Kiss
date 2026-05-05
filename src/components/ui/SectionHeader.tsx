import * as React from "react";

import { cn } from "@/lib/utils";

import { MonoLabel } from "./MonoLabel";

export type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  titleClassName,
  eyebrowClassName,
  className,
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-4xl space-y-4", className)}>
      <MonoLabel className={cn("text-mute", eyebrowClassName)}>{eyebrow}</MonoLabel>
      <Tag
        className={cn(
          Tag === "h2" &&
            "text-bone text-4xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl md:text-[56px]",
          Tag === "h3" &&
            "text-bone text-2xl font-semibold leading-tight tracking-tight sm:text-[32px]",
          titleClassName,
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
