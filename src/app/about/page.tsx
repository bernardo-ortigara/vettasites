import type { Metadata } from "next";
import AboutHero from "./_sections/about-hero";
import ProcessSection from "./_sections/process-section";
import TeamSection from "./_sections/team-section";
import CommitmentsSection from "./_sections/commitments-section";
import ClientsSection from "./_sections/clients-section";
import StatsSection from "./_sections/stats-section";
import ArticleSection from "./_sections/article-section";
import FrequentlyAskedQuestionsSection from "../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../sections/let-work-together-section";

const TITULO = "Sobre a Vetta Sites";
const DESCRICAO =
  "Como a Vetta trabalha: descoberta, criação e publicação, com prazo combinado, SEO técnico e acompanhamento depois que o site vai ao ar.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    type: "website",
    locale: "pt_BR",
    url: "/about"
  }
};

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-night">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-night">
          <AboutHero />
          <ProcessSection />
          <TeamSection />
          <CommitmentsSection />
          <ClientsSection />
          <StatsSection />
          <ArticleSection />
        </div>
        <FrequentlyAskedQuestionsSection index="(07)" />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}
