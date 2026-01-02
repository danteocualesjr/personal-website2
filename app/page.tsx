import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="opacity-0 animate-fade-in">
          <div className="ornament mb-8"></div>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight mb-6">
            Hello, I'm{' '}
            <span className="text-rust italic">Dante</span>
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            A curious creator who loves building thoughtful things. 
            Welcome to my corner of the internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="btn-vintage text-center">
              View My Work
            </Link>
            <Link href="/about" className="btn-vintage-outline text-center">
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="vintage-divider">
          <span className="font-mono text-xs uppercase tracking-widest">Explore</span>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/portfolio"
            className="vintage-card p-8 group opacity-0 animate-fade-in animation-delay-100"
          >
            <span className="number-marker">01</span>
            <h3 className="font-display text-xl mt-4 mb-2 group-hover:text-rust transition-colors">
              Portfolio
            </h3>
            <p className="text-muted text-sm">
              Projects and work I've crafted over the years.
            </p>
          </Link>

          <Link
            href="/blog"
            className="vintage-card p-8 group opacity-0 animate-fade-in animation-delay-200"
          >
            <span className="number-marker">02</span>
            <h3 className="font-display text-xl mt-4 mb-2 group-hover:text-rust transition-colors">
              Journal
            </h3>
            <p className="text-muted text-sm">
              Thoughts, essays, and ideas worth sharing.
            </p>
          </Link>

          <Link
            href="/books"
            className="vintage-card p-8 group opacity-0 animate-fade-in animation-delay-300"
          >
            <span className="number-marker">03</span>
            <h3 className="font-display text-xl mt-4 mb-2 group-hover:text-rust transition-colors">
              Reading
            </h3>
            <p className="text-muted text-sm">
              Books that have shaped my perspective.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <div className="vintage-border p-10 text-center opacity-0 animate-fade-in animation-delay-400">
          <p className="font-display text-2xl md:text-3xl mb-6 leading-relaxed">
            "The best time to start was yesterday. The second best time is{' '}
            <span className="text-rust italic">now</span>."
          </p>
          <div className="ornament mb-6"></div>
          <Link href="/contact" className="btn-vintage inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
