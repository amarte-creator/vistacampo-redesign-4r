import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Users, Heart, Shield, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tratamiento de Adicciones - Programas Terapéuticos | Vistacampo",
  description:
    "Conoce nuestros programas de tratamiento integral para adicciones. Desintoxicación médica, terapia individual y grupal, seguimiento post-tratamiento en Caracas, Venezuela.",
  keywords: "tratamiento adicciones, desintoxicación, terapia, rehabilitación, Caracas, Venezuela",
}

export default function TratamientoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-emerald-700 bg-emerald-100">
              Programas Terapéuticos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tratamiento Integral y Personalizado</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro enfoque médico y psicológico especializado te acompañará en cada etapa de tu proceso de
              recuperación, desde la desintoxicación hasta el seguimiento a largo plazo.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Phone className="mr-2 h-5 w-5" />
              Consulta Gratuita
            </Button>
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
                  Nuestro Enfoque
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Combinamos Medicina y Psicología Especializada
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nuestro tratamiento integra la atención médica especializada con terapias psicológicas avanzadas,
                  asegurando un abordaje completo de la adicción tanto a nivel físico como mental y emocional.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Evaluación Médica Integral</h3>
                      <p className="text-gray-600">Diagnóstico completo del estado físico y mental del paciente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Plan Personalizado</h3>
                      <p className="text-gray-600">
                        Tratamiento adaptado a las necesidades específicas de cada paciente
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Supervisión 24/7</h3>
                      <p className="text-gray-600">Monitoreo médico continuo durante todo el proceso</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Equipo médico de Vistacampo realizando evaluación integral"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas del Tratamiento */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Proceso de Recuperación
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Etapas del Tratamiento</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nuestro programa se desarrolla en etapas estructuradas que garantizan una recuperación progresiva y
                sostenible en el tiempo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Etapa 1: Desintoxicación */}
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
                  <CardTitle className="text-xl text-center">Desintoxicación Médica</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    Proceso supervisado médicamente para eliminar las sustancias del organismo de forma segura.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>Duración: 7-14 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span>Supervisión médica 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Etapa 2: Terapia */}
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
                  <CardTitle className="text-xl text-center">Terapia Intensiva</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    Combinación de terapia individual, grupal y familiar para abordar las causas profundas de la
                    adicción.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Duración: 30-90 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>Sesiones diarias</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Etapa 3: Seguimiento */}
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
                  <CardTitle className="text-xl text-center">Seguimiento Continuo</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    Acompañamiento a largo plazo para mantener la sobriedad y prevenir recaídas.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span>Duración: 12+ meses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>Consultas regulares</span>
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
                Preguntas Frecuentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resolvemos tus Dudas</h2>
              <p className="text-lg text-gray-700">
                Las preguntas más comunes sobre nuestro proceso de tratamiento y recuperación.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Cuánto tiempo dura el tratamiento completo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  La duración del tratamiento varía según las necesidades individuales de cada paciente. Típicamente, el
                  programa residencial dura entre 30 a 90 días, seguido de un programa de seguimiento que puede
                  extenderse por 12 meses o más. Nuestro equipo evalúa constantemente el progreso para determinar la
                  duración óptima.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿El tratamiento es completamente confidencial?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Absolutamente. Mantenemos la más estricta confidencialidad médica. Toda la información del paciente
                  está protegida por el secreto profesional y solo se comparte con el consentimiento expreso del
                  paciente o en casos requeridos por ley. Nuestras instalaciones están diseñadas para garantizar la
                  privacidad total.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Qué tipos de adicciones tratan?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Tratamos adicciones a alcohol, cocaína, marihuana, tabaco, cigarrillos electrónicos, pastillas de
                  prescripción, drogas de diseño y comida emocional. También abordamos conductas adictivas como
                  ludopatía, videojuegos, redes sociales, trabajo, sexo, deporte y cirugías cosméticas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿La familia puede participar en el tratamiento?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Sí, la participación familiar es fundamental en nuestro enfoque terapéutico. Ofrecemos sesiones de
                  terapia familiar, programas educativos para familiares y grupos de apoyo. Creemos que la recuperación
                  es más efectiva cuando toda la familia está involucrada y recibe el apoyo necesario.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Qué sucede después del alta médica?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Nuestro compromiso continúa después del alta. Proporcionamos un plan de seguimiento personalizado que
                  incluye consultas regulares, grupos de apoyo, terapia de mantenimiento y acceso a recursos
                  comunitarios. También ofrecemos línea de apoyo 24/7 para situaciones de crisis y un programa de
                  prevención de recaídas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">¿Aceptan seguros médicos?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Trabajamos con varios seguros médicos y ofrecemos planes de financiamiento flexibles. Nuestro equipo
                  de admisiones puede ayudarte a verificar tu cobertura y explorar opciones de pago. Creemos que el
                  costo no debe ser una barrera para recibir el tratamiento que necesitas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza tu Proceso de Recuperación Hoy</h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo especializado está listo para diseñar un plan de tratamiento personalizado que se adapte a
              tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Consulta Gratuita
              </Button>
              <Link href="/admision">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                >
                  Proceso de Admisión
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
