"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle, Mail, Facebook, Instagram, MapPin } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { WHATSAPP_LINK } from "@/lib/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Tratamiento", href: "/tratamiento" },
    { name: "Instalaciones", href: "/instalaciones" },
    { name: "Equipo", href: "/equipo" },
    { name: "Admisión", href: "/admision" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      
      {/*
      <div className="bg-emerald-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-200 transition-colors">
                <WhatsAppIcon className="h-3 w-3" />
                <span>(+58) 412-231-5968</span>
              </a>
              <a
                href="mailto:info@vistacampo.com"
                className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
              >
                <Mail className="h-3 w-3" />
                <span>info@vistacampo.com</span>
              </a>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>Colonia Tovar, Venezuela</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/centro_vistacampo/?hl=es" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@juliogonzalezfilesari0" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" style={{ color: '#fff' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-vistacampo.png"
              alt="Vistacampo - Centro Terapéutico"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-x-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                Solicita ayuda
              </Button>
              <Button size="icon" className="sm:hidden rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg">
                <WhatsAppIcon className="h-5 w-5" />
              </Button>
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
               <a href="https://www.facebook.com/people/CENTRO-TERAPEUTICO-VISTACAMPO/100064706529329/#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/centro_vistacampo/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.youtube.com/@juliogonzalezfilesari0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                      <WhatsAppIcon className="mr-2 h-4 w-4" />
                      Solicita ayuda
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
