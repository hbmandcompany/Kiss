import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const nested = [
  { title: "Observer", body: "Patterns of selection, captured precisely." },
  { title: "Suggérer", body: "Candidates proposed in cadence, ranked by composite score." },
  { title: "Affiner", body: "Outputs become sharper with every cohort retraining cycle." },
] as const;

const identityItems = [
  "Embedding distance threshold per context",
  "Rejection sampling before ranking",
  "Empirically-tuned recognition rates",
] as const;

export function LearningEngine() {
  return (
    <FullPageArtSection
      id="moteur"
      artSrc={frenchArt.learningEngine.src}
      artAlt={frenchArt.learningEngine.alt}
      overlay="medium"
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="racing-deep lift-on-hover rounded-[2.5rem] border border-tanDark/35 p-10 text-pure lg:col-span-3">
          <MonoLabel className="text-[11px] tracking-[0.24em] text-pure/75">
            LE MOTEUR DE CLASSEMENT
          </MonoLabel>
          <h2 className="mt-4 max-w-3xl font-serif text-[40px] font-normal leading-[1.1] lg:text-[48px]">
            The ranking engine learns the version of you that wins.
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-pure/90">
            The diffusion model produces options. The ranking engine decides which options matter.
            Every selection, reorder, deletion, and dwell time becomes training signal. The system
            learns which version of you performs, specifically, over time.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {nested.map((n) => (
              <div key={n.title} className="rounded-2xl border border-pure/20 bg-pure/10 p-4 backdrop-blur-sm">
                <h3 className="font-serif text-lg text-pure">{n.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-pure/85">{n.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="identite"
          className="vellum-panel lift-on-hover rounded-[2.5rem] border border-stone/50 bg-pure/78 p-8 text-ink backdrop-blur-md lg:col-span-2"
        >
          <h2 className="font-serif text-[32px] font-normal leading-tight">Système d&apos;Identité.</h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/80">
            An ArcFace-derived encoder produces a high-dimensional embedding from your source images.
            Generation is constrained to remain within a configurable distance from your embedding.
            Identity is preserved by mathematics, not by approximation.
          </p>
          <ul className="mt-6 space-y-3">
            {identityItems.map((line) => (
              <li
                key={line}
                className="rounded-2xl border border-stone/40 bg-linen/80 px-4 py-3 font-body text-[15px] text-ink/85 backdrop-blur-sm"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FullPageArtSection>
  );
}
