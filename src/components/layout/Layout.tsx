// src/components/layout/Layout.tsx
import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}