import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
      {/* Hero Section - Asymmetric Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-8 opacity-0 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <span className="stamp">Available for work</span>
            <span className="h-px flex-1 bg-card-border"></span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight mb-12">
            Dante <br />
            <span className="italic text-rust ml-4 md:ml-12">Cuales Jr.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-display italic">
              "Building digital products with a focus on utility, beauty, and human experience."
            </p>
            <p className="text-muted leading-relaxed pt-2">
              Based in the Philippines, working globally. I combine several years of technical expertise with a passion for creative problem-solving to turn complex ideas into elegant reality.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end opacity-0 animate-fade-in animation-delay-200">
          <div className="vintage-border p-6 w-full max-w-[280px] bg-cream/50 rotate-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4 text-muted">Current Focus</p>
            <p className="text-sm font-medium mb-2 leading-tight">Crafting intuitive web experiences & writing about technology.</p>
            <span className="text-rust text-xl">✦</span>
          </div>
        </div>
      </section>

      {/* Main Navigation - Index Style */}
      <section className="mb-32">
        <div className="vintage-divider mb-12 opacity-0 animate-fade-in animation-delay-300">
          <span className="font-mono text-xs uppercase tracking-widest">Directory</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-card-border border border-card-border opacity-0 animate-fade-in animation-delay-300">
          <Link href="/about" className="group bg-background p-8 hover:bg-cream transition-colors">
            <span className="number-marker group-hover:text-rust transition-colors block mb-4">01</span>
            <h2 className="font-display text-2xl mb-2">About</h2>
            <p className="text-sm text-muted leading-relaxed">The story behind the work and the philosophy that drives it.</p>
          </Link>
          
          <Link href="/portfolio" className="group bg-background p-8 hover:bg-cream transition-colors">
            <span className="number-marker group-hover:text-rust transition-colors block mb-4">02</span>
            <h2 className="font-display text-2xl mb-2">Portfolio</h2>
            <p className="text-sm text-muted leading-relaxed">A curated collection of digital products and creative projects.</p>
          </Link>
          
          <Link href="/blog" className="group bg-background p-8 hover:bg-cream transition-colors">
            <span className="number-marker group-hover:text-rust transition-colors block mb-4">03</span>
            <h2 className="font-display text-2xl mb-2">Blog</h2>
            <p className="text-sm text-muted leading-relaxed">Thoughts on engineering, design, and the digital landscape.</p>
          </Link>
          
          <Link href="/books" className="group bg-background p-8 hover:bg-cream transition-colors">
            <span className="number-marker group-hover:text-rust transition-colors block mb-4">04</span>
            <h2 className="font-display text-2xl mb-2">Library</h2>
            <p className="text-sm text-muted leading-relaxed">Recommended reading for the curious and the creative.</p>
          </Link>
        </div>
      </section>

      {/* Connect & Footer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 opacity-0 animate-fade-in animation-delay-400">
          <div className="ornament justify-start mb-6"></div>
          <h3 className="font-display text-3xl md:text-4xl mb-6">Let's create something together.</h3>
          <p className="text-muted max-w-md mb-8">
            Available for select freelance opportunities and collaborative projects.
          </p>
          <div className="flex flex-wrap gap-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="vintage-underline font-mono text-xs uppercase tracking-widest hover:text-rust">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="vintage-underline font-mono text-xs uppercase tracking-widest hover:text-rust">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="vintage-underline font-mono text-xs uppercase tracking-widest hover:text-rust">Twitter</a>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-start lg:justify-end opacity-0 animate-fade-in animation-delay-500">
          <Link href="/contact" className="btn-vintage group relative overflow-hidden px-12 py-6">
            <span className="relative z-10">Get in touch — Let's talk</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
