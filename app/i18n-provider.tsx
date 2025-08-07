"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { initI18next, type Locale, defaultLocale } from "./i18n";

type Props = {
  children: React.ReactNode;
  lng?: Locale;
};

export function I18nProvider({ children, lng = defaultLocale }: Props) {
  const [ready, setReady] = React.useState(false);
  const [instance, setInstance] = React.useState<any>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const i18n = await initI18next(lng);
      if (mounted) {
        setInstance(i18n);
        setReady(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [lng]);

  if (!ready || !instance) return <>{children}</>;

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}