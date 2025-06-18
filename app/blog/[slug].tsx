import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Head from 'next/head'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map((filename) => {
    const { data } = matter(fs.readFileSync(path.join(postsDirectory, filename), 'utf8'))
    return { slug: data.slug }
  })
}

async function getPostBySlug(slug: string) {
  const filenames = fs.readdirSync(postsDirectory)
  const file = filenames.find((f) => f.endsWith('.mdx') && f.includes(slug))
  if (!file) return null
  const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return { frontMatter: data, mdxSource }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return <div className="max-w-2xl mx-auto py-16 px-4">Artículo no encontrado.</div>
  const { frontMatter, mdxSource } = post
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        <meta property="og:title" content={frontMatter.ogTitle || frontMatter.title} />
        <meta property="og:description" content={frontMatter.ogDescription || frontMatter.description} />
        {frontMatter.ogImage && <meta property="og:image" content={frontMatter.ogImage} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://vistacampo.com/blog/${frontMatter.slug}`} />
      </Head>
      <article className="max-w-3xl mx-auto py-16 px-4">
        {frontMatter.image && (
          <img src={frontMatter.image} alt={frontMatter.title} className="rounded-xl mb-8 w-full object-cover" />
        )}
        <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
        <p className="text-gray-500 mb-8">{new Date(frontMatter.date).toLocaleDateString('es-ES')}</p>
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={mdxSource} />
        </div>
      </article>
    </>
  )
} 