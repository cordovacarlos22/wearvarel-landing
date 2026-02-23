"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { messages } from "@/i18n/messages"; // 

const LocaleContext = createContext(null);

export function LocaleProvider({ children, defaultLocale = "en" }) {
  const [locale, setLocale] = useState(defaultLocale);

  const value = useMemo(() => {
    const t = messages[locale] || messages.en; // fallback
    return { locale, setLocale, t };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider />");
  }
  return ctx;
}