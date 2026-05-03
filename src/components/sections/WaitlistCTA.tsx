"use client";

import { motion } from "framer-motion";
import * as React from "react";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function WaitlistCTA() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Request failed.");
        return;
      }
      setStatus("success");
      setMessage("Recorded. Invitation mail only.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error.");
    }
  }

  return (
    <section className="border-t border-border-bone bg-canvas py-24 sm:py-28">
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="space-y-4">
            <h2 className="font-sans text-3xl font-bold uppercase tracking-[0.04em] text-bone sm:text-4xl md:text-[56px]">
              Admission is limited. The waitlist is not.
            </h2>
            <p className="max-ch text-sm leading-relaxed text-mute">
              One working email. No marketing drip. We ship an invite when the throughput graph says we can keep promises.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sm:flex-1"
              />
              <Button type="submit" variant="primary" size="lg" className="sm:w-44" disabled={status === "loading"}>
                {status === "loading" ? "Submitting…" : "Submit"}
              </Button>
            </div>

            {message ? (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={status === "error" ? "text-accent-crimson text-sm" : "text-mute text-sm"}
              >
                {message}
              </motion.p>
            ) : null}

            <MonoLabel className="block text-mute">
              We will not email you until your invitation is ready.
            </MonoLabel>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
