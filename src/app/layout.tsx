import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "../components/Navbar/page";
import Cookie from "../components/Cookie/page";
import Footer from "../components/Footer/page";
import Bloqueio from "../components/Bloqueio/page";
import Libra from "../components/Libras/page";

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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="copyright" content="Copyright (c) Corporation Global Queirós" />
        <meta name="theme-color" content="#250a96" />
        <link rel="canonical" href="https://stixmed.med.br/" />
        <meta name="author" content="Time Corporation Global Queirós" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="keywords" content='Stixmed, clínica de telemedicina, telemedicina 24h, home care domiciliar, atendimento médico online, consultas médicas, teleconsulta médica, médico online, cartão Stixmed, plano de saúde acessível'/>
        <meta property="og:title" content="Stixmed | Consultas online e home care" />
        <meta property="og:description" content="Seu médico online atendimento personalizado com serviços de home care para proporcionar mais conforto e qualidade de vida." />
        <meta property="og:url" content="https://stixmed.med.br/" />
        <meta property="og:site_name" content="Stixmed | Consultas online e home care"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/facebook.png" />
        <link rel="dns-prefetch" href="www.glowx.com.br" />
        <link rel="dns-prefetch" href="//ssl.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//v2.zopim.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="www.googletagmanager.com" />
        <link rel="dns-prefetch" href="fonts.googleapis.com" />
        <link rel="dns-prefetch" href="www.google-analytics.com" />
      </head>
      <body>
        <Libra />
        <Bloqueio />
        <Navbar />
        {children}
        <Cookie />
        <Footer />
        <GoogleAnalytics gaId="G-BVVT8LYMPM" />
      </body>
    </html>
  );
}
