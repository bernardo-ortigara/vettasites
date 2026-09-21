"use client";

import { motion, useMotionValue, useTransform, type MotionValue } from "motion/react";
import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";

const TY_PER_SPACING = 25.27;

type StackCtx = { ty: MotionValue<number>; total: number };
const Ctx = createContext<StackCtx | null>(null);

export function StackedCards({
  total,
  className,
  children
}: {
  total: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ty = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let firstTop = 0;
    let spacing = 0;
    let active = false;

    const measure = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      active = kids.length >= 2;
      if (!active) return;
      const parent = kids[0].offsetParent as HTMLElement | null;
      const parentTop = parent ? parent.getBoundingClientRect().top + window.scrollY : 0;
      firstTop = parentTop + kids[0].offsetTop;
      spacing = kids[1].offsetTop - kids[0].offsetTop;
      if (spacing <= 0) active = false;
    };

    const update = () => {
      if (!active) { ty.set(0); return; }
      const p = Math.min(Math.max((window.scrollY - firstTop) / spacing, 0), total - 1);
      ty.set(TY_PER_SPACING * p);
    };

    let queued = 0;
    const onScroll = () => {
      if (queued) return;
      queued = requestAnimationFrame(() => {
        queued = 0;
        update();
      });
    };

    const sync = () => { measure(); update(); };
    sync();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => {
      if (queued) cancelAnimationFrame(queued);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      observer.disconnect();
    };
  }, [total, ty]);

  return (
    <Ctx.Provider value={{ ty, total }}>
      <div ref={ref} className={className}>{children}</div>
    </Ctx.Provider>
  );
}

export function CardScale({
  index,
  className,
  id,
  children
}: {
  index: number;
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const ctx = useContext(Ctx);
  const zero = useMotionValue(0);
  const source = ctx ? ctx.ty : zero;
  const behind = ctx ? ctx.total - 1 - index : 0;
  const scale = useTransform(source, (v) => 1 - (behind * v) / 1000);
  const y = useTransform(source, (v) => -v);

  return (
    <motion.div className={className} id={id} style={{ scale, y }}>
      {children}
    </motion.div>
  );
}
