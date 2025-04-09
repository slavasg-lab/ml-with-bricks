import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en.json";
import translationDE from "./locales/de.json";


i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    load: 'languageOnly',
    fallbackLng: "en",
    resources: {
        en: translationEN,
        de: translationDE
    }
});

export default i18next;