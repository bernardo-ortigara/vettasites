import type { Metadata } from "next";
import AboutHero from "./_sections/about-hero";
import ProcessSection from "./_sections/process-section";
import TeamSection from "./_sections/team-section";
import AwardsSection from "./_sections/awards-section";
import ClientsSection from "./_sections/clients-section";
import StatsSection from "./_sections/stats-section";
import ArticleSection from "./_sections/article-section";
import FrequentlyAskedQuestionsSection from "../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../sections/let-work-together-section";

export const metadata: Metadata = {
  title: "About — VETTA",
  description:
    "One part-time creative dedicated to your continuous stream of projects: how the studio researches, experiments and refines.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — VETTA",
    description:
      "One part-time creative dedicated to your continuous stream of projects: how the studio researches, experiments and refines.",
    type: "website",
    url: "/about"
  }
};

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-foreground">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-foreground">
          <AboutHero />
          <ProcessSection />
          <TeamSection />
          <AwardsSection />
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
