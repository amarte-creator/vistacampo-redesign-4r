import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Vistacampo",
  description: "Términos y condiciones de uso de los servicios de Vistacampo.",
  keywords: "términos y condiciones, condiciones de uso, Vistacampo",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones. 
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción de los servicios</h2>
              <p className="text-gray-700 mb-4">
                Vistacampo proporciona servicios de tratamiento y rehabilitación para adicciones. 
                Nuestros servicios incluyen evaluación médica, terapia individual y grupal, y programas de recuperación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades del paciente</h2>
              <p className="text-gray-700 mb-4">
                Los pacientes son responsables de proporcionar información precisa sobre su historial médico, 
                seguir las recomendaciones del equipo médico y participar activamente en su proceso de recuperación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Confidencialidad</h2>
              <p className="text-gray-700 mb-4">
                Mantenemos la confidencialidad de toda la información médica y personal de nuestros pacientes, 
                excepto cuando la ley lo requiera o cuando sea necesario para su seguridad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitación de responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                Vistacampo no se hace responsable por daños indirectos, incidentales o consecuentes que puedan 
                resultar del uso de nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre estos términos y condiciones, puede contactarnos en:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Email: info@vistacampo.com</li>
                <li>Teléfono: (+58) 412-231-5968</li>
                <li>Dirección: Vistacampo Therapeutic Center, Colonia Tovar, Venezuela</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
