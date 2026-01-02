import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Your Name',
  description: 'Thoughts, insights, and articles',
}

interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Welcome to My Blog',
    excerpt: 'This is where I share my thoughts, experiences, and insights on various topics that interest me.',
    date: '2024-01-15',
    slug: 'welcome-to-my-blog',
  },
  {
    title: 'Getting Started with Next.js',
    excerpt: 'A comprehensive guide to building modern web applications with Next.js and React.',
    date: '2024-01-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Thoughts on Modern Web Development',
    excerpt: 'Reflections on the current state of web development and where it\'s heading.',
    date: '2024-01-05',
    slug: 'thoughts-on-modern-web-development',
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Blog
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Thoughts, insights, and articles on topics I'm passionate about.
      </p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}

