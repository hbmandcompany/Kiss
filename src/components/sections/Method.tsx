import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const steps = [
  {
    n: "01",
    title: "Ingest",
    body: "Upload three to twelve source images. Face detection, geometric normalization, identity embedding extraction.",
  },
  {
    n: "02",
    title: "Generate",
    body: "FLUX produces sixteen to thirty-two photorealistic candidates per input, each identity-consistent.",
  },
  {
    n: "03",
    title: "Rank",
    body: "Composite function evaluates aesthetic, engagement, identity, and diversity. Top six selected.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Outputs arrive in your atelier within ninety seconds. Your selections train the next cohort.",
  },
] as const;

export function Method() {
  return (
    <FullPageArtSection
      id="maison-method"
      artSrc={frenchArt.method.src}
      artAlt={frenchArt.method.alt}
      overlay="medium"
    >
      <div className="vellum-panel lift-on-hover rounded-[2.5rem] border border-stone/50 bg-pure/78 px-8 py-16 shadow-card backdrop-blur-md md:px-12 lg:px-16">
        <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">MÉTHODE DE MAISON</MonoLabel>
        <h2 className="mt-5 max-w-4xl font-serif text-[40px] font-normal leading-tight text-ink lg:text-[48px]">
          Une orchestration complète, de l&apos;image source à la livraison.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="lift-on-hover rounded-[1.75rem] border border-stone/45 bg-linen/85 p-5 backdrop-blur-sm"
            >
              <p className="font-mono text-sm font-medium text-tanDark">{s.n}</p>
              <h3 className="mt-3 font-serif text-2xl font-normal text-ink">{s.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </FullPageArtSection>
  );
}
