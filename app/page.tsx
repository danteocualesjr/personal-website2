import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-200 to-purple-300 rounded-full blur-3xl opacity-20" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-black/5 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-600">Open to opportunities</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold text-gray-900 tracking-tight mb-6">
            Dante Cuales
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Developer & designer creating digital experiences that inspire and delight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-gray-900/20"
            >
              View My Work
            </Link>
            <Link 
              href="/about"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full font-medium hover:bg-white transition-all hover:scale-105 shadow-lg shadow-black/5"
            >
              About Me
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">Explore</h2>
            <p className="text-gray-500 text-lg">Discover what I've been working on</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Portfolio Card */}
            <Link 
              href="/portfolio"
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-10 overflow-hidden hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-xs font-medium mb-6">
                  Featured
                </span>
                <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Portfolio</h3>
                <p className="text-white/60 mb-8 max-w-sm">A collection of projects showcasing my skills in design and development.</p>
                <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                  View projects
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Blog Card */}
            <Link 
              href="/blog"
              className="group bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 hover:scale-[1.02] transition-all duration-500"
            >
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium mb-6">
                Writing
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Blog</h3>
              <p className="text-gray-500 mb-8 max-w-sm">Thoughts, tutorials, and insights from my journey in tech.</p>
              <span className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all">
                Read articles
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Books Card */}
            <Link 
              href="/books"
              className="group bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 sm:p-10 hover:scale-[1.02] transition-transform duration-500"
            >
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium mb-6">
                Library
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Books</h3>
              <p className="text-white/70 mb-8 max-w-sm">Curated recommendations that have shaped my perspective.</p>
              <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Browse books
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* About Card */}
            <Link 
              href="/about"
              className="group bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 hover:scale-[1.02] transition-all duration-500"
            >
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-6">
                Personal
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">About</h3>
              <p className="text-gray-500 mb-8 max-w-sm">Get to know me, my background, and what drives my passion.</p>
              <span className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            Let's build something<br />
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              amazing together
            </span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat, I'd love to hear from you.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-gray-900/20"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 Dante Cuales. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
