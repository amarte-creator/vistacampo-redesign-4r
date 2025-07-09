import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Stethoscope,
  Brain,
  Heart,
  Users,
  GraduationCap,
  Award,
  Calendar,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestro Equipo Médico - Especialistas en Adicciones | Vistacampo",
  description:
    "Conoce a nuestro equipo de médicos, psicólogos y terapeutas especializados en tratamiento de adicciones. Profesionales con amplia experiencia en Colonia Tovar, Venezuela.",
  keywords: "equipo médico, psicólogos, terapeutas, especialistas adicciones, Colonia Tovar, Venezuela",
}

const equipoData = {
  direccion: [
    {
      id: 1,
      nombre: "Julio González",
      cargo: "Fundador y director Vistacampo",
      especialidad: "Adicciones",
      imagen: "/images/Julio-Gonzales-Fundador y Director Vistacampo.jpg",
      experiencia: "20+ años",
      educacion: ["MD - Universidad Central de Venezuela", "Especialización en Adicciones - Hospital Universitario"],
      certificaciones: ["Certificado en Medicina de Adicciones", "Miembro de la Sociedad Venezolana de Adicciones"],
      descripcion:
        "Julio González lidera nuestro equipo con más de dos décadas de experiencia en el tratamiento de adicciones. Su enfoque integral combina la medicina tradicional con terapias innovadoras, priorizando siempre la dignidad y el bienestar del paciente.",
      especialidades: ["Desintoxicación médica", "Trastornos duales", "Farmacoterapia"],
    },
    {
      id: 2,
      nombre: "Dra. María Alvarez",
      cargo: "Miembro del comite científico",
      especialidad: "Psicología Clínica",
      imagen: "/images/Maria-Alvares.jpg",
      experiencia: "15+ años",
      educacion: [
        "Licenciatura en Psicología - Universidad Católica Andrés Bello",
        "Maestría en Psicología Clínica - Universidad Simón Bolívar",
      ],
      certificaciones: ["Especialista en Terapia Cognitivo-Conductual", "Certificación en Terapia Familiar Sistémica"],
      descripcion:
        "La Dra. Rodríguez coordina todos los programas terapéuticos de Vistacampo. Su experiencia en terapia familiar y su enfoque empático han sido fundamentales en la recuperación de cientos de pacientes y sus familias.",
      especialidades: ["Terapia individual", "Terapia familiar", "Prevención de recaídas"],
    },
    {
      id: 3,
      nombre: "Jorge Marquez",
      cargo: "Gerencia",
      especialidad: "Gerencia",
      imagen: "/images/Jorge-Marquez-Gerencia.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
    },
    {
      id: 4,
      nombre: "Agustin Gabaldon",
      cargo: "Director",
      especialidad: "Dirección",
      imagen: "/images/Agustin-Gabaldon-Director.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
    },
    {
      id: 5,
      nombre: "Alejandra Reyna",
      cargo: "Planificación estratégica",
      especialidad: "Planificación Estratégica",
      imagen: "/images/Alejandra-Reyna-.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
    },
  ],
  medicos: [
    {
      id: 3,
      nombre: "Dra. Omaira Fehr",
      cargo: "Médico internista",
      especialidad: "Medicina interna",
      imagen: "/images/omaira-fehr.jpg",
      experiencia: "12+ años",
      educacion: ["MD - Universidad de Los Andes", "Residencia en Medicina Interna - Hospital Central"],
      certificaciones: ["Especialista en Medicina Interna", "Certificado en Cuidados Intensivos"],
      descripcion:
        "La Dra. Fehr se encarga del cuidado médico integral de nuestros pacientes, monitoreando su salud física durante todo el proceso de desintoxicación y recuperación.",
      especialidades: ["Evaluación médica", "Manejo de comorbilidades", "Cuidados intensivos"],
    },
    {
      id: 4,
      nombre: "Dr. Eduardo Landaeta",
      cargo: "Médico psiquiatra",
      especialidad: "Psiquiatría",
      imagen: "/images/eduardo-landaeta.png",
      experiencia: "10+ años",
      educacion: ["MD - Universidad Central de Venezuela", "Residencia en Psiquiatría - Instituto Psiquiátrico"],
      certificaciones: ["Especialista en Psiquiatría"],
      descripcion:
        "El doctor Eduardo se especializa en el diagnóstico y tratamiento de trastornos mentales concurrentes con las adicciones, proporcionando un enfoque integral para la salud mental.",
      especialidades: ["Trastornos duales", "Psicofarmacología", "Trastornos del estado de ánimo"],
    },
  ],
  psicologos: [
    {
      id: 5,
      nombre: "Lic. Roberto Silva",
      cargo: "Psicólogo Clínico Senior",
      especialidad: "Psicología de Adicciones",
      imagen: "/placeholder.svg?height=400&width=400",
      experiencia: "14+ años",
      educacion: [
        "Licenciatura en Psicología - Universidad Metropolitana",
        "Especialización en Adicciones - Instituto de Estudios Superiores",
      ],
      certificaciones: ["Especialista en Terapia Grupal", "Certificado en Mindfulness y Adicciones"],
      descripcion:
        "Roberto lidera nuestros grupos terapéuticos con una metodología innovadora que combina técnicas tradicionales con enfoques modernos como mindfulness y terapia de aceptación.",
      especialidades: ["Terapia grupal", "Mindfulness", "Terapia de aceptación"],
    },
    {
      id: 6,
      nombre: "Lic. Ana Morales",
      cargo: "Psicóloga Familiar",
      especialidad: "Terapia Familiar",
      imagen: "/placeholder.svg?height=400&width=400",
      experiencia: "10+ años",
      educacion: [
        "Licenciatura en Psicología - Universidad Central de Venezuela",
        "Maestría en Terapia Familiar - Universidad Católica",
      ],
      certificaciones: ["Especialista en Terapia Sistémica", "Certificación en Consejería Familiar"],
      descripcion:
        "Ana se dedica a trabajar con las familias de nuestros pacientes, ayudándoles a comprender la adicción y a desarrollar herramientas para apoyar el proceso de recuperación.",
      especialidades: ["Terapia familiar", "Consejería", "Dinámicas familiares"],
    },
  ],
  terapeutas: [
    {
      id: 7,
      nombre: "Pau Saman",
      cargo: "Equipo terapéutico",
      especialidad: "Equipo terapéutico",
      imagen: "/images/Pau-Saman-Equipo terapeutico.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
    },
    {
      id: 8,
      nombre: "Alejandro Marquez",
      cargo: "Equipo terapéutico",
      especialidad: "Equipo terapéutico",
      imagen: "/images/Alejandro-Marquez-Equipo terapeutico.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
    },
    {
      id: 9,
      nombre: "Alejandro Gonzalez",
      cargo: "Equipo terapéutico",
      especialidad: "Equipo terapéutico",
      imagen: "/images/alejandro-gonzalez.png",
      experiencia: "",
      educacion: [],
      certificaciones: [],
      descripcion: "",
      especialidades: [],
    },
  ],
}

export default function EquipoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Nuestro equipo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">Profesionales comprometidos con tu recuperación</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro equipo multidisciplinario está formado por médicos, psicólogos y terapeutas especializados en
              adicciones, unidos por el compromiso de brindarte la mejor atención profesional y humana.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-emerald-600" />
                <span>Altamente calificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600" />
                <span>Certificaciones internacionales</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Enfoque humano</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas del Equipo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600">15+</div>
                <div className="text-gray-600">Profesionales</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Años de experiencia combinada</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-purple-600">8</div>
                <div className="text-gray-600">Especialidades</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600">Disponibilidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo por Especialidades */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Conoce a nuestros especialistas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Un equipo multidisciplinario de excelencia
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Cada miembro de nuestro equipo aporta su experiencia y especialización para brindarte un tratamiento
                integral y personalizado.
              </p>
            </div>

            <Tabs defaultValue="direccion" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-12">
                <TabsTrigger value="direccion" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Dirección
                </TabsTrigger>
                <TabsTrigger value="medicos" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Médicos
                </TabsTrigger>
                <TabsTrigger value="terapeutas" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Terapeutas
                </TabsTrigger>
              </TabsList>

              {/* Dirección */}
              <TabsContent value="direccion" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {equipoData.direccion.map((miembro) => (
                    <Card
                      key={miembro.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 gap-6">
                          <div className="md:col-span-2 p-6">
                            <div className="relative">
                              <Image
                                src={miembro.imagen || "/placeholder.svg"}
                                alt={`${miembro.nombre} - ${miembro.cargo}`}
                                width={400}
                                height={400}
                                className="w-full h-48 md:h-full object-cover rounded-lg"
                              />
                              <div className="absolute top-2 right-2">
                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                                  {miembro.experiencia}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-3 p-6 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{miembro.nombre}</h3>
                              <p className="text-emerald-600 font-semibold">{miembro.cargo}</p>
                              <p className="text-gray-600">{miembro.especialidad}</p>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{miembro.descripcion}</p>
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-1">Educación:</h4>
                                <ul className="space-y-1">
                                  {miembro.educacion.map((edu, index) => (
                                    <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                                      <GraduationCap className="h-3 w-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                                      {edu}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-1">Especialidades:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {miembro.especialidades.map((esp, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {esp}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Médicos */}
              <TabsContent value="medicos" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {equipoData.medicos.map((miembro) => (
                    <Card
                      key={miembro.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 gap-6">
                          <div className="md:col-span-2 p-6">
                            <div className="relative">
                              <Image
                                src={miembro.imagen || "/placeholder.svg"}
                                alt={`${miembro.nombre} - ${miembro.cargo}`}
                                width={400}
                                height={400}
                                className="w-full h-48 md:h-full object-cover rounded-lg"
                              />
                              <div className="absolute top-2 right-2">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                  {miembro.experiencia}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-3 p-6 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{miembro.nombre}</h3>
                              <p className="text-blue-600 font-semibold">{miembro.cargo}</p>
                              <p className="text-gray-600">{miembro.especialidad}</p>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{miembro.descripcion}</p>
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-1">Educación:</h4>
                                <ul className="space-y-1">
                                  {miembro.educacion.map((edu, index) => (
                                    <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                                      <GraduationCap className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                                      {edu}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-1">Especialidades:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {miembro.especialidades.map((esp, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {esp}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Terapeutas */}
              <TabsContent value="terapeutas" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {equipoData.terapeutas.map((miembro) => (
                    <Card
                      key={miembro.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 gap-6">
                          <div className="md:col-span-2 p-6">
                            <div className="relative">
                              <Image
                                src={miembro.imagen || "/placeholder.svg"}
                                alt={`${miembro.nombre} - ${miembro.cargo}`}
                                width={400}
                                height={400}
                                className="w-full h-48 md:h-full object-cover rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-3 p-6 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{miembro.nombre}</h3>
                              <p className="text-emerald-600 font-semibold">{miembro.cargo}</p>
                              <p className="text-gray-600">{miembro.especialidad}</p>
                            </div>
                          </div>
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

      {/* Enfoque del Equipo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  Nuestro enfoque
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trabajo en equipo para tu recuperación</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nuestro equipo multidisciplinario trabaja de manera coordinada para brindarte una atención integral.
                  Cada profesional aporta su experiencia específica, pero todos compartimos el mismo objetivo: tu
                  recuperación completa y duradera.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Colaboración interdisciplinaria</h3>
                      <p className="text-gray-600">
                        Reuniones semanales del equipo para revisar cada caso y ajustar tratamientos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Atención personalizada</h3>
                      <p className="text-gray-600">Cada paciente tiene un plan de tratamiento único y personalizado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Excelencia profesional</h3>
                      <p className="text-gray-600">
                        Formación continua y actualización constante en las mejores prácticas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Equipo médico de Vistacampo en reunión de trabajo colaborativo"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Equipo unido</p>
                      <p className="text-sm text-gray-600">Por tu recuperación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios del Equipo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
                Testimonios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros pacientes
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                La experiencia y dedicación de nuestro equipo se refleja en las palabras de quienes han vivido el
                proceso de recuperación con nosotros.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "El Dr. Mendoza y todo su equipo me trataron con una humanidad y profesionalismo excepcionales. Su
                    enfoque integral fue clave en mi recuperación."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-semibold">L.M.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Luis M.</p>
                      <p className="text-sm text-gray-600">Paciente recuperado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "La Dra. Rodríguez nos ayudó como familia a entender la enfermedad y a ser parte activa de la
                    solución. Su terapia familiar fue transformadora."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">S.P.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sandra P.</p>
                      <p className="text-sm text-gray-600">Familiar de paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Roberto y su grupo de terapia me enseñaron que no estaba solo. Las sesiones grupales fueron un
                    espacio de sanación y crecimiento increíble."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">A.R.</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Andrés R.</p>
                      <p className="text-sm text-gray-600">Paciente recuperado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
