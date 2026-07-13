import { Menu, X } from "lucide-react";

export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="
        flex
        items-center
        justify-center
        rounded-xl
        p-2
        text-[var(--color-text)]
        transition-all
        duration-300
        hover:bg-[var(--color-surface)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]
      "
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
}
