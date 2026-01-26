// src/components/layout/Footer.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUp,
  Heart,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Code,
  Coffee,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const contactInfo = [
  { icon: Mail, text: 'ravindra.iet.bu@gmail.com', href: 'mailto:ravindra.iet.bu@gmail.com' },
  { icon: Phone, text: '+91-9648316865', href: 'tel:+919648316865' },
  { icon: MapPin, text: 'Noida, India', href: '#' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/ravindra9555', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ravindra2-dev/', label: 'LinkedIn' },
  { icon: FileText, href: '/resume.pdf', label: 'Resume' },
]

const techStack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind']

export default function Footer() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border-2 border-dashed border-primary/30 rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-gradient">Ravindra Kumar</span>
                </h2>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 max-w-md">
              Crafting exceptional digital experiences with clean code and modern technologies.
              Let&apos;s build something amazing together!
            </p>

            <div className="flex items-center space-x-4">
              <Coffee className="h-4 w-4 text-amber-600" />
              <span className="text-sm">
                <span className="font-bold">Last deployed:</span> {new Date().toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    // Cast href to any to bypass strict route checking for anchors
                    href={link.href as any}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-3 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.text} className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <info.icon className="h-4 w-4 text-primary" />
                  </div>
                  {info.href === '#' ? (
                    <span className="text-muted-foreground text-sm">{info.text}</span>
                  ) : (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-center text-lg font-bold mb-6">Built With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${hoveredTech === tech
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-secondary text-muted-foreground'
                  }`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-secondary hover:bg-accent transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center space-x-2"
          >
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
              <span>by Ravindra Kumar</span>
            </span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
            aria-label="Back to top"
          >
            <div className="flex items-center space-x-2">
              <ArrowUp className="h-4 w-4 text-primary group-hover:translate-y-[-2px] transition-transform" />
              <span className="font-medium text-sm">Back to Top</span>
            </div>
          </motion.button>
        </div>

        {/* Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-4 rounded-2xl glass-effect border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Experience', value: '2+ Years' },
              { label: 'Technologies', value: '15+' },
              { label: 'Commitment', value: '100%' },
            ].map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Floating Particles */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-[1px] bg-primary/20"
              initial={{
                y: 0,
                x: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                y: -100,
                opacity: 0
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}