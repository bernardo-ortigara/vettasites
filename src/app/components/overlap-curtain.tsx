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
  summitTone = "brand",
  className
}: {
  fill?: string;
  heightClass?: string;
  /** Alpinista subindo pela borda inclinada até a bandeira na ponta direita */
  summit?: boolean;
  /** "light" deixa alpinista e bandeira brancos, para quando ficam sobre foto escura */
  summitTone?: "brand" | "light";
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
      {summit ? <Summit progress={scrollYProgress} tone={summitTone} /> : null}
    </section>
  );
}

const TAN = Math.tan((Math.abs(SKEW_MAX) * Math.PI) / 180);
// Mesmo corte do breakpoint `tab` do Tailwind
const MOBILE_MAX = 810;
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
function Summit({ progress, tone }: { progress: MotionValue<number>; tone: "brand" | "light" }) {
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

  // No celular os dois ficam menores e a caminhada começa mais à esquerda:
  // com os dois terços do desktop ele sairia já depois do ponto de chegada
  const mobile = width < MOBILE_MAX;
  const scale = mobile ? 0.7 : 1;
  const flag = { w: FLAG.w * scale, h: FLAG.h * scale, inset: FLAG.inset * scale };
  const climber = { w: CLIMBER.w * scale, h: CLIMBER.h * scale };
  const start = width * (mobile ? 0.2 : 0.65);
  const step = 90 * scale;

  // Mastro recuado para o tecido da bandeira terminar a FLAG.inset da borda
  const flagFoot = width - flag.inset - flag.w * (1 - FLAG.poleX);
  const flagY = useTransform(progress, (p) => edgeAt(p, flagFoot) - flag.h);

  // Começa a dois terços da página e chega a um passo da bandeira quando a
  // borda ainda está no terço de cima da tela; ~0,8px de caminhada por px rolado
  const climberFoot = useTransform(progress, (p) => {
    const t = clamp((p - 0.05) / 0.5);
    return start + (flagFoot - step - start) * t;
  });
  const climberX = useTransform(climberFoot, (x) => x - climber.w * CLIMBER.back.x);
  const climberY = useTransform(() => edgeAt(progress.get(), climberFoot.get()) - climber.h * CLIMBER.back.y);
  // Borda inclina de 0° a SKEW_MAX junto com a rolagem
  const climberRotate = useTransform(progress, (p) => FEET_ANGLE + SKEW_MAX * clamp(p));
  // Função em vez de faixa: a faixa o motion joga para o ScrollTimeline nativo,
  // que sai de sincronia com a posição e faz o boneco piscar
  // A bandeira usa a mesma opacidade: os dois surgem juntos
  const climberOpacity = useTransform(progress, (p) => clamp((p - 0.03) / 0.2));

  return (
    <div ref={ref} aria-hidden="true" className="w-full h-0 block absolute top-0 left-0 pointer-events-none">
      {width > 0 ? (
        <>
          <motion.img
            src={tone === "light" ? "/assets/media/svg/bandeira-branca.svg" : "/assets/media/svg/bandeira.svg"}
            alt=""
            width={flag.w}
            height={flag.h}
            className="block absolute top-0 left-0"
            style={{ x: flagFoot - flag.w * FLAG.poleX, y: flagY, opacity: climberOpacity }}
          />
          <motion.img
            src={tone === "light" ? "/assets/media/svg/alpinista-branco.svg" : "/assets/media/svg/alpinista.svg"}
            alt=""
            width={climber.w}
            height={climber.h}
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
