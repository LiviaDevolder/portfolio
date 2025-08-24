"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
} from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import enUsMessages from "@/messages/en-US.json";
import ptBrMessages from "@/messages/pt-BR.json";
import esEsMessages from "@/messages/es-ES.json";

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const messagesMap: Record<string, AbstractIntlMessages> = {
  "en-US": enUsMessages,
  "pt-BR": ptBrMessages,
  "es-ES": esEsMessages,
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("pt-BR");
  const timeZone = "America/Sao_Paulo";

  const contextValue = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      <NextIntlClientProvider
        timeZone={timeZone}
        locale={locale}
        messages={messagesMap[locale]}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocaleContext must be used within a LocaleProvider");
  }
  return context;
}
