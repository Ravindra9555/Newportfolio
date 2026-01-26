// src/components/sections/Hero.tsx
"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Server, Database, Cpu, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const techIcons = [
  { icon: Code, label: 'TypeScript' },
  { icon: Server, label: 'Node.js' },
  { icon: Database, label: 'MongoDB' },
  { icon: Cpu, label: 'Next.js' },
]

const contactInfo = [
  { icon: Mail, text: 'ravindra.iet.bu@gmail.com', href: 'mailto:ravindra.iet.bu@gmail.com' },
  { icon: Phone, text: '+91-9648316865', href: 'tel:+919648316865' },
  { icon: MapPin, text: 'Noida, India', href: '#' },
]

// Fixed animation with proper TypeScript types
const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const // Type assertion to fix the TypeScript error
  }
}

// Alternative: Use a custom animation variant
const floatVariant = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Full-Stack Developer • 2+ Years Experience
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="block">Hello, I&apos;m</span>
              <span className="text-gradient block mt-2">Ravindra Kumar</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Crafting secure, scalable solutions with MERN/Next.js expertise.
              Transforming complex problems into elegant digital experiences
              through clean code and innovative thinking.
            </p>

            {/* Contact Info */}
            <div className="mb-8 space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.text}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <info.icon className="h-4 w-4" />
                  <span className="text-sm">{info.text}</span>
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View Projects</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/10"
                >
                  <tech.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Elements - FIXED with proper typing */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute -top-8 left-8 p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 shadow-lg"
            >
              <div className="text-sm font-mono">console.log(&quot;Hello! 👋&quot;)</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute top-1/2 -right-8 p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 shadow-lg"
            >
              <div className="text-sm font-mono">{'<Code quality={100} />'}</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute bottom-8 left-1/4 p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 shadow-lg"
            >
              <div className="text-sm font-mono">npm run deploy 🚀</div>
            </motion.div>

            {/* Profile Image Container */}
            <div className="relative mx-auto max-w-[400px]">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden gradient-border p-2 bg-background/50">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 pointer-events-none" />

                  <Image
                    src="/ravindra.png"
                    alt="Ravindra Kumar - Full Stack Developer"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />

                  {/* Subtle Bottom Fade - reduced intensity so legs/height are visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-20" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30"
                >
                  <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg whitespace-nowrap">
                    Open to Work
                  </div>
                </motion.div>
              </div>

              {/* Stats Cards - Adjusted mt-16 to mt-10 for better spacing with taller image */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { value: '2+', label: 'Years Exp.', color: 'from-blue-500 to-cyan-500' },
                  { value: '10+', label: 'Projects', color: 'from-purple-500 to-pink-500' },
                  { value: '100%', label: 'Quality', color: 'from-emerald-500 to-green-500' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-white/5"
                  >
                    <div className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </motion.div>

      {/* CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}