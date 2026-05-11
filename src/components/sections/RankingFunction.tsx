import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const columns = [
  {
    title: "Aesthetic",
    w: "w₁",
    body: "A CLIP-based evaluator scoring compositional and aesthetic quality, trained on large-scale preference datasets.",
  },
  {
    title: "Engagement",
    w: "w₂",
    body: "A learned ranking model predicting which candidates perform best in profile environments, refined per cohort.",
  },
  {
    title: "Identity",
    w: "w₃",
    body: "Embedding-distance constraint ensuring outputs remain recognizable to humans at empirically validated thresholds.",
  },
  {
    title: "Diversity",
    w: "w₄",
    body: "Determinantal point process penalty preventing redundancy across the selected six-image set.",
  },
] as const;

export function RankingFunction() {
  return (
    <FullPageArtSection artSrc={frenchArt.ranking.src} artAlt={frenchArt.ranking.alt} overlay="medium">
      <div className="romance-panel lift-on-hover rounded-[2.5rem] border border-stone/50 bg-pure/80 px-8 py-20 shadow-card backdrop-blur-md lg:px-20">
        <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">INTELLIGENCE</MonoLabel>
        <h2 className="mt-6 max-w-4xl font-serif text-[44px] font-normal leading-tight text-ink lg:text-[56px]">
          The engine is the product. The model is the rendering layer.
        </h2>

        <p className="mt-12 break-words text-center font-mono text-lg leading-relaxed text-ink sm:text-xl md:text-[28px]">
          <span className="text-tanDark">R</span>
          <span className="text-fog"> = </span>
          <span className="text-fog">w₁</span>
          <span className="text-stone/50">·</span>
          <span className="text-ink">Aesthetic</span>
          <span className="text-fog"> + </span>
          <span className="text-fog">w₂</span>
          <span className="text-stone/50">·</span>
          <span className="text-ink">Engagement</span>
          <span className="text-fog"> + </span>
          <span className="text-fog">w₃</span>
          <span className="text-stone/50">·</span>
          <span className="text-ink">Identity</span>
          <span className="text-fog"> + </span>
          <span className="text-fog">w₄</span>
          <span className="text-stone/50">·</span>
          <span className="text-ink">Diversity</span>
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title} className="space-y-2">
              <h3 className="font-serif text-[22px] font-normal text-ink">{c.title}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{c.w}</p>
              <p className="font-body text-[15px] leading-relaxed text-ink/80">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </FullPageArtSection>
  );
}
