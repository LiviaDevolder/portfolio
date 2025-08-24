import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { getLocale } from "next-intl/server";
import { LocaleProvider } from "@/components/LocaleProvider";
import type { Metadata } from "next";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: "300",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Lívia Devolder | Desenvolvedora Full Stack",
  description: "Portfolio profissional de Lívia Devolder, desenvolvedora full stack especializada em Node.js, TypeScript, React e WordPress. MBA em Engenharia de Software com IA.",
  keywords: ["desenvolvedora", "full stack", "Node.js", "TypeScript", "React", "WordPress", "portfolio"],
  authors: [{ name: "Lívia Devolder" }],
  openGraph: {
    title: "Lívia Devolder | Desenvolvedora Full Stack",
    description: "Portfolio profissional de Lívia Devolder, desenvolvedora full stack com mais de 4 anos de experiência.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lívia Devolder | Desenvolvedora Full Stack",
    description: "Portfolio profissional de Lívia Devolder, desenvolvedora full stack especializada em Node.js, TypeScript, React e WordPress.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${cormorantGaramond.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LocaleProvider>
          <Provider>{children}</Provider>
        </LocaleProvider>
      </body>
    </html>
  );
}
