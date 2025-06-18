"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MessageCircle,
  Mail,
  FileText,
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Heart,
  Star,
  MapPin,
  Phone,
  CreditCard,
  User,
  AlertCircle,
  Send,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"

export default function AdmisionClientPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Información del paciente
    nombrePaciente: "",
    edadPaciente: "",
    telefonoPaciente: "",
    emailPaciente: "",

    // Información del contacto
    nombreContacto: "",
    relacionContacto: "",
    telefonoContacto: "",
    emailContacto: "",

    // Información médica
    sustanciaPrincipal: "",
    tiempoConsumo: "",
    tratamientoPrevio: "",
    condicionesMedicas: "",
    medicamentosActuales: "",

    // Información del seguro
    tieneSeguro: "",
    nombreSeguro: "",
    numeroPoliza: "",

    // Situación de emergencia
    esEmergencia: false,
    detallesEmergencia: "",

    // Consentimientos
    autorizacionTratamiento: false,
    autorizacionPrivacidad: false,
    autorizacionContacto: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario de admisión enviado:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-emerald-700 bg-emerald-100">
              Proceso de Admisión
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Inicia tu Proceso de Recuperación</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro proceso de admisión está diseñado para ser simple, confidencial y personalizado. Te guiaremos en
              cada paso para asegurar que recibas el tratamiento más adecuado para tu situación.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span>Proceso Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Atención Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Proceso de Admisión
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">4 Pasos Simples para Comenzar</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nuestro proceso está diseñado para ser lo más sencillo posible, respetando siempre tu privacidad y
                brindándote el apoyo que necesitas desde el primer contacto.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {/* Paso 1 */}
              <Card
                className={`border-2 transition-all duration-300 ${currentStep >= 1 ? "border-emerald-500 bg-emerald-50" : "border-gray-200"}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${currentStep >= 1 ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Contacto Inicial</h3>
                  <p className="text-sm text-gray-600">
                    Llámanos o completa el formulario. Evaluación inicial confidencial y sin compromiso.
                  </p>
                </CardContent>
              </Card>

              {/* Paso 2 */}
              <Card
                className={`border-2 transition-all duration-300 ${currentStep >= 2 ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Evaluación Médica</h3>
                  <p className="text-sm text-gray-600">
                    Evaluación médica y psicológica completa para diseñar tu plan de tratamiento personalizado.
                  </p>
                </CardContent>
              </Card>

              {/* Paso 3 */}
              <Card
                className={`border-2 transition-all duration-300 ${currentStep >= 3 ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${currentStep >= 3 ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Planificación</h3>
                  <p className="text-sm text-gray-600">
                    Revisión de opciones de pago y planificación del ingreso.
                  </p>
                </CardContent>
              </Card>

              {/* Paso 4 */}
              <Card
                className={`border-2 transition-all duration-300 ${currentStep >= 4 ? "border-green-500 bg-green-50" : "border-gray-200"}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${currentStep >= 4 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Ingreso</h3>
                  <p className="text-sm text-gray-600">
                    Ingreso programado con acompañamiento familiar y orientación completa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formularios de Admisión */}
      {/* (Formulario de Pre-Admisión section removed as requested) */}

      {/* Información Adicional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Información Importante
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes sobre Admisión</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Qué documentos necesito para el proceso de admisión?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  <ul className="space-y-2">
                    <li>• Cédula de identidad del paciente y del responsable</li>
                    <li>• Historial médico reciente (si está disponible)</li>
                    <li>• Lista de medicamentos actuales</li>
                    <li>• Documentos de tutela legal (si el paciente es menor de edad)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Cuánto tiempo toma el proceso de admisión?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  El proceso completo generalmente toma entre 24 a 48 horas desde el contacto inicial hasta el ingreso.
                  En casos de emergencia, podemos acelerar el proceso y realizar la admisión el mismo día. La evaluación
                  inicial toma aproximadamente 2-3 horas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Qué incluye la evaluación inicial?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  La evaluación incluye: examen médico completo, evaluación psicológica, revisión del historial de
                  consumo, evaluación de riesgos, análisis de laboratorio básicos, y diseño del plan de tratamiento
                  personalizado. Todo es realizado por nuestro equipo multidisciplinario.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">¿Aceptan seguros médicos?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Por el momento, no estamos trabajando con seguros médicos. Todos los trámites y pagos se realizan de manera directa con nuestro equipo de admisiones. Si tienes dudas sobre opciones de financiamiento, por favor contáctanos para más información.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  ¿Puedo visitar las instalaciones antes del ingreso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Absolutamente. Recomendamos que tanto el paciente como la familia visiten nuestras instalaciones antes
                  del ingreso. Esto ayuda a reducir la ansiedad y permite conocer el ambiente donde se desarrollará el
                  tratamiento. Las visitas se coordinan con cita previa para garantizar privacidad.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA de Contacto Directo */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Ayuda Inmediata?</h2>
              <p className="text-xl mb-8 opacity-90">
                Nuestro equipo de admisiones está disponible 24/7 para situaciones de emergencia. No esperes, da el
                primer paso hacia la recuperación ahora mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    Llamar Ahora: (+58) 412-231-5968
                  </Button>
                </a>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm opacity-90">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Respuesta inmediata</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>100% Confidencial</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Sin compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
