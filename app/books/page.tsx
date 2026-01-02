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
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="opacity-0 animate-fade-in">
        <span className="stamp-olive mb-6">Library</span>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-6 mb-4">
          Recommended Reading
        </h1>
        <p className="text-lg text-muted mb-12 max-w-xl">
          Books have shaped much of how I think. Here are some that left a lasting impression.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <article
            key={index}
            className="vintage-card overflow-hidden group opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="relative w-full aspect-[2/3] bg-cream overflow-hidden">
              <Image
                src={book.cover}
                alt={`${book.title} cover`}
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
            <div className="p-6">
              <span className="vintage-tag mb-3">
                {book.category}
              </span>
              <h2 className="font-display text-lg mt-2 mb-1 group-hover:text-rust transition-colors">
                {book.title}
              </h2>
              <p className="font-mono text-xs text-muted mb-3">
                by {book.author}
              </p>
              {book.rating && (
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < book.rating! ? 'text-mustard' : 'text-card-border'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
              <p className="text-sm text-muted leading-relaxed">
                {book.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {books.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted italic">
            Book recommendations coming soon.
          </p>
        </div>
      )}
    </div>
  )
}
