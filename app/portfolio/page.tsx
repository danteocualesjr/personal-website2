import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Your Name',
  description: 'Explore my projects and creative work',
}

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of your first project. Explain what it does and what technologies you used.',
    tags: ['React', 'TypeScript', 'Next.js'],
    link: '#',
    github: '#',
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Portfolio
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        A collection of projects I've worked on. Each project represents a learning journey and a creative solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Want to see more? Check out my GitHub or get in touch!
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
          >
            View on GitHub
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

