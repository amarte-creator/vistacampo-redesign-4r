import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Vistacampo",
  description: "Política de privacidad y protección de datos personales de Vistacampo.",
  keywords: "política de privacidad, protección de datos, Vistacampo",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-700 mb-4">
                Recopilamos información que usted nos proporciona directamente, como cuando se comunica con nosotros a través de nuestro sitio web, 
                por teléfono o por correo electrónico.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo utilizamos su información</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos la información que recopilamos para proporcionar nuestros servicios de tratamiento, 
                comunicarnos con usted y mejorar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Protección de la información</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal 
                contra el acceso no autorizado, la alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sus derechos</h2>
              <p className="text-gray-700 mb-4">
                Usted tiene derecho a acceder, corregir, eliminar y oponerse al procesamiento de su información personal. 
                Para ejercer estos derechos, contáctenos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
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
