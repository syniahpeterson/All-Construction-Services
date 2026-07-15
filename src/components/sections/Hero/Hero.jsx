import { Section } from "../../ui";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden py-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,124,114,.24),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(212,160,23,.13),transparent_35%)]" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[140px] sm:h-[36rem] sm:w-[36rem] lg:h-[42rem] lg:w-[42rem]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_30%,rgba(255,255,255,0.02))]" />
      </div>

      <div className="relative min-h-screen py-12 sm:py-16 lg:min-h-[100svh] lg:py-0">
        <div className="grid min-h-[inherit] items-center justify-items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-1 lg:gap-12 lg:justify-items-center lg:px-12 xl:grid-cols-[0.95fr_1.05fr] xl:gap-16 xl:justify-items-start xl:px-20">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </Section>
  );
}
