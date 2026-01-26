// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ravindra Kumar | Full-Stack Developer',
  description: 'Full-stack developer with 2+ years of experience building web applications using MERN stack and Next.js. Creating secure, efficient solutions that solve real problems.',
  keywords: ['Full-Stack Developer', 'React.js', 'Next.js', 'Node.js', 'MERN Stack', 'TypeScript'],
  authors: [{ name: 'Ravindra Kumar' }],
  creator: 'Ravindra Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ravindra.dev',
    title: 'Ravindra Kumar | Full-Stack Developer',
    description: 'Building secure, scalable solutions with modern technologies',
    siteName: 'Ravindra Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravindra Kumar | Full-Stack Developer',
    description: 'Building secure, scalable solutions with modern technologies',
    creator: '@ravindra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}