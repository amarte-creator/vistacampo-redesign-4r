import { Metadata } from 'next'
import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe.',
    }
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    openGraph: {
      title: post.frontMatter.ogTitle || post.frontMatter.title,
      description: post.frontMatter.ogDescription || post.frontMatter.description,
      images: post.frontMatter.ogImage ? [post.frontMatter.ogImage] : [],
      type: 'article',
      url: `https://vistacampo.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto py-16 px-4">
      {/* Header Section */}
      <header className="mb-12 text-center">
        {post.frontMatter.image && (
          <div className="mb-8">
            <img 
              src={post.frontMatter.image} 
              alt={post.frontMatter.title} 
              className="rounded-xl shadow-lg w-full max-w-2xl mx-auto object-cover" 
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.frontMatter.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
          <time dateTime={post.frontMatter.date} className="text-lg">
            {new Date(post.frontMatter.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {post.frontMatter.description}
        </p>
      </header>

      {/* Content Section */}
      <div 
        className="blog-content prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* Footer Section */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="text-lg italic">
            "En Vistacampo, nos especializamos en proporcionar tratamientos integrales y personalizados, 
            combinando las mejores prácticas internacionales con un entorno natural único."
          </p>
        </div>
      </footer>
    </article>
  )
} 