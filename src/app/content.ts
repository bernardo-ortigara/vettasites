
export type LogosItem = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
export const logos: LogosItem[] = [
    { height: "80", imgSrc: "/assets/media/logo/clientes/casagrande.png", width: "384" },
    { height: "80", imgSrc: "/assets/media/logo/clientes/emporio-abbraccio.png", width: "384" },
    { height: "80", imgSrc: "/assets/media/logo/clientes/acc-maquinas.png", width: "384" },
    { height: "80", imgSrc: "/assets/media/logo/clientes/crespim.png", width: "384" },
    { height: "80", imgSrc: "/assets/media/logo/clientes/eltv.png", width: "384" }
];

export type PlanFeatureItem = {
  description: string;
};
export const planFeaturesEssential: PlanFeatureItem[] = [
    { description: "Layout sob medida para a sua marca" },
    { description: "Site responsivo em celular e desktop" },
    { description: "Formulário ligado ao seu WhatsApp" }
];

export const planFeaturesStandard: PlanFeatureItem[] = [
    { description: "Layout sob medida para a sua marca" },
    { description: "Site responsivo em celular e desktop" },
    { description: "Formulário ligado ao seu WhatsApp" },
    { description: "Textos e imagens otimizados para a web" },
    { description: "Estrutura pensada para conversão" },
    { description: "SEO técnico e alta velocidade no Google" }
];

export const planFeaturesComplete: PlanFeatureItem[] = [
    { description: "Layout sob medida para a sua marca" },
    { description: "Site responsivo em celular e desktop" },
    { description: "Formulário ligado ao seu WhatsApp" },
    { description: "Textos e imagens tratados para a web" },
    { description: "Estrutura pensada para conversão" },
    { description: "SEO técnico e alta velocidade no Google" },
    { description: "Relatórios de performance mensais" },
    { description: "Acompanhamento após o lançamento" }
];

export type FaqItem = {
  question: string;
  answer: string;
};
export const faqs: FaqItem[] = [
    {
        question: "Quanto tempo leva para o site ficar pronto?",
        answer: "Depende do tamanho do projeto. Uma landing page costuma sair em poucos dias; um site institucional completo leva algumas semanas, sempre com prazo combinado antes de começar."
    },
    {
        question: "O site vai aparecer no Google?",
        answer: "Todo projeto sai com a base técnica de SEO pronta: estrutura semântica, títulos e descrições por página, sitemap, dados estruturados e imagens otimizadas. O posicionamento cresce com o tempo e com conteúdo."
    },
    {
        question: "E se eu precisar mudar algo no site depois?",
        answer: "É só chamar a gente. Nosso suporte faz as alterações de texto, imagem e conteúdo para você, sem precisar mexer em nada nem aprender nenhuma ferramenta."
    },
    {
        question: "Vocês cuidam do domínio e da hospedagem?",
        answer: "Cuidamos da publicação de ponta a ponta: configuração de domínio, certificado de segurança e hospedagem. Os acessos ficam no seu nome, sempre."
    },
    {
        question: "Quanto custa e como funciona o orçamento?",
        answer: "O valor depende do escopo e é fechado antes de começar, sem cobrança por hora e sem mensalidade escondida. Você manda uma mensagem no WhatsApp contando o que precisa e recebe escopo, prazo e valor em até 24h, sem compromisso."
    }
];

export type ClientProject = {
  id: string;
  index: string;
  name: string;
  category: string;
  url: string;
  year: string;
  image: { alt: string; src: string; srcSet: string; width: string; height: string };
};
// Sites de clientes: os cards da home e da página de projetos levam direto para cada um
export const clientProjects: ClientProject[] = [
    { id: "emporioabbraccio", index: "(01)", name: "Empório Abbraccio", category: "Empório e cafeteria", url: "https://abbraccioemporio.com.br/", year: "2026", image: { alt: "Página inicial do site do Empório Abbraccio", src: "/assets/media/images/portfolio-emporioabbraccio-1440.webp", srcSet: "/assets/media/images/portfolio-emporioabbraccio-720.webp 720w, /assets/media/images/portfolio-emporioabbraccio-1440.webp 1440w", width: "1440", height: "779" } },
    { id: "acc", index: "(02)", name: "ACC", category: "Dispositivos de fixação", url: "https://accdispositivos.com.br/", year: "2026", image: { alt: "Página inicial do site da ACC", src: "/assets/media/images/portfolio-acc-1440.webp", srcSet: "/assets/media/images/portfolio-acc-720.webp 720w, /assets/media/images/portfolio-acc-1440.webp 1440w", width: "1440", height: "778" } },
    { id: "casagrande", index: "(03)", name: "Casagrande", category: "Máquinas para curtumes", url: "https://www.casamaq.ind.br/", year: "2026", image: { alt: "Página inicial do site da Casagrande", src: "/assets/media/images/portfolio-casagrande-1440.webp", srcSet: "/assets/media/images/portfolio-casagrande-720.webp 720w, /assets/media/images/portfolio-casagrande-1440.webp 1440w", width: "1440", height: "778" } },
    { id: "crespim", index: "(04)", name: "Crespim", category: "Barbearia", url: "https://crespimbarbearia.com.br/", year: "2026", image: { alt: "Página inicial do site da barbearia Crespim", src: "/assets/media/images/portfolio-crespim-1440.webp", srcSet: "/assets/media/images/portfolio-crespim-720.webp 720w, /assets/media/images/portfolio-crespim-1440.webp 1440w", width: "1440", height: "777" } }
];
