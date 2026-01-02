import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 py-32 md:py-40">
        <h1 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-6">
          Hi, I'm Dante.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-12">
          I design and build digital products. Currently based in the Philippines, working with clients worldwide.
        </p>
        <div className="flex gap-6">
          <Link href="/portfolio" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">
            See my work
          </Link>
          <Link href="/contact" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">
            Get in touch
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Links */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <nav className="space-y-6">
          <Link href="/about" className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors">
            <span className="text-gray-900">About</span>
            <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">→</span>
          </Link>
          <Link href="/portfolio" className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors">
            <span className="text-gray-900">Portfolio</span>
            <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">→</span>
          </Link>
          <Link href="/blog" className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors">
            <span className="text-gray-900">Blog</span>
            <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">→</span>
          </Link>
          <Link href="/books" className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors">
            <span className="text-gray-900">Books</span>
            <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">→</span>
          </Link>
          <Link href="/contact" className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors">
            <span className="text-gray-900">Contact</span>
            <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">→</span>
          </Link>
        </nav>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400">
          © 2024 Dante Cuales
        </p>
      </footer>
    </div>
  )
}
