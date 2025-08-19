"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Users, Heart, Shield, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import { initI18next } from "@/app/i18n";

type Props = {
  lng: "es" | "en";
};

export default function TreatmentClient({ lng }: Props) {
  const { t, i18n } = useTranslation("common");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await initI18next(lng);
      setIsReady(true);
    };
    initializeI18n();
  }, [lng]);

  // Show loading state while i18n is initializing
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {lng === "es" ? "Cargando..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
              {t("treatment.hero.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("treatment.hero.title")}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t("treatment.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                  {t("treatment.hero.contact")}
                </Button>
              </a>
              <Link href={`/${lng}/admision`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("actions.moreInfo")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque Médico y Psicológico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  {t("treatment.approach.badge")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t("treatment.approach.title")}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("treatment.approach.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t("treatment.approach.points.0.title")}</h3>
                      <p className="text-gray-600">{t("treatment.approach.points.0.text")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t("treatment.approach.points.1.title")}</h3>
                      <p className="text-gray-600">{t("treatment.approach.points.1.text")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{t("treatment.approach.points.2.title")}</h3>
                      <p className="text-gray-600">{t("treatment.approach.points.2.text")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/vc-terapia-2.jpeg"
                  alt={t("treatment.approach.imageAlt")}
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos del Tratamiento */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("treatment.goals.badge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("treatment.goals.title")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("treatment.goals.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-emerald-600 font-bold text-xl">1</span>
                  </div>
                  <CardTitle className="text-xl">{t("treatment.goals.cards.0.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{t("treatment.goals.cards.0.text")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <CardTitle className="text-xl">{t("treatment.goals.cards.1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{t("treatment.goals.cards.1.text")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <CardTitle className="text-xl">{t("treatment.goals.cards.2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{t("treatment.goals.cards.2.text")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">4</span>
                  </div>
                  <CardTitle className="text-xl">{t("treatment.goals.cards.3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{t("treatment.goals.cards.3.text")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fases Detalladas del Tratamiento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("treatment.phases.badge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("treatment.phases.title")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("treatment.phases.description")}
              </p>
            </div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{t("treatment.phases.items.0.title")}</h3>
                      <p className="text-emerald-600 font-medium">{t("treatment.phases.items.0.subtitle")}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">{t("treatment.phases.items.0.text")}</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.0.points.0")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.0.points.1")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.0.points.2")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.0.points.3")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/vc-comida.jpeg"
                    alt={t("treatment.phases.items.0.imageAlt")}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Phase 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-2">
                  <Image
                    src="/images/vc-desayuno.jpeg"
                    alt={t("treatment.phases.items.1.imageAlt")}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{t("treatment.phases.items.1.title")}</h3>
                      <p className="text-blue-600 font-medium">{t("treatment.phases.items.1.subtitle")}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">{t("treatment.phases.items.1.text")}</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.1.points.0")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.1.points.1")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.1.points.2")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.1.points.3")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{t("treatment.phases.items.2.title")}</h3>
                      <p className="text-purple-600 font-medium">{t("treatment.phases.items.2.subtitle")}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">{t("treatment.phases.items.2.text")}</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.2.points.0")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.2.points.1")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.2.points.2")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.2.points.3")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/vc-florero.jpeg"
                    alt={t("treatment.phases.items.2.imageAlt")}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Phase 4 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-2">
                  <Image
                    src="/images/vc-sala-cala.jpeg"
                    alt={t("treatment.phases.items.3.imageAlt")}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">4</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{t("treatment.phases.items.3.title")}</h3>
                      <p className="text-teal-600 font-medium">{t("treatment.phases.items.3.subtitle")}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">{t("treatment.phases.items.3.text")}</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.3.points.0")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.3.points.1")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.3.points.2")}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>{t("treatment.phases.items.3.points.3")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Etapas del Tratamiento (cards) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("treatment.stages.badge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("treatment.stages.title")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("treatment.stages.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stage 1 */}
              <Card className="border-0 shadow-lg relative">
                <div className="absolute -top-4 left-6">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-center">{t("treatment.stages.cards.0.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {t("treatment.stages.cards.0.text")}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>{t("treatment.stages.cards.0.duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span>{t("treatment.stages.cards.0.supervision")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 2 */}
              <Card className="border-0 shadow-lg relative">
                <div className="absolute -top-4 left-6">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-center">{t("treatment.stages.cards.1.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {t("treatment.stages.cards.1.text")}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{t("treatment.stages.cards.1.duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{t("treatment.stages.cards.1.sessions")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 3 */}
              <Card className="border-0 shadow-lg relative">
                <div className="absolute -top-4 left-6">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-center">{t("treatment.stages.cards.2.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {t("treatment.stages.cards.2.text")}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span>{t("treatment.stages.cards.2.duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>{t("treatment.stages.cards.2.consults")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                {t("treatment.faq.badge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("treatment.faq.title")}
              </h2>
              <p className="text-lg text-gray-700">
                {t("treatment.faq.description")}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <AccordionItem key={i} value={`item-${i+1}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {t(`treatment.faq.items.${i}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    {t(`treatment.faq.items.${i}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("treatment.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("treatment.cta.text")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  {t("treatment.cta.contact")}
                </Button>
              </a>
              <Link href={`/${lng}/admision`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-emerald-600 hover:bg-gray-100">
                  {t("treatment.cta.admission")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}