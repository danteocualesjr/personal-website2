import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-terminal text-lg text-muted hover:text-neon-cyan transition-colors mb-8"
      >
        &lt;-- BACK TO BLOG
      </Link>
      <article className="opacity-0 animate-fade-in">
        <h1 className="font-pixel text-sm md:text-base neon-pink mb-6 leading-relaxed">
          {params.slug.replace(/-/g, '_').toUpperCase()}
        </h1>
        <hr className="retro-hr mb-8" />
        <div className="font-terminal text-lg text-muted leading-relaxed">
          <p>
            &gt; This is a placeholder for the blog post content.
          </p>
          <p className="mt-4">
            &gt; In a real application, content would be loaded here_
          </p>
        </div>
      </article>
    </div>
  )
}
