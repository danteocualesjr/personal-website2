import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me - Dante O. Cuales, Jr.',
  description: 'Learn more about me, my background, and interests',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in-up">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          About
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6">
          A little bit about me
        </h1>
        <div className="decorative-line mb-12"></div>
      </div>

      <div className="space-y-16">
        <section className="opacity-0 animate-fade-in-up animation-delay-100">
          <p className="text-xl text-muted leading-relaxed mb-6">
            Welcome! I'm a passionate individual who loves creating, learning, and sharing knowledge.
            This website is a space where I showcase my work, share my thoughts, and connect with others.
          </p>
          <p className="text-xl text-muted leading-relaxed">
            I believe in continuous learning and growth, always seeking new challenges and opportunities
            to expand my horizons.
          </p>
        </section>

        <section className="opacity-0 animate-fade-in-up animation-delay-200">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Background
          </h2>
          <p className="text-muted leading-relaxed">
            [Add your professional background, education, and career journey here. Share your story, 
            what drives you, and how you got to where you are today.]
          </p>
        </section>

        <section className="opacity-0 animate-fade-in-up animation-delay-300">
          <h2 className="font-serif text-2xl md:text-3xl mb-8">
            Skills & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-card border border-card-border rounded-xl">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Technical Skills
              </h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  [Add your skills]
                </li>
              </ul>
            </div>
            <div className="p-6 bg-card border border-card-border rounded-xl">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Interests
              </h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  Reading
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  Technology
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  Creative Writing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted"></span>
                  [Add your interests]
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="opacity-0 animate-fade-in-up animation-delay-400 pt-8">
          <div className="p-8 bg-card border border-card-border rounded-xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              I'm always open to connecting with like-minded individuals, discussing new ideas,
              or collaborating on interesting projects.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
