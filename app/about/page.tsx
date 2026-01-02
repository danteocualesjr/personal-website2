import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me - Dante O. Cuales, Jr.',
  description: 'Learn more about me, my background, and interests',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in">
        <p className="font-terminal text-xl text-neon-purple mb-4">
          // ABOUT.exe
        </p>
        <h1 className="font-pixel text-xl md:text-2xl mb-6">
          <span className="neon-pink">WHO AM I?</span>
        </h1>
        <hr className="retro-hr mb-12" />
      </div>

      <div className="space-y-12">
        <section className="opacity-0 animate-fade-in animation-delay-100">
          <div className="font-terminal text-xl leading-relaxed text-muted space-y-4">
            <p>
              &gt; Welcome! I'm a passionate creator who loves building things.
            </p>
            <p>
              &gt; This terminal is where I share my work and thoughts.
            </p>
            <p>
              &gt; Always learning. Always growing. Always coding_
            </p>
          </div>
        </section>

        <section className="opacity-0 animate-fade-in animation-delay-200">
          <h2 className="font-terminal text-xl text-neon-cyan mb-6">
            [BACKGROUND]
          </h2>
          <div className="retro-card p-6">
            <p className="font-terminal text-lg text-muted leading-relaxed">
              &gt; [Add your professional background here]<br />
              &gt; Education, career journey, what drives you..._
            </p>
          </div>
        </section>

        <section className="opacity-0 animate-fade-in animation-delay-300">
          <h2 className="font-terminal text-xl text-neon-cyan mb-6">
            [SKILLS]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="retro-card p-6">
              <h3 className="font-pixel text-xs neon-pink mb-4">TECHNICAL</h3>
              <ul className="font-terminal text-lg text-muted space-y-2">
                <li>&gt; Web Development</li>
                <li>&gt; UI/UX Design</li>
                <li>&gt; Problem Solving</li>
                <li>&gt; [Your skills]</li>
              </ul>
            </div>
            <div className="retro-card p-6">
              <h3 className="font-pixel text-xs neon-cyan mb-4">INTERESTS</h3>
              <ul className="font-terminal text-lg text-muted space-y-2">
                <li>&gt; Reading</li>
                <li>&gt; Technology</li>
                <li>&gt; Creative Writing</li>
                <li>&gt; [Your interests]</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="opacity-0 animate-fade-in animation-delay-400">
          <div className="retro-card p-8 text-center">
            <h2 className="font-pixel text-xs md:text-sm mb-6">
              <span className="neon-purple">LET'S WORK TOGETHER</span>
            </h2>
            <p className="font-terminal text-lg text-muted mb-8">
              &gt; Open for collaborations and new opportunities_
            </p>
            <Link href="/contact" className="btn-retro inline-block">
              CONTACT ME
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
