
export type LogosItem = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
export const logos: LogosItem[] = [
    { height: "64", imgSrc: "/assets/media/images/911144d091cb.png", width: "246" },
    { height: "45", imgSrc: "/assets/media/images/e87a3d2783c3.png", width: "206" },
    { height: "90", imgSrc: "/assets/media/svg/d46969807239.svg", width: "524", sizes: "104px", srcSet: "/assets/media/svg/c353bbcb9492.svg 512w, /assets/media/svg/d46969807239.svg 524w" },
    { height: "64", imgSrc: "/assets/media/images/f365e588160f.png", width: "302" },
    { height: "52", imgSrc: "/assets/media/images/ac61b5b7dc60.png", width: "416" },
    { height: "64", imgSrc: "/assets/media/images/911144d091cb.png", width: "246" }
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
    { description: "Textos e imagens tratados para a web" },
    { description: "Estrutura pensada para conversão" },
    { description: "SEO técnico e site rápido no Google" }
];

export const planFeaturesComplete: PlanFeatureItem[] = [
    { description: "Layout sob medida para a sua marca" },
    { description: "Site responsivo em celular e desktop" },
    { description: "Formulário ligado ao seu WhatsApp" },
    { description: "Textos e imagens tratados para a web" },
    { description: "Estrutura pensada para conversão" },
    { description: "SEO técnico e site rápido no Google" },
    { description: "Painel para você editar o conteúdo" },
    { description: "Acompanhamento após o lançamento" }
];

export type TestimonialImage = {
  alt: string;
  src: string;
  srcSet: string;
};
export type TestimonialItem = {
  quote: string;
  quoteBase?: string;
  name: string;
  role: string;
  portrait: TestimonialImage & { width: string; height: string };
  logo: { src: string; width: string; height: string };
  avatar: TestimonialImage;
};
export const testimonials: TestimonialItem[] = [
    {
        quote: "“Cada passo importa. Um site não é um arquivo entregue no fim do projeto: é a base de uma subida que continua depois do lançamento.”",
        name: "Vetta Sites",
        role: "Manifesto / 01",
        portrait: { alt: "Caminhada em trilha de montanha ao amanhecer", src: "/assets/media/images/7581dd9e5d6f.webp", srcSet: "/assets/media/images/e3b5cac7489f.png 716w, /assets/media/images/7581dd9e5d6f.webp 896w", width: "896", height: "1280" },
        logo: { src: "/assets/media/images/logo.webp", width: "296", height: "55" },
        avatar: { alt: "Detalhe de uma escalada em rocha", src: "/assets/media/images/beaaaddd3941.png", srcSet: "/assets/media/images/2f2d20acf0ee.png 512w, /assets/media/images/beaaaddd3941.png 1024w" }
    },
    {
        quote: "“Cada jornada transforma. Estratégia, design e performance trabalham juntos para que o site diga o que a marca vale antes da primeira conversa.”",
        name: "Vetta Sites",
        role: "Manifesto / 02",
        portrait: { alt: "Alpinista conferindo o equipamento antes da subida", src: "/assets/media/images/59ca2b54402e.webp", srcSet: "/assets/media/images/48460b2bbd11.png 716w, /assets/media/images/59ca2b54402e.webp 896w", width: "896", height: "1280" },
        logo: { src: "/assets/media/images/logo.webp", width: "296", height: "55" },
        avatar: { alt: "Vista de um vale entre montanhas", src: "/assets/media/images/e6f70244dd17.webp", srcSet: "/assets/media/images/322ebb0029ee.png 512w, /assets/media/images/e6f70244dd17.webp 1024w" }
    },
    {
        quote: "“Cada conquista leva ao topo. O próximo nível do seu negócio começa por uma presença digital que nenhum concorrente consegue copiar.”",
        name: "Vetta Sites",
        role: "Manifesto / 03",
        portrait: { alt: "Bandeira fincada no cume de uma montanha", src: "/assets/media/images/a8a049fba604.webp", srcSet: "/assets/media/images/7292e9ec2814.png 761w, /assets/media/images/a8a049fba604.webp 880w", width: "880", height: "1184" },
        logo: { src: "/assets/media/images/logo.webp", width: "296", height: "55" },
        avatar: { alt: "Cordilheira ao pôr do sol", src: "/assets/media/images/c80849aeff3f.webp", srcSet: "/assets/media/images/6dcc2299a6ae.png 512w, /assets/media/images/c80849aeff3f.webp 1024w" }
    },
]

export type TestimonialStatColumn = {
  figures: string[];
  title: string;
  subtitle: string;
};
export const testimonialStats: TestimonialStatColumn[] = [
    { figures: ["01", "02", "03"], title: "Princípio", subtitle: "Manifesto Vetta" },
    { figures: ["Passo", "Jornada", "Topo"], title: "Etapa", subtitle: "Da ideia ao lançamento" }
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
        question: "Eu consigo editar o conteúdo depois?",
        answer: "Sim. Nos planos com painel, você edita textos e imagens sem depender de ninguém. Nos demais, ajustes de conteúdo entram no acompanhamento combinado após o lançamento."
    },
    {
        question: "Vocês cuidam do domínio e da hospedagem?",
        answer: "Cuidamos da publicação de ponta a ponta: configuração de domínio, certificado de segurança e hospedagem. Os acessos ficam no seu nome, sempre."
    },
    {
        question: "Como funciona o orçamento?",
        answer: "Você manda uma mensagem no WhatsApp contando o que precisa. A gente entende o objetivo do site, propõe o escopo e passa o valor fechado, sem cobrança por hora e sem surpresa no meio do caminho."
    }
];

export type ProjectImage = {
  alt: string;
  src: string;
  srcSet?: string;
  width: string;
  height: string;
  aspect: string;
};
export type ProjectFact = {
  label: string;
  value: string;
};
export type ProjectChapter = {
  heading: string;
  body: string;
};
export type ProjectItem = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  liveUrl?: string;
  scope: string[];
  image: ProjectImage;
  span: "wide" | "tall";
  intro: string;
  facts: ProjectFact[];
  chapters: ProjectChapter[];
  stats: { figure: string; label: string }[];
  gallery: ProjectImage[];
};

export const projects: ProjectItem[] = [
    {
        slug: "site-institucional",
        index: "(01)",
        title: "Site institucional",
        category: "Sites",
        year: "2026",
        summary: "Modelo de site institucional: apresentação da empresa, serviços e um caminho curto até o contato.",
        scope: ["Estratégia", "Design", "Desenvolvimento"],
        image: { alt: "Página inicial de um site institucional", src: "/assets/media/images/3418d4c75efa.png", srcSet: "/assets/media/images/11c385d08bb3.png 512w, /assets/media/images/4bc49ee40f65.png 1024w, /assets/media/images/3418d4c75efa.png 1392w", width: "1392", height: "752", aspect: "aspect-[auto_1392/752]" },
        span: "wide",
        intro: "Layout demonstrativo de site institucional. Serve para mostrar a estrutura que a Vetta entrega neste tipo de projeto — e será substituído pelo case real assim que o cliente autorizar a publicação.",
        facts: [
            { label: "Tipo", value: "Site institucional" },
            { label: "Escopo", value: "Estratégia, design e desenvolvimento" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Empresas que dependem de indicação precisam de um site que confirme, em poucos segundos, aquilo que o cliente já ouviu falar. A estrutura abre pelo posicionamento, mostra os serviços em blocos curtos e leva ao contato sem rodeio." },
            { heading: "A execução", body: "Uma página por intenção de busca, hierarquia de títulos clara e imagens tratadas para carregar rápido no celular. O formulário abre direto no WhatsApp, onde a conversa realmente acontece." },
            { heading: "O resultado", body: "Este bloco recebe os números reais do projeto — tempo de carregamento, posições no Google e volume de contatos — quando o case for publicado." }
        ],
        stats: [
            { figure: "5", label: "Páginas na estrutura base" },
            { figure: "24h", label: "Prazo de resposta no orçamento" },
            { figure: "100%", label: "Responsivo em celular e desktop" }
        ],
        gallery: [
            { alt: "Detalhe da página inicial", src: "/assets/media/images/95d860ec3768.webp", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
            { alt: "Página interna no celular", src: "/assets/media/images/6c6b19e154f4.webp", width: "896", height: "1280", aspect: "aspect-[auto_896/1280]" },
            { alt: "Bloco de serviços do site", src: "/assets/media/images/29b003003242.webp", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" }
        ]
    },
    {
        slug: "landing-page",
        index: "(02)",
        title: "Landing page de campanha",
        category: "Landing pages",
        year: "2026",
        summary: "Página única para campanhas de anúncios, com um só objetivo e um só caminho de conversão.",
        scope: ["Copy", "Design", "Performance"],
        image: { alt: "Landing page aberta em um notebook", src: "/assets/media/images/d429b442416a.webp", srcSet: "/assets/media/images/ad9b2d2be81b.png 512w, /assets/media/images/27d11552e704.png 1024w, /assets/media/images/93c9d668a9d7.png 2048w, /assets/media/images/d429b442416a.webp 2728w", width: "2728", height: "1536", aspect: "aspect-[auto_2728/1536]" },
        span: "tall",
        intro: "Layout demonstrativo de landing page. Mostra como a Vetta organiza uma página de campanha quando existe um único objetivo a cumprir.",
        facts: [
            { label: "Tipo", value: "Landing page" },
            { label: "Escopo", value: "Copy, design e performance" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Tráfego pago não perdoa página lenta nem argumento confuso. A landing abre com a promessa, sustenta com prova e fecha com um formulário curto, sem menu para distrair." },
            { heading: "A execução", body: "Carregamento otimizado, imagens em WebP, tipografia da marca e um bloco de perguntas frequentes que responde à objeção antes que ela vire desistência." },
            { heading: "O resultado", body: "Espaço reservado para as métricas reais da campanha — custo por contato, taxa de conversão e volume de mensagens." }
        ],
        stats: [
            { figure: "1", label: "Objetivo por página" },
            { figure: "WebP", label: "Imagens otimizadas" },
            { figure: "0", label: "Distrações no caminho" }
        ],
        gallery: [
            { alt: "Seção de destaque da landing", src: "/assets/media/images/77c9bcc2e4b4.png", width: "896", height: "1280", aspect: "aspect-[auto_896/1280]" },
            { alt: "Bloco de prova social", src: "/assets/media/images/2f4b7d061507.webp", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
            { alt: "Formulário de contato", src: "/assets/media/images/7e23205fe948.png", width: "768", height: "1408", aspect: "aspect-[auto_768/1408]" }
        ]
    },
    {
        slug: "loja-virtual",
        index: "(03)",
        title: "Loja virtual",
        category: "E-commerce",
        year: "2026",
        summary: "Vitrine, página de produto e checkout pensados para reduzir o abandono no meio do caminho.",
        scope: ["Estratégia", "Design", "E-commerce"],
        image: { alt: "Vitrine de uma loja virtual", src: "/assets/media/images/5185120aa8bd.png", srcSet: "/assets/media/images/c8180f2f6a1e.png 512w, /assets/media/images/84aa5eed3e6f.png 1024w, /assets/media/images/5185120aa8bd.png 1280w", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
        span: "tall",
        intro: "Layout demonstrativo de loja virtual. Representa a estrutura que a Vetta usa quando o site precisa vender direto, sem intermediário.",
        facts: [
            { label: "Tipo", value: "Loja virtual" },
            { label: "Escopo", value: "Estratégia, design e e-commerce" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Em loja virtual, cada passo a mais entre o produto e o pagamento custa venda. A estrutura reduz o percurso e mantém a informação essencial sempre visível." },
            { heading: "A execução", body: "Categorias organizadas pela forma como o cliente procura, página de produto com foto grande e resposta às dúvidas mais comuns, e checkout em uma etapa." },
            { heading: "O resultado", body: "Reservado para os números reais da operação quando o case for publicado." }
        ],
        stats: [
            { figure: "1", label: "Etapa no checkout" },
            { figure: "3", label: "Cliques até o carrinho" },
            { figure: "100%", label: "Responsivo em celular e desktop" }
        ],
        gallery: [
            { alt: "Página de categoria da loja", src: "/assets/media/images/b2c0d66b9ce6.webp", width: "832", height: "1248", aspect: "aspect-[auto_832/1248]" },
            { alt: "Página de produto", src: "/assets/media/images/a376f8cd1db2.webp", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
            { alt: "Checkout em uma etapa", src: "/assets/media/images/031d00a78b18.png", width: "1024", height: "1024", aspect: "aspect-[auto_1024/1024]" }
        ]
    },
    {
        slug: "site-de-servicos",
        index: "(04)",
        title: "Site de serviços",
        category: "Sites",
        year: "2026",
        summary: "Uma página por serviço, cada uma escrita para a busca que o cliente realmente faz.",
        scope: ["SEO", "Design", "Desenvolvimento"],
        image: { alt: "Site de serviços em telas de celular", src: "/assets/media/images/d97fcf9ca982.png", srcSet: "/assets/media/images/c05999c1edde.png 512w, /assets/media/images/f2a42560e3d8.png 1024w, /assets/media/images/d97fcf9ca982.png 1408w", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
        span: "wide",
        intro: "Layout demonstrativo de site de serviços. Mostra como a Vetta separa o conteúdo quando cada serviço tem um público e uma busca diferente.",
        facts: [
            { label: "Tipo", value: "Site de serviços" },
            { label: "Escopo", value: "SEO, design e desenvolvimento" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Quem procura por um serviço específico não quer uma página genérica. Cada serviço ganha a sua própria página, com título, descrição e conteúdo próprios." },
            { heading: "A execução", body: "Estrutura semântica, dados estruturados e links internos ligando os serviços entre si, de modo que o Google entenda a relação e o visitante encontre o próximo passo." },
            { heading: "O resultado", body: "Espaço reservado para as posições e o tráfego orgânico reais do projeto." }
        ],
        stats: [
            { figure: "1", label: "Página por serviço" },
            { figure: "SEO", label: "Base técnica em todas elas" },
            { figure: "24h", label: "Prazo de resposta no orçamento" }
        ],
        gallery: [
            { alt: "Página de serviço", src: "/assets/media/images/0324a09ab65c.webp", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
            { alt: "Versão mobile do site", src: "/assets/media/images/68c91cf88797.webp", width: "896", height: "1280", aspect: "aspect-[auto_896/1280]" },
            { alt: "Grade de componentes do projeto", src: "/assets/media/images/411edd68feb0.png", width: "1420", height: "1422", aspect: "aspect-[auto_1420/1422]" }
        ]
    },
    {
        slug: "portfolio-digital",
        index: "(05)",
        title: "Portfólio digital",
        category: "Portfólio",
        year: "2026",
        summary: "Um portfólio em que o trabalho aparece primeiro e o texto entra só para explicar a decisão.",
        scope: ["Design", "Desenvolvimento"],
        image: { alt: "Portfólio digital em tela cheia", src: "/assets/media/images/467b27e5dc07.webp", width: "1408", height: "768", aspect: "aspect-[auto_1408/768]" },
        span: "wide",
        intro: "Layout demonstrativo de portfólio. Serve para quem vende pelo próprio trabalho e precisa que ele apareça sem interferência.",
        facts: [
            { label: "Tipo", value: "Portfólio digital" },
            { label: "Escopo", value: "Design e desenvolvimento" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Portfólio ruim é aquele em que a interface disputa atenção com a obra. Aqui a grade é discreta e o projeto ocupa a tela inteira." },
            { heading: "A execução", body: "Grade responsiva, carregamento progressivo das imagens e uma página por projeto, com espaço para contar a decisão por trás do trabalho." },
            { heading: "O resultado", body: "Reservado para os dados reais de visita e contato quando o case for publicado." }
        ],
        stats: [
            { figure: "1", label: "Página por projeto" },
            { figure: "Lazy", label: "Carregamento progressivo" },
            { figure: "100%", label: "Responsivo em celular e desktop" }
        ],
        gallery: [
            { alt: "Grade do portfólio", src: "/assets/media/images/32cb8dd9da14.webp", width: "1024", height: "559", aspect: "aspect-[auto_1024/559]" },
            { alt: "Detalhe de tipografia do projeto", src: "/assets/media/images/79c2189f3af7.png", width: "1024", height: "1024", aspect: "aspect-[auto_1024/1024]" },
            { alt: "Página de projeto individual", src: "/assets/media/images/1b886de39cd8.png", width: "683", height: "1024", aspect: "aspect-[auto_683/1024]" }
        ]
    },
    {
        slug: "pagina-de-captura",
        index: "(06)",
        title: "Página de captura",
        category: "Landing pages",
        year: "2026",
        summary: "Página curta para lista de espera, material rico ou inscrição, com formulário de três campos.",
        scope: ["Copy", "Design"],
        image: { alt: "Página de captura de contatos", src: "/assets/media/images/02f3a7db3446.webp", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
        span: "tall",
        intro: "Layout demonstrativo de página de captura. Mostra a versão mais enxuta do que a Vetta entrega quando o objetivo é só um: pegar o contato.",
        facts: [
            { label: "Tipo", value: "Página de captura" },
            { label: "Escopo", value: "Copy e design" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Quanto mais curta a página, mais clara precisa ser a troca. O visitante entende em uma tela o que recebe e o que precisa informar." },
            { heading: "A execução", body: "Três campos, um botão e nenhum menu. O contato chega no WhatsApp com a mensagem já montada." },
            { heading: "O resultado", body: "Espaço reservado para a taxa de conversão real da campanha." }
        ],
        stats: [
            { figure: "3", label: "Campos no formulário" },
            { figure: "1", label: "Tela até o contato" },
            { figure: "WhatsApp", label: "Destino dos contatos" }
        ],
        gallery: [
            { alt: "Topo da página de captura", src: "/assets/media/images/019a3df9011c.png", width: "1152", height: "2048", aspect: "aspect-[auto_1152/2048]" },
            { alt: "Bloco de benefícios", src: "/assets/media/images/b81b53b51d2f.webp", width: "1024", height: "717", aspect: "aspect-[auto_1024/717]" },
            { alt: "Formulário curto de contato", src: "/assets/media/images/259e6dc735f5.png", width: "717", height: "1024", aspect: "aspect-[auto_717/1024]" }
        ]
    },
    {
        slug: "site-de-evento",
        index: "(07)",
        title: "Site de evento",
        category: "Sites",
        year: "2026",
        summary: "Programação, inscrição e informações práticas em uma estrutura que aguenta pico de acesso.",
        scope: ["Design", "Desenvolvimento", "Performance"],
        image: { alt: "Site de evento em diferentes telas", src: "/assets/media/images/ce794bd8df42.webp", width: "1280", height: "896", aspect: "aspect-[auto_1280/896]" },
        span: "tall",
        intro: "Layout demonstrativo de site de evento. Representa a estrutura usada quando a data é fixa e o acesso se concentra em poucos dias.",
        facts: [
            { label: "Tipo", value: "Site de evento" },
            { label: "Escopo", value: "Design, desenvolvimento e performance" },
            { label: "Prazo", value: "Sob medida" },
            { label: "Ano", value: "2026" }
        ],
        chapters: [
            { heading: "O objetivo", body: "Site de evento vive de dois momentos: o anúncio e a véspera. Em ambos, precisa abrir rápido e responder às perguntas práticas sem exigir busca." },
            { heading: "A execução", body: "Programação em blocos, inscrição sempre a um clique de distância e páginas estáticas, que aguentam pico de acesso sem cair." },
            { heading: "O resultado", body: "Reservado para os números reais de inscrição e acesso quando o case for publicado." }
        ],
        stats: [
            { figure: "0", label: "Tempo de servidor por acesso" },
            { figure: "1", label: "Clique até a inscrição" },
            { figure: "100%", label: "Responsivo em celular e desktop" }
        ],
        gallery: [
            { alt: "Programação do evento", src: "/assets/media/images/2172c7a38664.webp", width: "1536", height: "960", aspect: "aspect-[auto_1536/960]" },
            { alt: "Área de inscrição", src: "/assets/media/images/9f04c30f9315.webp", width: "1024", height: "1024", aspect: "aspect-[auto_1024/1024]" },
            { alt: "Página do evento no celular", src: "/assets/media/images/25749aa0ee1f.webp", width: "1024", height: "559", aspect: "aspect-[auto_1024/559]" }
        ]
    },
];

export const projectCategories: string[] = ["Sites", "Landing pages", "E-commerce", "Portfólio"];

export function getProject(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): ProjectItem {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export function getNextProjects(slug: string, count = 2): ProjectItem[] {
  const i = projects.findIndex((p) => p.slug === slug);
  const start = i < 0 ? 0 : i;
  return Array.from({ length: Math.min(count, projects.length - 1) }, (_, n) => projects[(start + 1 + n) % projects.length]);
}
