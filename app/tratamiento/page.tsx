import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Users, Heart, Shield, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"

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
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                Consulta Gratuita
              </Button>
            </a>
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

      {/* Objetivos del Tratamiento */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Nuestros Objetivos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Objetivos del Tratamiento</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nuestro programa terapéutico está diseñado para lograr una recuperación integral y sostenible, 
                abordando todos los aspectos de la adicción y sus consecuencias.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-emerald-600 font-bold text-xl">1</span>
                  </div>
                  <CardTitle className="text-xl">Diagnóstico Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Identificar y diagnosticar correctamente el grado de dependencia del paciente a las drogas, 
                    incluidos los fármacos, sus posibles complicaciones, alteraciones orgánicas y psicológicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <CardTitle className="text-xl">Estrategias Terapéuticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Desarrollar estrategias terapéuticas efectivas para acompañar al paciente durante el tratamiento, 
                    transmitiendo conciencia de su enfermedad, alejándose del consumo y enseñándole a vivir con dignidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <CardTitle className="text-xl">Reinserción Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Conseguir la gradual reinserción familiar, social y profesional del paciente hasta alcanzar 
                    la normalidad en todos los aspectos que circundan su vida, de manera plena y satisfactoria.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">4</span>
                  </div>
                  <CardTitle className="text-xl">Apoyo Familiar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Lograr que los familiares y las parejas conozcan y comprendan la adicción, involucrándose 
                    activamente en el proceso de recuperación y ayudándoles a tratar su propia coadicción.
                  </p>
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
                Proceso Estructurado
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fases del Tratamiento</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                La duración del ingreso dependerá de la evolución y adaptación del paciente. A título orientativo, 
                la mayoría de los pacientes completan un programa de 16 a 20 semanas, cumpliendo las 4 fases fundamentales.
              </p>
            </div>

            <div className="space-y-12">
              {/* Fase 1: Desintoxicación */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Desintoxicación</h3>
                      <p className="text-emerald-600 font-medium">Primeros 15-20 días</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Comienza a partir del día del ingreso hasta los primeros quince a veinte días. En este período 
                      se realiza una intervención centrada en la desintoxicación física en estricta observación del equipo médico.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Soporte farmacológico según necesidad médica</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Diagnósticos para detectar trastornos paralelos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Descanso, alimentación equilibrada y reconciliación del sueño</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Rutina inicial de ejercicios y terapias individuales y grupales</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Proceso de desintoxicación médica supervisada"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Fase 2: Deshabituación */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Proceso de deshabituación y cambio de hábitos"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Deshabituación</h3>
                      <p className="text-blue-600 font-medium">Cambio de hábitos y conductas</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Los años de consumo y la adicción alteran la vida normal de las personas, interrumpen su proceso 
                      de crecimiento y madurez, llevando al adicto a hábitos, conductas, patrones y creencias equivocadas.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Identificación de hábitos y actitudes negativas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Sustitución por nueva estructura de vida</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Mejora de relaciones consigo mismo y familia</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Desarrollo del proyecto de vida personal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fase 3: Rehabilitación */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Rehabilitación</h3>
                      <p className="text-purple-600 font-medium">Crecimiento personal y desarrollo de habilidades</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Consiste en continuar el proceso de crecimiento personal y desarrollar las habilidades que el 
                      paciente interrumpió debido al consumo de drogas.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Terapias de grupo e individuales intensivas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Arte terapia, yoga y ejercicios físicos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Técnicas de relajación y control de impulsos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Recuperación de autoestima y dignidad personal</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Proceso de rehabilitación y crecimiento personal"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Fase 4: Reinserción */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Proceso de reinserción social y familiar"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Reinserción</h3>
                      <p className="text-teal-600 font-medium">Preparación para la vida normal</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Durante el ingreso y principalmente en las últimas semanas del tratamiento, al paciente se le 
                      prepara para su reinserción en el entorno familiar, social y laboral.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>Preparación gradual para la vida normal</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>Alcanzar el nivel de calidad de vida perdido</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>Asesoría y orientación post-alta por 2-5 años</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span>Reducción de riesgos de recaída</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                  Por ahora no trabajamos con seguros médicos pero ofrecemos planes de financiamiento flexibles. Nuestro equipo
                  de admisiones puede ayudarte a explorar opciones de pago. Creemos que el
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
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                  Consulta Gratuita
                </Button>
              </a>
              <Link href="/admision">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-emerald-600 hover:bg-gray-100">
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
