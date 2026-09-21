"use client";

import SiteHeader from "../../../../components/site-header";
import { Appear, motion, useCaseHeroScroll } from "../../../../components/motion-primitives";
import type { ProjectItem } from "../../../../content";

const EASE_IMAGE = [0.44, 0, 0.56, 1] as const;

const CONTENT_SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1, delay: 0.1 } as const;

export default function ProjectHero({ p }: { p: ProjectItem; total?: number }) {
  const { opacity, y } = useCaseHeroScroll();

  return (
    <motion.section
      style={{ y, opacity }}
      className="w-full h-screen flex sticky top-0 z-1 p-6 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-005 max-desk:h-auto max-desk:min-h-[42rem] max-desk:pt-24 max-desk:pb-10"
    >
      <Appear
        className="block absolute inset-0 z-0 overflow-clip"
        initial={{ opacity: 0.001, scale: 1.2 }}
        transition={{ type: "tween", duration: 1, delay: 0, ease: EASE_IMAGE }}
      >
        <img
          className="w-[110%] h-[110%] max-w-none block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-70 [filter:blur(5px)]"

          alt={p.image.alt}
          height={p.image.height}
          sizes="110vw"
          src={p.image.src}
          srcSet={p.image.srcSet}
          width={p.image.width}
        />
      </Appear>

      <SiteHeader variant="page" active="/work/portfolio" />

      <motion.div
        className="w-full max-w-360 flex relative z-1 grow flex-col justify-between items-center content-center max-desk:grow-0 max-desk:gap-20"
        initial={{ opacity: 0.001, y: 70 }}
        animate={{ opacity: 1, y: 0, transition: CONTENT_SPRING }}
      >
        <div className="w-full h-0 shrink-0 max-desk:hidden" aria-hidden="true" />

        <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0">
          <div className="hidden desk:block absolute -inset-y-6.5 left-1/2 w-248 -translate-x-1/2 pointer-events-none" aria-hidden="true">
            <Crosshair className="absolute left-0 top-0" />
            <Crosshair className="absolute right-0 top-0" />
            <Crosshair className="absolute left-0 bottom-0" />
            <Crosshair className="absolute right-0 bottom-0" />
          </div>
          <h2 className="w-full block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] text-[2.5rem] leading-[2.5rem] tracking-[-1.2px] text-center tab:text-[4rem] tab:leading-[4rem] tab:tracking-[-1.9px] desk:text-[6.25rem] desk:leading-[6.25rem] desk:tracking-[-3px]">
            {p.title}
          </h2>
        </div>

        <div className="w-full flex relative justify-between items-start content-start shrink-0 gap-10 max-desk:flex-col max-desk:justify-start max-desk:items-start max-desk:content-start max-desk:gap-6">
          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
              {p.category}
            </p>
          </div>

          <div className="w-[12.5625rem] flex relative desk:w-[18.9375rem] desk:pl-[6.375rem] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full max-desk:max-w-75">
            <p className="block text-surface [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
              {p.summary}
            </p>
          </div>

          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden">
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
              {"© " + p.year}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Crosshair({ className }: { className?: string }) {
  return (
    <div className={`w-4 h-4 block ${className ?? ""}`}>
      <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] bg-surface-2" />
      <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] bg-surface-2 transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
    </div>
  );
}
