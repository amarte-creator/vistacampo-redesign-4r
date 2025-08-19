import type { Metadata } from "next";
import { initI18next } from "@/app/i18n";
import TreatmentClient from "./treatment-client";

type PageProps = {
  params: Promise<{ lng: "es" | "en" }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lng } = await params;
  const i18n = await initI18next(lng);
  const t = i18n.getFixedT(lng, "common");
  const title = t("treatment.meta.title");
  const description = t("treatment.meta.description");
  const keywords = t("treatment.meta.keywords");
  return {
    title,
    description,
    keywords: typeof keywords === "string" ? keywords : undefined,
  };
}

export default async function TratamientoPage({ params }: PageProps) {
  const { lng } = await params;
  return <TreatmentClient lng={lng} />;
}