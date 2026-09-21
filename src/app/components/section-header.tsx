export default function SectionHeader({
  index,
  label,
  tone = "light",
  className = ""
}: {
  index: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const text = dark ? "text-bone" : "";
  return (
    <div className={`w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-3 ${className}`}>
      <div className={`w-full h-px block relative shrink-0 overflow-clip ${dark ? "bg-bone-edge" : "bg-ink-edge"}`} />
      <div className="w-full flex relative justify-between items-center content-center shrink-0">
        <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
          <div className={`w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square ${dark ? "bg-bone" : "bg-night"} transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]`} />
          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
            <p className={`block font-display font-bold leading-[16.2px] tracking-[-0.5px] ${text}`}>
              {index}
            </p>
          </div>
        </div>
        <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
            <p className={`block font-display font-bold leading-[16.2px] tracking-[-0.5px] ${text}`}>
              {label}
            </p>
          </div>
          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
            <p className={`block font-display font-bold leading-[16.2px] tracking-[-0.5px] max-tab:hidden ${text}`}>
              © 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
