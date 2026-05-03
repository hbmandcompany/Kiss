import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Manifesto } from "@/components/sections/Manifesto";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { RankingEngine } from "@/components/sections/RankingEngine";
import { Reconstruction } from "@/components/sections/Reconstruction";
import { TechnicalCredibility } from "@/components/sections/TechnicalCredibility";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Reconstruction />
      <HowItWorks />
      <TechnicalCredibility />
      <RankingEngine />
      <PricingPreview />
      <Manifesto />
      <WaitlistCTA />
      <FAQ />
    </>
  );
}
