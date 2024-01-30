import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en, ptBr } from './translations'

const defaultLanguage = 'en'
const fallbackLng = 'en'

const languageDetectorPlugin: any = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  async detect(callback: (lang: string) => void) {
    return callback(defaultLanguage)
  }
}
const resources = {
  en: {
    translation: en
  },
  ptBr: {
    translation: ptBr
  }
}

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
