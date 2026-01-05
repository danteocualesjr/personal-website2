import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white -mt-24 pt-24 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* Hero */}
        <div className="mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8 animate-[fadeIn_0.6s_ease_forwards]">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for work
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 opacity-0 animate-[fadeIn_0.6s_ease_0.1s_forwards]">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Dante Cuales.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease_0.2s_forwards]">
            Developer & creator building digital products. Turning ideas into reality, one line of code at a time.
          </p>
          
          <p className="text-zinc-500 mt-6 opacity-0 animate-[fadeIn_0.6s_ease_0.3s_forwards]">
            Based in the Philippines · Working globally
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 opacity-0 animate-[fadeIn_0.6s_ease_0.4s_forwards]">
          <Link 
            href="/about" 
            className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative block text-zinc-500 text-sm font-mono mb-2">01</span>
            <h2 className="relative text-2xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
              About
            </h2>
            <p className="relative text-zinc-500">
              My story, background & what drives me
            </p>
            <span className="absolute top-8 right-8 text-zinc-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>

          <Link 
            href="/portfolio" 
            className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative block text-zinc-500 text-sm font-mono mb-2">02</span>
            <h2 className="relative text-2xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
              Portfolio
            </h2>
            <p className="relative text-zinc-500">
              Projects & work I'm proud of
            </p>
            <span className="absolute top-8 right-8 text-zinc-700 group-hover:text-violet-400 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>

          <Link 
            href="/blog" 
            className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative block text-zinc-500 text-sm font-mono mb-2">03</span>
            <h2 className="relative text-2xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
              Blog
            </h2>
            <p className="relative text-zinc-500">
              Thoughts, ideas & learnings
            </p>
            <span className="absolute top-8 right-8 text-zinc-700 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>

          <Link 
            href="/books" 
            className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative block text-zinc-500 text-sm font-mono mb-2">04</span>
            <h2 className="relative text-2xl font-semibold mb-2 group-hover:text-rose-400 transition-colors">
              Books
            </h2>
            <p className="relative text-zinc-500">
              Reading recommendations
            </p>
            <span className="absolute top-8 right-8 text-zinc-700 group-hover:text-rose-400 group-hover:translate-x-1 transition-all">
              →
            </span>
          </Link>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-12 border-t border-zinc-800 opacity-0 animate-[fadeIn_0.6s_ease_0.5s_forwards]">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
          
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-emerald-400 transition-colors"
          >
            Let's work together
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
