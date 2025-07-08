"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Users,
  TreePine,
  Shield,
  Heart,
  Phone,
  ArrowRight,
  Bed,
  Coffee,
  Dumbbell,
  BookOpen,
  Utensils,
  Wifi,
  Car,
  Camera,
  ZoomIn,
  MessageCircle,
  Building2,
  Trees,
  Star,
  MapPin,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"

const instalacionesData = {
  habitaciones: [
    {
      id: 1,
      titulo: "Habitación individual premium",
      descripcion: "Espacios privados y cómodos diseñados para el descanso y la reflexión personal.",
      imagen: "/images/vc-cuarto-cama-sola.jpeg",
      caracteristicas: ["Baño privado", "Aire acondicionado", "Escritorio", "Armario amplio", "Vista al jardín"],
    },
    {
      id: 2,
      titulo: "Habitación compartida",
      descripcion: "Ambientes que fomentan la compañía y el apoyo mutuo entre pacientes.",
      imagen: "/images/Dos camas.jpg",
      caracteristicas: [
        "2 camas individuales",
        "Baño compartido",
        "Área de estudio",
        "Lockers personales",
        "Ventilación natural",
      ],
    },
    {
      id: 3,
      titulo: "Suite de recuperación",
      descripcion: "Espacios especiales para pacientes en etapas avanzadas de recuperación.",
      imagen: "/placeholder.svg?height=400&width=600",
      caracteristicas: ["Sala de estar", "Kitchenette", "Baño completo", "Balcón privado", "Mobiliario premium"],
    },
  ],
  zonasComunes: [
    {
      id: 4,
      titulo: "Sala de terapia grupal",
      descripcion: "Espacios acogedores diseñados para facilitar la comunicación y el trabajo en equipo.",
      imagen: "/images/vc-terapia.jpeg",
      caracteristicas: [
        "Círculo de asientos",
        "Iluminación natural",
        "Acústica optimizada",
        "Ambiente cálido",
        "Privacidad total",
      ],
    },
    {
      id: 5,
      titulo: "Biblioteca y sala de estudio",
      descripcion: "Ambiente tranquilo para la lectura, reflexión y actividades educativas.",
      imagen: "/images/vc-sala-cala.jpeg",
      caracteristicas: [
        "Colección especializada",
        "Mesas de estudio",
        "Conexión WiFi",
        "Zona de lectura",
        "Silencio garantizado",
      ],
    },
    {
      id: 6,
      titulo: "Comedor principal",
      descripcion: "Espacio amplio y luminoso donde se comparten las comidas en un ambiente familiar.",
      imagen: "/images/vc-comedor.jpeg",
      caracteristicas: [
        "Capacidad 40 personas",
        "Cocina abierta",
        "Menús balanceados",
        "Ambiente familiar",
        "Vista panorámica",
      ],
    },
  ],
  exteriores: [
    {
      id: 7,
      titulo: "Jardines terapéuticos",
      descripcion: "Espacios verdes diseñados para la meditación, relajación y conexión con la naturaleza.",
      imagen: "/images/vc-panoramica.jpeg",
      caracteristicas: [
        "Senderos naturales",
        "Áreas de meditación",
        "Plantas medicinales",
        "Bancos de descanso",
        "Fuentes de agua",
      ],
    },
    {
      id: 8,
      titulo: "Área deportiva",
      descripcion: "Instalaciones para actividades físicas que complementan el tratamiento integral.",
      imagen: "/placeholder.svg?height=400&width=600",
      caracteristicas: [
        "Cancha multiuso",
        "Gimnasio al aire libre",
        "Área de yoga",
        "Pista de caminata",
        "Equipos de ejercicio",
      ],
    },
    {
      id: 9,
      titulo: "Zona de contemplación",
      descripcion: "Espacios tranquilos con vistas panorámicas para la reflexión personal.",
      imagen: "/images/vc-vista.jpeg",
      caracteristicas: [
        "Vista a las montañas",
        "Pérgolas naturales",
        "Asientos contemplativos",
        "Privacidad absoluta",
        "Ambiente sereno",
      ],
    },
  ],
}

export default function InstalacionesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("habitaciones")

  const allImages = [
    ...instalacionesData.habitaciones,
    ...instalacionesData.zonasComunes,
    ...instalacionesData.exteriores,
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Nuestras instalaciones
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Un hogar para tu recuperación</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestras instalaciones están diseñadas para brindarte tranquilidad, privacidad y conexión con la naturaleza. Cada espacio ha sido cuidadosamente planificado para apoyar tu proceso de sanación.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>Ambiente seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="h-4 w-4 text-emerald-600" />
                <span>Entorno natural</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Diseño terapéutico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                Espacios diseñados para tu bienestar
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
                Habitaciones y zonas comunes
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explora nuestras instalaciones y descubre cómo cada espacio contribuye a crear un ambiente propicio para
                la recuperación y el crecimiento personal.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="habitaciones" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Habitaciones
                </TabsTrigger>
                <TabsTrigger value="zonas-comunes" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Zonas comunes
                </TabsTrigger>
                <TabsTrigger value="exteriores" className="flex items-center gap-2">
                  <TreePine className="h-4 w-4" />
                  Exteriores
                </TabsTrigger>
              </TabsList>

              <TabsContent value="habitaciones" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instalacionesData.habitaciones.map((habitacion) => (
                    <Card
                      key={habitacion.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative group">
                        <Image
                          src={habitacion.imagen || "/placeholder.svg"}
                          alt={habitacion.titulo}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setSelectedImage(habitacion.imagen)}
                            >
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogTitle className="sr-only">{habitacion.titulo.charAt(0).toUpperCase() + habitacion.titulo.slice(1).toLowerCase()}</DialogTitle>
                            <Image
                              src={habitacion.imagen || "/placeholder.svg"}
                              alt={habitacion.titulo}
                              width={800}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{habitacion.titulo.charAt(0).toUpperCase() + habitacion.titulo.slice(1).toLowerCase()}</CardTitle>
                        <CardDescription className="text-gray-600">{habitacion.descripcion}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">Características:</h4>
                          <ul className="space-y-1">
                            {habitacion.caracteristicas.map((caracteristica, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                                {caracteristica}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="zonas-comunes" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instalacionesData.zonasComunes.map((zona) => (
                    <Card
                      key={zona.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative group">
                        <Image
                          src={zona.imagen || "/placeholder.svg"}
                          alt={zona.titulo}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setSelectedImage(zona.imagen)}
                            >
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogTitle className="sr-only">{zona.titulo.charAt(0).toUpperCase() + zona.titulo.slice(1).toLowerCase()}</DialogTitle>
                            <Image
                              src={zona.imagen || "/placeholder.svg"}
                              alt={zona.titulo}
                              width={800}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{zona.titulo.charAt(0).toUpperCase() + zona.titulo.slice(1).toLowerCase()}</CardTitle>
                        <CardDescription className="text-gray-600">{zona.descripcion}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">Características:</h4>
                          <ul className="space-y-1">
                            {zona.caracteristicas.map((caracteristica, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                {caracteristica}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="exteriores" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {instalacionesData.exteriores.map((exterior) => (
                    <Card
                      key={exterior.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative group">
                        <Image
                          src={exterior.imagen || "/placeholder.svg"}
                          alt={exterior.titulo}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setSelectedImage(exterior.imagen)}
                            >
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogTitle className="sr-only">{exterior.titulo.charAt(0).toUpperCase() + exterior.titulo.slice(1).toLowerCase()}</DialogTitle>
                            <Image
                              src={exterior.imagen || "/placeholder.svg"}
                              alt={exterior.titulo}
                              width={800}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{exterior.titulo.charAt(0).toUpperCase() + exterior.titulo.slice(1).toLowerCase()}</CardTitle>
                        <CardDescription className="text-gray-600">{exterior.descripcion}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">Características:</h4>
                          <ul className="space-y-1">
                            {exterior.caracteristicas.map((caracteristica, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                {caracteristica}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Servicios y Comodidades */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                Servicios y comodidades
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
                Todo lo que necesitas para tu bienestar
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nuestras instalaciones incluyen todos los servicios y comodidades necesarios para garantizar una
                estancia cómoda y un tratamiento efectivo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bed className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Alojamiento cómodo</h3>
                  <p className="text-sm text-gray-600">
                    Habitaciones individuales y compartidas con todas las comodidades necesarias.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Alimentación balanceada</h3>
                  <p className="text-sm text-gray-600">Menús nutritivos diseñados por especialistas en nutrición.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Actividades físicas</h3>
                  <p className="text-sm text-gray-600">Gimnasio, áreas deportivas y actividades al aire libre.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Biblioteca</h3>
                  <p className="text-sm text-gray-600">
                    Amplia colección de libros especializados y espacios de estudio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conectividad</h3>
                  <p className="text-sm text-gray-600">WiFi en áreas comunes para mantener contacto con familiares.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transporte</h3>
                  <p className="text-sm text-gray-600">Servicio de transporte para traslados médicos y familiares.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Seguridad 24/7</h3>
                  <p className="text-sm text-gray-600">Vigilancia y seguridad las 24 horas para tu tranquilidad.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Áreas de descanso</h3>
                  <p className="text-sm text-gray-600">Espacios cómodos para relajación y socialización.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque en Tranquilidad y Naturaleza */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-rose-900 border-rose-900 mb-4">
                  Ambiente terapéutico
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-rose-900">
                  Diseñado para la sanación y el crecimiento
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nuestras instalaciones están ubicadas en un entorno natural privilegiado, rodeadas de montañas y
                  vegetación que favorecen la tranquilidad mental y la conexión con la naturaleza, elementos
                  fundamentales en el proceso de recuperación.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <TreePine className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Entorno natural</h3>
                      <p className="text-gray-600">
                        Rodeados de naturaleza que promueve la paz interior y la reflexión
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Privacidad total</h3>
                      <p className="text-gray-600">Ubicación discreta que garantiza la confidencialidad absoluta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Diseño terapéutico</h3>
                      <p className="text-gray-600">Cada espacio está pensado para apoyar el proceso de sanación</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/vc-vista.jpeg"
                  alt="Vista panorámica de las instalaciones de Vistacampo en entorno natural"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <TreePine className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ambiente natural</p>
                      <p className="text-sm text-gray-600">Conexión con la naturaleza</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Virtual CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Camera className="h-16 w-16 mx-auto mb-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Te gustaría conocer nuestras instalaciones?</h2>
              <p className="text-xl mb-8 opacity-90">
                Programa una visita personalizada de nuestras instalaciones. Conoce de
                primera mano el ambiente donde comenzarás tu proceso de recuperación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" color="#10b981" />
                    Agendar visita
                  </Button>
                </a>
              </div>
              <p className="text-sm opacity-80 mt-6">
                Visitas disponibles de lunes a domingo • Completamente confidencial • Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
