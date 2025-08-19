import type { Metadata } from "next";
import { initI18next } from "@/app/i18n";
import TreatmentClient from "./treatment-client";

type PageProps = {
  params: { lng: "es" | "en" };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const i18n = await initI18next(params.lng);
  const t = i18n.getFixedT(params.lng, "common");
  const title = t("treatment.meta.title");
  const description = t("treatment.meta.description");
  const keywords = t("treatment.meta.keywords");
  return {
    title,
    description,
    keywords: typeof keywords === "string" ? keywords : undefined,
  };
}

export default function TratamientoPage({ params }: PageProps) {
  return <TreatmentClient lng={params.lng} />;
}