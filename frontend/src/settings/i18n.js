import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonMessages_en from '../components/common/messages_en.json';
import commonMessages_ru from '../components/common/messages_ru.json';

import sectionMessages_en from '../components/sections/messages_en.json';
import sectionMessages_ru from '../components/sections/messages_ru.json';

const resources = {
  en: {
    common: commonMessages_en,
    sections: sectionMessages_en
  },
  ru: {
    common: commonMessages_ru,
    sections: sectionMessages_ru
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;