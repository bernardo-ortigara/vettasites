import OverlapCurtain from "../components/overlap-curtain";
import Icon from "../svgs/svg-icon";
import FaqAccordionItem from "../components/faq-accordion-item";
import { faqs as faqsContent } from "../content";

export default function FrequentlyAskedQuestionsSection({
  faqs = faqsContent,
  index = "(09)",
  padTop = "pt-6",
  curtain = false
} = {}) {
  return (
    <div className="w-full block relative z-1 shrink-0 order-[1001]">
      <div className="contents">
        <section className={`flex relative ${padTop} pb-30 px-6 flex-col justify-start items-center content-center gap-17.5 bg-bone`}>
          {curtain ? <OverlapCurtain heightClass="h-132.5" /> : null}
          <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-3">
            <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
            <div className="w-full flex relative justify-between items-start content-start shrink-0 max-desk:flex-col max-desk:justify-start max-desk:gap-10">
              <div className="w-full max-w-140 flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-10 max-desk:grow-[initial] max-desk:basis-[initial]">
                <div className="w-full max-w-[394.5px] flex relative justify-between items-center content-center shrink-0">
                  <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                    <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                    <div className="w-[20.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                        {index}
                      </p>
                    </div>
                  </div>
                  <div className="w-[158.3px] flex relative justify-center items-center content-center shrink-0 gap-1.5">
                    <div className="w-[158.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                        (Frequently Asked Questions)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[19.125rem] block relative shrink-0 max-tab:w-full">
                  <a className="w-full h-[12.6875rem] flex relative p-1 rounded-[5px] flex-col justify-center items-center content-center gap-3.5 overflow-clip text-accent bg-bone-dim cursor-pointer" href="https://www.youtube.com/" rel="noopener" target="_blank">
                    <div className="w-full h-[9.675rem] flex relative rounded-[2.5px] justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 overflow-hidden bg-night">
                      <div className="basis-0 shrink-0 h-full block relative rounded-[2.5px] grow overflow-clip">
                        <div className="h-full block absolute top-0 inset-x-0 rounded-[2.5px]">
                          <img loading="lazy" decoding="async" className="w-full h-full block rounded-[2.5px] overflow-clip object-cover" alt="Curly Woman" height="1024" sizes="max(100vw - 8px, 1px)" src="/assets/media/images/5961dfd8498b.png" srcSet="/assets/media/images/5961dfd8498b.png 512w, /assets/media/images/bc0753854a2c.png 1024w" width="1024" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex relative pb-2.5 px-2.5 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                      <div className="w-full flex relative justify-start items-center content-center grow shrink-0 basis-0 gap-1 overflow-clip">
                        <div className="flex relative flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                          <div className="w-2 h-[0.5625rem] block relative shrink-0" aria-hidden="true">
                            <div className="h-full block">
                              <Icon />
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                          <p className="block text-night font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                            Play
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex relative justify-start items-center content-center grow shrink-0 basis-0 gap-1 overflow-clip">
                        <div className="w-full flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                          <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px] text-right">
                            Showreel
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full block relative max-w-177.5 grow shrink-0 basis-0 max-desk:max-w-none max-desk:grow-[initial] max-desk:basis-[initial]">
                <div className="flex relative max-w-full flex-col justify-center items-center content-center overflow-clip max-desk:max-w-none">
                  {faqs.map((d, i) => (
                    <FaqAccordionItem key={i} d={d} revealDuration={0.8 + 0.1 * i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
