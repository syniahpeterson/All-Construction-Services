import Card from "../../ui/Card";

export default function HeroStats({ hero }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {hero.stats.map((stat) => (
        <Card
          key={stat.label}
          className="
            group
            flex
            flex-col
            items-center
            justify-center
            border-[var(--color-border)]
            bg-white/5
            backdrop-blur-xl
            text-center
            transition-all
            duration-300
            hover:border-[var(--color-primary)]
          "
        >
          <h3
            className="
              text-4xl
              font-black
              text-[var(--color-primary)]
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            {stat.value}
          </h3>

          <p
            className="
              mt-3
              text-sm
              font-medium
              uppercase
              tracking-[0.18em]
              text-[var(--color-text-muted)]
            "
          >
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
}
