import type { Metadata } from "next";
import PortfolioHero from "./_sections/portfolio-hero";
import PortfolioIndex from "./_sections/portfolio-index";
import FrequentlyAskedQuestionsSection from "../../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../../sections/let-work-together-section";

const TITULO = "Portfólio de sites";
const DESCRICAO =
  "Modelos de site institucional, landing page, loja virtual e página de captura, com a estrutura que a Vetta entrega em cada tipo de projeto.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: "/work/portfolio" },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    type: "website",
    locale: "pt_BR",
    url: "/work/portfolio"
  }
};

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-night">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-night">
          <PortfolioHero />
          <PortfolioIndex />
        </div>
        <FrequentlyAskedQuestionsSection index="(02)" />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}
