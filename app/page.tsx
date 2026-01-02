import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-xl mx-auto px-6 py-16 md:py-24">
        {/* Introduction */}
        <section className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Dante Cuales
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a developer and creator. I build digital products and write about technology. I've been coding for several years and love turning ideas into reality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My goal is to create things that are useful, beautiful, and easy to use. I'm based in the Philippines, working with clients globally. When I'm not coding, you'll find me reading or exploring new ideas.
          </p>
        </section>

        <hr className="border-gray-100 mb-12" />

        {/* Featured Links */}
        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed mb-4">
            Some pages you might find interesting:
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/books" className="text-blue-600 hover:text-blue-800 hover:underline">
                Books I Recommend
              </Link>
            </li>
          </ul>
        </section>

        <hr className="border-gray-100 mb-12" />

        {/* Connect */}
        <section>
          <p className="text-gray-600 leading-relaxed">
            You can find me on{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
              GitHub
            </a>
            ,{' '}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
              LinkedIn
            </a>
            , or{' '}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
              Twitter
            </a>
            . Feel free to{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
              reach out
            </Link>
            {' '}if you'd like to work together.
          </p>
        </section>
      </main>
    </div>
  )
}
