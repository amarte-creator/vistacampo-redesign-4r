import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, Heart, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Noticias y Artículos sobre Adicciones | Blog Vistacampo",
  description:
    "Lee nuestros artículos especializados sobre adicciones, salud mental, prevención y recuperación. Información actualizada y consejos de nuestros expertos.",
  keywords: "noticias, artículos, adicciones, salud mental, prevención, recuperación, blog, Vistacampo",
}

const articulos = [
  {
    id: 1,
    titulo: "Señales de Alerta: Cómo Identificar una Adicción en la Familia",
    resumen:
      "Conoce las señales tempranas que pueden indicar un problema de adicción en un ser querido y cómo abordar la situación con empatía y efectividad.",
    categoria: "Prevención",
    autor: "Dr. Carlos Mendoza",
    fecha: "2024-01-15",
    tiempoLectura: "8 min",
    imagen: "/placeholder.svg?height=300&width=500",
    destacado: true,
  },
  {
    id: 2,
    titulo: "El Papel de la Familia en el Proceso de Recuperación",
    resumen:
      "La importancia del apoyo familiar durante el tratamiento y cómo los seres queridos pueden convertirse en pilares fundamentales de la recuperación.",
    categoria: "Familia",
    autor: "Dra. María Elena Rodríguez",
    fecha: "2024-01-10",
    tiempoLectura: "6 min",
    imagen: "/placeholder.svg?height=300&width=500",
    destacado: false,
  },
  {
    id: 3,
    titulo: "Mitos y Realidades sobre el Tratamiento de Adicciones",
    resumen:
      "Desmitificamos las creencias más comunes sobre el tratamiento de adicciones y proporcionamos información basada en evidencia científica.",
    categoria: "Educación",
    autor: "Lic. Roberto Silva",
    fecha: "2024-01-05",
    tiempoLectura: "10 min",
    imagen: "/placeholder.svg?height=300&width=500",
    destacado: false,
  },
  {
    id: 4,
    titulo: "La Importancia de la Salud Mental en la Recuperación",
    resumen:
      "Exploramos cómo los trastornos de salud mental pueden influir en las adicciones y por qué es crucial abordar ambos aspectos simultáneamente.",
    categoria: "Salud Mental",
    autor: "Dra. Carmen Vásquez",
    fecha: "2023-12-28",
    tiempoLectura: "7 min",
    imagen: "/placeholder.svg?height=300&width=500",
    destacado: false,
  },
  {
    id: 5,
    titulo: "Estrategias de Prevención de Recaídas",
    resumen:
      "Técnicas y herramientas prácticas para mantener la sobriedad a largo plazo y construir una vida plena en recuperación.",
    categoria: "Recuperación",
    autor: "Lic. Ana Morales",
    fecha: "2023-12-20",
    tiempoLectura: "9 min",
    imagen: "/placeholder.svg?height=300&width=500",
    destacado: false,
  },
  {
    id: 6,
    titulo: "Adicciones Comportamentales: Más Allá de las Sustancias",
    resumen:
      "Un análisis profundo sobre las adicciones sin sustancias como el juego, las redes sociales y el trabajo, y cómo tratarlas efectivamente.",
    categoria: "Tipos de Adicción",
    autor: "Lic. Miguel Torres",
    fecha: "2023-12-15",
    tiempoLectura: "12 min",
    imagen: "/placeholder.svg?height=300&width=500",
    destacado: false,
  },
]

const categorias = ["Todas", "Prevención", "Familia", "Educación", "Salud Mental", "Recuperación", "Tipos de Adicción"]

export default function NoticiasPage() {
  const articuloDestacado = articulos.find((articulo) => articulo.destacado)
  const otrosArticulos = articulos.filter((articulo) => !articulo.destacado)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-emerald-700 bg-emerald-100">
              Blog y Noticias
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Información y Recursos sobre Adicciones
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Mantente informado con artículos especializados, consejos de expertos y las últimas investigaciones en el
              campo del tratamiento de adicciones y salud mental.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                <span>Artículos Especializados</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Consejos de Expertos</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-600" />
                <span>Basado en Evidencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Búsqueda y Filtros */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Buscar artículos..." className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categorias.map((categoria) => (
                  <Button
                    key={categoria}
                    variant={categoria === "Todas" ? "default" : "outline"}
                    size="sm"
                    className={categoria === "Todas" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                  >
                    {categoria}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículo Destacado */}
      {articuloDestacado && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                  Artículo Destacado
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Lectura Recomendada</h2>
              </div>

              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={articuloDestacado.imagen || "/placeholder.svg"}
                      alt={articuloDestacado.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600 text-white">{articuloDestacado.categoria}</Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{articuloDestacado.titulo}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{articuloDestacado.resumen}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{articuloDestacado.autor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(articuloDestacado.fecha).toLocaleDateString("es-ES")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{articuloDestacado.tiempoLectura}</span>
                      </div>
                    </div>
                    <Link href={`/noticias/${articuloDestacado.id}`}>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
                        Leer Artículo Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Lista de Artículos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Más Artículos</h2>
              <p className="text-lg text-gray-700">
                Explora nuestra colección completa de artículos sobre adicciones, salud mental y recuperación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otrosArticulos.map((articulo) => (
                <Card
                  key={articulo.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={articulo.imagen || "/placeholder.svg"}
                      alt={articulo.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {articulo.categoria}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2 hover:text-emerald-600 transition-colors">
                      <Link href={`/noticias/${articulo.id}`}>{articulo.titulo}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">{articulo.resumen}</CardDescription>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{articulo.autor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{articulo.tiempoLectura}</span>
                        </div>
                      </div>
                      <span>{new Date(articulo.fecha).toLocaleDateString("es-ES")}</span>
                    </div>
                    <Link href={`/noticias/${articulo.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Leer Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mantente Informado</h2>
            <p className="text-xl mb-8 opacity-90">
              Suscríbete a nuestro boletín para recibir los últimos artículos, consejos de expertos y recursos sobre
              adicciones directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                Suscribirse
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-4">Sin spam. Puedes cancelar tu suscripción en cualquier momento.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
