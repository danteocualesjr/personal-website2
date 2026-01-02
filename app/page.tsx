import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffef9]">
      <main className="max-w-xl mx-auto px-6 py-16 md:py-24">
        {/* Introduction */}
        <section className="mb-12">
          <div className="inline-block px-3 py-1 bg-green-300 border-2 border-black text-sm font-bold mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Available for work
          </div>
          <h1 className="text-3xl font-bold text-black mb-4">
            Hi, I'm Dante.
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a developer and creator. I build digital products and write about technology. I've been coding for several years and love turning ideas into reality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My goal is to create things that are useful, beautiful, and easy to use. Based in the Philippines, working globally.
          </p>
        </section>

        <hr className="border-2 border-black mb-12" />

        {/* Featured Links */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Some pages you might find interesting:
          </p>
          <div className="space-y-3">
            <Link 
              href="/about" 
              className="block p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="font-bold">About Me</span>
              <span className="text-gray-500 ml-2">→</span>
            </Link>
            <Link 
              href="/portfolio" 
              className="block p-4 bg-blue-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="font-bold">Portfolio</span>
              <span className="text-gray-500 ml-2">→</span>
            </Link>
            <Link 
              href="/blog" 
              className="block p-4 bg-green-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="font-bold">Blog</span>
              <span className="text-gray-500 ml-2">→</span>
            </Link>
            <Link 
              href="/books" 
              className="block p-4 bg-orange-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="font-bold">Books I Recommend</span>
              <span className="text-gray-500 ml-2">→</span>
            </Link>
          </div>
        </section>

        <hr className="border-2 border-black mb-12" />

        {/* Connect */}
        <section>
          <p className="text-gray-700 leading-relaxed mb-6">
            You can find me on{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-2 hover:bg-yellow-300">
              GitHub
            </a>
            ,{' '}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-2 hover:bg-yellow-300">
              LinkedIn
            </a>
            , or{' '}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-2 hover:bg-yellow-300">
              Twitter
            </a>
            .
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Get in touch →
          </Link>
        </section>
      </main>
    </div>
  )
}
