import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin, Facebook, Instagram, Heart } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <footer className="bg-rose-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-400">Vistacampo</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Centro especializado en rehabilitación de adicciones en Colonia Tovar, Venezuela. Tu recuperación es nuestra
              misión.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/centro_vistacampo/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@juliogonzalezfilesari0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tratamiento" className="text-gray-300 hover:text-white transition-colors">
                  Tratamiento
                </Link>
              </li>
              <li>
                <Link href="/instalaciones" className="text-gray-300 hover:text-white transition-colors">
                  Instalaciones
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="text-gray-300 hover:text-white transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="/admision" className="text-gray-300 hover:text-white transition-colors">
                  Admisión
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-300 hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Desintoxicación Médica</li>
              <li className="text-gray-300">Terapia Individual</li>
              <li className="text-gray-300">Terapia Grupal</li>
              <li className="text-gray-300">Terapia Familiar</li>
              <li className="text-gray-300">Seguimiento Post-Tratamiento</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" color="#10b981" />
                  <span className="text-gray-300">(+58) 412-231-5968</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@vistacampo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Colonia Tovar, Venezuela</span>
              </div>
            </div>
            <div className="pt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <WhatsAppIcon className="mr-2 h-4 w-4" color="#10b981" />
                  Solicita Ayuda 24/7
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Vistacampo. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/terminos" className="text-gray-400 hover:text-white text-sm underline underline-offset-4">Términos y condiciones</Link>
                <span className="text-gray-400">|</span>
                <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm underline underline-offset-4">Política de privacidad</Link>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>para tu recuperación</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
