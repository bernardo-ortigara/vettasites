"use client";

import { ScrollReveal } from "../../components/motion-primitives";
import SectionHeader from "../../components/section-header";


const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

type Logo = { src: string; srcSet?: string; width: number; height: number; mobile: boolean };

const LOGOS: Logo[] = [
  { src: "/assets/media/images/f365e588160f.png", width: 302, height: 64, mobile: true },
  { src: "/assets/media/images/e87a3d2783c3.png", width: 206, height: 45, mobile: true },
  { src: "/assets/media/images/911144d091cb.png", width: 246, height: 64, mobile: true },
  { src: "/assets/media/images/18faef48dce9.svg", width: 408, height: 90, mobile: true },
  { src: "/assets/media/images/ac61b5b7dc60.png", width: 416, height: 52, mobile: false },
  {
    src: "/assets/media/svg/d46969807239.svg",
    srcSet: "/assets/media/svg/c353bbcb9492.svg 512w, /assets/media/svg/d46969807239.svg 524w",
    width: 524,
    height: 90,
    mobile: true
  },
  {
    src: "/assets/media/images/b4cc02e82c47.svg",
    srcSet: "/assets/media/images/42b464c29127.svg 512w, /assets/media/images/b4cc02e82c47.svg 772w",
    width: 772,
    height: 91,
    mobile: false
  },
  { src: "/assets/media/images/c34e594c2e95.svg", width: 494, height: 90, mobile: false }
];

const SLOTS: (number | null)[] = [null, 0, null, 1, 2, 3, 4, null, 5, 6, null, 7];

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <ScrollReveal
      className="w-full h-42 block relative"
      transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
    >
      <div className="w-full h-42 flex relative rounded-[5px] flex-col justify-center items-center content-center gap-2.5 overflow-clip bg-bone-dim">
        <div className="w-26 h-4 block relative shrink-0">
          <div className="w-26 h-full block absolute top-0">
            <img loading="lazy" decoding="async"               className="w-full h-4 block overflow-clip object-contain"

              alt=""
              height={logo.height}
              width={logo.width}
              sizes="104px"
              src={logo.src}
              srcSet={logo.srcSet}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ClientsSection({ logos = LOGOS } = {}) {
  return (
    <section
      className="w-full flex relative z-1 pt-6 px-6 pb-30 flex-col justify-start items-center content-center shrink-0 gap-15 bg-bone max-tab:pb-20 tab:max-desk:gap-20"
      id="clients"
    >
      <div className="w-full max-w-360 block relative shrink-0">
        <SectionHeader index="(04)" label="(Clients)" />
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-7.5 overflow-clip">
        <div className="w-full h-min grid relative justify-center gap-2.5 overflow-clip grid-cols-[repeat(6,minmax(50px,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] auto-rows-[minmax(0,1fr)] max-desk:grid-cols-[repeat(2,minmax(50px,1fr))] max-tab:flex max-tab:flex-col max-tab:justify-start max-tab:items-center max-tab:content-center">
          {SLOTS.map((slot, i) =>
            slot === null ? (
              <div key={`spacer-${i}`} className="w-full h-full block relative self-start overflow-clip max-desk:hidden" />
            ) : (
              <div
                key={slot}
                className={`w-full h-full block relative self-start overflow-clip ${logos[slot].mobile ? "" : "max-tab:hidden"}`}
              >
                <LogoTile logo={logos[slot]} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
