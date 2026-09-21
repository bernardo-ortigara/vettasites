"use client";

import { ScrollReveal } from "../../components/motion-primitives";
import SectionHeader from "../../components/section-header";


const EASE_UI = [0.44, 0, 0.34, 0.98] as const;

type Commitment = { count: string; org: string; work: string; result: string };

const COMMITMENTS: Commitment[] = [
  { count: "01", org: "Prazo combinado", work: "Definido antes de começar", result: "Sempre" },
  { count: "02", org: "Escopo fechado", work: "Sem cobrança por hora", result: "Sempre" },
  { count: "03", org: "SEO técnico", work: "Em todas as páginas", result: "Incluso" },
  { count: "04", org: "Site responsivo", work: "Celular, tablet e desktop", result: "Incluso" },
  { count: "05", org: "Imagens otimizadas", work: "WebP e carregamento sob demanda", result: "Incluso" },
  { count: "06", org: "Domínio e hospedagem", work: "Configurados por nós", result: "Incluso" },
  { count: "07", org: "Acessos no seu nome", work: "Domínio, hospedagem e painel", result: "Sempre" },
  { count: "08", org: "Acompanhamento", work: "Ajustes após o lançamento", result: "Combinado" }
];

function Cell({
  text,
  dim = false,
  align = "start"
}: {
  text: string;
  dim?: boolean;
  align?: "start" | "right" | "right-below-desk";
}) {
  const alignClass =
    align === "right" ? "text-right" : align === "right-below-desk" ? "max-desk:text-right" : "";
  return (
    <div className="w-px flex relative grow shrink-0 basis-0 flex-col justify-start whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
      <p className={`block font-display text-base font-bold leading-[20.2px] tracking-[-0.5px] ${alignClass} ${dim ? "desk:text-ink-soft" : ""}`}>
        {text}
      </p>
    </div>
  );
}

function Half({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-px h-min flex relative grow shrink-0 basis-0 justify-center items-center content-center gap-[227px] max-desk:w-full max-desk:grow-0 max-desk:basis-auto max-desk:gap-10">
      {children}
    </div>
  );
}

function Rule() {
  return <div className="w-full h-px block relative shrink-0 overflow-hidden bg-ink-hairline" />;
}

function CommitmentRow({ a, last }: { a: Commitment; last: boolean }) {
  return (
    <ScrollReveal
      className="w-full block relative shrink-0"
      transition={{ type: "tween", duration: 1.2, delay: 0, ease: EASE_UI }}
    >
      <div className="w-full flex relative flex-col justify-center items-center content-center gap-5 overflow-hidden">
        <Rule />
        <div className="w-full h-min flex relative justify-start items-start content-start shrink-0 gap-[227px] overflow-hidden max-desk:flex-col max-desk:gap-[30px]">
          <Half>
            <Cell text={a.count} />
            <Cell text={a.org} align="right-below-desk" />
          </Half>
          <Half>
            <Cell text={a.work} />
            <Cell text={a.result} dim align="right" />
          </Half>
        </div>
        {last && <Rule />}
      </div>
    </ScrollReveal>
  );
}

export default function CommitmentsSection({ commitments = COMMITMENTS } = {}) {
  return (
    <section
      className="w-full flex relative z-1 pt-6 px-6 pb-[90px] flex-col justify-start items-center content-center shrink-0 gap-20 bg-bone max-tab:pb-20 max-tab:gap-15"
      id="compromissos"
    >
      <div className="w-full max-w-360 block relative shrink-0">
        <SectionHeader index="(03)" label="(Compromissos)" />
      </div>
      <div className="w-full max-w-360 flex relative flex-col justify-center items-center content-center shrink-0 gap-5 overflow-clip">
        {commitments.map((a, i) => <CommitmentRow key={i} a={a} last={i === commitments.length - 1} />)}
      </div>
    </section>
  );
}
