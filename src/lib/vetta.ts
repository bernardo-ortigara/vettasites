export const VETTA = {
  nome: "Vetta Sites",
  razaoSocial: "Vetta Sites Ltda",
  slogan: "Seu negócio merece estar no topo.",
  descricao:
    "Sites institucionais, landing pages e lojas virtuais feitos para trazer clientes: design autoral, SEO técnico e orçamento em até 24h.",
  whatsapp: "5554976030143",
  email: "contato@vettasites.com.br",
  instagram: "https://instagram.com/vettasites",
  cidade: "Caxias do Sul",
  estado: "RS",
  pais: "BR"
} as const;

export const whatsappLink = (mensagem = "Olá! Vim pelo site e quero um orçamento.") =>
  `https://wa.me/${VETTA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
