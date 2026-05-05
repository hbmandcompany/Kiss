"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="border-t border-border-bone bg-surface/20 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader eyebrow="FAQ" title="Direct answers" />
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
                className="rounded-sm border border-border-bone bg-surface/80 shadow-inner-glow"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-sans text-sm font-semibold tracking-tight text-bone transition-colors duration-hover hover:text-bone focus-visible:outline-none">
                    <span>{item.q}</span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-mute transition-transform duration-hover group-data-[state=open]:rotate-180"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden border-t border-border-bone/60 bg-canvas/40">
                  <p className="px-4 py-4 text-sm leading-relaxed text-mute">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </SectionReveal>
      </div>
    </section>
  );
}
