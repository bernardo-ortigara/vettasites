import Ticker from "../components/ticker";
import ExploreButton from "../components/explore-button";
import { Parallax } from "../components/motion-primitives";
import { cn } from "../../lib/utils";


const TICKER_SPEED = 50;
const GAP = 10;

const FADE_WIDTH = 5;

const HEADLINE = "We Are Faster, Better And Cheaper\" ";

export default function ContactSection() {
  const marqueeItem = (
    <div className="h-25 flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
      <div className="w-[1645.64px] flex relative [mix-blend-mode:difference] flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:w-[451.7px] tab:max-desk:w-[1120.45px]">
        <h2
          className="block text-bone font-display text-[6.25rem] font-bold leading-25 tracking-[-3px] max-tab:text-3xl max-tab:leading-7.5 max-tab:tracking-[-2.1px] tab:max-desk:text-[4.375rem] tab:max-desk:leading-[4.375rem]"

        >
          {HEADLINE}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="w-full block relative z-1 shrink-0">
      <section className="flex relative p-6 flex-col justify-start items-center content-center gap-25 bg-bone">
        <div className="w-full h-200 flex relative rounded-[5px] flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-night">
          <Parallax
            speed={90}
            className="h-740 block absolute top-[-2159.69px] inset-x-0 opacity-64 min-w-0 shrink-0 overflow-clip"
          >
            <div className="h-full block absolute top-0 inset-x-0">
              <img loading="lazy" decoding="async"                 className="w-full h-740 block overflow-clip object-cover aspect-[auto_768/1408]"

                alt="Villa"
                height="1408"
                sizes="calc(100vw - 48px)"
                src="/assets/media/images/7ea838c12d96.png"
                srcSet="/assets/media/images/5668003cfcd2.png 558w, /assets/media/images/7ea838c12d96.png 768w"
                width="768"
              />
            </div>
          </Parallax>

          <div className="w-full flex relative pt-32.5 flex-col justify-center items-center content-center shrink-0 gap-30 overflow-clip">
            <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-7.5 overflow-clip max-tab:gap-0">
              <Markers className="max-tab:hidden" />

              <div className="h-25 block relative grow shrink-0 basis-0 max-w-200 tab:max-desk:max-w-140">
                <Ticker
                  className="flex max-w-full max-h-full p-2.5 items-center overflow-hidden"
                  speed={TICKER_SPEED}
                  gap={GAP}
                  fadeWidth={FADE_WIDTH}
                >
                  {[marqueeItem]}
                </Ticker>
              </div>

              <Markers className="max-tab:hidden" />
            </div>

            <ExploreButton href="/contact" label="Contact Now" tone="light" className="block relative shrink-0" />

            <div className="w-56 h-81 block absolute top-[55.125px] z-1 min-w-0 rounded-[5px] shrink-0 gap-2.5 overflow-hidden max-tab:w-36 max-tab:h-52">
              <div className="w-56 h-full block absolute top-0 rounded-[5px] max-tab:w-36">
                <img loading="lazy" decoding="async"                   className="w-full h-81 block rounded-[5px] overflow-clip object-cover aspect-[auto_896/1280] max-tab:h-52"

                  alt="Women Orange BG"
                  height="1280"
                  sizes="224px"
                  src="/assets/media/images/6c6b19e154f4.webp"
                  srcSet="/assets/media/images/67b9b52f749e.png 716w, /assets/media/images/6c6b19e154f4.webp 896w"
                  width="896"
                />
              </div>
            </div>
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
      <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
      <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
    </div>
  );
}
