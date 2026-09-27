import Ticker from "../components/ticker";
import ExploreButton from "../components/explore-button";
import { cn } from "../../lib/utils";


const TICKER_SPEED = 50;
const GAP = 10;

const FADE_WIDTH = 5;

const HEADLINE = "O próximo nível começa aqui. ";

export default function ContactSection() {
  const marqueeItem = (
    <div className="h-25 flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip [overflow-clip-margin:0.2em]">
      <div className="w-auto flex relative [mix-blend-mode:difference] flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:w-auto tab:max-desk:w-auto">
        <h2
          className="block text-bone font-display text-[6.25rem] font-bold leading-25 tracking-[-0.05em] max-tab:text-[3.5rem] max-tab:leading-14 max-tab:tracking-[-0.05em] tab:max-desk:text-[4.375rem] tab:max-desk:leading-[4.375rem]"

        >
          {HEADLINE}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="w-full block relative z-1 shrink-0">
      <section className="flex relative p-6 flex-col justify-start items-center content-center gap-25 bg-bone">
        <div className="w-full h-200 flex relative rounded-[5px] max-tab:h-140 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-night">
          {/* Arte da montanha com o V da Vetta; no celular o corte puxa pra esquerda para o V aparecer */}
          <img loading="lazy" decoding="async"
            className="w-full h-full block absolute inset-0 object-cover max-tab:object-left"
            alt="Montanha nevada com o V laranja da Vetta"
            height="935"
            sizes="calc(100vw - 48px)"
            src="/assets/media/images/vetta-bg.webp"
            srcSet="/assets/media/images/vetta-bg-840.webp 840w, /assets/media/images/vetta-bg.webp 1683w"
            width="1683"
          />

          <div className="w-full flex relative pt-[5.5625rem] flex-col justify-center items-center content-center shrink-0 gap-6.5 overflow-clip max-tab:pt-10 max-tab:gap-13">
            <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-7.5 overflow-clip max-tab:gap-3 max-tab:px-3">
              <Markers className="max-tab:gap-20" />

              <div className="h-25 block relative grow shrink-0 basis-0 min-w-0 max-w-200 tab:max-desk:max-w-140">
                <Ticker
                  className="flex max-w-full max-h-full p-2.5 items-center overflow-hidden"
                  speed={TICKER_SPEED}
                  gap={GAP}
                  fadeWidth={FADE_WIDTH}
                >
                  {[marqueeItem]}
                </Ticker>
              </div>

              <Markers className="max-tab:gap-20" />
            </div>

            <ExploreButton href="/contact" label="Pedir orçamento grátis" tone="light" className="block relative shrink-0" />

          </div>
        </div>
      </section>
    </div>
  );
}

function Markers({ className }: { className?: string }) {
  return (
    <div className={cn("flex relative flex-col justify-center items-center content-center shrink-0 gap-30 overflow-clip", className)}>
      <Cross />
      <Cross />
    </div>
  );
}

function Cross() {
  return (
    <div className="w-4 h-4 block relative shrink-0">
      <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] shrink-0 bg-bone" />
      <div className="w-0.5 h-4 block absolute left-[0.4375rem] shrink-0 bg-bone transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
    </div>
  );
}
