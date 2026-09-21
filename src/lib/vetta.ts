export const VETTA = {
  nome: "Vetta Sites",
  razaoSocial: "Vetta Sites Ltda",
  slogan: "Seu negócio merece estar no topo.",
  descricao:
    "Criação de sites institucionais, landing pages e lojas virtuais com estratégia, design autoral e performance para o Google.",
  whatsapp: "5500000000000",
  email: "contato@vettasites.com.br",
  instagram: "https://instagram.com/vettasites",
  cidade: "Caxias do Sul",
  estado: "RS",
  pais: "BR"
} as const;

export const whatsappLink = (mensagem = "Olá! Vim pelo site e quero um orçamento.") =>
  `https://wa.me/${VETTA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
