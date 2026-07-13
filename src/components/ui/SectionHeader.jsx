import { cn } from "../../utils/cn";

const alignments = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl mb-12",
        alignments[align],
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-[var(--color-text)]">
        {title}
      </h2>

      {description && (
        <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
