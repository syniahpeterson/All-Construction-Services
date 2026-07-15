import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-lg",

  secondary: "bg-[var(--color-secondary)] text-white hover:opacity-90",

  outline:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface)]",

  ghost:
    "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface)]",

  link: "bg-transparent text-[var(--color-primary)] hover:underline p-0 h-auto",
};

const sizes = {
  sm: "h-9 px-3 text-sm whitespace-nowrap",
  md: "h-11 px-6 text-base whitespace-nowrap",
  lg: "h-12 px-6 text-base whitespace-nowrap sm:px-8 sm:text-lg",
  xl: "h-14 px-8 text-lg whitespace-nowrap",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  to,
  href,
  icon: Icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && !loading && <Icon size={18} />}

      {loading ? "Loading..." : children}

      {Icon && iconPosition === "right" && !loading && <Icon size={18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
