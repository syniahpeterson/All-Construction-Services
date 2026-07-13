import NavItem from "./NavItem";

import { navigation } from "../../../data/site/navigation";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-8" aria-label="Primary Navigation">
      {navigation.map((item) => (
        <NavItem key={item.href} href={item.href}>
          {item.title}
        </NavItem>
      ))}
    </nav>
  );
}
