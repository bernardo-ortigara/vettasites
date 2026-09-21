"use client";

import { type NavLink2Data } from "../components/nav-link2";
import SiteHeader from "../components/site-header";
import { Appear, motion, useBreakpointValue, useHeroScroll } from "../components/motion-primitives";
import HeroLiquid from "../components/hero-liquid";
import ExploreButton from "../components/explore-button";

const EASE_IMAGE = [0.44, 0, 0.56, 1] as const;
const EASE_UI = [0.44, 0, 0.34, 0.98] as const;
const EASE_SERVICES = [0.76, 0.02, 0.13, 1.01] as const;
const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

const NavLink2_data: NavLink2Data[] = [
    { href: "/", description: "Home", description2: "01" },
    { href: "/work/portfolio", description: "Portfolio", description2: "02" },
    { href: "/about", description: "About", description2: "03" },
    { href: "/contact", description: "Contact", description2: "04" }
];
export default function HeroSection({ navLink2Data = NavLink2_data } = {}) {
  const { opacity, y } = useHeroScroll();
  const wordmarkOffset = useBreakpointValue({ base: 30, desk: 170 });

  return (
    <motion.section
      style={{ opacity, y }}
      className="w-full h-screen flex sticky top-0 z-1 p-6 flex-col justify-between items-center content-center shrink-0 overflow-clip"
    >
      <Appear
        className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 shrink-0 overflow-clip"
        initial={{ opacity: 0.001, scale: 1.2 }}
        transition={{ type: "tween", duration: 1, delay: 0, ease: EASE_IMAGE }}
      >
        <div className="h-full block absolute top-0 inset-x-0">
          <img className="w-full h-full block overflow-clip object-cover" data-component="image" alt="Women in Orange BG" height="617" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/media/images/816e2cb276ac.png" srcSet="/assets/media/images/e9e4d00ce547.png 512w, /assets/media/images/dfec41af5c07.png 1024w, /assets/media/images/816e2cb276ac.png 1080w" width="1080" />
        </div>
      </Appear>
      <div className="hidden desk:block absolute inset-0 z-0">
        <HeroLiquid src="/assets/media/images/816e2cb276ac.png" />
      </div>
      <SiteHeader variant="hero" active="/" navLinks={navLink2Data} />
      <div className="w-full h-17.5 block relative shrink-0 overflow-clip" />
      <div className="w-[249.1px] h-[8.2375rem] flex absolute top-[12.0625rem] left-6 z-1 min-w-0 max-w-360 flex-col justify-center items-start content-start shrink-0 gap-10 max-tab:w-full max-desk:relative max-desk:inset-0 tab:max-desk:w-180">
        <div className="w-[249.1px] flex relative flex-col justify-center items-start content-start self-stretch shrink-0 max-tab:w-full max-desk:[align-self:initial] tab:max-desk:w-180">
          <Appear
            className="w-full max-w-75 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.4, ease: EASE_UI }}
          >
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
              {"Pick a plan, submit a job request,  "}
            </p>
          </Appear>
          <Appear
            className="w-full max-w-75 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.6, ease: EASE_UI }}
          >
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
              {"and your イメージ "}
              <span className="inline text-surface">
                {"will kickoff   "}
              </span>
            </p>
          </Appear>
          <Appear
            className="w-full max-w-75 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.8, ease: EASE_UI }}
          >
            <p className="block text-surface [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
              within 24 hours.
            </p>
          </Appear>
        </div>
        <Appear
          className="block relative shrink-0"
          initial={{ opacity: 0.001 }}
          transition={{ ...SPRING, delay: 0.6 }}
        >
          <ExploreButton href="/about" label="Explore Now " tone="light" />
        </Appear>
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-center items-start content-start shrink-0 gap-6.5 max-desk:gap-14">
        <div className="flex relative pt-7.5 pl-60 flex-col justify-center items-start content-start shrink-0 gap-1.5 max-desk:pl-0">
          <Appear
            className="w-[5.4625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.9, ease: EASE_SERVICES }}
          >
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
              <span className="inline text-surface">
                01/
              </span>
              {" Strategy"}
            </p>
          </Appear>
          <Appear
            className="w-[95.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap"
            initial={{ opacity: 0.001, y: 8 }}
            transition={{ type: "tween", duration: 0.5, delay: 1.1, ease: EASE_SERVICES }}
          >
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
              Videography
            </p>
          </Appear>
          <Appear
            className="w-[68.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap"
            initial={{ opacity: 0.001, y: 6 }}
            transition={{ type: "tween", duration: 0.5, delay: 1.3, ease: EASE_SERVICES }}
          >
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
              Branding
            </p>
          </Appear>
        </div>
        <div className="w-full flex relative justify-between items-end content-end shrink-0 max-desk:flex-col max-desk:justify-start max-desk:items-start max-desk:content-start max-desk:gap-7.5">
          <Appear
            className="w-[196.7px] flex relative justify-center items-end content-end shrink-0 gap-2.5 overflow-clip max-tab:w-full max-desk:justify-between max-desk:order-[1] max-desk:gap-[initial] tab:max-desk:w-180"
            initial={{ opacity: 0.001 }}
            transition={{ ...SPRING, delay: 0.5 }}
          >
            <div className="w-14 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
              <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
                © 2025
              </p>
            </div>
            <div className="w-[51.5%] flex relative pb-1.5 justify-start items-end content-end shrink-0 gap-[0.5625rem] max-tab:w-[77%] max-desk:justify-around max-desk:flex-1 max-desk:gap-[initial] tab:max-desk:w-[89.5%]">
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-10 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
              <div className="w-px h-2.5 block relative shrink-0 bg-surface" />
            </div>
            <div className="w-5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
              <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
                19'
              </p>
            </div>
          </Appear>
          <div className="contents min-w-0">
            <Appear
              className="w-231 block relative inset-0 shrink-0 aspect-[6.38095/1] max-tab:w-full tab:max-desk:w-180"
              initial={{ opacity: 0.001, y: wordmarkOffset }}
              transition={{ ...SPRING, delay: 0.1 }}
            >
              <div className="h-full block absolute top-0 inset-x-0">
                <svg
                  className="w-full h-full block overflow-visible"
                  viewBox="0 0 4260 668"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="VETTA"
                >
                  <text
                    x="0"
                    y="668"
                    textLength="4260"
                    lengthAdjust="spacing"
                    fill="#ffffff"
                    stroke="none"
                    fontSize="916"
                    style={{ fontFamily: "'BDO_Grotesk_Variable', sans-serif", fontWeight: 1000 }}
                  >
                    VETTA
                  </text>
                </svg>
              </div>
            </Appear>
          </div>
        </div>
      </div>
      <Appear
        className="w-4 h-30.5 flex absolute right-[55.5625rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: -100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
      </Appear>
      <Appear
        className="w-4 h-30.5 flex absolute right-[40.8125rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: 100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
      </Appear>
      <Appear
        className="w-4 h-30.5 flex absolute right-[26.0625rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: -100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
      </Appear>
      <Appear
        className="w-4 h-30.5 flex absolute right-[11.3125rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: 100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-surface-2 transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
      </Appear>
    </motion.section>
  );
}
