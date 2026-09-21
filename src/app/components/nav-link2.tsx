import type { NavLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLink2Data = {
  href: string;
  description: string;
  description2: string;
};
export default function NavLink2({ d, styles }: { d: NavLink2Data; styles: NavLink2Styles }) {
  return (
    <a className="flex relative justify-center items-end content-end shrink-0 gap-3 overflow-clip text-primary cursor-pointer max-desk:hidden" data-component="link" href={d.href}>
      <div className={cn("h-3.5 flex relative shrink-0 gap-2.5 max-desk:hidden", styles.className)}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden", styles.className2)}>
          <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px] max-desk:hidden">
            {d.description}
          </p>
        </div>
        <div className="w-px h-px block absolute bottom-0 -left-px z-1 min-w-0 shrink-0 overflow-hidden bg-color-001 max-desk:hidden" />
      </div>
      <div className={cn("flex relative pb-2 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:hidden", styles.className3)}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden", styles.className4)}>
          <p className="block text-surface [font-family:'BDO_Grotesk_Variable',_sans-serif] text-[0.625rem] [font-weight:1000] [font-variation-settings:'wght'_600] leading-[11.2px] max-desk:hidden">
            {d.description2}
          </p>
        </div>
      </div>
    </a>
  );
}
