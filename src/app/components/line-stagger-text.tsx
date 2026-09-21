"use client";

import { motion, useAnimationControls, useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

import { cn } from "../../lib/utils";

const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

const LINE_STAGGER = 0.075;

export default function LineStaggerText({
  text,
  className,
  indentClassName,
  style
}: {
  text: string;
  className?: string;
  indentClassName?: string;
  style?: CSSProperties;
}) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimationControls();
  const inView = useInView(containerRef);

  useLayoutEffect(() => {
    const measure = () => {
      const el = ghostRef.current;
      if (!el) return;
      const node = el.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) return;

      const range = document.createRange();
      const found: string[] = [];
      let current = "";
      let bottom = -1;

      for (let i = 0; i < text.length; i++) {
        range.setStart(node, 0);
        range.setEnd(node, i + 1);
        const rect = range.getBoundingClientRect();
        if (bottom === -1) bottom = rect.bottom;
        if (rect.bottom > bottom + 2) {
          found.push(current);
          current = text[i];
          bottom = rect.bottom;
        } else {
          current += text[i];
        }
      }
      if (current) found.push(current);
      setLines(found.length > 0 ? found : [text]);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  useEffect(() => {
    if (!inView || hasAnimated || lines.length === 0) return;
    controls.start((i: number) => ({
      opacity: 1,
      y: 0,
      transition: { ...SPRING, delay: i * LINE_STAGGER }
    }));
    setHasAnimated(true);
  }, [inView, hasAnimated, lines.length, controls]);

  return (
    <>
      <div
        ref={ghostRef}
        aria-hidden="true"
        className={cn(className, indentClassName)}
        style={{ position: "absolute", visibility: "hidden", pointerEvents: "none", width: "100%" }}
      >
        {text}
      </div>
      <h3 ref={containerRef} className={className} style={style}>
        {lines.map((line, i) => (
          <motion.span
            key={i}
            className={cn("block", i === 0 && indentClassName)}
            custom={i}
            initial={{ opacity: 0.001, y: 10 }}
            animate={controls}
            style={{ willChange: "transform" }}
          >
            {line || " "}
          </motion.span>
        ))}
      </h3>
    </>
  );
}
