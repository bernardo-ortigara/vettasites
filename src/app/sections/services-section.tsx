import MediaCard, { type MediaCardData } from "../components/media-card";
import { mediaCardStyles } from "../_styles";
import StaggeredText, { type ResponsiveFont } from "../components/staggered-text";
import ExploreButton from "../components/explore-button";
import { ScrollReveal } from "../components/motion-primitives";
import OverlapCurtain from "../components/overlap-curtain";

const HEADING =
  "              Sites institucionais, landing pages e otimização para o Google, feitos para marcas que querem ser encontradas e lembradas.";

const HIGHLIGHT = ["encontradas e lembradas."];

const HEADING_FONT: ResponsiveFont = {
  // No celular o título divide a linha com o vídeo, como no desktop
  base: {
    fontFamily: "var(--font-display)",
    // Proporcional à tela para as quebras de linha não mudarem entre celulares
    fontSize: "5.8vw",
    letterSpacing: "-0.04em",
    lineHeight: "6.1vw",
    textAlign: "left"
  },
  tab: {
    fontFamily: "var(--font-display)",
    fontSize: "38px",
    letterSpacing: "-0.04em",
    lineHeight: "38px",
    textAlign: "left"
  },
  desk: {
    fontFamily: "var(--font-display)",
    // 70px em 1440, encolhendo junto com a coluna até 1200 para manter as quebras do Figma
    fontSize: "min(70px, 4.861vw)",
    letterSpacing: "-0.045em",
    lineHeight: "min(70px, 4.861vw)",
    textAlign: "justify"
  }
};

const EASE_UI = [0.44, 0, 0.34, 0.98] as const;
const MediaCard_data: MediaCardData[] = [
    { title: "01", title2: "01", title3: "01", alt: "Página inicial do site da ACC", height: "778", imgSrc: "/assets/media/images/portfolio-acc-1440.webp", srcSet: "/assets/media/images/portfolio-acc-720.webp 720w, /assets/media/images/portfolio-acc-1440.webp 1440w", width: "1440", title4: "Sites", description: "Site institucional", description2: "Um site sob medida para a sua marca: estrutura pensada para a jornada do cliente, design autoral e código leve, pronto para crescer junto com o negócio.", alt2: "Página inicial do site da ACC", height2: "778", imgSrc2: "/assets/media/images/portfolio-acc-1440.webp", srcSet2: "/assets/media/images/portfolio-acc-720.webp 720w, /assets/media/images/portfolio-acc-1440.webp 1440w", width2: "1440", title5: "Sites", description3: "Site institucional", description4: "Um site sob medida para a sua marca: estrutura pensada para a jornada do cliente, design autoral e código leve, pronto para crescer junto com o negócio." },
    { title: "02", title2: "02", title3: "02", alt: "Landing page do escritório Dametto", height: "824", imgSrc: "/assets/media/images/servicos-dametto-1440.webp", srcSet: "/assets/media/images/servicos-dametto-720.webp 720w, /assets/media/images/servicos-dametto-1440.webp 1440w", width: "1440", title4: "Landing pages", description: "Páginas de campanha", description2: "Páginas com um único objetivo, feitas para campanhas e lançamentos: carregamento rápido, argumento claro e caminho curto até o contato.", alt2: "Landing page do escritório Dametto", height2: "824", imgSrc2: "/assets/media/images/servicos-dametto-1440.webp", srcSet2: "/assets/media/images/servicos-dametto-720.webp 720w, /assets/media/images/servicos-dametto-1440.webp 1440w", width2: "1440", title5: "Landing pages", description3: "Páginas de campanha", description4: "Páginas com um único objetivo, feitas para campanhas e lançamentos: carregamento rápido, argumento claro e caminho curto até o contato." },
    { title: "03", title2: "03", title3: "03", alt: "Página inicial da loja virtual da ELLV", height: "791", imgSrc: "/assets/media/images/servicos-ellv-1440.webp", srcSet: "/assets/media/images/servicos-ellv-720.webp 720w, /assets/media/images/servicos-ellv-1440.webp 1440w", width: "1440", title4: "Lojas virtuais", description: "E-commerce", description2: "Lojas prontas para vender: vitrine rápida, páginas de produto que convencem e checkout simples, com pagamento e frete integrados.", alt2: "Página inicial da loja virtual da ELLV", height2: "791", imgSrc2: "/assets/media/images/servicos-ellv-1440.webp", srcSet2: "/assets/media/images/servicos-ellv-720.webp 720w, /assets/media/images/servicos-ellv-1440.webp 1440w", width2: "1440", title5: "Lojas virtuais", description3: "E-commerce", description4: "Lojas prontas para vender: vitrine rápida, páginas de produto que convencem e checkout simples, com pagamento e frete integrados." },
    { title: "04", title2: "04", title3: "04", alt: "Relatório do Google PageSpeed com nota 100 em performance, acessibilidade, boas práticas e SEO", height: "791", imgSrc: "/assets/media/images/servicos-pagespeed-1440.webp", srcSet: "/assets/media/images/servicos-pagespeed-720.webp 720w, /assets/media/images/servicos-pagespeed-1440.webp 1440w", width: "1440", title4: "Performance", description: "SEO e velocidade", description2: "Site preparado para aparecer no Google e abrir rápido em qualquer conexão: estrutura semântica, dados estruturados e imagens tratadas para a web.", alt2: "Relatório do Google PageSpeed com nota 100 em performance, acessibilidade, boas práticas e SEO", height2: "791", imgSrc2: "/assets/media/images/servicos-pagespeed-1440.webp", srcSet2: "/assets/media/images/servicos-pagespeed-720.webp 720w, /assets/media/images/servicos-pagespeed-1440.webp 1440w", width2: "1440", title5: "Performance", description3: "SEO e velocidade", description4: "Site preparado para aparecer no Google e abrir rápido em qualquer conexão: estrutura semântica, dados estruturados e imagens tratadas para a web." }
];
export default function ServicesSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <section className="w-full flex relative z-1 pt-6 pb-40 px-6 flex-col justify-start items-center content-center shrink-0 gap-25 bg-ink max-desk:pb-20 max-desk:gap-15 tab:max-desk:pb-30 tab:max-desk:gap-20 grid-cols-1">
      <OverlapCurtain fill="bg-ink" />
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-10 max-desk:gap-[6.3125rem] tab:max-desk:gap-30 max-tab:gap-10">
        <div className="contents min-w-0">
          <div className="w-full block relative shrink-0">
            <div className="w-full h-[1.825rem] flex relative flex-col justify-center items-center content-center gap-3">
              <div className="w-full h-px block relative shrink-0 overflow-clip bg-bone-edge" />
              <div className="w-full flex relative justify-between items-center content-center shrink-0">
                <div className="flex relative justify-center items-center content-center shrink-0 gap-1.5">
                  <div className="w-[0.3125rem] block relative shrink-0 overflow-clip aspect-square bg-bone transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[2.5px_2.5px]" />
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (03)
                    </p>
                  </div>
                </div>
                <div className="flex relative justify-center items-center content-center shrink-0 gap-[29.1875rem] overflow-clip">
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.03em]">
                      (Serviços)
                    </p>
                  </div>
                  <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-tab:hidden">
                    <p className="block text-bone font-display font-bold leading-[16.2px] tracking-[-0.03em] max-tab:hidden">
                      © 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-[8.0625rem] max-desk:gap-17.5 max-tab:gap-10">
          <div className="w-full flex pl-[6.75%] items-end gap-[3.16%] max-desk:block max-desk:pl-0 max-tab:flex max-tab:items-stretch max-tab:gap-3">
            <div className="w-[23.04%] aspect-[299/412] relative z-1 rounded-[5px] shrink-0 overflow-clip max-desk:w-auto max-desk:h-[122.5px] max-desk:aspect-[0.767241/1] max-desk:absolute max-desk:left-0 max-desk:-top-[4.3125rem] tab:max-desk:-top-[5.9375rem] max-tab:relative max-tab:top-auto max-tab:w-[38%] max-tab:h-auto max-tab:aspect-auto">
              <video className="w-full h-full block object-cover bg-ink max-tab:absolute max-tab:inset-0" autoPlay loop muted playsInline poster="/assets/media/images/servicos-ski-poster.webp" preload="auto" src="/assets/media/videos/servicos-ski.mp4" />
            </div>
            <div className="max-w-[66.33%] block relative grow shrink basis-0 min-w-0 max-desk:max-w-none max-desk:w-full max-tab:w-auto">
              <StaggeredText
                text={HEADING}
                delay={0.1}
                duration={0.7}
                font={HEADING_FONT}
                color="var(--bone)"
                highlight={HIGHLIGHT}
                trimIndentOnMobile
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w-full flex relative pl-[5.675%] justify-start items-center content-center shrink-0 gap-57.5 overflow-clip max-desk:pl-0">
            <div className="contents min-w-0">
              <ExploreButton href="/about" label="Nossos serviços" tone="light" className="block relative shrink-0" />
            </div>
            <div className="w-[61%] flex relative pr-10 justify-end items-center content-center grow shrink-0 basis-0 gap-75 overflow-clip max-desk:pr-0 max-desk:justify-center max-tab:w-auto tab:max-desk:w-1/3">
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
        </div>
      </div>
      <div className="w-full max-w-360 flex relative pl-23.5 flex-col justify-center items-center content-center shrink-0 gap-17.5 overflow-clip max-desk:pl-0 max-tab:gap-10">
        {mediaCardData.map((d, i) => (
          <ScrollReveal key={i} className="w-full" transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}>
            <MediaCard d={d} styles={mediaCardStyles[i]} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
