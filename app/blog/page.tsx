import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowRight, BookOpen, Heart, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-emerald-700 bg-emerald-100">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Artículos y Recursos
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Explora artículos especializados, consejos de expertos y novedades sobre adicciones y salud mental.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todos los Artículos</h2>
              <p className="text-lg text-gray-700">
                Descubre nuestra colección completa de artículos sobre adicciones, salud mental y recuperación.
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
          </div>
        </div>
      </section>
    </div>
  );
} 