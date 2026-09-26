import MediaTile, { type MediaTileData } from "../../../components/media-tile";
import type { MediaTileStyles } from "../../../_styles";
import OverlapCurtain from "../../../components/overlap-curtain";
import { clientProjects, type ClientProject } from "../../../content";

function toTile(c: ClientProject): MediaTileData {
  return {
    href: c.url,
    id: `${c.id}-card`,
    alt: c.image.alt,
    height: c.image.height,
    imgSrc: c.image.src,
    srcSet: c.image.srcSet,
    width: c.image.width,
    alt2: c.image.alt,
    height2: c.image.height,
    imgSrc2: c.image.src,
    srcSet2: c.image.srcSet,
    width2: c.image.width,
    description: c.index,
    description2: c.name,
    description3: c.category,
    description4: `© ${c.year}`
  };
}

const TILE_STYLES: MediaTileStyles = {
  className: "w-full relative",
  className3: "z-1",
  className5: "aspect-[auto_1440/778]",
  className6: "aspect-[auto_1440/778]",
  className7: "",
  className8: "",
  className9: "",
  className10: "",
  className11: ""
};

export default function PortfolioIndex() {
  return (
    <section id="portfolio-index" className="w-full flex relative z-1 pt-15 pb-30 px-6 flex-col justify-start items-center content-center shrink-0 gap-17.5 bg-bone max-desk:pt-10 max-desk:pb-20 max-desk:gap-10">
      <OverlapCurtain />

      <div className="w-full max-w-360 flex relative z-1 flex-col justify-center items-center content-center shrink-0 gap-3">
        <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
        <div className="w-full flex relative justify-between items-center content-center shrink-0">
          <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
            <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em] whitespace-pre text-nowrap">
              (01)
            </p>
          </div>
          <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip max-desk:gap-10">
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em] whitespace-pre text-nowrap">
              (Portfólio)
            </p>
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em] whitespace-pre text-nowrap max-tab:hidden">
              © 2026
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-360 grid relative z-1 grid-cols-2 gap-x-2.5 gap-y-5 max-desk:grid-cols-1 max-desk:gap-y-10" id="cards">
        {clientProjects.map((c) => (
          <MediaTile key={c.id} d={toTile(c)} styles={TILE_STYLES} hoverZoom />
        ))}
      </div>
    </section>
  );
}
