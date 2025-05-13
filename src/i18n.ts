import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz", // agar hech narsa topilmasa, uz bo'ladi
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translation: {
          home: "Главная",
          about: "О нас",
          courses: "Курсы",
          contact: "Контакты",
          call: "Позвонить",
        },
      },
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "Biz haqimizda",
          courses: "Kurslar",
          contact: "Kontaktlar",
          call: "Qo‘ng‘iroq qilish",
        },
      },
    },
  });

export default i18n;
