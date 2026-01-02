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
  year: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of your first project. Explain what it does and what technologies you used to build it.',
    tags: ['React', 'TypeScript', 'Next.js'],
    link: '#',
    github: '#',
    featured: true,
    year: '2024',
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project. Highlight key features and your role in the project.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: '#',
    github: '#',
    year: '2023',
  },
  {
    title: 'Project Three',
    description: 'A brief description of your third project. Showcase the problem it solves and the impact.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    year: '2023',
  },
]

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="opacity-0 animate-fade-in">
        <span className="stamp mb-6">Portfolio</span>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-6 mb-4">
          Selected Work
        </h1>
        <p className="text-lg text-muted mb-12 max-w-xl">
          A collection of projects I've crafted. Each one represents a unique challenge and creative solution.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`vintage-card p-8 opacity-0 animate-fade-in ${
              project.featured ? 'border-l-4 border-l-rust' : ''
            }`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                {project.featured && (
                  <span className="stamp mb-3">Featured</span>
                )}
                <h2 className="font-display text-2xl">{project.title}</h2>
              </div>
              <span className="font-mono text-sm text-muted">{project.year}</span>
            </div>
            <p className="text-muted mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="vintage-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-rust hover:text-foreground transition-colors"
                >
                  View Project →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-olive hover:text-foreground transition-colors"
                >
                  Source Code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center opacity-0 animate-fade-in animation-delay-500">
        <div className="vintage-divider mb-8">
          <span className="font-mono text-xs uppercase tracking-widest">More</span>
        </div>
        <p className="text-muted mb-6">
          Want to see more of my work or collaborate on a project?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vintage-outline"
          >
            GitHub
          </a>
          <Link href="/contact" className="btn-vintage">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}
