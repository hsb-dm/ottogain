import { readFileSync } from "node:fs";
const en = JSON.parse(readFileSync("./src/locales/en.json", "utf8"));
const id = JSON.parse(readFileSync("./src/locales/id.json", "utf8"));

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: "id",
  supportedLanguages: ["en", "id"],
  i18next: {
    debug: true, // convenient during development to check for missing keys
    fallbackLng: "id",
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
  },
  i18nextPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};
