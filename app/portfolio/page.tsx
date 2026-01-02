import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Dante O. Cuales, Jr.',
  description: 'Explore my projects and creative work',
}

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'PROJECT_ONE',
    description: 'A brief description of your first project. Explain what it does and what technologies you used.',
    tags: ['React', 'TypeScript', 'Next.js'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'PROJECT_TWO',
    description: 'A brief description of your second project. Highlight key features and your role.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'PROJECT_THREE',
    description: 'A brief description of your third project. Showcase the problem it solves.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
]

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in">
        <p className="font-terminal text-xl text-neon-purple mb-4">
          // PORTFOLIO.exe
        </p>
        <h1 className="font-pixel text-xl md:text-2xl mb-6">
          <span className="neon-cyan">MY WORK</span>
        </h1>
        <p className="font-terminal text-lg text-muted mb-4 max-w-2xl">
          &gt; Projects I've built and shipped_
        </p>
        <hr className="retro-hr mb-12" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`retro-card p-6 opacity-0 animate-fade-in ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            {project.featured && (
              <span className="inline-block font-pixel text-[10px] text-neon-yellow mb-3">
                [FEATURED]
              </span>
            )}
            <h2 className="font-pixel text-xs md:text-sm neon-pink mb-4">
              {project.title}
            </h2>
            <p className="font-terminal text-lg text-muted mb-6 leading-relaxed">
              &gt; {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 font-terminal text-sm border border-card-border text-neon-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-6 font-terminal text-lg">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:neon-cyan transition-all"
                >
                  [LIVE DEMO]
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-pink hover:neon-pink transition-all"
                >
                  [SOURCE]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center opacity-0 animate-fade-in animation-delay-500">
        <p className="font-terminal text-lg text-muted mb-8">
          &gt; Want to see more? Check out my GitHub_
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-retro btn-retro-pink"
          >
            GITHUB
          </a>
          <Link href="/contact" className="btn-retro">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}
