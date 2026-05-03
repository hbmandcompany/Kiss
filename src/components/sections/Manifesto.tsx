import { SectionReveal } from "@/components/motion/SectionReveal";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function Manifesto() {
  return (
    <section className="border-t border-border-bone bg-surface/30 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <blockquote className="space-y-10">
            <p className="text-balance font-sans text-3xl font-bold uppercase leading-tight tracking-[0.04em] text-bone sm:text-4xl md:text-[56px]">
              We are not in the business of making people look better. We are in the business of predicting which version of a person performs best in the environments where they will be evaluated.
            </p>
            <footer>
              <MonoLabel className="text-mute">
                — Hated By Many LLC, founding document
              </MonoLabel>
            </footer>
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}
