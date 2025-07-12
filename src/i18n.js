import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./Assets/locales/English.json";
import Spanish from "./Assets/locales/Spanish.json";
import French from "./Assets/locales/French.json";

// Read language from localStorage (or fallback to 'en')
const savedLanguage = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: English },
    es: { translation: Spanish },
    fr: { translation: French },
  },
  lng: savedLanguage, // use saved language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
