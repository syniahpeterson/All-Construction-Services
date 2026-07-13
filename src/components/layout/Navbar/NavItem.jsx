import { NavLink } from "react-router-dom";

import { cn } from "../../../utils/cn";

export default function NavItem({ href, children, onClick, className }) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "group relative inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300",
          isActive
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
          className,
        )
      }
    >
      {({ isActive }) => (
        <>
          {children}

          <span
            className={cn(
              "absolute left-0 -bottom-2 h-[2px] rounded-full bg-[var(--color-accent)] transition-all duration-300",
              isActive ? "w-full" : "w-0 group-hover:w-full",
            )}
          />
        </>
      )}
    </NavLink>
  );
}
