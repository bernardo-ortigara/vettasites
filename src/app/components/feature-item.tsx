export type FeatureItemData = {
  description: string;
};
export default function FeatureItem({ d }: { d: FeatureItemData }) {
  return (
    <div className="w-full flex relative justify-center items-center content-center shrink-0 gap-1.5 overflow-clip">
      <div className="flex relative pb-[0.1875rem] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip">
        <div className="w-2 shrink-0 h-2 block relative">
          <div className="w-px h-full block absolute top-0 left-[3.5px] shrink-0 bg-ink-soft" />
          <div className="w-px h-2 block absolute top-0 left-[3.5px] shrink-0 bg-ink-soft transform-[matrix(0,1,-1,0,0,0)] origin-[0.5px_4px]" />
        </div>
      </div>
      <div className="w-full flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
        <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.03em]">
          {d.description}
        </p>
      </div>
    </div>
  );
}
