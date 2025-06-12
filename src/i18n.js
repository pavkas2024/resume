import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import ua from './assets/locales/ua.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: 'en',  // Початкове значення мови
    fallbackLng: 'en', // Якщо не знайдена відповідна локалізація, буде використана ця мова
    interpolation: {
      escapeValue: false, // Для React
    },
  });


export default i18n;