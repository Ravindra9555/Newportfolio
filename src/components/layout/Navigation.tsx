// src/components/layout/Navigation.tsx
"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Phone, FileText } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/ravindra9555', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ravindra2-dev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ravindra.iet.bu@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+919648316865', label: 'Phone' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass-effect py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient">Ravindra</span>
              <span className="dark:text-white text-black">.dev</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href as any}
                className="group relative text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium flex items-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href as any}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium py-2 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-center space-x-4 pt-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}