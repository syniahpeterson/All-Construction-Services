import { Link } from "react-router-dom";

import { company } from "../../../data/site/company";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 sm:gap-4"
      aria-label={`${company.name} Home`}
    >
      <img
        src={company.logo}
        alt={company.name}
        className="
          h-10
          w-auto
          transition-transform
          duration-300
          group-hover:scale-105
          sm:h-12
        "
      />

      <div className="hidden sm:block">
        <h1
          className="
            text-base
            font-bold
            leading-none
            text-[var(--color-text)]
            sm:text-lg
          "
        >
          {company.name}
        </h1>

        <p
          className="
            mt-1
            text-sm
            text-[var(--color-text-muted)]
            transition-colors
            duration-300
            group-hover:text-[var(--color-primary)]
          "
        >
          {company.tagline}
        </p>
      </div>
    </Link>
  );
}
