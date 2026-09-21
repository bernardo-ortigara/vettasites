"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import type { FaqItem } from "../content";
import { ScrollReveal } from "./motion-primitives";

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

const ACCORDION_SPRING = { type: "spring", bounce: 0.2, duration: 0.4, delay: 0 } as const;

export default function FaqAccordionItem({ d, revealDuration }: { d: FaqItem; revealDuration: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const measure = () => setBodyHeight(el.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal
      className="w-full block relative shrink-0"
      enter={{ opacity: 0 }}
      transition={{ type: "tween", duration: revealDuration, delay: 0, ease: EASE_UI }}
    >
      <div
        className="flex relative pt-7 flex-col justify-center items-start content-start gap-10 overflow-clip cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0">
          <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip">
            <div className="w-full flex relative max-w-150 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block [font-family:'BDO_Grotesk_Variable',_sans-serif] text-base [font-weight:1000] leading-[20.2px] tracking-[-0.5px]">
                {d.question}
              </p>
            </div>
            <div className="w-4 h-4 block relative shrink-0">
              <motion.div
                className="w-0.5 h-full block absolute top-0 left-[0.4375rem] shrink-0 bg-foreground"
                style={{ transformOrigin: "1px 8px" }}
                animate={{ rotate: open ? 90 : 0 }}
                transition={ACCORDION_SPRING}
                initial={false}
              />
              <div className="w-0.5 h-4 block absolute left-[0.4375rem] shrink-0 bg-foreground transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
            </div>
          </div>
          <motion.div
            className="w-full block relative shrink-0 overflow-clip"
            animate={{ height: open ? bodyHeight : 0 }}
            transition={ACCORDION_SPRING}
            initial={false}
          >
            <div ref={bodyRef} className="w-full flex relative pt-5 justify-start items-center content-center gap-2.5">
              <div className="w-full flex relative max-w-[35.5625rem] flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                <p className="block text-color-002 [font-family:'BDO_Grotesk_Variable',_sans-serif] text-[0.75rem] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
                  {d.answer}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-px block relative shrink-0 overflow-clip bg-color-004" />
      </div>
    </ScrollReveal>
  );
}
