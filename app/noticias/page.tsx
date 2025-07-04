import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, Heart, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

async function getPosts(): Promise<Post[]> {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8');
        const { data } = matter(source);
        return {
          title: data.title,
          description: data.description,
          date: data.date,
          slug: data.slug,
          image: data.image,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.warn('No posts directory found or error reading posts:', error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Noticias y Artículos sobre Adicciones | Blog Vistacampo",
  description:
    "Lee nuestros artículos especializados sobre adicciones, salud mental, prevención y recuperación. Información actualizada y consejos de nuestros expertos.",
  keywords: "noticias, artículos, adicciones, salud mental, prevención, recuperación, blog, Vistacampo",
}

export default async function NoticiasPage() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-rose-900 bg-rose-900/10">
              Blog y Noticias
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Información y Recursos sobre Adicciones
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Mantente informado con artículos especializados, consejos de expertos y las últimas investigaciones en el
              campo del tratamiento de adicciones y salud mental.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                <span>Artículos Especializados</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Consejos de Expertos</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-600" />
                <span>Basado en Evidencia</span>
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
                <Input placeholder="Buscar artículos..." className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Add filter buttons here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículo Destacado */}
      {/* Add article display logic here */}

      {/* Lista de Artículos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Más Artículos</h2>
              <p className="text-lg text-gray-700">
                Explora nuestra colección completa de artículos sobre adicciones, salud mental y recuperación.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {post.image && (
                  <div className="relative h-48">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2 hover:text-emerald-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">{post.description}</CardDescription>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Leer Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mantente Informado</h2>
            <p className="text-xl mb-8 opacity-90">
              Suscríbete a nuestro boletín para recibir los últimos artículos, consejos de expertos y recursos sobre
              adicciones directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                Suscribirse
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-4">Sin spam. Puedes cancelar tu suscripción en cualquier momento.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
