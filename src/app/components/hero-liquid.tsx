"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LiquidDistortion = dynamic(() => import("./liquid-distortion"), { ssr: false });

export default function HeroLiquid({ src, coveredBy = "about" }: { src: string; coveredBy?: string }) {
  const [enabled, setEnabled] = useState(false);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // A hero e sticky e fica "na tela" atras das secoes seguintes; pausa o shader
  // quando a secao de cima ja cobriu a viewport, senao ele roda a 60fps invisivel.
  useEffect(() => {
    if (!enabled) return;
    const target = document.getElementById(coveredBy);
    if (!target) return;
    const sync = () => setCovered(target.getBoundingClientRect().top <= 0);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [enabled, coveredBy]);

  if (!enabled) return null;

  return (
    <LiquidDistortion src={src} resolution={4} cursorSize={0.5} cursorPower={1} distortionPower={0.8} paused={covered} />
  );
}
