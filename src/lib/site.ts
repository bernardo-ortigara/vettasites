// Ordem: variável própria → domínio de produção informado pela Vercel no build → domínio oficial
const vercelProducao = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN ||
  (vercelProducao ? `https://${vercelProducao}` : "https://vettasites.com.br")
).replace(/\/$/, "");
