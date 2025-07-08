import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Vistacampo",
  description:
    "Lee los términos y condiciones de uso de los servicios de Vistacampo Centro Terapéutico. Información legal completa y transparente.",
  keywords: "términos, condiciones, legal, servicios médicos, Vistacampo",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Términos y condiciones
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">Términos de uso de servicios</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Estos términos establecen las condiciones bajo las cuales proporcionamos nuestros servicios de tratamiento
              y el uso de nuestro sitio web.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-emerald-600" />
                <span>Marco Legal</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-emerald-600" />
                <span>Transparencia</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-emerald-600" />
                <span>Responsabilidades</span>
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
                  Estos Términos y Condiciones ("Términos") rigen el uso de los servicios proporcionados por Vistacampo
                  Centro Terapéutico y el acceso a nuestro sitio web. Al utilizar nuestros servicios, usted acepta
                  cumplir con estos términos.
                </p>
              </div>

              <Card className="mb-8 border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-emerald-600" />
                    Aceptación de Términos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Al acceder a nuestros servicios, utilizar nuestro sitio web o iniciar tratamiento en Vistacampo,
                    usted acepta estar legalmente vinculado por estos términos y todas las políticas aplicables.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">1. Definiciones</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-900">"Vistacampo" o "Centro"</dt>
                    <dd className="text-gray-700">
                      Se refiere a Vistacampo Centro Terapéutico, sus instalaciones, personal y servicios.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">"Paciente" o "Usuario"</dt>
                    <dd className="text-gray-700">
                      Persona que recibe servicios de tratamiento o utiliza nuestro sitio web.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">"Servicios"</dt>
                    <dd className="text-gray-700">
                      Todos los servicios médicos, terapéuticos y de apoyo proporcionados por Vistacampo.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">"Familiar Responsable"</dt>
                    <dd className="text-gray-700">
                      Persona designada como contacto principal y responsable del paciente.
                    </dd>
                  </div>
                </dl>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Servicios Médicos</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Naturaleza de los Servicios</h3>
              <p className="text-gray-700 mb-4">
                Vistacampo proporciona servicios especializados de tratamiento para adicciones, incluyendo pero no
                limitado a:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Evaluación médica y psicológica integral</li>
                <li>Desintoxicación médicamente supervisada</li>
                <li>Terapia individual, grupal y familiar</li>
                <li>Programas de rehabilitación residencial</li>
                <li>Seguimiento post-tratamiento</li>
                <li>Servicios de apoyo y educación familiar</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitaciones del Tratamiento</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium mb-1">Importante:</p>
                    <p>
                      No garantizamos resultados específicos del tratamiento. La recuperación es un proceso individual
                      que requiere compromiso y participación activa del paciente y su familia.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Admisión y Evaluación</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Admisión</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Todos los pacientes deben completar una evaluación médica y psicológica antes del ingreso</li>
                <li>Se requiere consentimiento informado del paciente o tutor legal</li>
                <li>
                  Nos reservamos el derecho de rechazar la admisión si determinamos que no podemos proporcionar el nivel
                  de atención requerido
                </li>
                <li>Los pacientes menores de edad requieren consentimiento de padre, madre o tutor legal</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Criterios de Exclusión</h3>
              <p className="text-gray-700 mb-4">Podemos no admitir pacientes en las siguientes circunstancias:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Condiciones médicas que requieren cuidados intensivos no disponibles en nuestras instalaciones</li>
                <li>Comportamiento violento o amenazante hacia el personal o otros pacientes</li>
                <li>Falta de compromiso con el proceso de tratamiento</li>
                <li>Incumplimiento de las políticas del centro</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Responsabilidades del Paciente</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Durante el Tratamiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Participar activamente en el tratamiento</li>
                      <li>• Seguir las indicaciones médicas</li>
                      <li>• Respetar las reglas del centro</li>
                      <li>• Mantener honestidad sobre su condición</li>
                      <li>• Respetar a otros pacientes y personal</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Obligaciones Financieras</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pagar los servicios según lo acordado</li>
                      <li>• Notificar cambios en la cobertura</li>
                      <li>• Cumplir con los planes de pago</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Políticas del Centro</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustancias Prohibidas</h3>
              <p className="text-gray-700 mb-4">Está estrictamente prohibido el ingreso, posesión o uso de:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Alcohol y drogas ilegales</li>
                <li>Medicamentos no prescritos por nuestro equipo médico</li>
                <li>Objetos cortantes o potencialmente peligrosos</li>
                <li>Dispositivos electrónicos no autorizados</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visitantes</h3>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Las visitas están sujetas a horarios específicos y aprobación previa</li>
                <li>Todos los visitantes deben registrarse y seguir las políticas del centro</li>
                <li>Nos reservamos el derecho de restringir o prohibir visitas si es necesario para el tratamiento</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Facturación y Pagos</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Política de Facturación</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Los servicios se facturan según las tarifas vigentes al momento del tratamiento</li>
                <li>Los pagos vencen según los términos acordados en el contrato de servicios</li>
                <li>Se pueden aplicar cargos por pagos tardíos</li>
                <li>Los servicios pueden suspenderse por falta de pago</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Alta y Terminación del Tratamiento</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alta Voluntaria</h3>
              <p className="text-gray-700 mb-4">
                Los pacientes pueden solicitar el alta en cualquier momento, sujeto a:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Evaluación médica para determinar la seguridad del alta</li>
                <li>Notificación por escrito con 24 horas de anticipación</li>
                <li>Cumplimiento de obligaciones financieras pendientes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alta Involuntaria</h3>
              <p className="text-gray-700 mb-4">Podemos terminar el tratamiento en casos de:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Violación de las políticas del centro</li>
                <li>Comportamiento que ponga en riesgo la seguridad</li>
                <li>Falta de progreso o participación en el tratamiento</li>
                <li>Incumplimiento de obligaciones financieras</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Limitación de Responsabilidad</h2>

              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Exención de Responsabilidad</h3>
                <p className="text-gray-700 mb-4">Vistacampo no será responsable por:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Resultados específicos del tratamiento</li>
                  <li>• Recaídas después del alta</li>
                  <li>• Pérdida de objetos personales</li>
                  <li>• Daños indirectos o consecuenciales</li>
                  <li>• Interrupciones del servicio por causas de fuerza mayor</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Resolución de Disputas</h2>

              <p className="text-gray-700 mb-4">En caso de disputas o quejas:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Primero debe contactar a nuestro departamento de atención al paciente</li>
                <li>Si no se resuelve, puede solicitar mediación</li>
                <li>Las disputas legales se resolverán bajo las leyes de Venezuela</li>
                <li>La jurisdicción será los tribunales de Colonia Tovar, Venezuela</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Ley Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 mb-4">
                Estos términos se rigen por las leyes de Venezuela. Cualquier disputa se someterá a la jurisdicción de
                los tribunales competentes.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>La ley aplicable es la de la República Bolivariana de Venezuela</li>
                <li>La jurisdicción será los tribunales de Colonia Tovar, Venezuela</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Modificaciones</h2>

              <p className="text-gray-700 mb-8">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                vigor inmediatamente después de su publicación en nuestro sitio web. Es responsabilidad del usuario
                revisar periódicamente estos términos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contacto</h2>

              <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Departamento Legal - Vistacampo</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                    <span>(+58) 412-231-5968</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-emerald-600" />
                    <span>legal@vistacampo.com</span>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Para preguntas sobre estos términos o asuntos legales relacionados con nuestros servicios.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Acuerdo Final</h3>
                <p className="text-gray-700">
                  Estos términos constituyen el acuerdo completo entre usted y Vistacampo con respecto al uso de
                  nuestros servicios. Al utilizar nuestros servicios, usted reconoce que ha leído, entendido y acepta
                  estar vinculado por estos términos y condiciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
