import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-100/30 to-orange-100/30 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-8 opacity-0 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in animation-delay-100">
              <span className="text-gray-900">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dante
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 opacity-0 animate-fade-in animation-delay-200">
              I build beautiful digital experiences. Welcome to my space where creativity meets code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-300">
              <Link 
                href="/portfolio" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gray-900/20"
              >
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-2xl font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12 opacity-0 animate-fade-in animation-delay-400">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Explore
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portfolio Card */}
            <Link
              href="/portfolio"
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 opacity-0 animate-fade-in animation-delay-400"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Portfolio
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore projects I've designed and built with care.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  View projects
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Blog Card */}
            <Link
              href="/blog"
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 opacity-0 animate-fade-in animation-delay-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Blog
                </h3>
                <p className="text-gray-600 mb-4">
                  Thoughts, tutorials, and ideas I've been exploring.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-purple-600 group-hover:gap-2 transition-all">
                  Read articles
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Books Card */}
            <Link
              href="/books"
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 opacity-0 animate-fade-in animation-delay-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-rose-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Books
                </h3>
                <p className="text-gray-600 mb-4">
                  A curated list of books that shaped my thinking.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-orange-600 group-hover:gap-2 transition-all">
                  Browse books
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 md:p-16 text-center opacity-0 animate-fade-in animation-delay-500">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's create something amazing together
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                Have a project in mind? I'm always open to discussing new opportunities and ideas.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10"
              >
                Start a Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
