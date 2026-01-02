import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen stars">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="opacity-0 animate-fade-in">
          <p className="font-terminal text-2xl text-neon-purple mb-4">
            // WELCOME TO MY TERMINAL
          </p>
          <h1 className="font-pixel text-2xl md:text-4xl leading-relaxed mb-8">
            <span className="text-foreground">HELLO, I'M</span>
            <br />
            <span className="neon-pink">DANTE</span>
          </h1>
          <div className="font-terminal text-xl md:text-2xl text-muted leading-relaxed mb-10 max-w-2xl">
            <p className="typing-cursor">
              &gt; A developer who loves building cool things.
            </p>
            <p className="mt-2">
              &gt; Welcome to my corner of the internet_
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-retro text-center">
              VIEW WORK
            </Link>
            <Link href="/about" className="btn-retro btn-retro-pink text-center">
              ABOUT ME
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="retro-hr" />
      </div>

      {/* Quick Links Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-terminal text-2xl text-neon-purple mb-8 opacity-0 animate-fade-in animation-delay-100">
          [EXPLORE]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/portfolio"
            className="retro-card p-6 group opacity-0 animate-fade-in animation-delay-200"
          >
            <div className="font-terminal text-4xl text-neon-cyan mb-4">01</div>
            <h3 className="font-pixel text-xs mb-3 group-hover:neon-cyan transition-all">
              PORTFOLIO
            </h3>
            <p className="font-terminal text-lg text-muted">
              &gt; Check out projects I've built and shipped.
            </p>
          </Link>

          <Link
            href="/blog"
            className="retro-card p-6 group opacity-0 animate-fade-in animation-delay-300"
          >
            <div className="font-terminal text-4xl text-neon-pink mb-4">02</div>
            <h3 className="font-pixel text-xs mb-3 group-hover:neon-pink transition-all">
              BLOG
            </h3>
            <p className="font-terminal text-lg text-muted">
              &gt; Thoughts, tutorials, and random ideas.
            </p>
          </Link>

          <Link
            href="/books"
            className="retro-card p-6 group opacity-0 animate-fade-in animation-delay-400"
          >
            <div className="font-terminal text-4xl text-neon-purple mb-4">03</div>
            <h3 className="font-pixel text-xs mb-3 group-hover:neon-purple transition-all">
              BOOKS
            </h3>
            <p className="font-terminal text-lg text-muted">
              &gt; Books that shaped my thinking.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="retro-card p-10 opacity-0 animate-fade-in animation-delay-500">
          <h2 className="font-pixel text-sm md:text-base mb-6">
            <span className="neon-cyan">READY TO</span>{' '}
            <span className="neon-pink">CONNECT?</span>
          </h2>
          <p className="font-terminal text-xl text-muted mb-8">
            &gt; Let's build something awesome together_
          </p>
          <Link href="/contact" className="btn-retro inline-block">
            SEND MESSAGE
          </Link>
        </div>
      </section>
    </div>
  )
}
