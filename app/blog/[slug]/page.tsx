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
    <article className="max-w-3xl mx-auto py-16 px-4">
      {post.frontMatter.image && (
        <img 
          src={post.frontMatter.image} 
          alt={post.frontMatter.title} 
          className="rounded-xl mb-8 w-full object-cover" 
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
      <p className="text-gray-500 mb-8">
        {new Date(post.frontMatter.date).toLocaleDateString('es-ES')}
      </p>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
} 