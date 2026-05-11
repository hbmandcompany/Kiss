import Link from "next/link";

import { PageScaffold } from "@/components/layout/PageScaffold";
import { buttonVariants } from "@/lib/button-styles";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <PageScaffold>
      <div className="border-t border-ironHairline">
        <div className="mx-auto flex max-w-xl flex-col gap-6 py-24">
          <MonoLabel className="text-shadow">404</MonoLabel>
          <h1 className="font-serif text-4xl font-normal leading-tight text-bone sm:text-5xl">
            This route is not provisioned.
          </h1>
          <p className="font-body text-lg leading-relaxed text-bone/85">
            The page may have moved during alpha. Use navigation or return to the canvas.
          </p>
          <Link href="/" className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}>
            Back to home
          </Link>
        </div>
      </div>
    </PageScaffold>
  );
}
