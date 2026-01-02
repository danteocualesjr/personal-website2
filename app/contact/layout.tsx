import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Dante O. Cuales, Jr.',
  description: 'Get in touch with me',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

