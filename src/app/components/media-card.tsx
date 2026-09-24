import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
import { ScrollZoom } from "./motion-primitives";
export type MediaCardData = {
  title: string;
  title2: string;
  title3: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title4: string;
  description: string;
  description2: string;
  alt2: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
  title5: string;
  description3: string;
  description4: string;
};
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="contents min-w-0">
      <div className="w-full block relative z-3 shrink-0">
        <div className="w-full flex relative flex-col justify-start items-center content-center gap-6 overflow-clip bg-ink">
          <div className="w-full flex relative justify-between items-start content-start shrink-0 max-desk:flex-col max-desk:justify-start max-desk:gap-5">
            <div className="w-75 flex relative max-w-75 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 overflow-clip max-desk:grow-[initial] max-desk:basis-[initial]">
              <div className="w-75 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <h2 className="hidden max-desk:block max-desk:text-bone max-desk:font-display max-desk:text-3xl max-desk:font-bold max-desk:leading-7.5 max-desk:tracking-[-0.045em] tab:max-desk:text-[4.375rem] tab:max-desk:leading-17.5 tab:max-desk:tracking-[-0.05em]">
                  {d.title2}
                </h2>
                <span className="block text-bone font-display text-[12.1875rem] font-bold leading-49 tracking-[-0.05em] max-desk:hidden">
                  {d.title3}
                </span>
              </div>
            </div>
            <div className="w-[73.5%] flex relative max-w-237 justify-center items-start content-start grow shrink-0 basis-0 gap-10 max-desk:w-full max-desk:flex-col max-desk:gap-10 max-desk:grow-[initial] max-desk:basis-[initial]">
              <ScrollZoom
                // Caixa na proporção da própria imagem, para nada ser cortado
                style={{ aspectRatio: `${d.width} / ${d.height}` }}
                className="w-[54.85%] flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden max-desk:w-full"
                innerClassName="w-full h-full block relative rounded-[5px] overflow-clip"
              >
                <div className="h-full block absolute top-0 inset-x-0 rounded-[5px]">
                  <img loading="lazy" decoding="async" className={cn("w-full h-full block rounded-[5px] overflow-clip object-cover", styles.className)} alt={d.alt} height={d.height} sizes="406px" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                </div>
              </ScrollZoom>
              <div className="w-91.5 flex relative self-stretch flex-col justify-between items-start content-start grow shrink-0 basis-0 max-desk:w-full max-desk:gap-7.5 max-desk:justify-start max-desk:grow-[initial] max-desk:basis-[initial] tab:max-desk:w-180">
                <div className="w-91.5 flex relative -mt-[7.5px] flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full max-desk:mt-0">
                  <h4 className="block text-bone font-display text-[3.5rem] font-bold leading-14 tracking-[-0.045em] max-tab:text-[2.5rem] max-tab:leading-10">
                    {d.title4}
                  </h4>
                </div>
                <div className="w-91.5 flex relative -mb-[4.6px] flex-col justify-center items-start content-start shrink-0 gap-2.5 max-desk:w-full max-desk:mb-0">
                  <div className="w-91.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full">
                    <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      {d.description}
                    </p>
                  </div>
                  <div className="w-91.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full">
                    <p className="block text-bone-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      {d.description2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-hairline">
          </div>
        </div>
      </div>
    </div>
  );
}
