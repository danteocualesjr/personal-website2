import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dante O. Cuales, Jr. - Personal Website',
  description: 'Personal website showcasing my work, thoughts, and interests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-background text-foreground crt-flicker">
        <Navigation />
        <main className="flex-grow pt-24 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
