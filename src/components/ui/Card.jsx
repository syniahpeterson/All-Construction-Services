import { cn } from "../../utils/cn";

const paddingSizes = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-[var(--color-border)]",
        "bg-[var(--color-surface)]",
        "shadow-md",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        paddingSizes[padding],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
