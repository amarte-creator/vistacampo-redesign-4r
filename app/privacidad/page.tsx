import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Vistacampo",
  description:
    "Conoce cómo protegemos tu información personal y médica en Vistacampo. Política de privacidad completa y transparente.",
  keywords: "privacidad, protección datos, confidencialidad médica, Vistacampo",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Política de Privacidad
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">Tu Privacidad es Nuestra Prioridad</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              En Vistacampo, protegemos tu información personal y médica con los más altos estándares de
              confidencialidad y seguridad.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>Máxima Seguridad</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-emerald-600" />
                <span>Datos Encriptados</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-emerald-600" />
                <span>Transparencia Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <p className="text-gray-600 text-sm mb-4">
                  <strong>Última actualización:</strong> 15 de enero de 2024
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Esta Política de Privacidad describe cómo Vistacampo Centro Terapéutico recopila, utiliza, almacena y
                  protege su información personal y médica cuando utiliza nuestros servicios o visita nuestro sitio web.
                </p>
              </div>

              <Card className="mb-8 border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    Compromiso con la Confidencialidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Como centro de tratamiento médico, estamos legalmente obligados y éticamente comprometidos a
                    mantener la confidencialidad de toda la información médica y personal de nuestros pacientes,
                    cumpliendo con las leyes de privacidad médica de Venezuela y estándares internacionales.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">1. Información que Recopilamos</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Personal</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Nombre completo, fecha de nacimiento y datos de identificación</li>
                <li>Información de contacto (dirección, teléfono, email)</li>
                <li>Información de contacto de emergencia y familiares</li>
                <li>Información de seguro médico y financiera</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Médica</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Historial médico y psiquiátrico completo</li>
                <li>Información sobre consumo de sustancias y adicciones</li>
                <li>Resultados de evaluaciones y exámenes médicos</li>
                <li>Notas de terapia y progreso del tratamiento</li>
                <li>Medicamentos prescritos y reacciones adversas</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Información del Sitio Web</h3>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Dirección IP y datos de navegación</li>
                <li>Cookies y tecnologías similares</li>
                <li>Información de formularios de contacto</li>
                <li>Registros de comunicaciones electrónicas</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Cómo Utilizamos su Información</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Propósitos Médicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Evaluación y diagnóstico</li>
                      <li>• Planificación del tratamiento</li>
                      <li>• Monitoreo del progreso</li>
                      <li>• Coordinación de cuidados</li>
                      <li>• Seguimiento post-tratamiento</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Propósitos Administrativos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Facturación y seguros</li>
                      <li>• Comunicación con familiares</li>
                      <li>• Cumplimiento legal</li>
                      <li>• Mejora de servicios</li>
                      <li>• Investigación clínica</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Protección y Seguridad de Datos</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Medidas de Seguridad Implementadas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Seguridad Física</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Acceso restringido a instalaciones</li>
                      <li>• Archivos médicos bajo llave</li>
                      <li>• Sistemas de vigilancia 24/7</li>
                      <li>• Control de acceso biométrico</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Seguridad Digital</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Encriptación de datos</li>
                      <li>• Firewalls y antivirus</li>
                      <li>• Copias de seguridad regulares</li>
                      <li>• Acceso autenticado</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Compartir Información</h2>

              <p className="text-gray-700 mb-4">
                Su información médica solo se comparte en las siguientes circunstancias limitadas:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <strong>Con su consentimiento expreso:</strong> Cuando usted autoriza específicamente el intercambio
                  de información
                </li>
                <li>
                  <strong>Para su tratamiento:</strong> Con otros profesionales de la salud involucrados en su cuidado
                </li>
                <li>
                  <strong>Requerimientos legales:</strong> Cuando la ley requiere la divulgación de información
                </li>
                <li>
                  <strong>Emergencias médicas:</strong> Para proteger su vida o la de otros en situaciones de emergencia
                </li>
                <li>
                  <strong>Seguros médicos:</strong> Para procesamiento de reclamaciones y autorización de tratamientos
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Sus Derechos</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Derechos de Acceso</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700">
                    <p>Tiene derecho a:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Acceder a su información médica</li>
                      <li>• Solicitar copias de sus registros</li>
                      <li>• Revisar quién ha accedido a sus datos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Derechos de Control</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700">
                    <p>Tiene derecho a:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Solicitar correcciones</li>
                      <li>• Restringir el uso de información</li>
                      <li>• Revocar consentimientos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Retención de Datos</h2>

              <p className="text-gray-700 mb-4">
                Mantenemos su información médica de acuerdo con los requisitos legales y profesionales:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <strong>Registros médicos:</strong> Se conservan por un mínimo de 10 años después del último
                  tratamiento
                </li>
                <li>
                  <strong>Registros de menores:</strong> Se conservan hasta que el paciente cumpla 25 años
                </li>
                <li>
                  <strong>Información financiera:</strong> Se conserva según los requisitos fiscales aplicables
                </li>
                <li>
                  <strong>Datos del sitio web:</strong> Se eliminan después de 2 años de inactividad
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies y Tecnologías Web</h2>

              <p className="text-gray-700 mb-4">
                Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo los visitantes usan el sitio
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Recuerdan sus preferencias y configuraciones
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contacto y Quejas</h2>

              <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Oficial de Privacidad de Vistacampo</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                    <span>(+58) 412-231-5968</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-emerald-600" />
                    <span>privacidad@vistacampo.com</span>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Si tiene preguntas sobre esta política o desea ejercer sus derechos de privacidad, contáctenos. Nos
                  comprometemos a responder dentro de 30 días.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Cambios a esta Política</h2>

              <p className="text-gray-700 mb-8">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios
                significativos por email o mediante un aviso prominente en nuestro sitio web. La fecha de la última
                actualización se indica al inicio de esta política.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consentimiento</h3>
                <p className="text-gray-700">
                  Al utilizar nuestros servicios o proporcionar su información, usted consiente el procesamiento de sus
                  datos según se describe en esta Política de Privacidad. Si no está de acuerdo con algún aspecto de
                  esta política, por favor contáctenos para discutir sus opciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
