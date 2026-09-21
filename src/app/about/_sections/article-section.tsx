"use client";

import { ScrollReveal } from "../../components/motion-primitives";
import SectionHeader from "../../components/section-header";


const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

type Article = {
  index: string;
  title: string;
  category: string;
  alt: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  tall: boolean;
};

const ARTICLES: Article[] = [
  {
    index: "001",
    title: "Da conversa ao mapa",
    category: "Descoberta",
    alt: "Anotações de um briefing de projeto",
    src: "/assets/media/images/7e23205fe948.png",
    srcSet: "/assets/media/images/1baf6b98dbec.png 558w, /assets/media/images/7e23205fe948.png 768w",
    width: 768,
    height: 1408,
    tall: true
  },
  {
    index: "002",
    title: "O layout antes do código",
    category: "Criação",
    alt: "Layout de site em tela de computador",
    src: "/assets/media/images/97a5393dc435.webp",
    srcSet:
      "/assets/media/images/3f450b16b8bd.jpg 512w, /assets/media/images/d8c3f0565e3a.jpg 1024w, /assets/media/images/a81c8cdec04a.jpg 2048w, /assets/media/images/97a5393dc435.webp 4096w",
    width: 4096,
    height: 2867,
    tall: false
  },
  {
    index: "003",
    title: "Testes em cada tela",
    category: "Qualidade",
    alt: "Testes do site em vários aparelhos",
    src: "/assets/media/images/77c9bcc2e4b4.png",
    srcSet: "/assets/media/images/bc06de5b46c2.png 716w, /assets/media/images/77c9bcc2e4b4.png 896w",
    width: 896,
    height: 1280,
    tall: true
  },
  {
    index: "004",
    title: "No ar e acompanhado",
    category: "Publicação",
    alt: "Site publicado e em acompanhamento",
    src: "/assets/media/images/79c2189f3af7.png",
    srcSet: "/assets/media/images/f24ec9257321.png 512w, /assets/media/images/79c2189f3af7.png 1024w",
    width: 1024,
    height: 1024,
    tall: false
  }
];

function ArticleCard({ a }: { a: Article }) {
  const height = a.tall
    ? "h-[505px] max-tab:h-[298px] tab:max-desk:h-[620px]"
    : "h-[298px] tab:max-desk:h-[620px]";

  return (
    <div className={`w-full ${height} flex relative flex-col justify-center items-center content-center gap-2.5 overflow-clip cursor-pointer`}>
      <div className="w-full h-px flex relative grow shrink-0 basis-0 rounded-[5px] justify-center items-center content-center gap-2.5 overflow-hidden bg-night">
        <div className="w-px h-full block relative grow shrink-0 basis-0 rounded-[5px] overflow-clip">
          <div className="block absolute inset-0 rounded-[inherit]">
            <img loading="lazy" decoding="async"               className="w-full h-full block rounded-[5px] overflow-clip object-cover"

              alt={a.alt}
              height={a.height}
              width={a.width}
              sizes="(min-width: 1200px) 300px, calc(100vw - 48px)"
              src={a.src}
              srcSet={a.srcSet}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-min flex relative justify-between items-start content-start shrink-0">
        <div className="h-min flex relative justify-start items-start content-start shrink-0 grow gap-[30px] overflow-clip">
          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
              {a.index}
            </p>
          </div>
          <div className="w-[200.5px] h-min flex relative max-w-[200.5px] flex-wrap flex-col justify-center items-start content-start overflow-clip">
            <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                {a.title}
              </p>
            </div>
            <div className="w-full flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
              <p className="block text-ink-soft font-display font-bold leading-[16.2px] tracking-[-0.5px]">
                {a.category}
              </p>
            </div>
          </div>
        </div>
        <div className="w-min h-min flex relative justify-center items-center content-center shrink-0 gap-1.5">
          <div className="flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
            <p className="block font-display font-bold leading-[16.2px] tracking-[-0.5px]">
              © 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticleSection({ articles = ARTICLES } = {}) {
  return (
    <section
      className="w-full flex relative z-1 pt-6 px-6 pb-30 flex-col justify-start items-center content-center shrink-0 gap-[70px] bg-bone max-tab:pb-20 max-tab:gap-15 tab:max-desk:gap-20"
      id="article"
    >
      <div className="w-full max-w-360 block relative shrink-0">
        <SectionHeader index="(06)" label="(Bastidores)" />
      </div>
      <div className="w-full max-w-360 h-min flex relative justify-center items-start content-start shrink-0 gap-2.5 overflow-clip max-desk:flex-col">
        {articles.map((a) => (
          <ScrollReveal
            key={a.index}
            className="w-px h-min flex relative grow shrink-0 basis-0 flex-col justify-center items-start content-center gap-5 max-desk:w-full max-desk:grow-0 max-desk:basis-auto"
            transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
          >
            <div className="w-full h-min flex relative justify-start items-center content-center gap-2.5">
              <ArticleCard a={a} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
