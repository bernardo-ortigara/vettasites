"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "../../lib/utils";

export default function OverlapCurtain({
  fill = "bg-color-001",
  heightClass = "h-208.5",
  className
}: {
  fill?: string;
  heightClass?: string;
  className?: string;
} = {}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -7], { clamp: true });
  const y = useTransform(scrollYProgress, [0, 1], [0, -220], { clamp: true });

  return (
    <section
      ref={ref}
      className={cn(
        "w-full flex absolute top-0 left-0 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-3",
        heightClass,
        className
      )}
    >
      <div className={cn("w-full flex relative justify-center items-center content-center grow shrink-0 basis-0", heightClass)}>
        <motion.div
          className={`w-full shrink-0 h-full block relative ${fill}`}
          style={{ skewY, y, willChange: "transform" }}
        />
      </div>
    </section>
  );
}
