"use client";

import { motion, useScroll, useSpring, useTransform, type Transition, type TargetAndTransition } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Appear({
  initial,
  transition,
  className,
  style,
  children
}: {
  initial: TargetAndTransition;
  transition: Transition;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, transition }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  enter = { opacity: 0 },
  transition,
  className,
  style,
  children
}: {
  enter?: TargetAndTransition;
  transition: Transition;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={enter}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, transition }}
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  speed,
  className,
  style,
  children
}: {
  speed: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const { scrollY } = useScroll();
  const drift = 1 - speed / 100;
  const y = useTransform(scrollY, (value) => value * drift);

  return (
    <motion.div className={className} style={{ ...style, y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}

export function useBreakpointValue<T>({ base, tab, desk }: { base: T; tab?: T; desk?: T }): T {
  const [value, setValue] = useState<T>(desk ?? base);

  useEffect(() => {
    const tabMq = window.matchMedia("(min-width: 810px)");
    const deskMq = window.matchMedia("(min-width: 1200px)");
    const sync = () => setValue(deskMq.matches ? (desk ?? base) : tabMq.matches ? (tab ?? base) : base);
    sync();
    tabMq.addEventListener("change", sync);
    deskMq.addEventListener("change", sync);
    return () => {
      tabMq.removeEventListener("change", sync);
      deskMq.removeEventListener("change", sync);
    };
  }, [base, tab, desk]);

  return value;
}

function useViewportHeight() {
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const sync = () => setVh(window.innerHeight);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  return vh;
}

const CASE_CURTAIN_HEIGHT = 834;

export function useCaseHeroScroll(targetId = "case-body") {
  const { scrollY } = useScroll();
  const [range, setRange] = useState({ start: 0, length: CASE_CURTAIN_HEIGHT });

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const measure = () => {
      const top = el.getBoundingClientRect().top + window.scrollY;
      setRange({ start: top - window.innerHeight / 2, length: CASE_CURTAIN_HEIGHT });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [targetId]);

  const rawOpacity = useTransform(scrollY, [range.start, range.start + range.length], [1, 0], { clamp: true });
  const opacity = useSpring(rawOpacity, { stiffness: 500, damping: 60, mass: 1 });
  const y = useTransform(scrollY, (value) => -value * 0.1);

  return { opacity, y };
}

export function useHeroScroll(targetId = "about") {
  const { scrollY } = useScroll();
  const vh = useViewportHeight();
  const [aboutRange, setAboutRange] = useState({ start: 0, length: 1 });

  useEffect(() => {
    const about = document.getElementById(targetId);
    if (!about) return;
    const measure = () => {
      const rect = about.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      setAboutRange({ start: top - window.innerHeight, length: rect.height || 1 });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(about);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [vh, targetId]);

  const rawOpacity = useTransform(
    scrollY,
    [aboutRange.start, aboutRange.start + aboutRange.length],
    [1, 0],
    { clamp: true }
  );
  const opacity = useSpring(rawOpacity, { stiffness: 500, damping: 60, mass: 1 });
  const y = useTransform(scrollY, (value) => -value * 0.1);

  return { opacity, y };
}

export function ScrollZoom({
  from = 1.25,
  to = 1,
  className,
  innerClassName,
  children
}: {
  from?: number;
  to?: number;
  className?: string;
  innerClassName?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [from, to], { clamp: true });

  return (
    <div ref={ref} className={className}>
      <motion.div
        className={innerClassName}
        style={{ scale, transformOrigin: "center", willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export { motion, useScroll, useTransform };
