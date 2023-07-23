import './globals.css'
import type { Metadata } from 'next'
import {Navbar, Footer } from '@/components'


export const metadata: Metadata = {
  title: 'rentio',
  description: 'Discover cars near you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}</body>
        <Footer />
    </html>
  )
}
