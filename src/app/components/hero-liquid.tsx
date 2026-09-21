"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LiquidDistortion = dynamic(() => import("./liquid-distortion"), { ssr: false });

export default function HeroLiquid({ src }: { src: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!enabled) return null;

  return (
    <LiquidDistortion src={src} resolution={4} cursorSize={0.5} cursorPower={1} distortionPower={0.8} />
  );
}
