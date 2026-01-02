import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-stone-400 text-sm mb-6 tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800 leading-tight mb-8">
                Dante Cuales
              </h1>
              <p className="text-xl text-stone-500 leading-relaxed max-w-md">
                A developer crafting thoughtful digital experiences with simplicity and purpose.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link 
                href="/portfolio"
                className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-stone-700">View my work</span>
                <span className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-colors">
                  →
                </span>
              </Link>
              <Link 
                href="/contact"
                className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-stone-700">Get in touch</span>
                <span className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-colors">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-stone-200" />
      </div>

      {/* Links */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="group">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center group-hover:shadow-md transition-shadow overflow-hidden">
                <span className="text-6xl text-stone-200 group-hover:scale-110 transition-transform">01</span>
              </div>
              <h3 className="text-stone-800 font-medium mb-1">About</h3>
              <p className="text-stone-400 text-sm">Learn more about me</p>
            </Link>
            
            <Link href="/portfolio" className="group">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center group-hover:shadow-md transition-shadow overflow-hidden">
                <span className="text-6xl text-stone-200 group-hover:scale-110 transition-transform">02</span>
              </div>
              <h3 className="text-stone-800 font-medium mb-1">Portfolio</h3>
              <p className="text-stone-400 text-sm">Selected projects</p>
            </Link>
            
            <Link href="/blog" className="group">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center group-hover:shadow-md transition-shadow overflow-hidden">
                <span className="text-6xl text-stone-200 group-hover:scale-110 transition-transform">03</span>
              </div>
              <h3 className="text-stone-800 font-medium mb-1">Journal</h3>
              <p className="text-stone-400 text-sm">Thoughts & writing</p>
            </Link>
            
            <Link href="/books" className="group">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center group-hover:shadow-md transition-shadow overflow-hidden">
                <span className="text-6xl text-stone-200 group-hover:scale-110 transition-transform">04</span>
              </div>
              <h3 className="text-stone-800 font-medium mb-1">Reading</h3>
              <p className="text-stone-400 text-sm">Book recommendations</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl text-stone-600 font-light leading-relaxed mb-8">
            "Simplicity is the ultimate sophistication."
          </blockquote>
          <cite className="text-stone-400 text-sm not-italic">— Leonardo da Vinci</cite>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-stone-800 rounded-2xl p-12 sm:p-16">
            <div className="max-w-2xl">
              <p className="text-stone-400 text-sm mb-4 tracking-wide">Let's connect</p>
              <h2 className="text-3xl sm:text-4xl text-white font-light mb-6">
                Have a project in mind?
              </h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or ways to help bring your vision to life.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-800 rounded-lg font-medium hover:bg-stone-100 transition-colors"
              >
                Start a conversation
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-stone-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for work
            </span>
            <span>Based in Philippines</span>
            <span>Working globally</span>
          </div>
        </div>
      </section>
    </div>
  )
}
