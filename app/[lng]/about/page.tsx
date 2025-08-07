"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Example page showing how to translate content with next-i18next in App Router
 * without changing the page's structure or design. Replace hardcoded strings
 * from the Spanish version with t("key") using the common.json namespace.
 */
export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Keep existing layout/design classes; only replace text with t("...") */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-900 mb-6">
          {t("badges.aboutVistacampo")}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          {/* Example mapping to a generic text; adapt your actual paragraph keys as needed */}
          {t("site.description")}
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/tratamiento">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              {t("actions.learnMoreTreatment")}
            </Button>
          </Link>
          <Link href="/contacto">
            <Button variant="outline" className="border-emerald-600 text-emerald-600">
              {t("actions.moreInfo")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}