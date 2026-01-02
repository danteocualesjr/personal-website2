import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-sm tracking-widest text-neutral-500 mb-4 uppercase">
              Creative Developer
            </p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-light leading-[0.9] tracking-tight text-neutral-900">
              Dante
              <br />
              <span className="font-normal">Cuales</span>
            </h1>
          </div>
          <div className="lg:text-right">
            <p className="text-lg text-neutral-600 max-w-md lg:ml-auto leading-relaxed mb-6">
              Building thoughtful digital experiences with clean code and creative vision.
            </p>
            <div className="flex gap-3 lg:justify-end">
              <Link 
                href="/portfolio" 
                className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
              >
                View Work
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 text-neutral-900 text-sm font-medium rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          
          {/* Portfolio - Large */}
          <Link 
            href="/portfolio"
            className="col-span-2 row-span-2 group relative bg-neutral-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            <div className="relative">
              <span className="text-xs text-neutral-500 uppercase tracking-widest">Featured</span>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-2">Portfolio</h2>
              <p className="text-neutral-400 text-sm mb-4">Selected projects & work</p>
              <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Status */}
          <div className="col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-neutral-500 uppercase tracking-widest">Status</span>
            </div>
            <div>
              <p className="text-2xl font-light text-neutral-900">Available</p>
              <p className="text-sm text-neutral-500">for projects</p>
            </div>
          </div>

          {/* Location */}
          <div className="col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-neutral-200">
            <span className="text-xs text-neutral-500 uppercase tracking-widest">Based in</span>
            <div>
              <p className="text-2xl font-light text-neutral-900">Philippines</p>
              <p className="text-sm text-neutral-500">Working globally</p>
            </div>
          </div>

          {/* Blog */}
          <Link 
            href="/blog"
            className="col-span-1 row-span-1 group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 flex flex-col justify-between border border-amber-100 hover:border-amber-200 transition-colors"
          >
            <span className="text-xs text-amber-600 uppercase tracking-widest">Writing</span>
            <div>
              <h3 className="text-xl font-light text-neutral-900 mb-1 group-hover:text-amber-700 transition-colors">Blog</h3>
              <span className="text-sm text-neutral-500 group-hover:text-amber-600 transition-colors">3 articles →</span>
            </div>
          </Link>

          {/* Books */}
          <Link 
            href="/books"
            className="col-span-1 row-span-1 group bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 flex flex-col justify-between border border-violet-100 hover:border-violet-200 transition-colors"
          >
            <span className="text-xs text-violet-600 uppercase tracking-widest">Reading</span>
            <div>
              <h3 className="text-xl font-light text-neutral-900 mb-1 group-hover:text-violet-700 transition-colors">Books</h3>
              <span className="text-sm text-neutral-500 group-hover:text-violet-600 transition-colors">View list →</span>
            </div>
          </Link>

          {/* About - Wide */}
          <Link 
            href="/about"
            className="col-span-2 group bg-white rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 hover:border-neutral-300 transition-colors"
          >
            <span className="text-xs text-neutral-500 uppercase tracking-widest">About</span>
            <div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-2">
                A curious mind passionate about design, technology, and creating meaningful digital experiences.
              </p>
              <span className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Learn more about me →
              </span>
            </div>
          </Link>

          {/* Contact CTA */}
          <Link 
            href="/contact"
            className="col-span-2 group bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 flex items-center justify-between hover:from-neutral-800 hover:to-neutral-700 transition-all"
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-1">Let's work together</h3>
              <p className="text-neutral-400 text-sm">Have a project in mind?</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

        </div>
      </section>

      {/* Simple Footer Quote */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-light text-neutral-300 leading-relaxed">
            "Good design is obvious.<br />
            <span className="text-neutral-900">Great design is transparent."</span>
          </p>
          <p className="text-sm text-neutral-400 mt-6">— Joe Sparano</p>
        </div>
      </section>
    </div>
  )
}
