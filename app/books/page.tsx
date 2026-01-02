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
    category: 'TECH',
    cover: 'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Build good habits and break bad ones.',
    rating: 5,
    category: 'SELF-DEV',
    cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    description: 'A brief history of humankind.',
    rating: 5,
    category: 'HISTORY',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
  },
]

export default function Books() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="opacity-0 animate-fade-in">
        <p className="font-terminal text-xl text-neon-purple mb-4">
          // LIBRARY.exe
        </p>
        <h1 className="font-pixel text-xl md:text-2xl mb-6">
          <span className="neon-cyan">RECOMMENDED READS</span>
        </h1>
        <p className="font-terminal text-lg text-muted mb-4 max-w-2xl">
          &gt; Books that shaped my thinking_
        </p>
        <hr className="retro-hr mb-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="retro-card overflow-hidden group opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="relative w-full aspect-[2/3] bg-card overflow-hidden">
              <Image
                src={book.cover}
                alt={`${book.title} cover`}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <span className="inline-block font-pixel text-[10px] text-neon-yellow mb-3">
                [{book.category}]
              </span>
              <h2 className="font-pixel text-xs mb-2 group-hover:neon-pink transition-all leading-relaxed">
                {book.title.toUpperCase()}
              </h2>
              <p className="font-terminal text-sm text-muted mb-3">
                by {book.author}
              </p>
              {book.rating && (
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < book.rating! ? 'text-neon-pink' : 'text-card-border'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
              <p className="font-terminal text-sm text-muted">
                &gt; {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {books.length === 0 && (
        <div className="text-center py-16">
          <p className="font-terminal text-lg text-muted">
            &gt; Loading book data..._
          </p>
        </div>
      )}
    </div>
  )
}
