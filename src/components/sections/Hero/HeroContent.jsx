import { home } from "../../../data/pages/home/home";

import HeroButtons from "./HeroButtons";
import HeroDescription from "./HeroDescription";
import HeroEyebrow from "./HeroEyebrow";
import HeroHeading from "./HeroHeading";
import HeroHighlights from "./HeroHighlights";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  const { hero } = home;

  return (
    <div className="relative z-10 flex flex-col justify-center gap-6 sm:gap-7 lg:gap-8">
      <HeroEyebrow text={hero.eyebrow} />
      <HeroHeading title={hero.title} />
      <HeroDescription description={hero.description} />
      <HeroButtons hero={hero} />
      <HeroHighlights hero={hero} />
      <HeroStats hero={hero} />
    </div>
  );
}
