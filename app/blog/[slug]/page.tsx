import { notFound } from 'next/navigation'
import Link from 'next/link'

// This is a placeholder for future blog post pages
// In a real application, you would fetch the post content based on the slug

export default function BlogPost({ params }: { params: { slug: string } }) {
  // For now, just show a placeholder
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Blog
      </Link>
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Blog Post: {params.slug}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          This is a placeholder for the blog post content. In a real application,
          you would fetch and display the actual post content here.
        </p>
      </article>
    </div>
  )
}

