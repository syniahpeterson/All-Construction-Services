import {
  ShieldCheck,
  BadgeCheck,
  House,
  Building2,
  Factory,
  CheckCircle2,
} from "lucide-react";

const icons = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  home: House,
  building: Building2,
  factory: Factory,
  check: CheckCircle2,
};

export default function TrustItem({ item }) {
  const Icon = icons[item.icon] ?? CheckCircle2;

  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-3
        rounded-xl
        px-3
        py-5
        sm:py-6
        text-center
        transition-all
        duration-300
        hover:bg-white/5
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[var(--color-primary)]/10
          text-[var(--color-primary)]
          transition-all
          duration-300
          group-hover:bg-[var(--color-primary)]
          group-hover:text-white
        "
      >
        <Icon size={22} />
      </div>

      <div>
        <h3
          className="
            text-xs
            font-semibold
            text-[var(--color-text)]
            sm:text-sm
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            text-[0.65rem]
            text-[var(--color-text-muted)]
            sm:text-xs
          "
        >
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}
