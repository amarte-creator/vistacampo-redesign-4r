import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Vistacampo",
  description: "Terms and conditions of use for Vistacampo services.",
  keywords: "terms and conditions, terms of use, Vistacampo",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our services, you agree to be bound by these terms and conditions. 
                If you do not agree with any part of these terms, you should not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">
                Vistacampo provides addiction treatment and rehabilitation services. 
                Our services include medical evaluation, individual and group therapy, and recovery programs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Patient Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                Patients are responsible for providing accurate information about their medical history, 
                following medical team recommendations, and actively participating in their recovery process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain the confidentiality of all medical and personal information of our patients, 
                except when required by law or when necessary for their safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Vistacampo is not responsible for indirect, incidental, or consequential damages that may 
                result from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modifications</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. 
                Changes will take effect immediately after their publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these terms and conditions, you can contact us at:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Email: info@vistacampo.com</li>
                <li>Phone: (+58) 412-231-5968</li>
                <li>Address: Vistacampo Therapeutic Center, Colonia Tovar, Venezuela</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
