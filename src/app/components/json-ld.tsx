import { SITE_ORIGIN } from "../../lib/site";
import { VETTA } from "../../lib/vetta";
import { faqs } from "../content";

export default function JsonLd() {
  const base = SITE_ORIGIN;
  const telefone = VETTA.whatsapp ? `+${VETTA.whatsapp}` : undefined;

  const organizacao = {
    "@type": "Organization",
    "@id": `${base}/#organizacao`,
    name: VETTA.nome,
    legalName: VETTA.razaoSocial || undefined,
    url: base,
    logo: `${base}/assets/media/logo/vetta-horizontal.png`,
    slogan: VETTA.slogan,
    email: VETTA.email || undefined,
    telephone: telefone,
    sameAs: [VETTA.instagram].filter(Boolean)
  };

  const servico = {
    "@type": "ProfessionalService",
    "@id": `${base}/#servico`,
    name: VETTA.nome,
    description: VETTA.descricao,
    url: base,
    image: `${base}/assets/media/images/og.jpg`,
    telephone: telefone,
    parentOrganization: { "@id": `${base}/#organizacao` },
    areaServed: { "@type": "Country", name: "Brasil" },
    address: VETTA.cidade
      ? {
          "@type": "PostalAddress",
          addressLocality: VETTA.cidade,
          addressRegion: VETTA.estado || undefined,
          addressCountry: VETTA.pais
        }
      : undefined,
    knowsAbout: ["Criação de sites", "Landing pages", "Lojas virtuais", "SEO", "Performance web"]
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };

  const grafo = { "@context": "https://schema.org", "@graph": [organizacao, servico, faq] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }}
    />
  );
}
