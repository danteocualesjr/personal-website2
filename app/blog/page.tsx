import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Dante O. Cuales, Jr.',
  description: 'Thoughts, insights, and articles',
}

interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime?: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Welcome to My Blog',
    excerpt: 'This is where I share my thoughts, experiences, and insights on various topics that interest me.',
    date: '2024-01-15',
    slug: 'welcome-to-my-blog',
    readTime: '3 min',
  },
  {
    title: 'Getting Started with Next.js',
    excerpt: 'A comprehensive guide to building modern web applications with Next.js and React.',
    date: '2024-01-10',
    slug: 'getting-started-with-nextjs',
    readTime: '8 min',
  },
  {
    title: 'Thoughts on Modern Web Development',
    excerpt: 'Reflections on the current state of web development and where it\'s heading.',
    date: '2024-01-05',
    slug: 'thoughts-on-modern-web-development',
    readTime: '5 min',
  },
]

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div className="opacity-0 animate-fade-in">
        <span className="stamp mb-6">Journal</span>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-6 mb-4">
          Writing & Thoughts
        </h1>
        <p className="text-lg text-muted mb-12">
          Essays, ideas, and reflections on topics I find interesting.
        </p>
      </div>

      <div className="space-y-1">
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block vintage-card p-6 group opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h2 className="font-display text-xl group-hover:text-rust transition-colors">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 font-mono text-xs text-muted shrink-0">
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                {post.readTime && (
                  <>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted italic">
            No posts yet. Check back soon.
          </p>
        </div>
      )}
    </div>
  )
}
