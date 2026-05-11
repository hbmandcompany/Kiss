import { FullPageArtSection } from "@/components/layout/FullPageArtSection";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { frenchArt } from "@/lib/french-art";

const cards = [
  {
    title: "Composition",
    body: "FLUX.1 by Black Forest Labs. LoRA + adapter fine-tuning. Identity conditioning via cross-attention.",
  },
  {
    title: "Précision",
    body: "Lambda Labs H100 cluster. FSDP-sharded distributed training. Quarterly fine-tune cycles.",
  },
  {
    title: "Pérennité",
    body: "Off-chain generation. Non-custodial credit model. Optional Polygon ledger for auditability.",
  },
] as const;

export function Infrastructure() {
  return (
    <FullPageArtSection
      artSrc={frenchArt.infrastructure.src}
      artAlt={frenchArt.infrastructure.alt}
      overlay="medium"
    >
      <div className="racing-deep lift-on-hover rounded-[2.5rem] border border-tanDark/35 px-8 py-16 text-pure backdrop-blur-sm md:px-12 lg:px-16">
        <MonoLabel className="text-[11px] tracking-[0.24em] text-pure/70">ATELIER NUMÉRIQUE</MonoLabel>
        <h2 className="mt-4 max-w-4xl font-serif text-[40px] font-normal leading-tight lg:text-[48px]">
          Built like a laboratory. Operated like a private studio.
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-pure/88">
          Our stack is selected for control, not convenience. FLUX runs on dedicated Lambda Labs H100
          endpoints under our orchestration. PostgreSQL holds the operational record. A vector database
          holds the embeddings. Object storage holds the images. Blockchain — if it appears at all —
          appears only as an optional audit ledger on Polygon, never in the critical path.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-[1.75rem] border border-pure/20 bg-pure/10 p-6 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-normal text-pure">{c.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-pure/85">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </FullPageArtSection>
  );
}
