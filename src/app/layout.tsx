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
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  preload: true,
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  
  // Dynamic import based on locale
  const messages = await import(`@/messages/${locale}.json`);
  
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: messages.metadata.keywords || ["developer", "full stack", "Node.js", "TypeScript", "React", "WordPress", "portfolio"],
    authors: [{ name: "Lívia Devolder" }],
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      type: "website",
      locale: locale === "pt-BR" ? "pt_BR" : locale === "es-ES" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

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
