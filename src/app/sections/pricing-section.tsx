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
      <OverlapCurtain summit />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-20">
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="w-full h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (04)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (Planos)
                    </p>
                  </div>
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em] max-tab:hidden">
                      © 2026
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
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                    Essencial
                  </p>
                </div>
                <div className="w-full flex relative max-w-[17rem] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                    Para quem está começando e precisa de uma presença digital bem feita.
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-wrap justify-start items-end content-end shrink-0 gap-1 overflow-clip">
                <div className="flex relative justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                  <div className="w-auto flex relative justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <h4 className="block font-display text-[3.5rem] font-bold leading-14 tracking-[-0.045em] max-tab:text-[2.5rem] max-tab:leading-10">
                        Sob
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-auto flex relative pb-[0.3125rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      medida
                    </p>
                  </div>
                </div>
              </div>
              <ExploreButton href="/contact" label="Solicitar orçamento" tone="dark" className="block relative shrink-0" />
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                    O que está incluído
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
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                    Profissional
                  </p>
                </div>
                <div className="w-full flex relative max-w-[17rem] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                    Para marcas que já vendem e querem um site preparado para crescer.
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-wrap justify-start items-end content-end shrink-0 gap-1 overflow-clip">
                <div className="flex relative justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                  <div className="w-auto flex relative justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:w-auto">
                      <h4 className="block font-display text-[3.5rem] font-bold leading-14 tracking-[-0.045em] max-tab:text-[2.5rem] max-tab:leading-10">
                        Sob
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-auto flex relative pb-[0.3125rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      medida
                    </p>
                  </div>
                </div>
              </div>
              <ExploreButton href="/contact" label="Solicitar orçamento" tone="dark" className="block relative shrink-0" />
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                    O que está incluído
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
                  <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                    Completo
                  </p>
                </div>
                <div className="w-full flex relative max-w-[17rem] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-bone-soft font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                    Projeto completo, com painel de edição e acompanhamento contínuo.
                  </p>
                </div>
              </div>
              <div className="w-full flex relative flex-wrap justify-start items-end content-end shrink-0 gap-1 overflow-clip">
                <div className="flex relative justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                  <div className="w-auto flex relative justify-center items-center content-center shrink-0 gap-2.5">
                    <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <h4 className="block text-bone font-display text-[3.5rem] font-bold leading-14 tracking-[-0.045em] max-tab:text-[2.5rem] max-tab:leading-10">
                        Sob
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-auto flex relative pb-[0.3125rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      medida
                    </p>
                  </div>
                </div>
              </div>
              <ExploreButton href="/contact" label="Solicitar orçamento" tone="light" className="block relative shrink-0" />
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                    O que está incluído
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
