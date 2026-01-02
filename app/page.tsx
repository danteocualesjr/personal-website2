import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero - Full Impact */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 border-b-2 border-black">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 border-2 border-black text-xs font-bold tracking-[0.3em] uppercase">
              Developer & Creator
            </span>
          </div>
          <h1 className="text-[15vw] md:text-[12vw] font-black leading-[0.85] tracking-tighter uppercase">
            Dante
            <br />
            Cuales
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-2xl max-w-lg leading-relaxed font-light">
              I craft digital experiences that are bold, functional, and unforgettable.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/portfolio" 
                className="group flex items-center gap-4 px-8 py-4 bg-black text-white font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
              >
                See Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="border-b-2 border-black">
        <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          <Link href="/portfolio" className="group p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300">
            <div className="flex justify-between items-start mb-16">
              <span className="text-7xl md:text-8xl font-black">01</span>
              <svg className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Portfolio</h2>
            <p className="font-light opacity-70">Projects I've built and designed</p>
          </Link>
          
          <Link href="/blog" className="group p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300">
            <div className="flex justify-between items-start mb-16">
              <span className="text-7xl md:text-8xl font-black">02</span>
              <svg className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Journal</h2>
            <p className="font-light opacity-70">Thoughts and explorations</p>
          </Link>
          
          <Link href="/books" className="group p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300">
            <div className="flex justify-between items-start mb-16">
              <span className="text-7xl md:text-8xl font-black">03</span>
              <svg className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Reading</h2>
            <p className="font-light opacity-70">Books that shaped me</p>
          </Link>
        </div>
      </section>

      {/* About Strip */}
      <section className="border-b-2 border-black">
        <Link href="/about" className="group block">
          <div className="grid md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 block mb-4">About</span>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  I believe in the power of simplicity. Good design doesn't shout—it speaks clearly.
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-gray-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 flex items-center justify-between">
              <span className="text-xl font-bold uppercase tracking-wider">Learn More</span>
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 block mb-6">Contact</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
                Let's Make
                <br />
                Something
                <br />
                <span className="text-red-600">Great.</span>
              </h2>
            </div>
            <Link 
              href="/contact"
              className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-red-600 hover:text-white transition-colors"
            >
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <div className="border-t-2 border-white bg-black text-white py-4 overflow-hidden">
        <div className="flex items-center justify-center gap-8">
          <span className="text-sm font-bold tracking-[0.3em] uppercase">Available for Projects</span>
          <span className="text-red-600">✦</span>
          <span className="text-sm font-bold tracking-[0.3em] uppercase">Based in Philippines</span>
          <span className="text-red-600">✦</span>
          <span className="text-sm font-bold tracking-[0.3em] uppercase">Working Globally</span>
        </div>
      </div>
    </div>
  )
}
