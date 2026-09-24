"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "../../lib/utils";

const SKEW_MAX = -7;
const LIFT_MAX = -220;

export default function OverlapCurtain({
  fill = "bg-bone",
  heightClass = "h-208.5",
  summit = false,
  className
}: {
  fill?: string;
  heightClass?: string;
  /** Alpinista subindo pela borda inclinada até a bandeira na ponta direita */
  summit?: boolean;
  className?: string;
} = {}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const skewY = useTransform(scrollYProgress, [0, 1], [0, SKEW_MAX], { clamp: true });
  const y = useTransform(scrollYProgress, [0, 1], [0, LIFT_MAX], { clamp: true });

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
      {summit ? <Summit progress={scrollYProgress} /> : null}
    </section>
  );
}

const TAN = Math.tan((Math.abs(SKEW_MAX) * Math.PI) / 180);
const FLAG = { h: 56, w: 55, poleX: 0.17, inset: 24 };
// Pé de trás (apoio) e pé da frente, em fração da caixa do desenho. A reta entre
// eles sobe a ~63°; giramos o boneco no pé de trás até ela seguir a borda.
const CLIMBER = { h: 64, w: 59, back: { x: 0.609, y: 0.988 }, front: { x: 0.814, y: 0.615 } };
const FEET_ANGLE =
  (Math.atan2((CLIMBER.back.y - CLIMBER.front.y) * CLIMBER.h, (CLIMBER.front.x - CLIMBER.back.x) * CLIMBER.w) * 180) / Math.PI;

/**
 * Bandeira e alpinista presos à borda de cima da cortina. A borda é uma reta que
 * gira em torno do centro (skewY) e sobe (y); aqui refazemos essa conta para
 * saber a altura da borda em qualquer x e apoiar os dois nela.
 */
function Summit({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setWidth(el.clientWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clamp = (p: number) => Math.min(Math.max(p, 0), 1);
  const edgeAt = (p: number, x: number) => LIFT_MAX * clamp(p) - TAN * clamp(p) * (x - width / 2);

  // Mastro recuado para o tecido da bandeira terminar a FLAG.inset da borda
  const flagFoot = width - FLAG.inset - FLAG.w * (1 - FLAG.poleX);
  const flagY = useTransform(progress, (p) => edgeAt(p, flagFoot) - FLAG.h);

  // Começa no meio da página e chega a um passo da bandeira na metade da
  // transição, enquanto a borda ainda está no meio da tela
  const climberFoot = useTransform(progress, (p) => {
    const t = clamp((p - 0.05) / 0.45);
    return width * 0.5 + (flagFoot - 90 - width * 0.5) * t;
  });
  const climberX = useTransform(climberFoot, (x) => x - CLIMBER.w * CLIMBER.back.x);
  const climberY = useTransform(() => edgeAt(progress.get(), climberFoot.get()) - CLIMBER.h * CLIMBER.back.y);
  // Borda inclina de 0° a SKEW_MAX junto com a rolagem
  const climberRotate = useTransform(progress, (p) => FEET_ANGLE + SKEW_MAX * clamp(p));
  const climberOpacity = useTransform(progress, [0.03, 0.15], [0, 1]);

  return (
    <div ref={ref} aria-hidden="true" className="w-full h-0 block absolute top-0 left-0 pointer-events-none max-tab:hidden">
      {width > 0 ? (
        <>
          <motion.img
            src="/assets/media/svg/bandeira.svg"
            alt=""
            width={FLAG.w}
            height={FLAG.h}
            className="block absolute top-0 left-0"
            style={{ x: flagFoot - FLAG.w * FLAG.poleX, y: flagY }}
          />
          <motion.img
            src="/assets/media/svg/alpinista.svg"
            alt=""
            width={CLIMBER.w}
            height={CLIMBER.h}
            className="block absolute top-0 left-0"
            style={{
              x: climberX,
              y: climberY,
              rotate: climberRotate,
              transformOrigin: `${CLIMBER.back.x * 100}% ${CLIMBER.back.y * 100}%`,
              opacity: climberOpacity
            }}
          />
        </>
      ) : null}
    </div>
  );
}
