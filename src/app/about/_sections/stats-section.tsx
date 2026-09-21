"use client";

import { ScrollReveal } from "../../components/motion-primitives";
import SectionHeader from "../../components/section-header";


const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

type Stat = { figure: string; label: string; body: string };

const STATS: Stat[] = [
  {
    figure: "2.06M",
    label: "Global Impressions",
    body: "VETTA moves beyond simple authenticity, creating refined systems that shape digital presence."
  },
  {
    figure: "160K",
    label: "Community Reach",
    body: "Elevating identity with structured clarity. VETTA crafts experiences that extend far beyond visual form."
  },
  {
    figure: "750+",
    label: "Creative Hours Logged",
    body: "Through precision and intention, VETTA transforms ideas into cohesive narratives that define brands."
  },
  {
    figure: "257+",
    label: "Projects Completed",
    body: "Blending modern aesthetics with functional design, VETTA delivers refined solutions that push brands."
  }
];

function StatCard({ s }: { s: Stat }) {
  return (
    <ScrollReveal
      className="w-full block relative"
      transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
    >
      <div className="w-full h-min flex relative flex-col justify-center items-start content-center gap-2.5 overflow-clip">
        <div className="w-full h-min flex relative justify-center items-start content-center shrink-0 gap-2.5 overflow-clip">
          <div className="w-px flex relative grow shrink-0 basis-0 flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <h2 className="block font-display text-[100px] font-bold leading-[100px] tracking-[-3px] max-tab:text-[30px] max-tab:leading-[30px] max-tab:tracking-[-2.1px] tab:max-desk:text-[70px] tab:max-desk:leading-[70px]">
              {s.figure}
            </h2>
          </div>
          <div className="w-2 h-2 block relative shrink-0">
            <div className="w-2 h-2 block absolute top-0 right-0 border-t border-r border-solid border-night" />
          </div>
        </div>
        <div className="w-full h-min flex relative flex-col justify-center items-start content-center shrink-0 gap-3.5 overflow-clip">
          <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-hairline" />
          <div className="w-full h-min flex relative flex-col justify-center items-start content-center shrink-0 gap-2.5 overflow-clip">
            <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                {s.label}
              </p>
            </div>
            <div className="w-[302px] flex relative max-w-[302px] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                {s.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function StatsSection({ stats = STATS } = {}) {
  return (
    <section
      className="w-full flex relative z-1 pt-6 px-6 pb-30 flex-col justify-start items-center content-center shrink-0 gap-[110px] bg-bone max-tab:pb-20 max-tab:gap-15 tab:max-desk:gap-20"
      id="stats"
    >
      <div className="w-full max-w-360 block relative shrink-0">
        <SectionHeader index="(05)" label="(Stats)" />
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-7.5 overflow-clip">
        <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-hairline" />
        <div className="w-full h-min grid relative justify-center gap-[110px] overflow-clip grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] auto-rows-[minmax(0,1fr)] max-tab:flex max-tab:flex-col max-tab:justify-start max-tab:items-center max-tab:gap-10">
          {stats.map((s) => <StatCard key={s.label} s={s} />)}
        </div>
      </div>
    </section>
  );
}
