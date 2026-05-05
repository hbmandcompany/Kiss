import * as React from "react";

import { cn } from "@/lib/utils";

export type MonoLabelProps = React.HTMLAttributes<HTMLSpanElement>;

export function MonoLabel({ className, ...props }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-[12px] font-medium leading-normal tracking-[0.06em] text-mute",
        className,
      )}
      {...props}
    />
  );
}
