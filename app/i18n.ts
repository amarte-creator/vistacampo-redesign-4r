import i18n, { type InitOptions } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const namespaces = ['common'] as const;

let initialized = false;

export function getOptions(lng: Locale, ns: string[] = [...namespaces]): InitOptions {
  return {
    supportedLngs: locales as unknown as string[],
    fallbackLng: defaultLocale,
    lng,
    ns,
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    returnNull: false,
  };
}

export async function initI18next(lng: Locale, ns: string[] = [...namespaces]) {
  if (!initialized) {
    i18n
      .use(initReactI18next)
      .use(
        resourcesToBackend((language: string, namespace: string) =>
          import(`../public/locales/${language}/${namespace}.json`)
        )
      );
    initialized = true;
  }
  if (!i18n.isInitialized) {
    await i18n.init(getOptions(lng, ns));
  } else {
    await i18n.changeLanguage(lng);
  }
  return i18n;
}