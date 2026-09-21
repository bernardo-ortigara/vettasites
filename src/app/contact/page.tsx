import type { Metadata } from "next";
import GetInTouchSection from "./_sections/get-in-touch-section";
import FrequentlyAskedQuestionsSection from "../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../sections/let-work-together-section";

export const metadata: Metadata = {
  title: "VETTA — Premium Design Studio & Portfolio",
  description:
    "VETTA is a design-forward studio crafting bold visuals, structured layouts, and high-impact digital experiences for ambitious brands.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "VETTA — Premium Design Studio & Portfolio",
    description:
      "VETTA is a design-forward studio crafting bold visuals, structured layouts, and high-impact digital experiences for ambitious brands.",
    type: "website",
    url: "/contact"
  }
};

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-foreground">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-foreground">
          <GetInTouchSection />
        </div>
        <FrequentlyAskedQuestionsSection index="(01)" padTop="pt-15" curtain />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}
