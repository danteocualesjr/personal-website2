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
    title: 'WELCOME_TO_MY_BLOG',
    excerpt: 'This is where I share my thoughts and experiences on various topics.',
    date: '2024-01-15',
    slug: 'welcome-to-my-blog',
    readTime: '3 min',
  },
  {
    title: 'GETTING_STARTED_WITH_NEXTJS',
    excerpt: 'A guide to building modern web apps with Next.js and React.',
    date: '2024-01-10',
    slug: 'getting-started-with-nextjs',
    readTime: '8 min',
  },
  {
    title: 'MODERN_WEB_DEVELOPMENT',
    excerpt: 'Reflections on the current state of web dev and where it\'s heading.',
    date: '2024-01-05',
    slug: 'thoughts-on-modern-web-development',
    readTime: '5 min',
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in">
        <p className="font-terminal text-xl text-neon-purple mb-4">
          // BLOG.exe
        </p>
        <h1 className="font-pixel text-xl md:text-2xl mb-6">
          <span className="neon-pink">THOUGHTS & IDEAS</span>
        </h1>
        <p className="font-terminal text-lg text-muted mb-4 max-w-2xl">
          &gt; Random thoughts from my terminal_
        </p>
        <hr className="retro-hr mb-12" />
      </div>

      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block retro-card p-6 group opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <h2 className="font-pixel text-xs group-hover:neon-cyan transition-all">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 font-terminal text-sm text-muted">
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                {post.readTime && (
                  <>
                    <span className="text-neon-purple">|</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
            </div>
            <p className="font-terminal text-lg text-muted">
              &gt; {post.excerpt}
            </p>
          </Link>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="font-terminal text-lg text-muted">
            &gt; No posts yet. Check back soon_
          </p>
        </div>
      )}
    </div>
  )
}
