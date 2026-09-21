"use client";

import { ScrollReveal, Parallax } from "../components/motion-primitives";
import StaggeredText, { type ResponsiveFont } from "../components/staggered-text";
import ExploreButton from "../components/explore-button";
import OverlapCurtain from "../components/overlap-curtain";

const HEADING =
  "                                   Estúdio de criação de sites que une estratégia, design e performance para levar marcas ao ponto mais alto do seu mercado®.";

const HEADING_FONT: ResponsiveFont = {
  base: {
    fontFamily: "var(--font-display)",
    fontSize: "30px",
    letterSpacing: "-0.04em",
    lineHeight: "30px",
    textAlign: "left"
  },
  tab: {
    fontFamily: "var(--font-display)",
    fontSize: "38px",
    letterSpacing: "-0.04em",
    lineHeight: "38px",
    textAlign: "left"
  },
  desk: {
    fontFamily: "var(--font-display)",
    fontSize: "70px",
    letterSpacing: "-0.045em",
    lineHeight: "70px",
    textAlign: "left"
  }
};

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

export default function AboutSection() {
  return (
    <section className="w-full flex relative z-1 pt-6 px-6 flex-col justify-start items-center content-center shrink-0 bg-bone" id="about">
      <OverlapCurtain />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-20 max-desk:gap-15">
        <div className="w-full block relative shrink-0">
          <div className="contents">
            <div className="w-308 h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3 max-tab:w-full tab:max-desk:w-180">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (01)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (Sobre)
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
        <div className="w-full block relative shrink-0">
          <StaggeredText
            text={HEADING}
            delay={0.1}
            duration={0.7}
            font={HEADING_FONT}
            color="var(--night)"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w-full h-27.5 block relative shrink-0 overflow-clip max-desk:h-10" />
      <div className="w-full max-w-360 flex relative justify-between items-start content-start shrink-0 overflow-clip max-desk:flex-col max-desk:justify-start max-desk:gap-10">
        <ScrollReveal
          className="w-[26.5%] h-110 flex relative rounded-[5px] justify-center items-end content-end shrink-0 gap-2.5 overflow-clip max-desk:w-full"
          transition={{ type: "tween", duration: 0.6, delay: 0, ease: EASE_UI }}
        >
          <div className="contents min-w-0">
            <div className="w-82 h-165 block relative inset-0 rounded-[5px] grow shrink-0 basis-0 overflow-clip max-tab:w-full tab:max-desk:w-180">
              <Parallax speed={90} className="h-full block absolute top-0 inset-x-0 rounded-[5px]">
                <img loading="lazy" decoding="async" className="w-full h-165 block rounded-[5px] overflow-clip object-cover aspect-[auto_2048/3640]" alt="Alpinista subindo uma parede de rocha" height="3640" sizes="328px" src="/assets/media/images/4709e99a8a57.png" srcSet="/assets/media/images/ea6687720333.png 576w, /assets/media/images/019a3df9011c.png 1152w, /assets/media/images/4709e99a8a57.png 2048w" width="2048" />
              </Parallax>
            </div>
          </div>
        </ScrollReveal>
        <div className="w-[14.3125rem] block relative self-stretch shrink-0 overflow-clip max-desk:hidden" />
        <ScrollReveal
          className="w-[42.1875rem] flex relative max-w-[52.1875rem] flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-20 overflow-clip max-tab:w-full max-desk:gap-10 max-desk:grow-[initial] max-desk:basis-[initial] tab:max-desk:w-180"
          transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
        >
          <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-50 overflow-clip max-desk:flex-col max-desk:gap-5">
            <div className="w-25 flex relative max-w-25 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:grow-[initial] max-desk:basis-[initial]">
              <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                (Estratégia)
              </p>
            </div>
            <div className="w-[23.4375rem] flex relative max-w-[26.3125rem] flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-tab:w-full max-desk:grow-[initial] max-desk:basis-[initial] tab:max-desk:w-[26.3125rem]">
              <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                Todo projeto começa pela estratégia. Entendemos o negócio, o público e a concorrência antes de desenhar a primeira tela, para que o site tenha um objetivo claro.
              </p>
            </div>
          </div>
          <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-50 overflow-clip max-desk:flex-col max-desk:gap-5">
            <div className="w-25 flex relative max-w-25 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:grow-[initial] max-desk:basis-[initial]">
              <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                (Execução)
              </p>
            </div>
            <div className="w-[23.4375rem] flex relative max-w-[26.3125rem] flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-tab:w-full max-desk:grow-[initial] max-desk:basis-[initial] tab:max-desk:w-[26.3125rem]">
              <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                Design autoral e performance andam juntos. Entregamos páginas rápidas, responsivas e preparadas para buscar, converter e crescer com a sua marca.
              </p>
            </div>
          </div>
          <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-50 overflow-clip max-desk:flex-col max-desk:gap-5">
            <div className="w-25 flex relative max-w-25 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:grow-[initial] max-desk:basis-[initial]">
              <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                (Resultado)
              </p>
            </div>
            <div className="w-[55.5%] flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-27.5 overflow-clip max-desk:w-full max-desk:gap-10 max-desk:grow-[initial] max-desk:basis-[initial]">
              <div className="w-[23.4375rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 overflow-clip max-tab:w-full tab:max-desk:w-180">
                <div className="w-[23.4375rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 overflow-clip max-tab:w-full tab:max-desk:w-180">
                  <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip">
                    <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                        Entrega inicial
                      </p>
                    </div>
                    <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] text-right">
                        Sob demanda
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-hairline" />
                </div>
                <div className="w-[23.4375rem] flex relative flex-col justify-center items-center content-center shrink-0 gap-3.5 overflow-clip max-tab:w-full tab:max-desk:w-180">
                  <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip">
                    <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                        Responsivo
                      </p>
                    </div>
                    <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                      <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] text-right">
                        100%
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-hairline" />
                </div>
              </div>
              <ExploreButton href="/about" label="Sobre a Vetta" tone="dark" className="block relative shrink-0" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
