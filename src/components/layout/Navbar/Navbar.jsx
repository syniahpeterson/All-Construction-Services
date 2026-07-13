import { useState } from "react";

import { Button, Container } from "../../ui";

import useScrollPosition from "../../../hooks/useScrollPosition";

import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const isScrolled = useScrollPosition(25);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-[var(--z-navbar)]
        border-b
        border-transparent
        transition-all
        duration-300
        ${
          isScrolled
            ? "border-[var(--color-border)] bg-[rgba(9,9,9,0.92)] shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <Container className="px-3 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4 sm:h-[80px] lg:h-[88px]">
          <NavbarLogo />

          <div className="hidden items-center gap-8 lg:flex">
            <NavLinks />

            <Button to="/contact" size="sm" className="whitespace-nowrap">
              Free Estimate
            </Button>
          </div>

          <div className="lg:hidden">
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
}
