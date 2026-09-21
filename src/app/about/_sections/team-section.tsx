"use client";

import SectionHeader from "../../components/section-header";
import OverlapCurtain from "../../components/overlap-curtain";
import Ticker from "../../components/ticker";


const TICKER_SPEED = 50;
const GAP = 10;

type Member = { name: string; role: string; src: string; srcSet: string; width: number; height: number };

const TEAM: Member[] = [
  {
    name: "Ariana Voss",
    role: "Creative Director",
    src: "/assets/media/images/9eb91f446b45.png",
    srcSet: "/assets/media/images/769391637689.png 771w, /assets/media/images/9eb91f446b45.png 928w",
    width: 928,
    height: 1232
  },
  {
    name: "Mira Leone",
    role: "Brand Designer",
    src: "/assets/media/images/1b0cb664f506.png",
    srcSet: "/assets/media/images/faf6c0a058e2.png 716w, /assets/media/images/1b0cb664f506.png 896w",
    width: 896,
    height: 1280
  },
  {
    name: "Selena Hart",
    role: "UX Strategist",
    src: "/assets/media/images/1d57ffd6301f.png",
    srcSet: "/assets/media/images/11f9eabe9b0a.png 771w, /assets/media/images/1d57ffd6301f.png 928w",
    width: 928,
    height: 1232
  },
  {
    name: "Nora Bennett",
    role: "Visual Designer",
    src: "/assets/media/images/cc88572b5e89.png",
    srcSet: "/assets/media/images/73ec1a8f35d3.png 796w, /assets/media/images/cc88572b5e89.png 896w",
    width: 896,
    height: 1152
  },
  {
    name: "Chloe Richter",
    role: "Content Lead",
    src: "/assets/media/images/d2c0ae6c1074.png",
    srcSet: "/assets/media/images/d497d951fdba.png 716w, /assets/media/images/d2c0ae6c1074.png 896w",
    width: 896,
    height: 1280
  }
];

function TeamCard({ m }: { m: Member }) {
  return (
    <div className="w-[341px] h-[505px] flex relative flex-col justify-center items-center content-center gap-2.5 overflow-clip max-tab:w-[350px] max-tab:h-[370px]">
      <div className="w-full h-px flex relative grow shrink-0 basis-0 rounded-[5px] justify-center items-center content-center gap-2.5 overflow-hidden">
        <div className="w-px h-full block relative grow shrink-0 basis-0 rounded-[5px] overflow-clip">
          <div className="block absolute inset-0 rounded-[inherit]">
            <img
              className="w-full h-full block rounded-[5px] overflow-clip object-cover"

              alt="Woman Zoom Pose"
              height={m.height}
              width={m.width}
              sizes="341px"
              src={m.src}
              srcSet={m.srcSet}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-min flex relative px-2.5 justify-start items-start content-start shrink-0 gap-2.5">
        <div className="w-px h-min flex relative max-w-[200.5px] flex-wrap grow shrink-0 basis-0 flex-col justify-center items-start content-start gap-0 overflow-clip">
          <div className="w-full h-auto flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <p className="block text-color-001 [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
              {m.name}
            </p>
          </div>
          <div className="w-full h-auto flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <p className="block text-surface [font-family:'BDO_Grotesk_Variable',_sans-serif] [font-weight:1000] leading-[16.2px] tracking-[-0.5px]">
              {m.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection({ team = TEAM } = {}) {
  return (
    <section
      className="w-full flex relative z-1 pb-25 flex-col justify-start items-center content-center shrink-0 gap-15 overflow-hidden bg-color-005 max-tab:pb-20 tab:max-desk:gap-20"
      id="team"
    >
      <OverlapCurtain fill="bg-color-005" heightClass="h-163.5" />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0">
        <div className="w-full flex relative pt-6 px-6 flex-col justify-center items-center content-center shrink-0">
          <SectionHeader index="(02)" label="(Meet Our Team)" tone="dark" />
        </div>
      </div>
      <div className="w-[400vw] h-[521px] block relative shrink-0 max-tab:h-[370px]">
        <Ticker className="h-full flex items-center max-w-full max-h-full" speed={TICKER_SPEED} gap={GAP}>
          {team.map((m) => <TeamCard key={m.name} m={m} />)}
        </Ticker>
      </div>
    </section>
  );
}
