import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "../../ui";

import HamburgerButton from "./HamburgerButton";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [setIsOpen]);

  return (
    <>
      <HamburgerButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="
                fixed
                inset-x-0
                top-[72px]
                z-50
                max-h-[calc(100vh-72px)]
                overflow-y-auto
                border-t
                border-[var(--color-border)]
                bg-[var(--color-background)]/95
                shadow-2xl
                backdrop-blur-xl
                sm:top-[80px]
                sm:max-h-[calc(100vh-80px)]
                lg:top-[88px]
                lg:max-h-[calc(100vh-88px)]
              "
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
                <MobileNavLinks onNavigate={() => setIsOpen(false)} />

                <Button to="/contact" size="lg" className="w-full sm:w-auto">
                  Free Estimate
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
