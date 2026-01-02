import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-rust transition-colors mb-8"
      >
        ← Back to Journal
      </Link>
      <article className="opacity-0 animate-fade-in">
        <span className="stamp mb-6">Article</span>
        <h1 className="font-display text-3xl md:text-4xl font-medium mt-6 mb-4 capitalize">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <div className="vintage-divider my-8">
          <span className="font-mono text-xs">✦</span>
        </div>
        <div className="text-muted leading-relaxed">
          <p>
            This is a placeholder for the blog post content. In a real application,
            you would fetch and display the actual post content here.
          </p>
        </div>
      </article>
    </div>
  )
}
