import Link from "next/link";
import type { ReactNode } from "react";

import { MonoLabel } from "@/components/ui/MonoLabel";
import {
  footerCompany,
  footerLegal,
  footerProduct,
  footerTechnology,
  SITE_VERSION,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

function Column({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <MonoLabel className="text-bone/80">{title}</MonoLabel>
      <ul className="space-y-3 text-sm text-mute">
        {children}
      </ul>
    </div>
  );
}

export function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border-bone bg-canvas", className)}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-sans text-xl font-extrabold uppercase tracking-[0.12em] text-bone">
              KISS.PHOTOGRAPHY
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-mute">
              Photoreal identity reconstruction ranked for the contexts where you are measured, not the contexts where you are comfortable.
            </p>
          </div>
          <Column title="Product">
            {footerProduct.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-hover hover:text-bone focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Company">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-hover hover:text-bone focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Technology">
            {footerTechnology.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-hover hover:text-bone focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Legal">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-hover hover:text-bone focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>
        </div>

        <div className="mt-14 border-t border-border-bone pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-bone/80">
              Hated By Many LLC · Delaware
            </p>
            <div className="flex flex-col gap-1 sm:items-end">
              <MonoLabel className="text-mute">
                BUILD {SITE_VERSION}
              </MonoLabel>
              <MonoLabel className="text-mute">
                © {year} HATED BY MANY LLC
              </MonoLabel>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
