import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-36">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-sm uppercase tracking-widest text-muted mb-6">
            Welcome to my corner of the internet
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6">
            Hello, I'm{' '}
            <span className="gradient-text">
              Dante
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed mb-10 max-w-2xl">
            A curious mind passionate about building meaningful things. 
            Here you'll find my work, thoughts, and the books that shape my thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-primary text-center">
              View My Work
            </Link>
            <Link href="/about" className="btn-secondary text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="decorative-line"></div>
      </div>

      {/* Quick Links Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <h2 className="font-serif text-2xl md:text-3xl mb-12 opacity-0 animate-fade-in-up animation-delay-100">
          Explore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/portfolio"
            className="group p-8 bg-card border border-card-border rounded-xl hover-lift opacity-0 animate-fade-in-up animation-delay-200"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
              Portfolio
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Explore projects and creative work I've built over the years.
            </p>
          </Link>

          <Link
            href="/blog"
            className="group p-8 bg-card border border-card-border rounded-xl hover-lift opacity-0 animate-fade-in-up animation-delay-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
              Blog
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Thoughts, tutorials, and insights on topics I care about.
            </p>
          </Link>

          <Link
            href="/books"
            className="group p-8 bg-card border border-card-border rounded-xl hover-lift opacity-0 animate-fade-in-up animation-delay-400"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
              Books
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              A curated collection of books that have influenced my thinking.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="opacity-0 animate-fade-in-up animation-delay-500">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Let's Connect
          </h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
