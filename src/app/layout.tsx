import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { getLocale } from "next-intl/server";
import { LocaleProvider } from "@/components/LocaleProvider";

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
