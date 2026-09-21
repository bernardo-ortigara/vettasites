import MediaTile, { type MediaTileData } from "../../../../components/media-tile";
import type { MediaTileStyles } from "../../../../_styles";
import type { ProjectItem } from "../../../../content";


function toTile(p: ProjectItem): MediaTileData {
  const srcSet = p.image.srcSet ?? p.image.src;
  return {
    href: `/work/portfolio/${p.slug}`,
    id: `${p.slug}-next`,
    alt: p.image.alt,
    height: p.image.height,
    imgSrc: p.image.src,
    srcSet,
    width: p.image.width,
    alt2: p.image.alt,
    height2: p.image.height,
    imgSrc2: p.image.src,
    srcSet2: srcSet,
    width2: p.image.width,
    description: p.index,
    description2: p.title,
    description3: p.category,
    description4: `© ${p.year}`
  };
}

function toTileStyles(p: ProjectItem): MediaTileStyles {
  return {
    className: "w-full relative",
    className3: "z-1",
    className5: p.image.aspect,
    className6: p.image.aspect,
    className7: "",
    className8: "",
    className9: "",
    className10: "",
    className11: ""
  };
}

export default function NextProject({ projects: next }: { projects: ProjectItem[] }) {
  if (next.length === 0) return null;

  return (
    <section className="w-full flex relative z-2 pt-0 pb-30 px-6 flex-col justify-start items-center content-center shrink-0 gap-17.5 bg-bone max-desk:pb-20 max-desk:gap-10">
      <div className="w-full max-w-360 flex relative z-1 flex-col justify-center items-center content-center shrink-0 gap-3">
        <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
        <div className="w-full flex relative justify-between items-center content-center shrink-0">
          <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
            <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px] whitespace-pre text-nowrap">
              (02)
            </p>
          </div>
          <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip max-desk:gap-10">
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px] whitespace-pre text-nowrap">
              (Portfólio)
            </p>
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px] whitespace-pre text-nowrap max-tab:hidden">
              © 2026
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-360 grid relative z-1 grid-cols-2 gap-2.5 max-desk:grid-cols-1 max-desk:gap-y-10">
        {next.map((p) => (
          <MediaTile key={p.slug} d={toTile(p)} styles={toTileStyles(p)} hoverZoom />
        ))}
      </div>
    </section>
  );
}
