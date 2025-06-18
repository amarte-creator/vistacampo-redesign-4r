import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostFrontMatter {
  title: string
  description: string
  date: string
  slug: string
  image?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export interface Post {
  slug: string
  frontMatter: PostFrontMatter
  content: string
}

export function getPostSlugs(): string[] {
  try {
    const filenames = fs.readdirSync(postsDirectory)
    return filenames
      .filter(filename => filename.endsWith('.mdx'))
      .map(filename => {
        const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
        const { data } = matter(source)
        return data.slug
      })
      .filter(Boolean)
  } catch (error) {
    console.warn('No posts directory found or error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filenames = fs.readdirSync(postsDirectory)
    for (const filename of filenames) {
      if (!filename.endsWith('.mdx')) continue
      
      const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
      const { content, data } = matter(source)
      
      if (data.slug === slug) {
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()
        
        return {
          slug: data.slug,
          frontMatter: data as PostFrontMatter,
          content: contentHtml
        }
      }
    }
    return null
  } catch (error) {
    console.warn('Error reading post:', error)
    return null
  }
}

export function getAllPosts(): Post[] {
  try {
    const slugs = getPostSlugs()
    const posts = slugs
      .map(slug => {
        const filenames = fs.readdirSync(postsDirectory)
        for (const filename of filenames) {
          if (!filename.endsWith('.mdx')) continue
          
          const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
          const { data } = matter(source)
          
          if (data.slug === slug) {
            return {
              slug: data.slug,
              frontMatter: data as PostFrontMatter,
              content: ''
            }
          }
        }
        return null
      })
      .filter(Boolean) as Post[]
    
    return posts.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
  } catch (error) {
    console.warn('Error getting all posts:', error)
    return []
  }
} 