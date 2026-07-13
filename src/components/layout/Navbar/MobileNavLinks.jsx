import { navigation } from "../../../data/site/navigation";
import NavItem from "./NavItem";

export default function MobileNavLinks({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
      {navigation.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="rounded-2xl px-3 py-3 text-base text-[var(--color-text)]"
        >
          {item.title}
        </NavItem>
      ))}
    </nav>
  );
}
