import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";

export type Logo2Data = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};

export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("h-42 block relative shrink-0", styles.className2)}>
      <div className={cn("h-42 flex relative rounded-[5px] flex-col justify-center items-center content-center gap-2.5 overflow-clip bg-surface-3", styles.className3)}>
        <div className="w-26 h-4 block relative shrink-0">
          <div className={cn("w-26 h-full block absolute top-0", styles.className4)}>
            <img className={cn("w-full h-4 block overflow-clip object-contain", styles.className5)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
          </div>
        </div>
      </div>
    </div>
  );
}
