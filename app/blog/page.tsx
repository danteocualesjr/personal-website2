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
    readTime: '3 min read',
  },
  {
    title: 'Getting Started with Next.js',
    excerpt: 'A comprehensive guide to building modern web applications with Next.js and React.',
    date: '2024-01-10',
    slug: 'getting-started-with-nextjs',
    readTime: '8 min read',
  },
  {
    title: 'Thoughts on Modern Web Development',
    excerpt: 'Reflections on the current state of web development and where it\'s heading.',
    date: '2024-01-05',
    slug: 'thoughts-on-modern-web-development',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in-up">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Blog
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6">
          Writing & Thoughts
        </h1>
        <p className="text-xl text-muted mb-4 max-w-2xl">
          Ideas, tutorials, and reflections on topics I'm passionate about.
        </p>
        <div className="decorative-line mb-16"></div>
      </div>

      <div className="space-y-2">
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 -mx-6 rounded-xl hover:bg-card transition-colors opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h2 className="text-xl font-medium group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-muted">
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
            <p className="text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted">
            No blog posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}
