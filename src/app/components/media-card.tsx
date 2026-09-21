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
        <div className="w-full flex relative flex-col justify-start items-center content-center gap-6 overflow-clip bg-color-005">
          <div className="w-full flex relative justify-between items-start content-start shrink-0 overflow-clip max-desk:flex-col max-desk:justify-start max-desk:gap-5">
            <div className="w-75 flex relative max-w-75 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 overflow-clip max-desk:grow-[initial] max-desk:basis-[initial]">
              <div className="w-75 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <h2 className="hidden max-desk:block max-desk:text-color-001 max-desk:[font-family:'BDO_Grotesk_Variable',_sans-serif] max-desk:text-3xl max-desk:[font-weight:1000] max-desk:leading-7.5 max-desk:tracking-[-2.1px] tab:max-desk:text-[4.375rem] tab:max-desk:leading-17.5 tab:max-desk:tracking-[-3px]">
                  {d.title2}
                </h2>
                <h1 className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-[12.1875rem] [font-weight:1000] leading-49 tracking-[-7.8px] max-desk:hidden">
                  {d.title3}
                </h1>
              </div>
            </div>
            <div className="w-[73.5%] flex relative max-w-237 justify-center items-start content-start grow shrink-0 basis-0 gap-16.5 overflow-clip max-desk:w-full max-desk:flex-col max-desk:gap-10 max-desk:grow-[initial] max-desk:basis-[initial]">
              <ScrollZoom
                className="w-[48.5%] h-[17.8125rem] flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden max-desk:w-full"
                innerClassName="w-full h-full block relative rounded-[5px] overflow-clip"
              >
                <div className="h-full block absolute top-0 inset-x-0 rounded-[5px]">
                  <img className={cn("w-full h-full block rounded-[5px] overflow-clip object-cover", styles.className)} alt={d.alt} height={d.height} sizes="406px" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                </div>
              </ScrollZoom>
              <div className="w-91.5 flex relative py-[0.6875rem] flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-29 overflow-clip max-desk:w-full max-desk:gap-7.5 max-desk:py-0 max-desk:grow-[initial] max-desk:basis-[initial] tab:max-desk:w-180">
                <div className="w-91.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full">
                  <h4 className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-[3.5rem] [font-weight:1000] leading-14 tracking-[-1.7px] max-tab:text-[2.5rem] max-tab:leading-10">
                    {d.title4}
                  </h4>
                </div>
                <div className="w-91.5 flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-clip max-desk:w-full">
                  <div className="w-91.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full">
                    <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
                      {d.description}
                    </p>
                  </div>
                  <div className="w-91.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:w-full">
                    <p className="block text-surface [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
                      {d.description2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px block relative shrink-0 overflow-clip bg-surface-5">
          </div>
        </div>
      </div>
    </div>
  );
}
