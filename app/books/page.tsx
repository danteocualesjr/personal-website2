import type { Metadata } from 'next'
import Image from 'next/image'

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
  cover: string
}

const books: Book[] = [
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    description: 'A classic guide to becoming a better programmer.',
    rating: 5,
    category: 'Technology',
    cover: 'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits and break bad ones.',
    rating: 5,
    category: 'Self-Improvement',
    cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    description: 'A brief history of humankind.',
    rating: 5,
    category: 'History',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
  },
]

export default function Books() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in-up">
        <p className="text-sm uppercase tracking-widest text-muted mb-4">
          Library
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6">
          Books I Recommend
        </h1>
        <p className="text-xl text-muted mb-4 max-w-2xl">
          Reading shapes how I think. Here are some books that have influenced me.
        </p>
        <div className="decorative-line mb-16"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="group bg-card border border-card-border rounded-xl overflow-hidden hover-lift opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="relative w-full aspect-[2/3] bg-background overflow-hidden">
              <Image
                src={book.cover}
                alt={`${book.title} cover`}
                fill
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded mb-3">
                {book.category}
              </span>
              <h2 className="text-lg font-medium mb-1 group-hover:text-accent transition-colors">
                {book.title}
              </h2>
              <p className="text-sm text-muted mb-3">
                by {book.author}
              </p>
              {book.rating && (
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < book.rating!
                          ? 'text-accent'
                          : 'text-card-border'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              <p className="text-sm text-muted leading-relaxed">
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted">
            Book recommendations coming soon!
          </p>
        </div>
      )}
    </div>
  )
}
