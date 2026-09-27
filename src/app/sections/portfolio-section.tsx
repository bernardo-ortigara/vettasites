import MediaTile, { type MediaTileData } from "../components/media-tile";
import { mediaTileStyles } from "../_styles";
import { StackedCards } from "../components/stacked-cards";
import { clientProjects } from "../content";
const MediaTile_data: MediaTileData[] = clientProjects.map((c) => ({
    href: c.url, id: `${c.id}-card`,
    alt: c.image.alt, height: c.image.height, imgSrc: c.image.src, srcSet: c.image.srcSet, width: c.image.width,
    alt2: c.image.alt, height2: c.image.height, imgSrc2: c.image.src, srcSet2: c.image.srcSet, width2: c.image.width,
    description: c.index, description2: c.name, description3: c.category, description4: `© ${c.year}`
}));
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
                      Quero um site assim
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
                      <img loading="lazy" decoding="async" className="w-full h-16 block overflow-clip object-cover" alt="" height="64" src="/assets/media/logo/vetta-icone-degrade.svg" width="64" />
                    </div>
                  </div>
                </div>
                <div className="w-auto flex relative justify-center items-center content-center shrink-0 gap-2.5">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                      Ver todos ({clientProjects.length.toString().padStart(2, "0")})
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
