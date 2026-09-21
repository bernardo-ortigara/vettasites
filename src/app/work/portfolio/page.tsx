import type { Metadata } from "next";
import PortfolioHero from "./_sections/portfolio-hero";
import PortfolioIndex from "./_sections/portfolio-index";
import FrequentlyAskedQuestionsSection from "../../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../../sections/let-work-together-section";

export const metadata: Metadata = {
  title: "Portfolio — VETTA",
  description:
    "Selected work: art direction, photography, strategy and branding projects taken from first board to launch.",
  alternates: { canonical: "/work/portfolio" },
  openGraph: {
    title: "Portfolio — VETTA",
    description:
      "Selected work: art direction, photography, strategy and branding projects taken from first board to launch.",
    type: "website",
    url: "/work/portfolio"
  }
};

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-foreground">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-foreground">
          <PortfolioHero />
          <PortfolioIndex />
        </div>
        <FrequentlyAskedQuestionsSection index="(02)" />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}
