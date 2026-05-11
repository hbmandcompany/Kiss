"use client";

import * as React from "react";

import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

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
      setMessage("Recorded.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error.");
    }
  }

  return (
    <FullPageArtSection
      id="collaboration"
      artSrc={frenchArt.waitlist.src}
      artAlt={frenchArt.waitlist.alt}
      overlay="medium"
      className="pb-8"
    >
      <div className="romance-panel lift-on-hover rounded-[2.5rem] border border-tan/35 bg-pure/82 px-8 py-16 text-center shadow-card backdrop-blur-md">
        <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">COLLABORATION</MonoLabel>
        <h2 className="mt-5 font-serif text-[40px] font-normal leading-tight text-ink lg:text-[48px]">
          L&apos;admission est limitée. La liste d&apos;attente ne l&apos;est pas.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-ink/80">
          Cohort 01 opens in Q3 2026. We will not email you until your invitation is ready. No
          marketing. No reminders. No follow-ups.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-stretch"
        >
          <Input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="votre.email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:flex-1"
          />
          <Button type="submit" variant="primary" disabled={status === "loading"} className="shrink-0 sm:w-auto">
            {status === "loading" ? "Envoi…" : "Réserver une Place"}
          </Button>
        </form>

        {message ? (
          <p
            role="status"
            className={status === "error" ? "mt-4 text-sm text-terracotta" : "mt-4 text-sm text-ink/75"}
          >
            {message}
          </p>
        ) : null}

        <MonoLabel className="mx-auto mt-6 block max-w-lg text-[10px] tracking-[0.2em] text-fog">
          NO MARKETING · NO REMINDERS · NO FOLLOW-UPS
        </MonoLabel>
      </div>
    </FullPageArtSection>
  );
}
