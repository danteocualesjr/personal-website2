import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div className="opacity-0 animate-fade-in">
        <span className="stamp mb-6">Available for work</span>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-6 mb-8">
          Hi, I'm Dante.
        </h1>
      </div>

      <div className="space-y-12">
        <section className="opacity-0 animate-fade-in animation-delay-100">
          <p className="text-lg leading-relaxed text-muted drop-cap">
            I'm a developer and creator. I build digital products and write about technology. I've been coding for several years and love turning ideas into reality.
          </p>
          <p className="text-lg leading-relaxed text-muted mt-6">
            My goal is to create things that are useful, beautiful, and easy to use. Based in the Philippines, working globally.
          </p>
        </section>

        <div className="vintage-divider opacity-0 animate-fade-in animation-delay-200">
          <span className="font-mono text-xs uppercase tracking-widest">Explore</span>
        </div>

        <section className="opacity-0 animate-fade-in animation-delay-200">
          <p className="text-muted leading-relaxed mb-6">
            Some pages you might find interesting:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/about" 
              className="vintage-card p-6 group"
            >
              <h2 className="font-display text-lg mb-2 group-hover:text-rust transition-colors">
                About Me
              </h2>
              <p className="text-sm text-muted">
                Learn more about my background and interests
              </p>
            </Link>
            <Link 
              href="/portfolio" 
              className="vintage-card p-6 group"
            >
              <h2 className="font-display text-lg mb-2 group-hover:text-rust transition-colors">
                Portfolio
              </h2>
              <p className="text-sm text-muted">
                View my projects and work
              </p>
            </Link>
            <Link 
              href="/blog" 
              className="vintage-card p-6 group"
            >
              <h2 className="font-display text-lg mb-2 group-hover:text-rust transition-colors">
                Blog
              </h2>
              <p className="text-sm text-muted">
                Read my thoughts and articles
              </p>
            </Link>
            <Link 
              href="/books" 
              className="vintage-card p-6 group"
            >
              <h2 className="font-display text-lg mb-2 group-hover:text-rust transition-colors">
                Books I Recommend
              </h2>
              <p className="text-sm text-muted">
                Discover books that have influenced me
              </p>
            </Link>
          </div>
        </section>

        <div className="vintage-divider opacity-0 animate-fade-in animation-delay-300">
          <span className="font-mono text-xs uppercase tracking-widest">Connect</span>
        </div>

        <section className="opacity-0 animate-fade-in animation-delay-300">
          <p className="text-muted leading-relaxed mb-6">
            You can find me on{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="vintage-underline hover:text-rust transition-colors">
              GitHub
            </a>
            ,{' '}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="vintage-underline hover:text-rust transition-colors">
              LinkedIn
            </a>
            , or{' '}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="vintage-underline hover:text-rust transition-colors">
              Twitter
            </a>
            .
          </p>
        </section>

        <section className="opacity-0 animate-fade-in animation-delay-400">
          <div className="vintage-border p-8 text-center">
            <p className="font-display text-xl mb-6">
              Interested in working together?
            </p>
            <Link href="/contact" className="btn-vintage inline-block">
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
