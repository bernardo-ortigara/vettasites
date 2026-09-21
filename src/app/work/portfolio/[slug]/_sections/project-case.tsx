import OverlapCurtain from "../../../../components/overlap-curtain";
import LineStaggerText from "../../../../components/line-stagger-text";
import ExploreButton from "../../../../components/explore-button";
import { Parallax } from "../../../../components/motion-primitives";
import { cn } from "../../../../../lib/utils";
import type { ProjectImage, ProjectItem } from "../../../../content";

const LEAD_CLASS =
  "w-full block text-night font-display font-bold " +
  "text-[2rem] leading-[2rem] tracking-[-0.035em] " +
  "tab:text-[2.75rem] tab:leading-[2.75rem] tab:tracking-[-0.04em] " +
  "desk:text-[4.375rem] desk:leading-[4.375rem] desk:tracking-[-0.045em] " +
  "whitespace-pre-wrap";

const LEAD_INDENT = "[text-indent:0px] desk:[text-indent:35.3%]";

export default function ProjectCase({ p }: { p: ProjectItem }) {
  const frames: ProjectImage[] = [p.image, ...p.gallery].slice(0, 4);

  return (
    <section id="case-body" className="w-full flex relative z-1 pt-6 pb-30 px-6 flex-col justify-start items-center content-center shrink-0 bg-bone max-desk:pb-20">
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
              (Saiba mais)
            </p>
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.03em] whitespace-pre text-nowrap max-tab:hidden">
              {"© " + p.year}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-360 flex relative z-1 mt-20 flex-col justify-start shrink-0 max-desk:mt-12">
        <LineStaggerText text={p.intro} className={LEAD_CLASS} indentClassName={LEAD_INDENT} />
      </div>

      <div className="w-full max-w-360 grid relative z-1 mt-27.5 grid-cols-2 gap-x-[3.125rem] items-start max-desk:grid-cols-1 max-desk:gap-y-12 max-desk:mt-15">
        <div className="flex sticky top-12.5 self-start pt-12.5 flex-col justify-start items-start content-start gap-20 max-desk:static max-desk:pt-0 max-desk:gap-12">
          <CaseRow label="(Objetivo)">
            <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
              {p.chapters[0]?.body}
            </p>
          </CaseRow>

          <CaseRow label="(Execução)">
            <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
              {p.chapters[1]?.body}
            </p>
          </CaseRow>

          <CaseRow label="(Resultado)">
            <div className="w-full flex relative flex-col justify-start items-start content-start gap-[6.875rem] max-desk:gap-12">
              <div className="w-full flex relative flex-col justify-start shrink-0 gap-3.5">
                {p.stats.map((s) => (
                  <div key={s.label} className="w-full flex relative flex-col justify-start shrink-0 gap-3.5">
                    <div className="w-full flex relative justify-between items-center content-center shrink-0 gap-4">
                      <p className="block text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.03em]">
                        {s.label}
                      </p>
                      <p className="block text-ink-soft font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] text-right whitespace-pre text-nowrap">
                        {s.figure}
                      </p>
                    </div>
                    <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
                  </div>
                ))}
              </div>
              <ExploreButton href={p.liveUrl ?? "/contact"} label="Pedir orçamento" tone="dark" />
            </div>
          </CaseRow>
        </div>

        <div className="flex relative flex-col justify-start items-stretch content-start gap-2.5">
          {frames.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="w-full block relative rounded-[5px] overflow-clip bg-night aspect-[671/607]"
            >
              <Parallax speed={90} className="w-full h-[150%] block absolute bottom-0 inset-x-0">
                <img decoding="async"
                  className={cn("w-full h-full block overflow-clip object-cover", img.aspect)}

                  alt={img.alt}
                  height={img.height}
                  loading={i === 0 ? undefined : "lazy"}
                  sizes="(min-width: 1200px) 671px, 100vw"
                  src={img.src}
                  srcSet={img.srcSet}
                  width={img.width}
                />
              </Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-50 overflow-clip max-desk:gap-10 max-tab:flex-col max-tab:gap-4">
      <p className="w-auto block shrink-0 text-night font-display text-base font-bold leading-[20.2px] tracking-[-0.03em] whitespace-pre text-nowrap">
        {label}
      </p>
      <div className="flex relative flex-col justify-start items-start content-start grow shrink basis-0 max-tab:grow-[initial] max-tab:basis-[initial] max-tab:w-full">
        {children}
      </div>
    </div>
  );
}
