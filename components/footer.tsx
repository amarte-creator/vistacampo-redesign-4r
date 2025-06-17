import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-400">Vistacampo</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Centro especializado en rehabilitación de adicciones en Caracas, Venezuela. Tu recuperación es nuestra
              misión.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
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
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">(+58) 412-231-5968</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@vistacampo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Caracas, Venezuela</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Phone className="mr-2 h-4 w-4" />
                Solicita Ayuda 24/7
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vistacampo. Todos los derechos reservados.
            </p>
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
