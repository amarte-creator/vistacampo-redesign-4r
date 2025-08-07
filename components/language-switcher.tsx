"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, type Locale, defaultLocale } from "@/app/i18n";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Determine current locale from the first path segment
  const seg = (pathname.split("/")[1] as Locale) || defaultLocale;
  const current: Locale = (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;

  function switchTo(next: Locale) {
    if (next === current) return;

    // Remove leading locale segment if present
    const withoutLocale = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
    // Ensure leading slash
    const nextPath = `/${next}${withoutLocale || "/"}`;

    startTransition(() => {
      router.push(nextPath);
    });
  }

  return (
    <div className="inline-flex items-center gap-1" aria-label="Language switcher">
      <Button
        type="button"
        variant={current === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => switchTo("es")}
        aria-pressed={current === "es"}
      >
        ES
      </Button>
      <Button
        type="button"
        variant={current === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => switchTo("en")}
        aria-pressed={current === "en"}
      >
        EN
      </Button>
    </div>
  );
}