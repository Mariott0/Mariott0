import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanmariotto.com.br"),
  title: "Nathan Mariotto — Quality Assurance & Desenvolvimento",
  description: "Portfólio de Nathan Mariotto, profissional de QA, automação de testes e desenvolvimento de software.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nathan Mariotto — Quality Assurance & Desenvolvimento",
    description: "Qualidade que sustenta grandes produtos. QA, automação de testes e desenvolvimento de software.",
    url: "https://nathanmariotto.com.br",
    siteName: "Nathan Mariotto",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nathan Mariotto — Quality Assurance, Automação e Desenvolvimento" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Mariotto — Quality Assurance & Desenvolvimento",
    description: "Qualidade que sustenta grandes produtos.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
