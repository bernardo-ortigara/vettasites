"use client";

import { useState } from "react";
import { motion } from "motion/react";

import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
import { CardScale } from "./stacked-cards";

const HOVER_SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;
export type MediaTileData = {
  href: string;
  id: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  alt2: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
};
export default function MediaTile({ d, styles, index = 0, hoverZoom = false }: { d: MediaTileData; styles: MediaTileStyles; index?: number; hoverZoom?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={cn("flex z-1 flex-col justify-center items-start content-start shrink-0 gap-5", styles.className)}>
      <a
        className={cn("w-full flex relative justify-start items-center content-center shrink-0 gap-2.5 text-accent cursor-pointer", styles.className2)}

        href={d.href}
        onMouseEnter={hoverZoom ? () => setHovered(true) : undefined}
        onMouseLeave={hoverZoom ? () => setHovered(false) : undefined}
      >
        <div className="contents min-w-0">
          <CardScale index={index} className={cn("w-full block relative grow shrink-0 basis-0", styles.className3)} id={d.id}>
            <div className={cn("h-[30.9rem] flex relative flex-col justify-center items-center content-center gap-2.5 overflow-clip max-tab:h-[30.5625rem]", styles.className4)}>
              <div className="w-full h-113 flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-night max-tab:h-[27.9125rem] max-tab:p-7.5 max-tab:flex-1">
                <div className="w-[110%] h-[31.075rem] block absolute opacity-95 min-w-0 shrink-0 overflow-clip [filter:blur(8px)] max-tab:h-[491.3px]">
                  <div className="h-full block absolute top-0 inset-x-0">
                    <img className={cn("w-full h-[31.0625rem] block overflow-clip object-cover max-tab:h-[30.6875rem]", styles.className5)} alt={d.alt} height={d.height} sizes="calc(max(min(max((min(100vw - 48px, 1440px) - 20px) / 3, 1px), 892px) - 92px, 1px) * 1.1)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                  </div>
                </div>
                <motion.div
                  className="w-108 flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden max-tab:w-full max-tab:flex-1"
                  animate={hoverZoom ? { scale: hovered ? 1.1 : 1 } : undefined}
                  transition={HOVER_SPRING}
                >
                  <div className="basis-full shrink-0 h-64 block relative rounded-[5px] overflow-clip max-desk:flex-1">
                    <div className="h-full block absolute top-0 inset-x-0 rounded-[5px]">
                      <img className={cn("w-full h-64 block rounded-[5px] overflow-clip object-cover", styles.className6)} alt={d.alt2} height={d.height2} sizes="432px" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width2} />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="w-full flex relative pr-2.5 justify-between items-start content-start shrink-0">
                <div className={cn("flex relative justify-center items-center content-center shrink-0 gap-1.5 max-desk:hidden", styles.className7)}>
                  <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden", styles.className8)}>
                    <p className="block text-night font-display font-bold leading-[16.2px] tracking-[-0.5px] max-desk:hidden">
                      {d.description}
                    </p>
                  </div>
                </div>
                <div className={cn("flex relative justify-center items-start content-start shrink-0 gap-60 overflow-clip max-desk:w-full max-desk:justify-between max-desk:flex-1 max-desk:gap-[initial]", styles.className9)}>
                  <div className="flex relative flex-col justify-center items-start content-start shrink-0 overflow-clip">
                    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className10)}>
                      <p className="block text-night font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                        {d.description2}
                      </p>
                    </div>
                    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className11)}>
                      <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                        {d.description3}
                      </p>
                    </div>
                  </div>
                  <div className="w-[2.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-night font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      {d.description4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardScale>
        </div>
      </a>
    </div>
  );
}
