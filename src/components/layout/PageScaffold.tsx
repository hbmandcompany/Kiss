import type { ReactNode } from "react";

export function PageScaffold({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-container px-6 pb-24 pt-28 md:px-12 lg:px-16 lg:pt-32">{children}</div>
  );
}
