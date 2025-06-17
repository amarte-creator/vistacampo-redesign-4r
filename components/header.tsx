"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, Facebook, Twitter, MapPin } from "lucide-react"

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
      {/* Top Bar */}
      <div className="bg-emerald-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+584122315968" className="flex items-center gap-1 hover:text-emerald-200 transition-colors">
                <Phone className="h-3 w-3" />
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
                <span>Caracas, Venezuela</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-emerald-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-emerald-200 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
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
          <nav className="hidden lg:flex items-center space-x-8">
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

          <div className="flex items-center space-x-4">
            <Button className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700 shadow-lg">
              <Phone className="mr-2 h-4 w-4" />
              Solicita Ayuda
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Image
                    src="/images/logo-vistacampo.png"
                    alt="Vistacampo"
                    width={150}
                    height={45}
                    className="h-10 w-auto mb-6"
                  />
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
                  <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicita Ayuda
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
