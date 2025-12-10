import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import id from "./locales/id.json";

i18n
  .use(LanguageDetector) // <-- This handles persistence via localStorage/cookies
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // debug: true,
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
