"use client";

import OverlapCurtain from "../components/overlap-curtain";
import { VETTA, whatsappLink } from "../../lib/vetta";

export default function LetWorkTogetherSection() {
  return (
    <div className="w-full block relative z-1 shrink-0 order-[1002]">
      <div className="contents">
        <footer className="flex relative pt-[2.8125rem] pb-6 px-6 flex-col justify-end items-center content-center gap-17.5 bg-ink max-tab:gap-15">
          <OverlapCurtain fill="bg-ink" heightClass="h-132.5" />
          <div className="w-full max-w-360 h-px block relative shrink-0 overflow-clip bg-bone-edge" />
          <div className="w-full max-w-360 flex relative justify-between items-start content-start shrink-0 overflow-clip max-desk:flex-col max-desk:justify-start max-desk:gap-15 tab:max-desk:gap-20">
            <div className="w-full flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-12.5 overflow-clip max-desk:grow-[initial] max-desk:basis-[initial]">
              <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-0">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <h4 className="block text-bone-soft font-display text-[3.5rem] font-bold leading-14 tracking-[-1.7px] max-tab:text-[2.5rem] max-tab:leading-10">
                    {"Vamos trabalhar juntos\u2028\u2028"}
                  </h4>
                </div>
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <h4 className="block text-bone font-display text-[3.5rem] font-bold leading-14 tracking-[-1.7px] max-tab:text-[2.5rem] max-tab:leading-10">
                    <a className="inline cursor-pointer focus:border-bone focus:text-bone focus:outline-bone focus:[text-decoration-color:var(--bone)]" href={`mailto:${VETTA.email}`} rel="noopener">
                      {VETTA.email}
                    </a>
                  </h4>
                </div>
              </div>
              <div className="w-[15.4625rem] block relative shrink-0">
                <a
                  className="h-[1.95rem] flex relative flex-col justify-center items-start content-start gap-2.5 overflow-clip text-accent cursor-pointer"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener"
                >
                  <div className="flex relative justify-start items-start content-start shrink-0 gap-36 overflow-clip">
                    <div className="w-[5.9625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                        Falar agora
                      </p>
                    </div>
                    <div className="w-2 flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden">
                      <div className="h-2 flex relative flex-col justify-start items-center content-center shrink-0 gap-2.5 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[4px_4px]">
                        <div className="w-2 h-2 block relative shrink-0 transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[4px_4px] after:content-[''] after:block after:absolute after:inset-0 after:w-2 after:h-2" />
                        <div className="w-2 h-2 block relative shrink-0 transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[4px_4px] after:content-[''] after:block after:absolute after:inset-0 after:w-2 after:h-2" />
                      </div>
                    </div>
                  </div>
                  <div className="h-px block relative self-stretch shrink-0 overflow-clip bg-bone" />
                </a>
              </div>
            </div>
            <div className="w-full max-w-115 flex relative flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-2.5 overflow-clip max-desk:grow-[initial] max-desk:basis-[initial]">
              <div className="w-full block relative max-w-115 shrink-0">
                <nav className="flex relative max-w-full flex-col justify-center items-start content-start gap-2.5">
                  <div className="w-[3.5625rem] block relative shrink-0">
                    <a className="flex relative justify-center items-end content-end gap-3 overflow-clip text-accent cursor-pointer" href="/">
                      <div className="w-[2.1125rem] flex relative justify-start items-start content-start shrink-0 gap-2.5">
                        <div className="w-[2.1125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                            Home
                          </p>
                        </div>
                      </div>
                      <div className="w-[11.3px] flex relative pb-2 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                        <div className="w-[11.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone-soft font-display text-[0.625rem] font-bold leading-[11.2px]">
                            01
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-edge" />
                  <div className="w-[70.3px] block relative shrink-0">
                    <a className="flex relative opacity-50 justify-center items-end content-end gap-3 overflow-clip text-accent cursor-pointer" href="/work/portfolio">
                      <div className="w-[45.7px] flex relative justify-start items-start content-start shrink-0 gap-2.5">
                        <div className="w-[45.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                            Portfólio
                          </p>
                        </div>
                      </div>
                      <div className="w-[12.5px] flex relative pb-2 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                        <div className="w-[12.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone-soft font-display text-[0.625rem] font-bold leading-[11.2px]">
                            02
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-edge" />
                  <div className="w-[3.6375rem] block relative shrink-0">
                    <a className="flex relative opacity-50 justify-center items-end content-end gap-3 overflow-clip text-accent cursor-pointer" href="/about">
                      <div className="w-[2.0875rem] flex relative justify-start items-start content-start shrink-0 gap-2.5">
                        <div className="w-[2.0875rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                            Sobre
                          </p>
                        </div>
                      </div>
                      <div className="w-[0.8rem] flex relative pb-2 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                        <div className="w-[0.8rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone-soft font-display text-[0.625rem] font-bold leading-[11.2px]">
                            03
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-edge" />
                  <div className="w-[4.2375rem] block relative shrink-0">
                    <a className="flex relative opacity-50 justify-center items-end content-end gap-3 overflow-clip text-accent cursor-pointer" href="/contact">
                      <div className="w-[2.6625rem] flex relative justify-start items-start content-start shrink-0 gap-2.5">
                        <div className="w-[2.6625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                            Contato
                          </p>
                        </div>
                      </div>
                      <div className="w-[0.825rem] flex relative pb-2 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
                        <div className="w-[0.825rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-bone-soft font-display text-[0.625rem] font-bold leading-[11.2px]">
                            04
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-edge" />
                </nav>
              </div>
            </div>
          </div>
          <div className="w-full max-w-360 flex relative justify-end items-center content-center shrink-0 gap-75 overflow-clip">
            <div className="w-4 h-4 block relative shrink-0">
              <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
              <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
            </div>
            <div className="w-2 h-2 block relative shrink-0">
              <div className="w-0.5 h-full block absolute top-0 left-[0.1875rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
              <div className="w-0.5 h-2 block absolute top-0 left-[0.1875rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_4px]" />
            </div>
            <div className="w-4 h-4 block relative shrink-0">
              <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
              <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
            </div>
          </div>
          <div className="w-full max-w-360 h-px block relative shrink-0 overflow-clip bg-bone-edge" />
          <div className="w-full max-w-360 flex relative justify-between items-end content-end shrink-0 overflow-clip max-desk:flex-col max-desk:justify-start max-desk:gap-5 tab:max-desk:items-start">
            <a className="w-[77%] block relative shrink-0 aspect-[1346/230] text-accent cursor-pointer max-desk:w-full" href="/">
              <div className="h-full block absolute top-0 inset-x-0">
                <img loading="lazy" decoding="async" className="w-full h-full block overflow-clip object-contain" alt="Vetta Sites" height="230" src="/assets/media/logo/vetta-horizontal-bone.svg" width="1346" />
              </div>
            </a>
            <div className="w-[196.7px] flex relative justify-center items-end content-end shrink-0 gap-2.5 overflow-clip max-desk:w-full max-desk:justify-between max-desk:gap-[initial]">
              <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                  © 2026
                </p>
              </div>
              <div className="w-[51.5%] flex relative pb-1.5 justify-start items-end content-end shrink-0 gap-[0.5625rem] max-desk:justify-around max-desk:flex-1 max-desk:gap-[initial]">
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
              <div className="w-5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                <p className="block text-bone font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                  &apos;26
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
