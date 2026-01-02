import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me - Dante O. Cuales, Jr.',
  description: 'Learn more about me, my background, and interests',
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div className="opacity-0 animate-fade-in">
        <span className="stamp mb-6">About</span>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-6 mb-8">
          A Little About Me
        </h1>
      </div>

      <div className="space-y-12">
        <section className="opacity-0 animate-fade-in animation-delay-100">
          <p className="text-lg leading-relaxed text-muted drop-cap">
            Welcome! I'm a passionate individual who loves creating, learning, and sharing knowledge.
            This website is a space where I showcase my work, share my thoughts, and connect with others
            who share similar interests and curiosities.
          </p>
          <p className="text-lg leading-relaxed text-muted mt-6">
            I believe in continuous learning and growth, always seeking new challenges and opportunities
            to expand my horizons and create meaningful work.
          </p>
        </section>

        <div className="vintage-divider opacity-0 animate-fade-in animation-delay-200">
          <span className="font-mono text-xs uppercase tracking-widest">Background</span>
        </div>

        <section className="opacity-0 animate-fade-in animation-delay-200">
          <p className="text-muted leading-relaxed">
            [Add your professional background, education, and career journey here. Share your story, 
            what drives you, and how you got to where you are today.]
          </p>
        </section>

        <div className="vintage-divider opacity-0 animate-fade-in animation-delay-300">
          <span className="font-mono text-xs uppercase tracking-widest">Skills & Interests</span>
        </div>

        <section className="opacity-0 animate-fade-in animation-delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="vintage-card p-6">
              <h3 className="font-display text-lg mb-4 text-rust">Technical Skills</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-rust">✦</span> Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rust">✦</span> UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rust">✦</span> Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rust">✦</span> [Your skills]
                </li>
              </ul>
            </div>
            <div className="vintage-card p-6">
              <h3 className="font-display text-lg mb-4 text-olive">Interests</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-olive">✦</span> Reading
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-olive">✦</span> Technology
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-olive">✦</span> Creative Writing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-olive">✦</span> [Your interests]
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="opacity-0 animate-fade-in animation-delay-400">
          <div className="vintage-border p-8 text-center">
            <p className="font-display text-xl mb-6">
              Interested in working together?
            </p>
            <Link href="/contact" className="btn-vintage inline-block">
              Let's Talk
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
