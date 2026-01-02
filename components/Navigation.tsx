'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'WORK', path: '/portfolio' },
  { name: 'BLOG', path: '/blog' },
  { name: 'BOOKS', path: '/books' },
  { name: 'CONTACT', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="font-pixel text-xs neon-cyan glitch tracking-wider"
          >
            DANTE_
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-terminal text-xl tracking-wider transition-all duration-200 ${
                  pathname === item.path
                    ? 'neon-pink'
                    : 'text-muted hover:text-neon-cyan'
                }`}
              >
                {pathname === item.path ? `> ${item.name}` : item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neon-cyan p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="font-terminal text-2xl">
              {isOpen ? '[X]' : '[=]'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 border-t border-card-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-terminal text-2xl px-4 py-2 transition-colors ${
                  pathname === item.path
                    ? 'neon-pink'
                    : 'text-muted hover:text-neon-cyan'
                }`}
              >
                {pathname === item.path ? `> ${item.name}` : `  ${item.name}`}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
