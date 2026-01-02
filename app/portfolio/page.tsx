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
    title: 'Project One',
    description: 'A brief description of your first project. Explain what it does and what technologies you used.',
    tags: ['React', 'TypeScript', 'Next.js'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project. Highlight key features and your role in the project.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of your third project. Showcase the problem it solves and the impact it had.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
]

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in-up">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Portfolio
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6">
          Selected Work
        </h1>
        <p className="text-xl text-muted mb-4 max-w-2xl">
          A collection of projects I've worked on. Each represents a unique challenge and creative solution.
        </p>
        <div className="decorative-line mb-16"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group p-8 bg-card border border-card-border rounded-xl hover-lift opacity-0 animate-fade-in-up ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            {project.featured && (
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
                Featured
              </span>
            )}
            <h2 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium bg-background border border-card-border rounded-full text-muted"
                >
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
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  View Code
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center opacity-0 animate-fade-in-up animation-delay-500">
        <p className="text-muted mb-6">
          Want to see more? Check out my GitHub or get in touch!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View GitHub
          </a>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
