import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arabic from './locales/ar/translations.json';
import english from './locales/en/translations.json';

i18n.use(initReactI18next).init({
  lng: 'ar',
  fallbackLng: 'ar',
  resources: {
    ar: {
      translations: arabic,
    },
    en: {
      translations: english,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['ar', 'en'];

export default i18n;

