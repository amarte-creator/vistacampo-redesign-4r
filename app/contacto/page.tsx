"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, MapPin, Clock, Send, Shield, Heart } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
    privacidad: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Contacto
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">Estamos Aquí para Ayudarte</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro equipo está disponible 24/7 para brindarte la orientación y el apoyo que necesitas. Da el primer
              paso hacia tu recuperación.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>Consulta Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Atención Inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 text-emerald-600" color="#10b981" />
                  <span>Disponible 24/7</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 justify-center">
              {/* Información de Contacto */}
              <div className="space-y-8 lg:col-span-2 max-w-xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Contáctanos por cualquiera de estos medios. Nuestro equipo de admisiones te brindará toda la
                    información que necesitas de manera confidencial y profesional.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-emerald-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon className="h-6 w-6 text-emerald-600" color="#10b981" />
                          </a>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Teléfono de Emergencia</h3>
                          <p className="text-gray-600 mb-2">Disponible 24 horas, 7 días a la semana</p>
                          <a
                            href="tel:+584122315968"
                            className="text-emerald-600 font-semibold text-lg hover:text-emerald-700"
                          >
                            (+58) 412-231-5968
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            También puedes marcar "CAMBIO (226246)" desde tu móvil Digitel
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Correo Electrónico</h3>
                          <p className="text-gray-600 mb-2">Respuesta en menos de 2 horas</p>
                          <a
                            href="mailto:info@vistacampo.com"
                            className="text-blue-600 font-semibold hover:text-blue-700"
                          >
                            info@vistacampo.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
                          <p className="text-gray-600 mb-2">Centro de Rehabilitación Residencial</p>
                          <p className="text-purple-600 font-semibold">Colonia Tovar, Venezuela</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Ubicación exacta proporcionada durante el proceso de admisión
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-600 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Horario de Atención</h3>
                          <div className="space-y-1 text-gray-600">
                            <p>
                              <span className="font-medium">Emergencias:</span> 24/7
                            </p>
                            <p>
                              <span className="font-medium">Consultas:</span> Lunes a Domingo, 8:00 AM - 8:00 PM
                            </p>
                            <p>
                              <span className="font-medium">Admisiones:</span> Lunes a Viernes, 9:00 AM - 6:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa y Ubicación */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h2>
              <p className="text-lg text-gray-700">
                Ubicados en un entorno tranquilo y privado en la Colonia Tovar, Venezuela, nuestras instalaciones están diseñadas
                para brindar la máxima comodidad y privacidad.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Ubicación</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Dirección</p>
                          <p className="text-gray-600">Colonia Tovar, Venezuela</p>
                          <p className="text-sm text-gray-500 mt-1">
                            La dirección exacta se proporciona durante el proceso de admisión para garantizar la
                            privacidad de nuestros pacientes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Acceso</p>
                          <p className="text-gray-600">Fácil acceso desde cualquier punto de la Colonia Tovar</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Contamos con servicio de transporte especializado para el traslado seguro de pacientes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-emerald-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Seguridad</p>
                          <p className="text-gray-600">Instalaciones completamente seguras y privadas</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Ambiente controlado con medidas de seguridad 24/7 para garantizar la tranquilidad de
                            pacientes y familias.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <Card className="shadow-xl border-0 overflow-hidden rounded-2xl">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1262873928918!2d-67.27949162471772!3d10.41154338971597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a8764c62e816b%3A0x312e943a6976c6bc!2sCentro%20Terapeutico%20Vistacampo!5e0!3m2!1ses!2sfr!4v1750273808692!5m2!1ses!2sfr"
                      width="100%"
                      height="400"
                      style={{ border: 0, borderRadius: '1rem', width: '100%' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Centro Terapéutico Vistacampo"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de Emergencia */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Ayuda Inmediata?</h2>
              <p className="text-xl mb-8 opacity-90">
                Si tú o un ser querido están en crisis por adicciones, no esperes. Nuestro equipo de emergencias está
                disponible las 24 horas del día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                    Llamada de Emergencia
                  </Button>
                </a>
              </div>
              <p className="text-sm opacity-80 mt-6">
                Línea de crisis disponible 24/7 • Respuesta inmediata • Completamente confidencial
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
