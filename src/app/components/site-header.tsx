"use client";

import NavLink, { type NavLinkData } from "./nav-link";
import MobileMenu from "./mobile-menu";
import { navLinkStyles } from "../_styles";
import { Appear } from "./motion-primitives";
import { cn } from "../../lib/utils";

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;
const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

export const NAV_LINKS: NavLinkData[] = [
  { href: "/", description: "Home", description2: "01" },
  { href: "/work/portfolio", description: "Portfólio", description2: "02" },
  { href: "/about", description: "Sobre", description2: "03" },
  { href: "/contact", description: "Contato", description2: "04" }
];

export default function SiteHeader({
  variant = "page",
  active,
  navLinks = NAV_LINKS
}: {
  variant?: "hero" | "page" | "fluid";
  active?: string;
  navLinks?: NavLinkData[];
}) {
  const isFluid = variant === "fluid";
  const isHero = variant === "hero" || isFluid;

  const wrapperClass = isFluid
    ? "h-17.5 block absolute left-6 right-6 z-2 shrink-0 max-desk:hidden"
    : variant === "hero"
      ? "w-308 h-17.5 block absolute left-6 z-2 shrink-0 max-desk:hidden"
      : "w-full max-w-360 h-17.5 block relative z-2 shrink-0 max-desk:hidden";

  const sideClass = isFluid ? "w-[22%]" : variant === "hero" ? "w-[16.9375rem]" : "w-[19.125rem]";
  const ceoTextClass = isFluid ? "w-full" : variant === "hero" ? "w-[11.625rem]" : "w-[13.8125rem]";
  const ceoCardClass = isFluid ? "w-full" : sideClass;

  return (
    <>
      <MobileMenu navLinks={navLinks} active={active} />

      <div className="contents min-w-0 max-desk:hidden">
        <Appear
          className={wrapperClass}
          initial={isHero ? { opacity: 0.001, y: -100 } : { opacity: 0.001 }}
          transition={isHero ? { ...SPRING, delay: 0.3 } : { type: "tween", duration: 0.5, delay: 0, ease: EASE_UI }}
        >
          <header className={cn("flex relative justify-between items-center content-center overflow-clip max-desk:hidden", variant === "hero" ? "w-308" : "w-full")}>
            <div className={cn(sideClass, "flex relative justify-start items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:hidden")}>
              <a className="w-24.5 h-4.5 block relative shrink-0 overflow-clip text-accent cursor-pointer max-desk:hidden" href="/">
                <div className="w-24.5 h-full block absolute top-0 left-0 max-desk:hidden">
                  <img decoding="async" className="w-full h-4.5 block overflow-clip object-cover aspect-[auto_296/55] max-desk:hidden" alt="Vetta Sites" height="55" src="/assets/media/images/logo.webp" width="296" />
                </div>
              </a>
            </div>
            <div className="w-[30.8375rem] block relative shrink-0 max-desk:hidden">
              <nav className="flex relative justify-center items-center content-center gap-20 max-desk:hidden">
                {navLinks.map((d, i) => (
                  <Appear
                    key={d.href}
                    className={cn(
                      "transition-opacity duration-300",
                      active && d.href !== active && "opacity-50 hover:opacity-100"
                    )}
                    initial={isHero ? { opacity: 0.001, y: -10 } : { opacity: 0.001 }}
                    transition={{ type: "tween", duration: 0.5, delay: (isHero ? 0.4 : 0.1) + i * 0.1, ease: EASE_UI }}
                  >
                    <NavLink d={d} styles={navLinkStyles[i]} />
                  </Appear>
                ))}
              </nav>
            </div>
            <div className={cn(sideClass, "block relative shrink-0 max-desk:hidden")}>
              <a className={cn(ceoCardClass, "flex relative py-[0.1875rem] pr-2 pl-[0.1875rem] rounded-[5px] justify-start items-center content-center gap-2.5 overflow-clip text-accent bg-bone-dim cursor-pointer max-desk:hidden")} href="/contact">
                <div className="w-16 h-16 flex relative rounded-[2.5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden bg-night max-desk:hidden">
                  <div className="basis-full shrink-0 h-full block relative rounded-[2.5px] max-desk:hidden">
                    <div className="w-16 h-full block absolute top-0 rounded-[2.5px] max-desk:hidden">
                      <img decoding="async" className="w-full h-16 block rounded-[2.5px] overflow-clip object-cover aspect-[auto_896/830] max-desk:hidden" alt="" height="830" sizes="64px" src="/assets/media/images/9b08cefad60d.webp" srcSet="/assets/media/images/1d62f0633629.png 512w, /assets/media/images/9b08cefad60d.webp 896w" width="896" />
                    </div>
                  </div>
                </div>
                <div className={cn(ceoTextClass, "flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-2 overflow-clip max-desk:hidden")}>
                  <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip max-desk:hidden">
                    <div className="w-30 flex relative max-w-30 pt-px flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 max-desk:hidden">
                      <div className="w-30 flex relative max-w-30 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:hidden">
                        <p className="block text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.5px] max-desk:hidden">
                          Peça um orçamento
                        </p>
                      </div>
                    </div>
                    <div className="h-3.5 flex relative flex-col justify-start items-center content-center shrink-0 gap-2.5 transform-[matrix(0.984808,0.173648,-0.173648,0.984808,0,0)] origin-[7px_7px] max-desk:hidden">
                      <div className="w-3.5 h-3.5 block relative shrink-0 [background-size:100%_100%] max-desk:hidden" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 14 14%22><g transform=%22translate(0.092 1.048) rotate(-10 6.25 6)%22><path d=%22M 5.455 0.917 C 5.455 0.41 5.865 0 6.371 0 L 11.538 0 C 12.044 0 12.455 0.41 12.455 0.917 L 12.455 6.083 C 12.455 6.59 12.044 7 11.538 7 L 6.371 7 C 5.865 7 5.455 6.59 5.455 6.083 Z%22 fill=%22var(--night)%22></path><path d=%22M 0 7.483 C 0 6.931 0.448 6.483 1 6.483 L 4.455 6.483 C 5.007 6.483 5.455 6.931 5.455 7.483 L 5.455 10.938 C 5.455 11.49 5.007 11.938 4.455 11.938 L 1 11.938 C 0.448 11.938 0 11.49 0 10.938 Z%22 fill=%22var(--night)%22></path></g></svg>\")" }} aria-hidden="true" />
                      <div className="w-3.5 h-3.5 block relative shrink-0 [background-size:100%_100%] max-desk:hidden" style={{ backgroundImage: "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 14 14%22><g transform=%22translate(0.092 1.048) rotate(-10 6.25 6)%22><path d=%22M 5.455 0.917 C 5.455 0.41 5.865 0 6.371 0 L 11.538 0 C 12.044 0 12.455 0.41 12.455 0.917 L 12.455 6.083 C 12.455 6.59 12.044 7 11.538 7 L 6.371 7 C 5.865 7 5.455 6.59 5.455 6.083 Z%22 fill=%22var(--night)%22></path><path d=%22M 0 7.483 C 0 6.931 0.448 6.483 1 6.483 L 4.455 6.483 C 5.007 6.483 5.455 6.931 5.455 7.483 L 5.455 10.938 C 5.455 11.49 5.007 11.938 4.455 11.938 L 1 11.938 C 0.448 11.938 0 11.49 0 10.938 Z%22 fill=%22var(--night)%22></path></g></svg>\")" }} aria-hidden="true" />
                    </div>
                  </div>
                  <div className={cn(ceoTextClass, "flex relative flex-col justify-center items-start content-start shrink-0 overflow-clip max-desk:hidden")}>
                    <div className={cn(ceoTextClass, "flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:hidden")}>
                      <p className="block text-night font-display font-bold leading-[16.2px] tracking-[-0.5px] max-desk:hidden">
                        Vetta Sites
                      </p>
                    </div>
                    <div className={cn(ceoTextClass, "flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-desk:hidden")}>
                      <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px] max-desk:hidden">
                        Resposta em 24h
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </header>
        </Appear>
      </div>
    </>
  );
}
