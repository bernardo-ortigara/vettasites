import type { Metadata } from "next";
import GetInTouchSection from "./_sections/get-in-touch-section";
import FrequentlyAskedQuestionsSection from "../sections/frequently-asked-questions-section";
import LetWorkTogetherSection from "../sections/let-work-together-section";

const TITULO = "Contato e orçamento";
const DESCRICAO =
  "Conte o que o seu negócio precisa e receba escopo, prazo e valor em até 24 horas. O contato vai direto para o WhatsApp da Vetta Sites.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    type: "website",
    locale: "pt_BR",
    url: "/contact"
  }
};

export default function Page() {
  return (
    <div className="block" id="main">
      <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-night">
        <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-night">
          <GetInTouchSection />
        </div>
        <FrequentlyAskedQuestionsSection index="(01)" padTop="pt-15" curtain />
        <LetWorkTogetherSection />
      </div>
    </div>
  );
}
