import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "../components/Navbar/page";
import Cookie from "../components/Cookie/page";
import Footer from "../components/Footer/page";
import Bloqueio from "../components/Bloqueio/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stixmed | Consultas online e home care",
  description: "Seu médico online atendimento personalizado com serviços de home care para proporcionar mais conforto e qualidade de vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Bloqueio />
        <Navbar />
        {children}
        <Cookie />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-BVVT8LYMPM" />
    </html>
  );
}
