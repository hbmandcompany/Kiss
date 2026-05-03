"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button-variants";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border-bone/80 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 focus-visible:outline-none">
          <MonoLabel className="text-bone/90 transition-colors duration-hover group-hover:text-accent-crimson">
            KISS.PHOTOGRAPHY
          </MonoLabel>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.18em] text-mute transition-colors duration-hover hover:text-bone",
                pathname === link.href && "text-bone",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MotionLink
            href="/waitlist"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Join waitlist
          </MotionLink>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border-bone text-bone transition-colors duration-hover hover:border-accent-oxblood md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-canvas/95 backdrop-blur-sm" />
            <Dialog.Content
              className="fixed inset-0 z-50 flex flex-col gap-10 overflow-y-auto px-6 py-8 focus:outline-none"
              aria-describedby={undefined}
            >
              <div className="flex items-center justify-between">
                <Dialog.Title asChild>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
                    Navigation
                  </span>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border-bone text-bone transition-colors hover:border-accent-oxblood"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                  </button>
                </Dialog.Close>
              </div>
              <div className="flex flex-1 flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduce ? 0 : 0.06 * i,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block text-3xl font-extrabold uppercase tracking-[0.08em] text-bone sm:text-4xl"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.06 * navLinks.length,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pt-4"
                >
                  <MotionLink
                    href="/waitlist"
                    className={cn(
                      buttonVariants({ variant: "primary", size: "lg" }),
                      "w-full sm:inline-flex sm:w-auto",
                    )}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Join waitlist
                  </MotionLink>
                </motion.div>
              </div>
              <MonoLabel className="text-mute">Private alpha · Invite only</MonoLabel>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
