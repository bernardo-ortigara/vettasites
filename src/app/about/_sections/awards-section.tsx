"use client";

import { ScrollReveal } from "../../components/motion-primitives";
import SectionHeader from "../../components/section-header";


const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

type Award = { count: string; org: string; work: string; result: string };

const AWARDS: Award[] = [
  { count: "2x", org: "Awwwards", work: "Bruten Website", result: "SOTD" },
  { count: "1x", org: "CSSD Awards", work: "VETTA Portfolio", result: "WOTD" },
  { count: "7×", org: "Behance", work: "Branding Showcase", result: "Featured" },
  { count: "5x", org: "FWA", work: "Digital Experience", result: "FOTD" },
  { count: "2x", org: "CSS Winner", work: "Creative Website", result: "SOTD" },
  { count: "4x", org: "Mindsparkle", work: "Modern Design", result: "Feature" },
  { count: "3x", org: "Dribbble", work: "Visual Design", result: "Highlighted" },
  { count: "8x", org: "Web Excellence Awards", work: "Brand System", result: "Winner" }
];

function Cell({
  text,
  dim = false,
  align = "start"
}: {
  text: string;
  dim?: boolean;
  align?: "start" | "right" | "right-below-desk";
}) {
  const alignClass =
    align === "right" ? "text-right" : align === "right-below-desk" ? "max-desk:text-right" : "";
  return (
    <div className="w-px flex relative grow shrink-0 basis-0 flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
      <p className={`block [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px] ${alignClass} ${dim ? "desk:text-color-002" : ""}`}>
        {text}
      </p>
    </div>
  );
}

function Half({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-px h-min flex relative grow shrink-0 basis-0 justify-center items-center content-center gap-[227px] max-desk:w-full max-desk:grow-0 max-desk:basis-auto max-desk:gap-10">
      {children}
    </div>
  );
}

function Rule() {
  return <div className="w-full h-px block relative shrink-0 overflow-hidden bg-color-003" />;
}

function AwardRow({ a, last }: { a: Award; last: boolean }) {
  return (
    <ScrollReveal
      className="w-full block relative shrink-0"
      transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
    >
      <div className="w-full flex relative flex-col justify-center items-center content-center gap-5 overflow-hidden">
        <Rule />
        <div className="w-full h-min flex relative justify-start items-start content-start shrink-0 gap-[227px] overflow-hidden max-desk:flex-col max-desk:gap-[30px]">
          <Half>
            <Cell text={a.count} />
            <Cell text={a.org} align="right-below-desk" />
          </Half>
          <Half>
            <Cell text={a.work} />
            <Cell text={a.result} dim align="right" />
          </Half>
        </div>
        {last && <Rule />}
      </div>
    </ScrollReveal>
  );
}

export default function AwardsSection({ awards = AWARDS } = {}) {
  return (
    <section
      className="w-full flex relative z-1 pt-6 px-6 pb-[90px] flex-col justify-start items-center content-center shrink-0 gap-20 bg-color-001 max-tab:pb-20 max-tab:gap-15"
      id="awards"
    >
      <div className="w-full max-w-360 block relative shrink-0">
        <SectionHeader index="(03)" label="(Awards)" />
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-5 overflow-clip">
        {awards.map((a, i) => <AwardRow key={i} a={a} last={i === awards.length - 1} />)}
      </div>
    </section>
  );
}
