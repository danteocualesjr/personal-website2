'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Books', path: '/books' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-card-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="font-display text-xl font-medium tracking-tight hover:text-rust transition-colors"
          >
            Dante O. Cuales, Jr.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  pathname === item.path
                    ? 'text-rust'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-sm">
              {isOpen ? '✕ Close' : '☰ Menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-1 border-t border-card-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-sm uppercase tracking-widest px-4 py-3 transition-colors ${
                  pathname === item.path
                    ? 'text-rust bg-cream'
                    : 'text-muted hover:text-foreground hover:bg-cream'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
