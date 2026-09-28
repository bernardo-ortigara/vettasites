import "./globals.css";
import type { ReactNode } from "react";
import { Space_Grotesk, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { SITE_ORIGIN } from "../lib/site";
import { VETTA } from "../lib/vetta";
import JsonLd from "./components/json-ld";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  // Aba do navegador mostra só a marca, em todas as páginas
  title: {
    default: "Vetta Sites",
    template: "Vetta Sites"
  },
  description: VETTA.descricao,
  applicationName: VETTA.nome,
  keywords: [
    "criação de sites",
    "desenvolvimento de sites",
    "site institucional",
    "landing page",
    "loja virtual",
    "agência de sites",
    "SEO"
  ],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vetta Sites",
    description: VETTA.descricao,
    type: "website",
    locale: "pt_BR",
    siteName: VETTA.nome,
    url: "/",
    images: [{ url: "/assets/media/images/og.jpg", width: 1200, height: 630, alt: "Vetta Sites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vetta Sites",
    description: VETTA.descricao,
    images: ["/assets/media/images/og.jpg"]
  }
};

export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${montserrat.variable}`}>
      <body className="block text-night bg-night font-body text-xs font-normal leading-3.5">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
