"use client";

import { ScrollReveal, Parallax } from "../../components/motion-primitives";
import StaggeredText, { type ResponsiveFont } from "../../components/staggered-text";
import SectionHeader from "../../components/section-header";
import OverlapCurtain from "../../components/overlap-curtain";
import FeatureItem from "../../components/feature-item";


const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

const HEADING =
  "                                   Design-driven expression blends structured clarity and modern 3D visual systems with Swiss digital ideas, shaped by aesthetics & VETTA®.";

const HEADING_FONT: ResponsiveFont = {
  base: {
    fontFamily: "var(--font-display)",
    fontSize: "30px",
    letterSpacing: "-1.1px",
    lineHeight: "30px",
    textAlign: "left"
  },
  tab: {
    fontFamily: "var(--font-display)",
    fontSize: "38px",
    letterSpacing: "-1.2px",
    lineHeight: "38px",
    textAlign: "left"
  },
  desk: {
    fontFamily: "var(--font-display)",
    fontSize: "70px",
    letterSpacing: "-2.1px",
    lineHeight: "70px",
    textAlign: "left"
  }
};

type Step = { index: string; title: string; body: string; included: string[] };

const STEPS: Step[] = [
  {
    index: "001",
    title: "Research",
    body:
      "Exploring insights through structured analysis and clear intention. VETTA uncovers patterns and direction, creating a grounded foundation that shapes purposeful design decisions.",
    included: ["Market discovery & visual mapping", "Brand positioning review", "Dedicated creative, 20 hrs weekly"]
  },
  {
    index: "002",
    title: "Experiment",
    body:
      "Translating ideas into visual concepts with clarity, balance, and exploration. VETTA moves beyond predictable form, crafting variations that reveal new creative possibilities.",
    included: ["Concept sketches & directions", "Visual style development", "Dedicated creative, 20 hrs weekly"]
  },
  {
    index: "003",
    title: "Refinement",
    body:
      "Polishing every detail with precision and structure. VETTA refines layout, tone, and expression, delivering a cohesive system shaped for clarity and long-term impact.",
    included: ["Final design adjustments", "System-wide consistency check", "Dedicated creative, 20 hrs weekly"]
  }
];

function ProcessCard({ step }: { step: Step }) {
  return (
    <ScrollReveal
      className="w-full block relative shrink-0"
      transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
    >
      <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-10 overflow-clip">
        <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
        <div className="w-full flex relative justify-center items-start content-start shrink-0 gap-[207px] overflow-clip max-desk:flex-col max-desk:gap-[30px]">
          <div className="w-px flex relative max-w-10 grow shrink-0 basis-0 justify-start items-center content-center gap-2.5 max-desk:w-full max-desk:grow-0 max-desk:basis-auto">
            <div className="w-full flex relative flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                {step.index}
              </p>
            </div>
          </div>
          <div className="w-px flex relative grow shrink-0 basis-0 justify-between items-start content-start overflow-clip max-desk:w-full max-desk:grow-0 max-desk:basis-auto max-desk:flex-col max-desk:justify-start max-desk:gap-[30px]">
            <div className="w-px flex relative max-w-[390px] grow shrink-0 basis-0 justify-start items-start content-start gap-[207px] overflow-clip max-desk:w-full max-desk:grow-0 max-desk:basis-auto">
              <div className="w-full flex relative flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <h4 className="block font-display text-[56px] font-bold leading-[56px] tracking-[-1.7px] max-tab:text-[40px] max-tab:leading-[40px]">
                  {step.title}
                </h4>
              </div>
            </div>
            <div className="w-px flex relative max-w-[580px] pr-[178px] flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-10 overflow-clip max-desk:w-full max-desk:pr-0 max-desk:grow-0 max-desk:basis-auto">
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    {step.body}
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    What’s included
                  </p>
                </div>
                {step.included.map((description, i) => <FeatureItem key={i} d={{ description }} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ProcessSection() {
  return (
    <section
      className="w-full flex relative z-1 pt-20 px-6 pb-25 flex-col justify-start items-center content-center shrink-0 gap-12.5 bg-bone max-tab:pb-20"
      id="process"
    >
      <OverlapCurtain />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-20 max-tab:gap-15">
        <SectionHeader index="(01)" label="(Process)" />
        <div className="w-full block relative shrink-0">
          <StaggeredText
            text={HEADING}
            delay={0.1}
            duration={0.7}
            font={HEADING_FONT}
            color="var(--night)"
            ghostWeight={1000}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-start items-start content-start shrink-0 gap-12.5 overflow-clip max-tab:gap-10">
        <ScrollReveal
          className="w-full h-[80vh] flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip tab:max-desk:h-screen"
          transition={{ type: "tween", duration: 0.6, delay: 0, ease: EASE_UI }}
        >
          <Parallax
            speed={90}
            className="w-px h-[150%] block relative rounded-[5px] grow shrink-0 basis-0 overflow-clip"
          >
            <div className="block absolute inset-0 rounded-[inherit]">
              <img loading="lazy" decoding="async"                 className="w-full h-full block rounded-[5px] overflow-clip object-cover"

                alt="Men"
                height="3658"
                width="2560"
                sizes="min(100vw - 48px, 1440px)"
                src="/assets/media/images/3cb035ffe058.webp"
                srcSet="/assets/media/images/accdbe1cdadf.webp 716w, /assets/media/images/5b4ac27fcb4a.webp 1433w, /assets/media/images/3cb035ffe058.webp 2560w"
              />
            </div>
          </Parallax>
        </ScrollReveal>
        <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-10 overflow-clip">
          {STEPS.map((step) => <ProcessCard key={step.index} step={step} />)}
        </div>
      </div>
    </section>
  );
}
