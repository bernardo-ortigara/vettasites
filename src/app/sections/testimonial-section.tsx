import TestimonialCarousel from "../components/testimonial-carousel";
import { ScrollReveal } from "../components/motion-primitives";

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

export default function TestimonialSection() {
  return (
    <section className="w-full flex relative z-1 pt-6 pb-30 px-6 flex-col justify-start items-center content-center shrink-0 gap-27.5 bg-bone max-tab:pb-20">
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-20 max-tab:gap-15">
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="w-full h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-ink-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-night transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-[20.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      (05)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-[4.3rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      (Testimonial)
                    </p>
                  </div>
                  <div className="w-[2.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
                    <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px] max-tab:hidden">
                      © 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contents min-w-0">
          <ScrollReveal
            className="w-full block relative shrink-0"
            enter={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
          >
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
