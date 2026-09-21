"use client";

import { useState } from "react";
import { motion } from "motion/react";
import StaggeredText, { type ResponsiveFont } from "./staggered-text";
import { ScrollZoom, useBreakpointValue } from "./motion-primitives";
import { testimonials, testimonialStats } from "../content";

const ROTATE = { type: "tween", duration: 0.81, ease: [0.17, 0.44, 0.28, 1] } as const;

const STEP = 48;

const QUOTE_FONT: ResponsiveFont = {
  base: {
    fontFamily: "var(--font-display)",
    fontSize: "30px",
    letterSpacing: "-1.1px",
    lineHeight: "30px",
    textAlign: "left"
  },
  tab: {
    fontFamily: "var(--font-display)",
    fontSize: "38px",
    letterSpacing: "-1.2px",
    lineHeight: "38px",
    textAlign: "left"
  },
  desk: {
    fontFamily: "var(--font-display)",
    fontSize: "56px",
    letterSpacing: "-1.7px",
    lineHeight: "56px",
    textAlign: "left"
  }
};

const CHEVRON_LEFT =
  "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 8.004 14.003%22 overflow=%22visible%22><path d=%22M 7.733 12.442 C 8.094 12.799 8.094 13.378 7.733 13.735 C 7.372 14.092 6.786 14.092 6.425 13.735 L 0.271 7.648 C 0.098 7.477 0 7.244 0 7.002 C 0 6.759 0.098 6.526 0.271 6.355 L 6.425 0.268 C 6.786 -0.089 7.372 -0.089 7.733 0.268 C 8.094 0.625 8.094 1.204 7.733 1.561 L 2.234 7.001 Z%22 fill=%22var(--night)%22></path></svg>\")";
const CHEVRON_RIGHT =
  "url(\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 8.004 14.003%22 overflow=%22visible%22><path d=%22M 0.271 12.442 C -0.09 12.799 -0.09 13.378 0.271 13.735 C 0.632 14.092 1.217 14.092 1.579 13.735 L 7.732 7.648 C 7.906 7.477 8.004 7.244 8.004 7.002 C 8.004 6.759 7.906 6.526 7.732 6.355 L 1.579 0.268 C 1.217 -0.089 0.632 -0.089 0.271 0.268 C -0.09 0.625 -0.09 1.204 0.271 1.561 L 5.77 7.001 Z%22 fill=%22var(--night)%22></path></svg>\")";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const slide = testimonials[index];

  const isBase = useBreakpointValue({ base: true, tab: false, desk: false });
  const author = isBase ? testimonials[0] : slide;
  const quote = isBase && slide.quoteBase ? slide.quoteBase : slide.quote;

  const step = (delta: number) =>
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);

  return (
    <div className="w-full flex relative justify-center items-start content-start gap-60 overflow-clip max-desk:flex-col max-desk:items-start max-desk:content-start max-desk:gap-5">
      <div className="w-53 flex relative flex-col justify-between items-center content-center self-stretch shrink-0 overflow-clip max-desk:w-27.5 max-desk:h-12.5 max-desk:justify-center max-desk:[align-self:initial]">
        <div className="w-53 h-[15.8125rem] flex relative z-1 rounded-[5px] flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:hidden">
          <div className="w-53 h-full block absolute top-0 left-0 min-w-0 rounded-[5px]">
            <img loading="lazy" decoding="async"               className="w-full h-[15.8125rem] block rounded-[5px] overflow-clip object-cover"

              alt={slide.portrait.alt}
              height={slide.portrait.height}
              sizes="212px"
              src={slide.portrait.src}
              srcSet={slide.portrait.srcSet}
              width={slide.portrait.width}
            />
          </div>
          <div className="w-19 h-4 block relative [mix-blend-mode:difference] shrink-0 gap-2.5 overflow-clip">
            <div className="w-19 h-full block absolute top-0">
              <img loading="lazy" decoding="async"                 className="w-full h-4 block overflow-clip object-contain"

                alt=""
                height={slide.logo.height}
                src={slide.logo.src}
                width={slide.logo.width}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-12.5 flex relative justify-start items-center content-center self-stretch shrink-0 gap-2.5 overflow-clip max-desk:[align-self:initial]">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => step(-1)}
            className="w-12.5 h-12.5 flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-bone-dim cursor-pointer"
          >
            <div
              className="w-2 h-3.5 block relative shrink-0 [background-size:100%_100%]"
              style={{ backgroundImage: CHEVRON_LEFT }}
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => step(1)}
            className="w-12.5 h-12.5 flex relative rounded-[5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-bone-dim cursor-pointer"
          >
            <div
              className="w-2 h-3.5 block relative shrink-0 [background-size:100%_100%]"
              style={{ backgroundImage: CHEVRON_RIGHT }}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div className="flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 gap-15 overflow-clip max-desk:w-full max-desk:gap-10 max-desk:grow-[initial] max-desk:basis-[initial]">
        <div className="w-full h-131 flex relative pb-5 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-desk:h-auto">
          <div className="w-full h-full block relative shrink-0">
            <StaggeredText
              key={index}
              text={quote}
              delay={0.1}
              duration={0.7}
              font={QUOTE_FONT}
              color="var(--night)"
              ghostWeight={1000}
              className="w-full h-full"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="w-full h-px block relative shrink-0 overflow-hidden bg-ink-hairline" />
        <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-30 overflow-clip max-tab:flex-col max-tab:items-start max-tab:content-start max-tab:gap-15 tab:max-desk:grid tab:max-desk:grid-cols-2 tab:max-desk:gap-15 tab:max-desk:items-stretch">
          <div className="flex relative py-[0.1875rem] pr-5 pl-[0.1875rem] rounded-[5px] justify-start items-center content-center shrink-0 gap-2.5 overflow-clip bg-bone-dim max-desk:w-full">
            <ScrollZoom
              from={1.25}
              to={1}
              className="w-16.5 h-16.5 flex relative rounded-[2.5px] justify-center items-center content-center shrink-0 gap-2.5 overflow-clip"
              innerClassName="w-16.5 h-full block relative grow shrink-0 basis-0 overflow-clip"
            >
              <img loading="lazy" decoding="async"                 className="w-full h-16.5 block overflow-clip object-cover"

                alt={slide.avatar.alt}
                height="1024"
                sizes="66px"
                src={slide.avatar.src}
                srcSet={slide.avatar.srcSet}
                width="1024"
              />
            </ScrollZoom>
            <div className="w-[14.3125rem] flex relative flex-col justify-center items-start content-start shrink-0 gap-2.5 overflow-clip">
              <div className="w-[14.3125rem] flex relative flex-col justify-center items-start content-start shrink-0 gap-1 overflow-clip">
                <div className="w-[14.3125rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px]">
                    {author.name}
                  </p>
                </div>
                <div className="w-[14.3125rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                    {author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {testimonialStats.map((col) => (
            <div
              key={col.title}
              className="w-32.5 flex relative max-w-32.5 flex-col justify-center items-start content-start shrink-0 gap-2 overflow-clip desk:w-full desk:grow desk:basis-0"
            >
              <div className="w-full h-9.5 flex relative max-w-78 flex-col justify-start items-center content-center shrink-0 overflow-hidden">
                <motion.div
                  className="w-full flex flex-col justify-start items-center content-center gap-2.5"
                  animate={{ y: -STEP * index }}
                  transition={ROTATE}
                >
                  {col.figures.map((figure) => (
                    <div
                      key={figure}
                      className="w-full flex relative max-w-78 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]"
                    >
                      <h6
                        className="block font-display text-4xl font-bold leading-9.5 tracking-[-1.2px]"

                      >
                        {figure}
                      </h6>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-0.5 overflow-clip">
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                    {col.title}
                  </p>
                </div>
                <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
                  <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                    {col.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
