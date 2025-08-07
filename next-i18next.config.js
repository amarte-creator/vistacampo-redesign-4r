/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  ns: ['common'],
  fallbackLng: 'en',
  localePath: './public/locales',
};

module.exports = i18nConfig;