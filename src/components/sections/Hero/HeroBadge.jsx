import { ArrowUpRight } from "lucide-react";

export default function HeroBadge({
  icon: Icon,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`
        group
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-white/5
        backdrop-blur-xl
        shadow-[var(--shadow-lg)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--color-primary)]
        ${className}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-3 sm:flex-row sm:gap-3 sm:p-4 lg:p-5">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-[var(--color-primary)]/10
            text-[var(--color-primary)]
            transition-all
            duration-300
            group-hover:bg-[var(--color-primary)]
            group-hover:text-white
            sm:h-12
            sm:w-12
          "
        >
          <Icon size={18} className="sm:block lg:block" />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3
            className="
              text-xs
              font-semibold
              text-[var(--color-text)]
              sm:text-sm
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-0.5
              text-[0.65rem]
              leading-4
              text-[var(--color-text-muted)]
              sm:mt-1
              sm:text-xs
              sm:leading-5
            "
          >
            {subtitle}
          </p>
        </div>

        <ArrowUpRight
          size={16}
          className="
            hidden
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-x-1
            group-hover:-translate-y-1
            text-[var(--color-primary)]
            sm:block
          "
        />
      </div>
    </div>
  );
}
