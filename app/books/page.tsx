import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books - Dante O. Cuales, Jr.',
  description: 'Books I\'ve read and recommend',
}

interface Book {
  title: string
  author: string
  description: string
  rating?: number
  category: string
}

const books: Book[] = [
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    description: 'A classic guide to becoming a better programmer.',
    rating: 5,
    category: 'Technology',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits and break bad ones.',
    rating: 5,
    category: 'Self-Improvement',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    description: 'A brief history of humankind.',
    rating: 5,
    category: 'History',
  },
]

export default function Books() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Books
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        A curated list of books I've read and recommend. Reading is one of my favorite ways to learn and grow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div className="mb-4">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase">
                {book.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {book.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              by {book.author}
            </p>
            {book.rating && (
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < book.rating!
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-700'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {book.description}
            </p>
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            Book recommendations coming soon!
          </p>
        </div>
      )}
    </div>
  )
}

