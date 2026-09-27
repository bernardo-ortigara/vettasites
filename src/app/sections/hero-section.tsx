"use client";

import { type NavLinkData } from "../components/nav-link";
import SiteHeader from "../components/site-header";
import { Appear, motion, useBreakpointValue, useHeroScroll } from "../components/motion-primitives";
import HeroLiquid from "../components/hero-liquid";
import ExploreButton from "../components/explore-button";

const EASE_IMAGE = [0.44, 0, 0.56, 1] as const;
const EASE_UI = [0.44, 0, 0.34, 0.98] as const;
const EASE_SERVICES = [0.76, 0.02, 0.13, 1.01] as const;
const SPRING = { type: "spring", stiffness: 300, damping: 60, mass: 1 } as const;

const NavLink2_data: NavLinkData[] = [
    { href: "/", description: "Home", description2: "01" },
    { href: "/work/portfolio", description: "Portfólio", description2: "02" },
    { href: "/contact", description: "Contato", description2: "03" }
];
export default function HeroSection({ navLink2Data = NavLink2_data } = {}) {
  const { opacity, y } = useHeroScroll();
  const wordmarkOffset = useBreakpointValue({ base: 30, desk: 170 });
  // No celular/tablet o botão fica na escala menor, para o bloco caber na pedra escura da foto
  const ctaSize = useBreakpointValue<"sm" | "md">({ base: "sm", desk: "md" });

  return (
    <motion.section
      style={{ opacity, y }}
      className="w-full h-screen max-desk:h-svh flex sticky top-0 z-1 p-6 flex-col justify-between items-center content-center shrink-0 overflow-clip desk:grid desk:grid-cols-12 desk:grid-rows-[auto_1fr_auto] desk:gap-6 desk:items-stretch"
    >
      <Appear
        className="h-full block absolute top-0 inset-x-0 z-0 min-w-0 shrink-0 overflow-clip max-desk:bg-ink"
        initial={{ opacity: 0.001, scale: 1.2 }}
        transition={{ type: "tween", duration: 1, delay: 0, ease: EASE_IMAGE }}
      >
        <div className="h-full block absolute top-0 inset-x-0">
          {/* Mesma foto do hero de Portfólio; no celular/tablet ela ocupa a hero inteira, enquadrada no alpinista e na bandeira */}
          <img fetchPriority="high" decoding="async" className="w-full h-full block overflow-clip object-cover object-[50%_45%] max-desk:object-[58%_center] max-desk:scale-[1.12] max-desk:origin-bottom" alt="Alpinista fincando uma bandeira laranja no topo da montanha ao pôr do sol" height="937" sizes="100vw" src="/assets/media/images/projetos-hero.webp" srcSet="/assets/media/images/projetos-hero-840.webp 840w, /assets/media/images/projetos-hero.webp 1678w" width="1678" />
        </div>
      </Appear>
      <div className="hidden desk:block absolute inset-0 z-0">
        <HeroLiquid src="/assets/media/images/projetos-hero.webp" />
      </div>
      {/* Degradê para o texto da esquerda e o logo do rodapé continuarem legíveis sobre o céu claro */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.6)_100%)] desk:bg-[linear-gradient(to_right,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_45%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0)_25%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.5)_100%)]" />
      <SiteHeader variant="home" active="/" navLinks={navLink2Data} />
      <div className="w-full h-17.5 block relative shrink-0 overflow-clip desk:hidden" />
      <div className="w-[249.1px] h-[8.2375rem] flex relative z-1 min-w-0 max-w-360 flex-col justify-center items-start content-start shrink-0 gap-10 max-desk:h-auto max-desk:gap-5 max-desk:mt-auto max-desk:mb-6 max-tab:w-full tab:max-desk:w-180 desk:col-span-3 desk:row-start-2 desk:self-center">
        <div className="w-[249.1px] flex relative flex-col justify-center items-start content-start self-stretch shrink-0 max-tab:w-full max-desk:[align-self:initial] tab:max-desk:w-180">
          <Appear
            className="w-full max-w-75 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.4, ease: EASE_UI }}
          >
            <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] max-desk:text-sm max-desk:leading-[17.7px]">
              {"Sites que vendem, "}
            </p>
          </Appear>
          <Appear
            className="w-full max-w-75 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.6, ease: EASE_UI }}
          >
            <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] max-desk:text-sm max-desk:leading-[17.7px]">
              {"para o seu negócio "}
              <span className="inline text-bone-soft">
                {"chegar "}
              </span>
            </p>
          </Appear>
          <Appear
            className="w-full max-w-75 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
            initial={{ opacity: 0.001, y: 10 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.8, ease: EASE_UI }}
          >
            <p className="block text-bone-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] max-desk:text-sm max-desk:leading-[17.7px]">
              ao topo.
            </p>
          </Appear>
        </div>
        <Appear
          className="block relative shrink-0"
          initial={{ opacity: 0.001 }}
          transition={{ ...SPRING, delay: 0.6 }}
        >
          <ExploreButton href="/contact" label="Quero meu orçamento" tone="light" size={ctaSize} gap={ctaSize === "sm" ? 96 : 144} />
        </Appear>
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-center items-start content-start shrink-0 gap-6.5 max-desk:gap-14 desk:contents">
        <div className="w-full flex relative justify-between items-end content-end shrink-0 desk:contents max-desk:flex-col max-desk:justify-start max-desk:items-start max-desk:content-start max-desk:gap-7.5">
          <Appear
            className="w-[196.7px] flex relative justify-center items-end content-end shrink-0 gap-2.5 overflow-clip desk:col-span-2 desk:row-start-3 desk:self-end max-tab:w-full max-desk:justify-between max-desk:order-[1] max-desk:gap-[initial] tab:max-desk:w-180"
            initial={{ opacity: 0.001 }}
            transition={{ ...SPRING, delay: 0.5 }}
          >
            <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
              <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                © 2026
              </p>
            </div>
            <div className="w-[51.5%] flex relative pb-1.5 justify-start items-end content-end shrink-0 gap-[0.5625rem] max-tab:w-[77%] max-desk:justify-around max-desk:flex-1 max-desk:gap-[initial] tab:max-desk:w-[89.5%]">
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-10 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
              <div className="w-px h-2.5 block relative shrink-0 bg-bone-soft" />
            </div>
            <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
              <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                '26
              </p>
            </div>
          </Appear>
          <Appear
            className="flex relative items-end gap-3 shrink-0 max-tab:w-full tab:max-desk:w-180 desk:col-start-3 desk:col-span-10 desk:row-start-3 desk:justify-self-end desk:self-end desk:w-full desk:max-w-[67.1875rem]"
            initial={{ opacity: 0.001, y: wordmarkOffset }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <img
              className="hidden desk:block w-[26.4%] h-auto shrink-0 aspect-[284/179] mb-1.5"
              alt=""
              aria-hidden="true"
              src="/assets/media/logo/vetta-montanha-bone.svg"
              width="284"
              height="179"
              decoding="async"
            />
            <div className="w-full block relative shrink-0 aspect-[614/191] desk:w-auto desk:grow desk:basis-0 desk:min-w-0">
              <h1 className="h-full block absolute top-0 inset-x-0">
                <img
                  className="w-full h-full block object-contain object-bottom"
                  alt="Vetta Sites — criação de sites profissionais"
                  src="/assets/media/logo/vetta-palavra-bone.svg"
                  width="614"
                  height="191"
                  fetchPriority="high"
                  decoding="async"
                />
              </h1>
            </div>
          </Appear>
        </div>
      </div>
      <Appear
        className="w-4 h-30.5 flex absolute right-[55.5625rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: -100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
      </Appear>
      <Appear
        className="w-4 h-30.5 flex absolute right-[40.8125rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: 100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
      </Appear>
      <Appear
        className="w-4 h-30.5 flex absolute right-[26.0625rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: -100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
      </Appear>
      <Appear
        className="w-4 h-30.5 flex absolute right-[11.3125rem] bottom-[20.1875rem] z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-22.5 overflow-clip max-desk:hidden"
        initial={{ opacity: 0.001, y: 100 }}
        transition={{ ...SPRING, delay: 0.8 }}
      >
        <div className="w-4 h-4 block relative shrink-0 max-desk:hidden">
          <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend max-desk:hidden" />
          <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px] max-desk:hidden" />
        </div>
        <div className="w-4 h-4 block relative [mix-blend-mode:difference] shrink-0 max-desk:hidden" />
      </Appear>
    </motion.section>
  );
}
