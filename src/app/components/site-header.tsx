"use client";

import NavLink, { type NavLinkData } from "./nav-link";
import MobileMenu from "./mobile-menu";
import { navLinkStyles } from "../_styles";
import { Appear } from "./motion-primitives";
import ExploreButton from "./explore-button";
import { cn } from "../../lib/utils";

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;
const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

export const NAV_LINKS: NavLinkData[] = [
  { href: "/", description: "Home", description2: "01" },
  { href: "/work/portfolio", description: "Portfólio", description2: "02" },
  { href: "/contact", description: "Contato", description2: "03" }
];

export default function SiteHeader({
  variant = "page",
  active,
  navLinks = NAV_LINKS
}: {
  variant?: "home" | "hero" | "page" | "fluid";
  active?: string;
  navLinks?: NavLinkData[];
}) {
  const isFluid = variant === "fluid";
  const isHome = variant === "home";
  const isHero = variant === "hero" || isFluid || isHome;

  const wrapperClass = isHome
    ? "block relative z-2 shrink-0 col-span-12 row-start-1 max-desk:hidden"
    : isFluid
    ? "h-17.5 block absolute left-6 right-6 z-2 shrink-0 max-desk:hidden"
    : variant === "hero"
      ? "w-308 h-17.5 block absolute left-6 z-2 shrink-0 max-desk:hidden"
      : "w-full max-w-360 h-17.5 block relative z-2 shrink-0 max-desk:hidden";

  const sideClass = isFluid ? "w-[22%]" : variant === "hero" ? "w-[16.9375rem]" : "w-[19.125rem]";

  return (
    <>
      <MobileMenu navLinks={navLinks} active={active} />

      <div className="contents min-w-0 max-desk:hidden">
        <Appear
          className={wrapperClass}
          initial={isHero ? { opacity: 0.001, y: -100 } : { opacity: 0.001 }}
          transition={isHero ? { ...SPRING, delay: 0.3 } : { type: "tween", duration: 0.5, delay: 0, ease: EASE_UI }}
        >
          <header
            className={cn(
              "relative items-center content-center max-desk:hidden",
              isHome ? "grid grid-cols-12 gap-x-6" : "flex justify-between overflow-clip",
              variant === "hero" ? "w-308" : "w-full"
            )}
          >
            <div className={cn(isHome ? "col-span-2" : sideClass, "flex relative justify-start items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:hidden")}>
              <a className="w-[7.875rem] h-4.5 block relative shrink-0 overflow-clip text-accent cursor-pointer max-desk:hidden" href="/">
                <div className="w-[7.875rem] h-full block absolute top-0 left-0 max-desk:hidden">
                  <img decoding="async" className="w-full h-4.5 block overflow-clip object-contain object-left aspect-[auto_1606/230] max-desk:hidden" alt="Vetta Sites" height="230" src="/assets/media/logo/vetta-horizontal-sites-bone.svg" width="1606" />
                </div>
              </a>
            </div>
            <div className={cn("w-[30.8375rem] block relative shrink-0 max-desk:hidden", isHome && "col-start-4 col-span-6 justify-self-center")}>
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
            {/* "Saiba mais" desce meio passo para a linha de base bater com a do menu e do logo */}
            {isHome ? (
              <div className="col-start-11 col-span-2 justify-self-end block relative shrink-0 max-desk:hidden">
                <ExploreButton href="/contact" label="Saiba mais" tone="light" gap={75} size="sm" className="top-[5.5px]" />
              </div>
            ) : (
              <div className={cn(sideClass, "flex relative justify-end shrink-0 max-desk:hidden")}>
                <ExploreButton href="/contact" label="Saiba mais" tone="light" gap={75} size="sm" className="top-[5.5px]" />
              </div>
            )}
          </header>
        </Appear>
      </div>
    </>
  );
}
