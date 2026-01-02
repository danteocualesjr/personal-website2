import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me - Dante O. Cuales, Jr.',
  description: 'Learn more about me, my background, and interests',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
        About Me
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome! I'm a passionate individual who loves creating, learning, and sharing knowledge.
            This website is a space where I showcase my work, share my thoughts, and connect with others.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I believe in continuous learning and growth, always seeking new challenges and opportunities
            to expand my horizons.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Background
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            [Add your professional background, education, and career journey here]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Skills & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Problem Solving</li>
                <li>[Add your skills]</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                Interests
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Reading</li>
                <li>Technology</li>
                <li>Creative Writing</li>
                <li>[Add your interests]</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm always open to connecting with like-minded individuals, discussing new ideas,
            or collaborating on interesting projects.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </a>
        </section>
      </div>
    </div>
  )
}

