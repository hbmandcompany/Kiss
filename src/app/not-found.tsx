import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center gap-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <MonoLabel className="text-accent-crimson">404 · Vector out of bounds</MonoLabel>
        <h1 className="font-sans text-4xl font-extrabold uppercase leading-none tracking-[0.06em] text-bone sm:text-6xl">
          This route does not exist.
        </h1>
        <p className="max-ch text-sm leading-relaxed text-mute">
          The URL you requested is not provisioned on this surface. Return to the marketing root or request access through the waitlist.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href="/" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
          Back to home
        </Link>
        <Link href="/waitlist" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
          Join the waitlist
        </Link>
      </div>
    </div>
  );
}
