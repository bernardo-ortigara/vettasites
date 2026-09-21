"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

export type TickerProps = {
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  hoverFactor?: number;
  fadeWidth?: number;
  fadeInset?: number;
  fadeAlpha?: number;
  className?: string;
  children: ReactNode[];
};

export default function Ticker({
  speed = 100,
  direction = "left",
  gap = 10,
  hoverFactor = 1,
  fadeWidth = 0,
  fadeInset = 0,
  fadeAlpha = 0,
  className,
  children
}: TickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);
  const animRef = useRef<Animation | null>(null);
  const slotCount = children.length;

  const [{ sets, travel }, setLayout] = useState({ sets: 1, travel: 0 });

  useLayoutEffect(() => {
    const container = containerRef.current;
    const strip = stripRef.current;
    if (!container || !strip || slotCount === 0) return;

    const measure = () => {
      const containerWidth = container.getBoundingClientRect().width;
      const items = Array.from(strip.children).slice(0, slotCount);
      if (items.length < slotCount || containerWidth === 0) return;
      const setWidth = items.reduce((w, el) => w + el.getBoundingClientRect().width + gap, 0);
      if (setWidth <= 0) return;
      const repeats = Math.max(1, Math.round(containerWidth / setWidth) + 1);
      const nextTravel = repeats * setWidth;
      const nextSets = Math.max(2, Math.ceil((nextTravel + containerWidth) / setWidth));
      setLayout((prev) =>
        prev.sets === nextSets && Math.abs(prev.travel - nextTravel) < 0.5
          ? prev
          : { sets: nextSets, travel: nextTravel }
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    Array.from(strip.children).slice(0, slotCount).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [gap, slotCount, sets]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || travel <= 0 || speed <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const to = direction === "left" ? -travel : travel;
    const animation = strip.animate(
      { transform: [`translateX(0px)`, `translateX(${to}px)`] },
      { duration: (Math.abs(travel) / speed) * 1000, iterations: Infinity, easing: "linear" }
    );
    animRef.current = animation;

    const onVisibility = () => (document.hidden ? animation.pause() : animation.play());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      animation.cancel();
      animRef.current = null;
    };
  }, [travel, speed, direction]);

  const onEnter = () => { if (animRef.current) animRef.current.playbackRate = hoverFactor; };
  const onLeave = () => { if (animRef.current) animRef.current.playbackRate = 1; };

  const maskImage =
    fadeWidth > 0
      ? `linear-gradient(to right, rgba(0,0,0,${fadeAlpha}) ${fadeInset}%, rgb(0,0,0) ${fadeInset + fadeWidth}%, rgb(0,0,0) ${100 - fadeInset - fadeWidth}%, rgba(0,0,0,${fadeAlpha}) ${100 - fadeInset}%)`
      : undefined;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ overflow: "hidden", maskImage, WebkitMaskImage: maskImage }}
      onPointerEnter={hoverFactor === 1 ? undefined : onEnter}
      onPointerLeave={hoverFactor === 1 ? undefined : onLeave}
    >
      <ul
        ref={stripRef}
        className="flex relative items-center [list-style-type:none] list-outside"
        style={{ gap, width: "max-content", willChange: "transform" }}
      >
        {Array.from({ length: sets }, (_, set) =>
          children.map((child, i) => (
            <TickerItem key={`${set}-${i}`} clone={set > 0}>
              {child}
            </TickerItem>
          ))
        )}
      </ul>
    </div>
  );
}

function TickerItem({ clone, children }: { clone: boolean; children: ReactNode }) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!clone || !ref.current) return;
    ref.current.querySelectorAll<HTMLElement>("a,button,input,select,textarea").forEach((el) => {
      el.tabIndex = -1;
    });
  }, [clone]);

  return (
    <li ref={ref} className="list-item shrink-0" aria-hidden={clone || undefined}>
      {children}
    </li>
  );
}
