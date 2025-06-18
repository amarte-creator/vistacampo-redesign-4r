import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
      <p className="text-gray-600 mb-8">
        El artículo que buscas no existe o ha sido eliminado.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Volver al blog
      </Link>
    </div>
  )
} 