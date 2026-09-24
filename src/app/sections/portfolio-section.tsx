import MediaTile, { type MediaTileData } from "../components/media-tile";
import { mediaTileStyles } from "../_styles";
import { StackedCards } from "../components/stacked-cards";
const MediaTile_data: MediaTileData[] = [
    { href: "/work/portfolio/site-institucional", id: "site-institucional-card-1", alt: "Página inicial de um site institucional", height: "752", imgSrc: "/assets/media/images/3418d4c75efa.png", srcSet: "/assets/media/images/11c385d08bb3.png 512w, /assets/media/images/4bc49ee40f65.png 1024w, /assets/media/images/3418d4c75efa.png 1392w", width: "1392", alt2: "Página inicial de um site institucional", height2: "752", imgSrc2: "/assets/media/images/3418d4c75efa.png", srcSet2: "/assets/media/images/11c385d08bb3.png 512w, /assets/media/images/4bc49ee40f65.png 1024w, /assets/media/images/3418d4c75efa.png 1392w", width2: "1392", description: "(01)", description2: "Site institucional", description3: "Sites", description4: "© 2026" },
    { href: "/work/portfolio/landing-page", id: "landing-page-card-2", alt: "Landing page aberta em um notebook", height: "1536", imgSrc: "/assets/media/images/d429b442416a.webp", srcSet: "/assets/media/images/ad9b2d2be81b.png 512w, /assets/media/images/27d11552e704.png 1024w, /assets/media/images/93c9d668a9d7.png 2048w, /assets/media/images/d429b442416a.webp 2728w", width: "2728", alt2: "Landing page aberta em um notebook", height2: "1536", imgSrc2: "/assets/media/images/d429b442416a.webp", srcSet2: "/assets/media/images/ad9b2d2be81b.png 512w, /assets/media/images/27d11552e704.png 1024w, /assets/media/images/93c9d668a9d7.png 2048w, /assets/media/images/d429b442416a.webp 2728w", width2: "2728", description: "(02)", description2: "Landing page", description3: "Landing pages", description4: "© 2026" },
    { href: "/work/portfolio/loja-virtual", id: "loja-virtual-card-3", alt: "Vitrine de uma loja virtual", height: "896", imgSrc: "/assets/media/images/5185120aa8bd.png", srcSet: "/assets/media/images/c8180f2f6a1e.png 512w, /assets/media/images/84aa5eed3e6f.png 1024w, /assets/media/images/5185120aa8bd.png 1280w", width: "1280", alt2: "Vitrine de uma loja virtual", height2: "896", imgSrc2: "/assets/media/images/5185120aa8bd.png", srcSet2: "/assets/media/images/c8180f2f6a1e.png 512w, /assets/media/images/84aa5eed3e6f.png 1024w, /assets/media/images/5185120aa8bd.png 1280w", width2: "1280", description: "(03)", description2: "Loja virtual", description3: "E-commerce", description4: "© 2026" },
    { href: "/work/portfolio/site-de-servicos", id: "site-de-servicos-card-4", alt: "Site de serviços em telas de celular", height: "768", imgSrc: "/assets/media/images/d97fcf9ca982.png", srcSet: "/assets/media/images/c05999c1edde.png 512w, /assets/media/images/f2a42560e3d8.png 1024w, /assets/media/images/d97fcf9ca982.png 1408w", width: "1408", alt2: "Site de serviços em telas de celular", height2: "768", imgSrc2: "/assets/media/images/d97fcf9ca982.png", srcSet2: "/assets/media/images/c05999c1edde.png 512w, /assets/media/images/f2a42560e3d8.png 1024w, /assets/media/images/d97fcf9ca982.png 1408w", width2: "1408", description: "(04)", description2: "Site de serviços", description3: "Sites", description4: "© 2026" }
];
export default function PortfolioSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <section className="w-full flex relative z-1 pt-6 pb-30 px-6 flex-col justify-start items-center content-center shrink-0 gap-20 bg-bone max-desk:pb-20 max-desk:gap-15">
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-20">
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="w-full h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (02)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (Portfólio)
                    </p>
                  </div>
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em] max-tab:hidden">
                      © 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-360 flex relative justify-between items-start content-start shrink-0 max-desk:flex-col max-desk:justify-start max-desk:gap-10" id="cards">
        <div className="w-62.5 h-[35.2625rem] flex sticky top-0 z-1 max-w-62.5 pt-61 pb-50 flex-col justify-center items-start content-start grow shrink-0 basis-0 gap-4 overflow-clip max-desk:h-[6.5125rem] max-desk:relative max-desk:bottom-0 max-desk:inset-x-0 max-desk:py-0 max-desk:grow-[initial] max-desk:basis-[initial]">
          <div className="w-62.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <h4 className="block font-display text-[3.5rem] font-bold leading-14 tracking-[-0.045em] max-desk:text-[2.5rem] max-desk:leading-10">
              Vetta '26
            </h4>
          </div>
          <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
          <div className="contents min-w-0">
            <div className="block relative shrink-0">
              <a className="h-[1.95rem] flex relative flex-col justify-center items-start content-start gap-2.5 overflow-clip text-accent cursor-pointer" href="/contact">
                <div className="flex relative justify-start items-start content-start shrink-0 gap-36 overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      Pedir orçamento
                    </p>
                  </div>
                  <div className="w-2 flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden">
                    <div className="h-2 flex relative flex-col justify-start items-center content-center shrink-0 gap-2.5 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[4px_4px]">
                      <div className="w-2 h-2 block relative shrink-0 transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[4px_4px] after:content-[''] after:block after:absolute after:inset-0 after:w-2 after:h-2" />
                      <div className="w-2 h-2 block relative shrink-0 transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[4px_4px] after:content-[''] after:block after:absolute after:inset-0 after:w-2 after:h-2" />
                    </div>
                  </div>
                </div>
                <div className="h-px block relative self-stretch shrink-0 overflow-clip bg-night" />
              </a>
            </div>
          </div>
        </div>
        <StackedCards total={mediaTileData.length} className="w-[59.5%] flex relative desk:max-w-223 px-11.5 flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-6 max-desk:w-full max-desk:px-0 max-desk:grow-[initial] max-desk:basis-[initial]">
          {mediaTileData.map((d, i) => <MediaTile key={i} d={d} styles={mediaTileStyles[i]} index={i} />)}
        </StackedCards>
        <div className="w-62.5 h-128.5 flex sticky top-0 z-1 max-w-62.5 pt-61 pb-50 justify-center items-center content-center grow shrink-0 basis-0 gap-2.5 overflow-clip max-desk:h-17.5 max-desk:relative max-desk:bottom-0 max-desk:inset-x-0 max-desk:justify-start max-desk:py-0 max-desk:grow-[initial] max-desk:basis-[initial]">
          <div className="contents min-w-0">
            <div className="block relative shrink-0">
              <a className="h-17.5 flex relative py-[0.1875rem] pr-4 pl-[0.1875rem] rounded-[5px] justify-start items-center content-center gap-4 overflow-clip text-accent bg-bone-dim cursor-pointer" href="/work/portfolio">
                <div className="w-16 h-16 flex relative rounded-[2.5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden bg-night">
                  <div className="basis-0 shrink-0 h-full block relative grow gap-2.5 overflow-clip">
                    <div className="w-16 h-full block absolute top-0">
                      <img loading="lazy" decoding="async" className="w-full h-16 block overflow-clip object-cover aspect-[auto_1024/1024]" alt="" height="1024" sizes="(min-width: 1200px) 64px, (min-width: 810px) and (max-width: 1199.98px) 64px, (max-width: 809.98px) 64px" src="/assets/media/images/5812c01c2bee.webp" srcSet="/assets/media/images/a49815fe3e0a.png 512w, /assets/media/images/5812c01c2bee.webp 1024w" width="1024" />
                    </div>
                  </div>
                </div>
                <div className="w-auto flex relative justify-center items-center content-center shrink-0 gap-2.5">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      Ver todos (07)
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
