import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>
      <article className="opacity-0 animate-fade-in-up">
        <h1 className="font-serif text-3xl md:text-5xl font-medium mb-4">
          Blog Post: {params.slug.replace(/-/g, ' ')}
        </h1>
        <div className="decorative-line mb-8"></div>
        <p className="text-muted leading-relaxed">
          This is a placeholder for the blog post content. In a real application,
          you would fetch and display the actual post content here.
        </p>
      </article>
    </div>
  )
}
