import { ShieldCheck, BadgeCheck, Building2, CheckCircle2 } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  building: Building2,
  check: CheckCircle2,
};

export default function HeroHighlights({ hero }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {hero.highlights.map((highlight) => {
        const Icon = iconMap[highlight.icon] ?? CheckCircle2;

        return (
          <div
            key={highlight.text}
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[var(--color-primary)]/10
                text-[var(--color-primary)]
              "
            >
              <Icon size={20} />
            </div>

            <span
              className="
                text-base
                font-medium
                text-[var(--color-text-light)]
              "
            >
              {highlight.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}
