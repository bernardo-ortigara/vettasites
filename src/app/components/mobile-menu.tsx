"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { NavLinkData } from "./nav-link";
import { cn } from "../../lib/utils";

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

function Burger({ open }: { open: boolean }) {
  return (
    <>
      <motion.span
        className="w-4.5 h-0.5 block rounded-[1px] shrink-0 bg-bone"
        animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_UI }}
      />
      <motion.span
        className="w-4.5 h-0.5 block rounded-[1px] shrink-0 bg-bone"
        animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.35, ease: EASE_UI }}
      />
    </>
  );
}

export default function MobileMenu({
  navLinks,
  active
}: {
  navLinks: NavLinkData[];
  active?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const sync = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const bar = (
    <header className="flex relative p-6 justify-start items-center content-center gap-2.5">
      <div className="basis-0 shrink-0 flex relative justify-between items-center content-center grow">
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="w-6 flex relative rounded-lg flex-col justify-center items-center content-center shrink-0 order-[1] gap-2 aspect-square cursor-pointer"
        >
          <Burger open={open} />
        </button>
        <a
          className="w-24.5 h-4.5 block relative shrink-0 overflow-clip text-accent cursor-pointer"
          href="/"
          onClick={() => setOpen(false)}
        >
          <div className="w-24.5 h-full block absolute top-0 left-0">
            <img decoding="async"               className="w-full h-4.5 block overflow-clip object-cover aspect-[auto_296/55]"
              alt=""
              height="55"
              src="/assets/media/images/logo.webp"
              width="296"
            />
          </div>
        </a>
      </div>
    </header>
  );

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] hidden max-desk:flex flex-col justify-between bg-ink"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: EASE_UI }}
        >
          <div className="w-full shrink-0">{bar}</div>

          <nav className="flex flex-col justify-start items-start grow px-6 pt-6 gap-4">
            {navLinks.map((d, i) => (
              <motion.div
                key={d.href}
                className="w-full overflow-hidden"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: EASE_UI }}
              >
                <a
                  href={d.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex w-full items-end gap-3 transition-opacity duration-300",
                    active && d.href !== active && "opacity-50"
                  )}
                >
                  <span className="text-bone font-display text-[2.25rem] font-bold leading-[2.375rem] tracking-[-1.5px]">
                    {d.description}
                  </span>
                  <span className="pb-2 text-bone-soft font-display text-[0.625rem] font-bold [font-variation-settings:'wght'_600] leading-[11.2px]">
                    {d.description2}
                  </span>
                </a>
              </motion.div>
            ))}
          </nav>

          <motion.a
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex shrink-0 mx-6 mb-10 py-[0.1875rem] pr-2 pl-[0.1875rem] rounded-[5px] justify-start items-center content-center gap-2.5 overflow-clip bg-bone-dim"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.08 + navLinks.length * 0.07, ease: EASE_UI }}
          >
            <div className="w-16 h-16 flex relative rounded-[2.5px] justify-center items-center content-center shrink-0 overflow-hidden bg-night">
              <img decoding="async"                 className="w-full h-16 block rounded-[2.5px] overflow-clip object-cover aspect-[auto_896/830]"
                alt=""
                height="830"
                sizes="64px"
                src="/assets/media/images/9b08cefad60d.webp"
                width="896"
              />
            </div>
            <div className="flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-2 overflow-clip">
              <p className="block text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                Meet the CEO
              </p>
              <div className="flex flex-col items-start">
                <p className="block text-night font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                  Lousiana KD6
                </p>
                <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                  CEO
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="hidden max-desk:block absolute top-0 left-0 w-full min-w-0 shrink-0">
      <div className="w-full h-18 block absolute top-0 left-0 z-2 shrink-0">{bar}</div>
      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
