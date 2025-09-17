"use client";

import React, { useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { initI18next, type Locale, defaultLocale } from "./i18n";

type Props = {
  children: React.ReactNode;
  lng?: Locale;
};

export function I18nProvider({ children, lng = defaultLocale }: Props) {
  const [ready, setReady] = React.useState(false);
  const [instance, setInstance] = React.useState<any>(null);

  // Memoize the initialization to prevent unnecessary re-runs
  const initPromise = useMemo(() => {
    return initI18next(lng);
  }, [lng]);

  useEffect(() => {
    let mounted = true;
    
    // Use a more efficient initialization approach
    initPromise.then((i18n) => {
      if (mounted) {
        setInstance(i18n);
        setReady(true);
      }
    }).catch((error) => {
      console.error('Failed to initialize i18n:', error);
      if (mounted) {
        setReady(true); // Still render children even if i18n fails
      }
    });

    return () => {
      mounted = false;
    };
  }, [initPromise]);

  // Always render children, but provide i18n when ready
  if (!ready || !instance) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}