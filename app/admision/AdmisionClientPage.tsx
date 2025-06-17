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
  Phone,
  Mail,
  FileText,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  User,
  CreditCard,
  AlertCircle,
  Send,
} from "lucide-react"

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
                    <Phone className="h-6 w-6" />
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
                    Revisión de seguros, opciones de financiamiento y planificación del ingreso.
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Formulario de Pre-Admisión
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Completa tu Información</h2>
              <p className="text-lg text-gray-700">
                Este formulario nos ayuda a preparar tu evaluación inicial y acelerar el proceso de admisión.
              </p>
            </div>

            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <User className="h-6 w-6 text-emerald-600" />
                  Formulario de Pre-Admisión
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Toda la información proporcionada será tratada con absoluta confidencialidad médica.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <Tabs defaultValue="paciente" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="paciente">Paciente</TabsTrigger>
                      <TabsTrigger value="contacto">Contacto</TabsTrigger>
                      <TabsTrigger value="medica">Información Médica</TabsTrigger>
                      <TabsTrigger value="seguro">Seguro/Financiamiento</TabsTrigger>
                    </TabsList>

                    {/* Información del Paciente */}
                    <TabsContent value="paciente" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombrePaciente">Nombre Completo del Paciente *</Label>
                          <Input
                            id="nombrePaciente"
                            type="text"
                            placeholder="Nombre completo"
                            value={formData.nombrePaciente}
                            onChange={(e) => handleInputChange("nombrePaciente", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="edadPaciente">Edad *</Label>
                          <Input
                            id="edadPaciente"
                            type="number"
                            placeholder="Edad"
                            value={formData.edadPaciente}
                            onChange={(e) => handleInputChange("edadPaciente", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="telefonoPaciente">Teléfono del Paciente</Label>
                          <Input
                            id="telefonoPaciente"
                            type="tel"
                            placeholder="+58 412-000-0000"
                            value={formData.telefonoPaciente}
                            onChange={(e) => handleInputChange("telefonoPaciente", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emailPaciente">Email del Paciente</Label>
                          <Input
                            id="emailPaciente"
                            type="email"
                            placeholder="email@ejemplo.com"
                            value={formData.emailPaciente}
                            onChange={(e) => handleInputChange("emailPaciente", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Información Importante</p>
                            <p>
                              Si el paciente es menor de edad, toda la información debe ser proporcionada por el padre,
                              madre o tutor legal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Información del Contacto */}
                    <TabsContent value="contacto" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombreContacto">Nombre del Contacto Principal *</Label>
                          <Input
                            id="nombreContacto"
                            type="text"
                            placeholder="Nombre completo"
                            value={formData.nombreContacto}
                            onChange={(e) => handleInputChange("nombreContacto", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="relacionContacto">Relación con el Paciente *</Label>
                          <Select onValueChange={(value) => handleInputChange("relacionContacto", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona la relación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="padre">Padre</SelectItem>
                              <SelectItem value="madre">Madre</SelectItem>
                              <SelectItem value="esposo">Esposo/a</SelectItem>
                              <SelectItem value="hermano">Hermano/a</SelectItem>
                              <SelectItem value="hijo">Hijo/a</SelectItem>
                              <SelectItem value="familiar">Otro Familiar</SelectItem>
                              <SelectItem value="amigo">Amigo/a</SelectItem>
                              <SelectItem value="tutor">Tutor Legal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="telefonoContacto">Teléfono de Contacto *</Label>
                          <Input
                            id="telefonoContacto"
                            type="tel"
                            placeholder="+58 412-000-0000"
                            value={formData.telefonoContacto}
                            onChange={(e) => handleInputChange("telefonoContacto", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emailContacto">Email de Contacto *</Label>
                          <Input
                            id="emailContacto"
                            type="email"
                            placeholder="email@ejemplo.com"
                            value={formData.emailContacto}
                            onChange={(e) => handleInputChange("emailContacto", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="esEmergencia"
                            checked={formData.esEmergencia}
                            onCheckedChange={(checked) => handleInputChange("esEmergencia", checked as boolean)}
                          />
                          <Label
                            htmlFor="esEmergencia"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Esta es una situación de emergencia que requiere atención inmediata
                          </Label>
                        </div>

                        {formData.esEmergencia && (
                          <div className="space-y-2">
                            <Label htmlFor="detallesEmergencia">Detalles de la Emergencia</Label>
                            <Textarea
                              id="detallesEmergencia"
                              placeholder="Describe brevemente la situación de emergencia..."
                              rows={3}
                              value={formData.detallesEmergencia}
                              onChange={(e) => handleInputChange("detallesEmergencia", e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    {/* Información Médica */}
                    <TabsContent value="medica" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sustanciaPrincipal">Sustancia Principal de Consumo *</Label>
                          <Select onValueChange={(value) => handleInputChange("sustanciaPrincipal", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona la sustancia principal" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="alcohol">Alcohol</SelectItem>
                              <SelectItem value="cocaina">Cocaína</SelectItem>
                              <SelectItem value="marihuana">Marihuana</SelectItem>
                              <SelectItem value="pastillas">Pastillas de Prescripción</SelectItem>
                              <SelectItem value="heroina">Heroína</SelectItem>
                              <SelectItem value="drogas-diseno">Drogas de Diseño</SelectItem>
                              <SelectItem value="tabaco">Tabaco/Cigarrillos</SelectItem>
                              <SelectItem value="multiple">Múltiples Sustancias</SelectItem>
                              <SelectItem value="otra">Otra</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tiempoConsumo">Tiempo de Consumo *</Label>
                          <Select onValueChange={(value) => handleInputChange("tiempoConsumo", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el tiempo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="menos-6-meses">Menos de 6 meses</SelectItem>
                              <SelectItem value="6-12-meses">6 meses a 1 año</SelectItem>
                              <SelectItem value="1-2-anos">1 a 2 años</SelectItem>
                              <SelectItem value="2-5-anos">2 a 5 años</SelectItem>
                              <SelectItem value="5-10-anos">5 a 10 años</SelectItem>
                              <SelectItem value="mas-10-anos">Más de 10 años</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tratamientoPrevio">Tratamientos Previos</Label>
                        <Textarea
                          id="tratamientoPrevio"
                          placeholder="Describe cualquier tratamiento previo para adicciones..."
                          rows={3}
                          value={formData.tratamientoPrevio}
                          onChange={(e) => handleInputChange("tratamientoPrevio", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="condicionesMedicas">Condiciones Médicas Actuales</Label>
                        <Textarea
                          id="condicionesMedicas"
                          placeholder="Enumera cualquier condición médica, enfermedad crónica o problema de salud..."
                          rows={3}
                          value={formData.condicionesMedicas}
                          onChange={(e) => handleInputChange("condicionesMedicas", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicamentosActuales">Medicamentos Actuales</Label>
                        <Textarea
                          id="medicamentosActuales"
                          placeholder="Lista todos los medicamentos que toma actualmente, incluyendo dosis..."
                          rows={3}
                          value={formData.medicamentosActuales}
                          onChange={(e) => handleInputChange("medicamentosActuales", e.target.value)}
                        />
                      </div>
                    </TabsContent>

                    {/* Seguro y Financiamiento */}
                    <TabsContent value="seguro" className="space-y-6">
                      <div className="space-y-4">
                        <Label className="text-base font-semibold">¿Cuenta con Seguro Médico?</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="seguro-si"
                              name="tieneSeguro"
                              value="si"
                              onChange={(e) => handleInputChange("tieneSeguro", e.target.value)}
                            />
                            <Label htmlFor="seguro-si">Sí, tengo seguro médico</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="seguro-no"
                              name="tieneSeguro"
                              value="no"
                              onChange={(e) => handleInputChange("tieneSeguro", e.target.value)}
                            />
                            <Label htmlFor="seguro-no">No tengo seguro médico</Label>
                          </div>
                        </div>
                      </div>

                      {formData.tieneSeguro === "si" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nombreSeguro">Nombre del Seguro</Label>
                            <Input
                              id="nombreSeguro"
                              type="text"
                              placeholder="Ej: Seguros Caracas, Mapfre, etc."
                              value={formData.nombreSeguro}
                              onChange={(e) => handleInputChange("nombreSeguro", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="numeroPoliza">Número de Póliza</Label>
                            <Input
                              id="numeroPoliza"
                              type="text"
                              placeholder="Número de póliza"
                              value={formData.numeroPoliza}
                              onChange={(e) => handleInputChange("numeroPoliza", e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <CreditCard className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-green-800">
                            <p className="font-medium mb-1">Opciones de Financiamiento</p>
                            <p>
                              Ofrecemos planes de financiamiento flexibles y trabajamos con la mayoría de seguros
                              médicos. Nuestro equipo de admisiones te ayudará a encontrar la mejor opción para tu
                              situación.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Consentimientos */}
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900">Autorizaciones y Consentimientos</h3>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="autorizacionTratamiento"
                          checked={formData.autorizacionTratamiento}
                          onCheckedChange={(checked) =>
                            handleInputChange("autorizacionTratamiento", checked as boolean)
                          }
                        />
                        <Label htmlFor="autorizacionTratamiento" className="text-sm leading-relaxed">
                          Autorizo la evaluación médica y psicológica del paciente para determinar el tratamiento más
                          adecuado. Entiendo que esta evaluación es confidencial y será realizada por profesionales
                          especializados.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="autorizacionPrivacidad"
                          checked={formData.autorizacionPrivacidad}
                          onCheckedChange={(checked) => handleInputChange("autorizacionPrivacidad", checked as boolean)}
                        />
                        <Label htmlFor="autorizacionPrivacidad" className="text-sm leading-relaxed">
                          He leído y acepto la{" "}
                          <a href="#" className="text-emerald-600 hover:underline">
                            Política de Privacidad
                          </a>{" "}
                          y entiendo que toda la información médica será tratada con absoluta confidencialidad según las
                          normativas de privacidad médica.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="autorizacionContacto"
                          checked={formData.autorizacionContacto}
                          onCheckedChange={(checked) => handleInputChange("autorizacionContacto", checked as boolean)}
                        />
                        <Label htmlFor="autorizacionContacto" className="text-sm leading-relaxed">
                          Autorizo a Vistacampo a contactarme a través de los medios proporcionados para coordinar la
                          evaluación, tratamiento y seguimiento. Entiendo que puedo revocar esta autorización en
                          cualquier momento.
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
                    disabled={
                      !formData.autorizacionTratamiento ||
                      !formData.autorizacionPrivacidad ||
                      !formData.autorizacionContacto
                    }
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Formulario de Pre-Admisión
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, nuestro equipo de admisiones se pondrá en contacto contigo dentro de las
                    próximas 2 horas para coordinar la evaluación inicial.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                    <li>• Información del seguro médico (si aplica)</li>
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
                  Trabajamos con la mayoría de seguros médicos privados en Venezuela. Nuestro equipo de admisiones
                  verificará tu cobertura y te ayudará con todos los trámites necesarios. También ofrecemos planes de
                  financiamiento flexibles para quienes no tienen seguro.
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
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora: (+58) 412-231-5968
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Chat en Vivo
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm opacity-90">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Respuesta en 2 horas</span>
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
