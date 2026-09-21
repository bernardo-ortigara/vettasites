"use client";

import SiteHeader from "../../../components/site-header";
import { Appear, motion, useHeroScroll } from "../../../components/motion-primitives";


const EASE_IMAGE = [0.44, 0, 0.56, 1] as const;
const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

export default function PortfolioHero() {
  const { opacity, y } = useHeroScroll("portfolio-index");

  return (
    <motion.section
      style={{ opacity, y }}
      className="w-full h-screen flex sticky top-0 z-1 p-6 flex-col justify-between items-center content-center shrink-0 overflow-clip bg-ink max-desk:h-auto max-desk:min-h-[42rem] max-desk:pt-24 max-desk:pb-10 max-desk:gap-20"
    >
      <Appear
        className="block absolute inset-0 z-0 overflow-clip"
        initial={{ opacity: 0.001, scale: 1.2 }}
        transition={{ type: "tween", duration: 1, delay: 0, ease: EASE_IMAGE }}
      >
        <img fetchPriority="high" decoding="async"           className="w-[110%] h-[110%] max-w-none block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"

          alt="Women Garden"
          height="768"
          sizes="110vw"
          src="/assets/media/images/f9ae45e286be.webp"
          srcSet="/assets/media/images/bb2e456a997a.webp 512w, /assets/media/images/5a2db2dbff27.webp 1024w, /assets/media/images/f9ae45e286be.webp 1408w"
          width="1408"
        />
      </Appear>

      <SiteHeader variant="page" active="/work/portfolio" />

      <div className="w-full max-w-360 flex relative z-1 justify-between items-end content-end shrink-0 gap-10 max-desk:flex-col max-desk:justify-start max-desk:items-start max-desk:content-start max-desk:gap-10">
        <div className="flex relative flex-col justify-start items-start content-start shrink-0">
          <Appear
            className="flex relative justify-start items-start content-start shrink-0 gap-1.5"
            initial={{ opacity: 0.001, y: 20 }}
            transition={{ type: "tween", duration: 0.6, delay: 0.2, ease: EASE_UI }}
          >
            <h1 className="block text-bone font-display text-[6.25rem] font-bold leading-[6.25rem] tracking-[-3px] whitespace-pre text-nowrap max-desk:text-[4rem] max-desk:leading-16 max-desk:tracking-[-2px] max-tab:text-[3rem] max-tab:leading-12">
              Latest
            </h1>
            <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px] whitespace-pre text-nowrap">
              (07)
            </p>
          </Appear>
          <Appear
            className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap"
            initial={{ opacity: 0.001, y: 20 }}
            transition={{ type: "tween", duration: 0.6, delay: 0.3, ease: EASE_UI }}
          >
            <p className="block text-bone font-display text-[6.25rem] font-bold leading-[6.25rem] tracking-[-3px] max-desk:text-[4rem] max-desk:leading-16 max-desk:tracking-[-2px] max-tab:text-[3rem] max-tab:leading-12">
              Portfolio
            </p>
          </Appear>
        </div>

        <Appear
          className="w-[12.5625rem] flex relative desk:w-[16.0625rem] desk:pl-14 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full max-desk:max-w-75"
          initial={{ opacity: 0.001, y: 10 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.5, ease: EASE_UI }}
        >
          <p className="block text-bone-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
            A curated collection of structured visuals and modern digital systems
          </p>
        </Appear>

        <Appear
          className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden"
          initial={{ opacity: 0.001 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.6, ease: EASE_UI }}
        >
          <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
            © 2026
          </p>
        </Appear>
      </div>
    </motion.section>
  );
}
