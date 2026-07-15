import { Button } from "../../ui";

export default function HeroButtons({ hero }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <Button
        to={hero.buttons.primary.href}
        size="lg"
        className="w-full justify-center sm:w-auto"
      >
        {hero.buttons.primary.text}
      </Button>

      <Button
        to={hero.buttons.secondary.href}
        variant="outline"
        size="lg"
        className="w-full justify-center bg-[rgba(255,255,255,0.04)] sm:w-auto"
      >
        {hero.buttons.secondary.text}
      </Button>
    </div>
  );
}
