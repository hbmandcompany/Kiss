import { Hero } from "@/components/sections/Hero";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { LearningEngine } from "@/components/sections/LearningEngine";
import { Manifesto } from "@/components/sections/Manifesto";
import { Method } from "@/components/sections/Method";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pricing } from "@/components/sections/Pricing";
import { RankingFunction } from "@/components/sections/RankingFunction";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <LearningEngine />
      <Method />
      <RankingFunction />
      <Infrastructure />
      <Pricing />
      <Manifesto />
      <WaitlistCTA />
    </>
  );
}
