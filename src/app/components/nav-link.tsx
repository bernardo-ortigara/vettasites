import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  href: string;
  description: string;
  description2: string;
};
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className="flex relative justify-center items-end content-end shrink-0 gap-3 overflow-clip text-accent cursor-pointer max-desk:hidden" href={d.href}>
      <div className={cn("h-3.5 flex relative shrink-0 gap-2.5 max-desk:hidden", styles.className)}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden", styles.className2)}>
          <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px] max-desk:hidden">
            {d.description}
          </p>
        </div>
        <div className="w-px h-px block absolute bottom-0 -left-px z-1 min-w-0 shrink-0 overflow-hidden bg-bone max-desk:hidden" />
      </div>
      <div className={cn("flex relative pb-2 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:hidden", styles.className3)}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-desk:hidden", styles.className4)}>
          <p className="block text-bone-soft font-display text-[0.625rem] font-bold [font-variation-settings:'wght'_600] leading-[11.2px] max-desk:hidden">
            {d.description2}
          </p>
        </div>
      </div>
    </a>
  );
}
