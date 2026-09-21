import "./globals.css";
import type { ReactNode } from "react";
import { Space_Grotesk, Montserrat } from "next/font/google";
import { SITE_ORIGIN } from "../lib/site";

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

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "VETTA — Premium Design Studio & Portfolio",
  "description": "VETTA is a design-forward studio crafting bold visuals, structured layouts, and high-impact digital experiences for ambitious brands.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "VETTA — Premium Design Studio & Portfolio",
    "description": "VETTA is a design-forward studio crafting bold visuals, structured layouts, and high-impact digital experiences for ambitious brands.",
    "type": "website",
    "url": "/",
    "images": [
      "/assets/media/images/og.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "VETTA — Premium Design Studio & Portfolio",
    "description": "VETTA is a design-forward studio crafting bold visuals, structured layouts, and high-impact digital experiences for ambitious brands.",
    "images": [
      "/assets/media/images/og.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/media/images/83da5a516ed4.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/media/images/4ba4e5c79b26.png",
        "media": "(prefers-color-scheme: dark)"
      }
    ]
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
      </body>
    </html>
  );
}
