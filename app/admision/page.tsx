import type { Metadata } from "next"
import AdmisionClientPage from "./AdmisionClientPage"

export const metadata: Metadata = {
  title: "Proceso de Admisión - Inicia tu Tratamiento | Vistacampo",
  description:
    "Conoce el proceso de admisión paso a paso para iniciar tu tratamiento en Vistacampo. Formularios, requisitos y información sobre privacidad y confidencialidad.",
  keywords: "admisión, proceso, tratamiento, formularios, Vistacampo, rehabilitación, Caracas",
}

export default function AdmisionPage() {
  return <AdmisionClientPage />
}
