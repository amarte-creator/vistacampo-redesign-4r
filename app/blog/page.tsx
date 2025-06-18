import Link from 'next/link'
import { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog - Centro de Rehabilitación Vistacampo',
  description: 'Artículos y noticias sobre rehabilitación, adicciones y bienestar mental en nuestro centro de rehabilitación.',
  openGraph: {
    title: 'Blog - Centro de Rehabilitación Vistacampo',
    description: 'Artículos y noticias sobre rehabilitación, adicciones y bienestar mental.',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Artículos y noticias sobre rehabilitación, adicciones y bienestar mental
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay artículos disponibles en este momento.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {post.frontMatter.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.frontMatter.image}
                    alt={post.frontMatter.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.frontMatter.date).toLocaleDateString('es-ES')}
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {post.frontMatter.title}
                  </Link>
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.frontMatter.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Leer más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
} 