"use client";

import { motion, useMotionValue, animate, type PanInfo } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const SPRING = { type: "spring" as const, stiffness: 200, damping: 40 };

const DRAG_DISTANCE_RATIO = 0.3;
const DRAG_VELOCITY = 400;

export type CarouselProps = {
  items: ReactNode[];
  gap?: number;
  className?: string;
  label?: string;
};

export default function Carousel({ items, gap = 10, className, label = "Slideshow pagination controls" }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const x = useMotionValue(0);
  const count = items.length;
  const step = cardWidth + gap;

  const COPIES = 3;
  const baseIndex = count;

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setCardWidth(el.getBoundingClientRect().width);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (step <= 0) return;
    x.set(-(baseIndex + page) * step);
  }, [step, page, baseIndex, x]);

  const goTo = useCallback(
    (next: number) => {
      if (step <= 0) return;
      const wrapped = ((next % count) + count) % count;
      animate(x, -(baseIndex + next) * step, {
        ...SPRING,
        onComplete: () => x.set(-(baseIndex + wrapped) * step)
      });
      setPage(wrapped);
    },
    [count, step, baseIndex, x]
  );

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (step <= 0) return;
    const moved = info.offset.x;
    const flick = info.velocity.x;
    let delta = 0;
    if (moved < -step * DRAG_DISTANCE_RATIO || flick < -DRAG_VELOCITY) delta = 1;
    else if (moved > step * DRAG_DISTANCE_RATIO || flick > DRAG_VELOCITY) delta = -1;
    goTo(page + delta);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(page + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(page - 1); }
  };

  return (
    <div className={`relative ${className ?? ""}`}>
      <div ref={viewportRef} className="w-full block relative overflow-hidden">
        <motion.ul
          className="flex relative items-center [list-style-type:none] list-outside cursor-grab active:cursor-grabbing"
          style={{ x, gap, width: "max-content", touchAction: "pan-y" }}
          drag="x"
          dragMomentum={false}
          dragElastic={0.12}
          onDragEnd={onDragEnd}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
        >
          {Array.from({ length: COPIES }, (_, copy) =>
            items.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="list-item shrink-0"
                style={{ width: cardWidth || undefined }}
                aria-hidden={copy !== 1 || undefined}
              >
                {item}
              </li>
            ))
          )}
        </motion.ul>
      </div>

      <fieldset
        className="w-full flex absolute top-full left-0 mt-5 justify-center items-center border-0 p-0"
        aria-label={label}
      >
        <div className="w-22.5 h-7.5 flex rounded-[50px] justify-center items-center overflow-hidden bg-ink-shadow">
          {items.map((_, i) => (
            <button
              key={i}
              className="h-7.5 flex py-2.5 px-[0.3125rem] justify-center items-center overflow-hidden text-center cursor-pointer"
              aria-label={`Scroll to page ${i + 1}`}
              aria-current={i === page || undefined}
              type="button"
              onClick={() => goTo(i)}
            >
              <div
                className="w-2.5 h-2.5 block rounded-[50%] bg-bone"
                style={{ opacity: i === page ? 1 : 0.5 }}
              />
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
