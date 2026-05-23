import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frente Pro Yum Balam — Desarrollo Sustentable con Identidad",
  description:
    "Somos ejidatarios, campesinos y pobladores originarios de Quintana Roo comprometidos con demostrar que el desarrollo y la protección de Yum Balam pueden caminar juntos.",
  keywords: ["Yum Balam", "Quintana Roo", "desarrollo sustentable", "ejidatarios", "comunidad", "medio ambiente"],
  openGraph: {
    title: "Frente Pro Yum Balam",
    description: "Desarrollo sustentable con identidad comunitaria en Quintana Roo.",
    url: "https://frenteproyumbalam.org",
    siteName: "Frente Pro Yum Balam",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${lora.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
