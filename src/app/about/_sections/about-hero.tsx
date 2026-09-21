"use client";

import SiteHeader from "../../components/site-header";
import { Appear, motion, useHeroScroll } from "../../components/motion-primitives";


const EASE_IMAGE = [0.44, 0, 0.56, 1] as const;
const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

const STANDFIRST = "One part-time creative dedicated to   your continuous stream of projects.";

const HERO_IMG = {
  src: "/assets/media/images/65228cc19ae7.jpeg",
  srcSet:
    "/assets/media/images/556fe45f3ffa.jpeg 512w, /assets/media/images/3b9e4d23d421.jpeg 1024w, /assets/media/images/65228cc19ae7.jpeg 1200w",
  alt: "Woman Motion Blur"
};

function PlusMark() {
  return (
    <div className="w-4 h-4 block relative shrink-0">
      <div className="w-0.5 h-4 block absolute top-0 left-[7px] bg-surface-2 mix-blend-difference" />
      <div className="w-0.5 h-4 block absolute top-0 left-[7px] bg-surface-2 mix-blend-difference rotate-90" />
    </div>
  );
}

function PlusColumn() {
  return (
    <div className="w-min h-min flex relative flex-col justify-center items-center content-center shrink-0 gap-30 overflow-clip">
      <PlusMark />
      <PlusMark />
    </div>
  );
}

export default function AboutHero() {
  const { opacity, y } = useHeroScroll("process");

  return (
    <motion.section
      style={{ opacity, y }}
      className="w-full h-screen flex sticky top-0 z-1 p-6 flex-col justify-start items-center content-center shrink-0 gap-[70px] overflow-clip"
    >
      <Appear
        className="w-[110%] h-[110%] block absolute top-[-5%] left-[-5%] shrink-0 overflow-clip blur-[5px]"
        initial={{ opacity: 0.001, scale: 1.2 }}
        transition={{ type: "tween", duration: 1, delay: 0, ease: EASE_IMAGE }}
      >
        <div className="block absolute inset-0">
          <img
            className="w-full h-full block overflow-clip object-cover"

            alt={HERO_IMG.alt}
            height="673"
            width="1200"
            sizes="(min-width: 1200px) max(calc(100vw * 1.1), min(100vw - 48px, 924px)), (min-width: 810px) and (max-width: 1199.98px) max(calc(100vw * 1.1), calc(100vw - 48px)), (max-width: 809.98px) max(calc(100vw * 1.1), calc(100vw - 48px))"
            src={HERO_IMG.src}
            srcSet={HERO_IMG.srcSet}
          />
        </div>
      </Appear>

      <SiteHeader variant="hero" active="/about" />
      <div className="w-full h-17.5 block relative shrink-0 overflow-clip" />

      <Appear
        className="w-full max-w-[924px] h-[66%] flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:max-w-none tab:max-desk:h-[70%]"
        initial={{ opacity: 0.001, y: 70 }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        <div className="w-full h-px flex relative grow shrink-0 basis-0 rounded-[5px] flex-col justify-center items-center content-center gap-2.5 overflow-clip max-tab:grow-0 max-tab:shrink-0 max-tab:basis-auto max-tab:h-[354px] tab:max-desk:grow-0 tab:max-desk:shrink-0 tab:max-desk:basis-auto tab:max-desk:h-[364px]">
          <div className="block absolute inset-0 rounded-[inherit]">
            <img
              className="w-full h-full block rounded-[5px] overflow-clip object-cover"

              alt={HERO_IMG.alt}
              height="673"
              width="1200"
              sizes="(min-width: 1200px) min(100vw - 48px, 924px), calc(100vw - 48px)"
              src={HERO_IMG.src}
              srcSet={HERO_IMG.srcSet}
            />
          </div>
          <div className="w-full h-min flex relative justify-center items-center content-center shrink-0 gap-[30px] overflow-clip">
            <PlusColumn />
            <div className="w-auto h-auto flex relative flex-col justify-start shrink-0 whitespace-pre">
              <h2 className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-[100px] [font-weight:1000] leading-[100px] tracking-[-3px] max-tab:hidden tab:max-desk:text-[70px] tab:max-desk:leading-[70px]">
                We Are Here
              </h2>
              <h2 className="hidden text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] max-tab:block max-tab:text-[30px] max-tab:leading-[30px] max-tab:tracking-[-2.1px]">
                About
              </h2>
            </div>
            <PlusColumn />
          </div>
        </div>

        <div className="w-full h-min flex relative px-[30px] justify-between items-start shrink-0 max-tab:px-2.5">
          <div className="w-px h-min flex relative max-w-[630px] grow shrink-0 basis-0 justify-between items-start overflow-clip max-tab:max-w-none tab:max-desk:max-w-[450px]">
            <div className="w-auto h-auto flex relative flex-col justify-start shrink-0 whitespace-pre">
              <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
                (Our Studio)
              </p>
            </div>
            <div className="w-px h-min flex relative max-w-[200.5px] flex-wrap grow shrink-0 basis-0 flex-col justify-center items-start content-start gap-0 overflow-clip">
              <div className="w-full h-auto flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <p className="block text-surface [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
                  {STANDFIRST}
                </p>
              </div>
            </div>
          </div>
          <div className="w-min h-min flex relative justify-center items-center content-center shrink-0 gap-1.5 max-tab:hidden">
            <div className="w-auto h-auto flex relative flex-col justify-start shrink-0 whitespace-pre">
              <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
                © 2025
              </p>
            </div>
          </div>
        </div>
      </Appear>
    </motion.section>
  );
}
