"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, Heart, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
};

export default function NoticiasPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts?lang=es')
        const data = await response.json()
        setPosts(data)
        setFilteredPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
        setFilteredPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPosts(filtered)
  }, [searchTerm, posts])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Blog y noticias
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Información y recursos sobre adicciones
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Mantente informado con artículos especializados, consejos de expertos y las últimas investigaciones en el
              campo del tratamiento de adicciones y salud mental.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                <span>Artículos especializados</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Consejos de expertos</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-600" />
                <span>Basado en evidencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Búsqueda y Filtros */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Buscar artículos..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <Badge variant="outline" className="text-sm">
                    {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando artículos...</p>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="p-0">
                      {post.image && (
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <CardTitle className="text-xl mb-3 line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                        {post.description}
                      </CardDescription>
                      <Link href={`/es/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full">
                          Leer más
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {searchTerm ? 'No se encontraron artículos' : 'No hay artículos disponibles'}
                </h3>
                <p className="text-gray-600">
                  {searchTerm 
                    ? 'Intenta con otros términos de búsqueda.'
                    : 'Pronto publicaremos contenido especializado sobre adicciones y salud mental.'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas ayuda con una adicción?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo de expertos está disponible para brindarte la orientación y el apoyo que necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/es/contacto">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contáctanos
                </Button>
              </Link>
              <Link href="/es/tratamiento">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Conoce nuestro tratamiento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
