"use client";

import { useContext } from "react";
import { LanguageContext } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink transition-all duration-200 hover:border-terra hover:text-terra"
      aria-label="Switch language"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
