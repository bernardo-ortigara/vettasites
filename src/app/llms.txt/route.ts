import { VETTA } from "../../lib/vetta";

export const dynamic = "force-static";

const BODY = [
  `# ${VETTA.nome} — ${VETTA.slogan}`,
  "",
  VETTA.descricao,
  "",
  "## Páginas",
  "",
  "- [Home](/) — Serviços, planos, perguntas frequentes e contato.",
  "- [Portfólio](/work/portfolio) — Modelos de site institucional, landing page, loja virtual e página de captura.",
  "- [Sobre](/about) — Processo de trabalho, compromissos de cada projeto e equipe.",
  "- [Contato](/contact) — Peça um orçamento pelo WhatsApp.",
  "",
  "## Serviços",
  "",
  "- Site institucional sob medida",
  "- Landing page para campanhas",
  "- Loja virtual",
  "- SEO técnico e otimização de performance",
  ""
].join("\n");

export function GET() {
  return new Response(BODY, {
    headers: { "content-type": "text/plain; charset=utf-8" }
  });
}
