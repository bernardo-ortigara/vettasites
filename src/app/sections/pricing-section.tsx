import FeatureItem from "../components/feature-item";
import FeatureItemInverse from "../components/feature-item-inverse";
import OverlapCurtain from "../components/overlap-curtain";
import ExploreButton from "../components/explore-button";
import { ScrollReveal } from "../components/motion-primitives";
import { planFeaturesEssential as planFeaturesEssentialContent, planFeaturesStandard as planFeaturesStandardContent, planFeaturesComplete as planFeaturesCompleteContent } from "../content";
const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

export default function PricingSection({ planFeaturesEssential = planFeaturesEssentialContent, planFeaturesStandard = planFeaturesStandardContent, planFeaturesComplete = planFeaturesCompleteContent } = {}) {
  return (
    <section className="w-full flex relative z-1 pt-6 pb-30 px-6 flex-col justify-start items-center content-center shrink-0 gap-15 bg-bone tab:max-desk:gap-20 max-tab:pb-20">
      <OverlapCurtain />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-20">
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="w-full h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-[1.275rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      (04)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-[2.775rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      (Pricing)
                    </p>
                  </div>
                  <div className="w-[2.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px] max-tab:hidden">
                      © 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-360 flex relative justify-center items-start content-start shrink-0 gap-2.5 max-desk:flex-col">
        <div className="contents min-w-0">
          <ScrollReveal
            className="w-full block relative grow shrink-0 basis-0 max-desk:grow-[initial] max-desk:basis-[initial]"
            enter={{ opacity: 0, y: 0 }}
            transition={{ type: "tween", duration: 0.8, delay: 0.0, ease: EASE_UI }}
          >
            <div className="w-full flex relative p-7.5 rounded-[5px] flex-col justify-center items-start content-start gap-10 overflow-clip bg-bone-dim">
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    Starter
                  </p>
                </div>
                <div className="w-[207.5px] flex relative max-w-[207.5px] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                    Essential design support for new brands taking the first step.
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-wrap justify-start items-end content-end shrink-0 gap-1 overflow-clip">
                <div className="flex relative justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                  <div className="w-2.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="w-2.5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                        $
                      </p>
                    </div>
                  </div>
                  <div className="w-[102.3px] flex relative justify-center items-center content-center shrink-0 gap-2.5 max-tab:w-[71.7px]">
                    <div className="w-[102.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:w-[71.7px]">
                      <h4 className="block font-display text-[3.5rem] font-bold leading-14 tracking-[-1.7px] max-tab:text-[2.5rem] max-tab:leading-10">
                        999
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-[57.9px] flex relative pb-[0.3125rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-[57.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                      / Month
                    </p>
                  </div>
                </div>
              </div>
              <ExploreButton href="/contact" label="Join Us Now" tone="dark" className="block relative shrink-0" />
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    What’s included
                  </p>
                </div>
                {planFeaturesEssential.map((d, i) => <FeatureItem key={i} d={d} />)}
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="contents min-w-0">
          <ScrollReveal
            className="w-full block relative grow shrink-0 basis-0 max-desk:grow-[initial] max-desk:basis-[initial]"
            enter={{ opacity: 0, y: 20 }}
            transition={{ type: "tween", duration: 1.0, delay: 0.2, ease: EASE_UI }}
          >
            <div className="w-full flex relative p-7.5 rounded-[5px] flex-col justify-center items-start content-start gap-10 overflow-clip bg-bone-dim">
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    Professional
                  </p>
                </div>
                <div className="w-[207.5px] flex relative max-w-[207.5px] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                    Ideal for brands seeking refined systems and digital presence.
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-wrap justify-start items-end content-end shrink-0 gap-1 overflow-clip">
                <div className="flex relative justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                  <div className="w-2.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="w-2.5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                        $
                      </p>
                    </div>
                  </div>
                  <div className="w-[8.1875rem] flex relative justify-center items-center content-center shrink-0 gap-2.5 max-tab:w-[5.725rem]">
                    <div className="w-[8.1875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:w-[5.725rem]">
                      <h4 className="block font-display text-[3.5rem] font-bold leading-14 tracking-[-1.7px] max-tab:text-[2.5rem] max-tab:leading-10">
                        7299
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-[57.9px] flex relative pb-[0.3125rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-[57.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                      / Month
                    </p>
                  </div>
                </div>
              </div>
              <ExploreButton href="/contact" label="Join Us Now" tone="dark" className="block relative shrink-0" />
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    What’s included
                  </p>
                </div>
                {planFeaturesStandard.map((d, i) => <FeatureItem key={i} d={d} />)}
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="contents min-w-0">
          <ScrollReveal
            className="w-full block relative grow shrink-0 basis-0 max-desk:grow-[initial] max-desk:basis-[initial]"
            enter={{ opacity: 0, y: 40 }}
            transition={{ type: "tween", duration: 1.2, delay: 0.4, ease: EASE_UI }}
          >
            <div className="w-full flex relative p-7.5 rounded-[5px] flex-col justify-center items-start content-start gap-10 overflow-clip bg-ink">
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    Elite
                  </p>
                </div>
                <div className="w-[207.5px] flex relative max-w-[207.5px] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-bone-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                    High-touch and a fully crafted brand experience by VETTA.
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-wrap justify-start items-end content-end shrink-0 gap-1 overflow-clip">
                <div className="flex relative justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                  <div className="w-2.5 flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="w-2.5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                        $
                      </p>
                    </div>
                  </div>
                  <div className="w-[161.9px] flex relative justify-center items-center content-center shrink-0 gap-2.5 max-tab:w-[7.075rem]">
                    <div className="w-[161.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:w-[7.075rem]">
                      <h4 className="block text-bone font-display text-[3.5rem] font-bold leading-14 tracking-[-1.7px] max-tab:text-[2.5rem] max-tab:leading-10">
                        10999
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-[57.9px] flex relative pb-[0.3125rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-[57.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                      / Month
                    </p>
                  </div>
                </div>
              </div>
              <ExploreButton href="/contact" label="Join Us Now" tone="light" className="block relative shrink-0" />
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    What’s included
                  </p>
                </div>
                {planFeaturesComplete.map((d, i) => <FeatureItemInverse key={i} d={d} />)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
