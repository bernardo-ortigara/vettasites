import MediaCard, { type MediaCardData } from "../components/media-card";
import { mediaCardStyles } from "../_styles";
import StaggeredText, { type ResponsiveFont } from "../components/staggered-text";
import ExploreButton from "../components/explore-button";
import { ScrollReveal } from "../components/motion-primitives";
import OverlapCurtain from "../components/overlap-curtain";

const HEADING =
  "              Design-driven studio delivering the structured visuals, refined digital system, and high-impact brand experiences\nshaped by aesthetics & VETTA\u00ae.";

const HEADING_FONT: ResponsiveFont = {
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
    fontSize: "70px",
    letterSpacing: "-2.1px",
    lineHeight: "70px",
    textAlign: "left"
  }
};

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;
const MediaCard_data: MediaCardData[] = [
    { title: "01", title2: "01", title3: "01", alt: "Woman Beach", height: "896", imgSrc: "/assets/media/images/2f4b7d061507.webp", srcSet: "/assets/media/images/baa15a5b642d.png 512w, /assets/media/images/af9b00b24506.png 1024w, /assets/media/images/2f4b7d061507.webp 1280w", width: "1280", title4: "Art Direction", description: "Creative Oversight", description2: "Guiding visual identity through clarity and intentional design. VETTA shapes cohesive narratives that elevate brands beyond aesthetics, creating timeless expressions with edge.", alt2: "Woman Beach", height2: "896", imgSrc2: "/assets/media/images/2f4b7d061507.webp", srcSet2: "/assets/media/images/baa15a5b642d.png 512w, /assets/media/images/af9b00b24506.png 1024w, /assets/media/images/2f4b7d061507.webp 1280w", width2: "1280", title5: "Art Direction", description3: "Creative Oversight", description4: "Guiding visual identity through clarity and intentional design. VETTA shapes cohesive narratives that elevate brands beyond aesthetics, creating timeless expressions with edge." },
    { title: "02", title2: "02", title3: "02", alt: "Woman Staircase", height: "1280", imgSrc: "/assets/media/images/4e4aff5717d8.png", srcSet: "/assets/media/images/259e6dc735f5.png 716w, /assets/media/images/4e4aff5717d8.png 896w", width: "896", title4: "Photography", description: "Brand Imaging", description2: "Crafting imagery with mood, precision, and emotional depth. VETTA captures moments that feel curated and purposeful, transforming simple visuals into powerful brand stories.", alt2: "Woman Staircase", height2: "1280", imgSrc2: "/assets/media/images/4e4aff5717d8.png", srcSet2: "/assets/media/images/259e6dc735f5.png 716w, /assets/media/images/4e4aff5717d8.png 896w", width2: "896", title5: "Photography", description3: "Brand Imaging", description4: "Crafting imagery with mood, precision, and emotional depth. VETTA captures moments that feel curated and purposeful, transforming simple visuals into powerful brand stories." },
    { title: "03", title2: "03", title3: "03", alt: "Woman Beach", height: "1024", imgSrc: "/assets/media/images/031d00a78b18.png", srcSet: "/assets/media/images/42b6da5abac7.png 512w, /assets/media/images/031d00a78b18.png 1024w", width: "1024", title4: "Strategy", description: "Concept Frameworks", description2: "Structuring ideas with insight, direction, and clarity. VETTA builds thoughtful frameworks that define positioning, strengthen identity, and move brands toward long-term impact.", alt2: "Woman Beach", height2: "1024", imgSrc2: "/assets/media/images/031d00a78b18.png", srcSet2: "/assets/media/images/42b6da5abac7.png 512w, /assets/media/images/031d00a78b18.png 1024w", width2: "1024", title5: "Strategy", description3: "Concept Frameworks", description4: "Structuring ideas with insight, direction, and clarity. VETTA builds thoughtful frameworks that define positioning, strengthen identity, and move brands toward long-term impact." }
];
export default function ServicesSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <section className="w-full flex relative z-1 pt-6 pb-40 px-6 flex-col justify-start items-center content-center shrink-0 gap-25 bg-ink max-desk:pb-20 max-desk:gap-15 tab:max-desk:pb-30 tab:max-desk:gap-20 grid-cols-1">
      <OverlapCurtain fill="bg-ink" />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-[14.4375rem] max-desk:gap-[6.3125rem] tab:max-desk:gap-30">
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="w-full h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-bone transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-5 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      (03)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-[106.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                      (Premium Services)
                    </p>
                  </div>
                  <div className="w-[2.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
                    <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.5px] max-tab:hidden">
                      © 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-17.5 max-tab:gap-10">
          <div className="w-full block relative shrink-0">
            <StaggeredText
              text={HEADING}
              delay={0.1}
              duration={0.7}
              font={HEADING_FONT}
              color="var(--bone)"
              halfOpacity
              style={{ width: "100%" }}
            />
          </div>
          <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-57.5 overflow-clip">
            <div className="contents min-w-0">
              <ExploreButton href="/about" label="Explore More" tone="light" className="block relative shrink-0" />
            </div>
            <div className="w-[61%] flex relative justify-center items-center content-center grow shrink-0 basis-0 gap-75 overflow-clip max-tab:w-auto tab:max-desk:w-1/3">
              <div className="w-4 h-4 block relative shrink-0">
                <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
                <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
              </div>
              <div className="w-2 h-2 block relative shrink-0">
                <div className="w-0.5 h-full block absolute top-0 left-[0.1875rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
                <div className="w-0.5 h-2 block absolute top-0 left-[0.1875rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_4px]" />
              </div>
              <div className="w-4 h-4 block relative shrink-0">
                <div className="w-0.5 h-full block absolute top-0 left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend" />
                <div className="w-0.5 h-4 block absolute left-[0.4375rem] [mix-blend-mode:difference] shrink-0 bg-bone-blend transform-[matrix(0,1,-1,0,0,0)] origin-[1px_8px]" />
              </div>
            </div>
          </div>
          <div className="contents min-w-0">
            <div className="h-58 aspect-[0.767241/1] flex absolute -top-[10.9375rem] left-0 z-1 rounded-[5px] justify-center items-start content-start shrink-0 gap-2.5 overflow-clip max-desk:h-[122.5px] max-desk:-top-[4.3125rem] tab:max-desk:-top-[5.9375rem] max-tab:h-[92.5px]">
              <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[5px]">
                <img loading="lazy" decoding="async" className="w-full h-full block rounded-[5px] overflow-clip object-cover" alt="" height="1280" sizes="178px" src="/assets/media/images/68c91cf88797.webp" srcSet="/assets/media/images/8ef7501244a9.png 716w, /assets/media/images/68c91cf88797.webp 896w" width="896" />
              </div>
              <div className="basis-full shrink-0 h-full block relative">
                <video className="w-full h-full block overflow-clip object-cover bg-ink" autoPlay loop muted playsInline poster="/assets/media/images/411edd68feb0.png" preload="auto" src="/assets/media/videos/c2a4b4a0ce34.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-360 flex relative pl-23.5 flex-col justify-center items-center content-center shrink-0 gap-17.5 overflow-clip max-desk:pl-0">
        {mediaCardData.map((d, i) => (
          <ScrollReveal key={i} className="w-full" transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}>
            <MediaCard d={d} styles={mediaCardStyles[i]} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
