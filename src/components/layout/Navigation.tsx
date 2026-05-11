"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { MonoLabel } from "@/components/ui/MonoLabel";
import { COHORT, navLinks, SITE_VERSION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);
  const openRef = React.useRef(open);
  openRef.current = open;
  const [isLg, setIsLg] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => {
      setIsLg(mq.matches);
      if (!mq.matches) setHidden(false);
    };
    onMq();
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  React.useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 48);
      if (!isLg || openRef.current) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      const dy = y - lastY.current;
      lastY.current = y;
      if (y < 56) {
        setHidden(false);
        return;
      }
      if (y > 96 && dy > 8) setHidden(true);
      else if (dy < -8) setHidden(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLg]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-4 right-4 top-4 z-50 md:left-6 md:right-6 md:top-6 lg:left-8 lg:right-8 lg:top-6",
        "transition-[transform,opacity] duration-700 ease-luxury",
        hidden && isLg && "-translate-y-[calc(100%+2rem)] opacity-0",
      )}
    >
      <div className="pointer-events-auto mx-auto max-w-container">
        <div
          className={cn(
            "luxe-pill flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3.5",
            scrolled && "border border-stone/35",
          )}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <Link
              href="/"
              className="font-serif text-[20px] font-semibold tracking-tight text-ink sm:text-[22px]"
            >
              kiss<span className="text-tan">.</span>photography
            </Link>
            <MonoLabel className="text-[10px] tracking-[0.22em] text-fog/70 sm:inline">
              MAISON DE PHOTOGRAPHIE · 2026
            </MonoLabel>
          </div>

          <nav className="hidden flex-1 justify-center gap-10 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-normal text-ink/85 transition-colors duration-500 ease-luxury hover:text-tanDark",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <MonoLabel className="text-[10px] tracking-[0.22em] text-fog">
              {SITE_VERSION} · {COHORT}
            </MonoLabel>
            <Link
              href="/waitlist"
              className="rounded-full bg-tan px-6 py-3 font-body text-sm font-medium text-pure transition-colors duration-500 ease-luxury hover:bg-tanDark"
            >
              Demander l&apos;Accès
            </Link>
          </div>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <div className="flex items-center gap-2 lg:hidden">
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone/45 text-ink transition-colors duration-500 hover:border-tan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </Dialog.Trigger>
            </div>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-plaster/96 backdrop-blur-md" />
              <Dialog.Content className="fixed inset-0 z-[60] flex flex-col overflow-y-auto px-6 py-10 text-ink focus:outline-none">
                <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                <div className="flex items-center justify-between">
                  <Link href="/" className="font-serif text-xl font-semibold" onClick={() => setOpen(false)}>
                    kiss<span className="text-tan">.</span>photography
                  </Link>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone/45 text-ink"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-16 flex flex-col gap-8" aria-label="Mobile">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-serif text-4xl font-normal text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="/waitlist"
                  className="mt-12 rounded-full bg-tan py-4 text-center font-body text-pure transition-colors hover:bg-tanDark"
                  onClick={() => setOpen(false)}
                >
                  Demander l&apos;Accès
                </Link>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}
