import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const acts = [
  {
    act: "ACTE I",
    title: "Lyrisme Opérationnel",
    body: "Every output is composed like a portrait — readable, sensible, and oriented toward decision. Beauty serves the metric.",
  },
  {
    act: "ACTE II",
    title: "Formes Artisanales",
    body: "Sixteen to thirty-two candidates per upload. Identity-preserved within a measured embedding threshold. Ranked by a composite function with four weighted signals.",
  },
  {
    act: "ACTE III",
    title: "Maison Intégrée",
    body: "Generation, ranking, training, and delivery are operated in-house on Lambda Labs infrastructure. No third-party generation. No custodial wallets. No drift.",
  },
] as const;

export function Philosophy() {
  return (
    <FullPageArtSection
      id="philosophie"
      artSrc={frenchArt.philosophy.src}
      artAlt={frenchArt.philosophy.alt}
      overlay="medium"
    >
      <div className="romance-panel rounded-[2.5rem] border border-stone/50 bg-pure/82 px-8 py-20 shadow-card backdrop-blur-md md:px-14 lg:rounded-[3rem] lg:px-20">
        <MonoLabel className="text-[12px] tracking-[0.28em] text-fog">PHILOSOPHIE DE LA MAISON</MonoLabel>
        <h2 className="mt-6 max-w-4xl text-balance font-serif text-[36px] font-normal leading-tight tracking-tight text-ink lg:text-[56px]">
          Nous reconstruisons. Nous n&apos;éditons pas.
        </h2>
        <p className="mt-8 max-w-3xl font-body text-base leading-relaxed text-ink/85 md:text-xl">
          Kiss.photography is not a photo editor. It is a socio-aesthetic prediction engine that happens
          to produce photorealistic imagery as its terminal output. The diffusion model is the rendering
          layer. The ranking engine is the product.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {acts.map((a) => (
            <div
              key={a.act}
              className="lift-on-hover rounded-[2rem] border border-stone/45 bg-linen/90 p-7 backdrop-blur-sm"
            >
              <MonoLabel className="text-[10px] tracking-[0.22em] text-fog">{a.act}</MonoLabel>
              <h3 className="mt-4 font-serif text-2xl font-normal text-ink">{a.title}</h3>
              <p className="mt-3 font-body text-base leading-relaxed text-ink/80">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </FullPageArtSection>
  );
}
