"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import { Language, translations } from "@/i18n/translations";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: "es",
  toggleLanguage: () => undefined,
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "es";

    const storedLanguage = window.localStorage.getItem(
      "portfolio-language",
    ) as Language | null;

    return storedLanguage === "es" || storedLanguage === "en"
      ? storedLanguage
      : "es";
  });

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(
      "portfolio-language",
    ) as Language | null;
    if (storedLanguage === "es" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () =>
        setLanguage((current) => (current === "es" ? "en" : "es")),
      t: (key: string) => {
        const keys = key.split(".");
        const translation = keys.reduce<unknown>((acc, currentKey) => {
          if (acc && typeof acc === "object" && currentKey in acc) {
            return (acc as Record<string, unknown>)[currentKey];
          }
          return undefined;
        }, translations[language]);

        return typeof translation === "string" ? translation : key;
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
