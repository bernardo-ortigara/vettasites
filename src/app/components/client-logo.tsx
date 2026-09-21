import type { ClientLogoStyles } from "../_styles";
import { cn } from "../../lib/utils";

export type ClientLogoData = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};

export default function ClientLogo({ d, styles }: { d: ClientLogoData; styles: ClientLogoStyles }) {
  return (
    <div className={cn("h-42 block relative shrink-0", styles.className2)}>
      <div className={cn("h-42 flex relative rounded-[5px] flex-col justify-center items-center content-center gap-2.5 overflow-clip bg-bone-dim", styles.className3)}>
        <div className="w-26 h-4 block relative shrink-0">
          <div className={cn("w-26 h-full block absolute top-0", styles.className4)}>
            <img loading="lazy" decoding="async" className={cn("w-full h-4 block overflow-clip object-contain", styles.className5)} alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
          </div>
        </div>
      </div>
    </div>
  );
}
