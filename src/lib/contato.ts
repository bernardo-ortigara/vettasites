export const HONEYPOTS = [
  "website", "company", "message", "subject", "title",
  "description", "feedback", "notes", "details", "remarks", "comments"
];

export function montarMensagem(dados: FormData) {
  const valor = (campo: string) => String(dados.get(campo) ?? "").trim();
  const linhas = [
    "Olá! Vim pelo site da Vetta Sites e quero um orçamento.",
    "",
    `Nome: ${valor("Nome") || "—"}`,
    `Empresa: ${valor("Empresa") || "—"}`,
    `Tipo de projeto: ${valor("Projeto") || "—"}`,
    `E-mail: ${valor("Email") || "—"}`,
    "",
    valor("Mensagem") || "(sem mensagem)"
  ];
  return linhas.join("\n");
}
