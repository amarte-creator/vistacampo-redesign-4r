import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Vistacampo",
  description: "Privacy policy and personal data protection of Vistacampo.",
  keywords: "privacy policy, data protection, Vistacampo",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us, such as when you communicate with us through our website, 
                by phone, or by email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide our treatment services, 
                communicate with you, and improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Protection</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to access, correct, delete, and object to the processing of your personal information. 
                To exercise these rights, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this privacy policy, you can contact us at:
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
