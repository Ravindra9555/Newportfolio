// src/components/sections/About.tsx
"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Target, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const skills = [
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'React/Next.js', level: 90 },
  { name: 'Node.js/Express', level: 88 },
  { name: 'MongoDB/PostgreSQL', level: 85 },
  { name: 'Tailwind/UI Design', level: 80 },
  { name: 'AWS/Docker', level: 75 },
]

const principles = [
  {
    icon: Target,
    title: 'Problem-Solving Focus',
    description: 'I break down complex problems into manageable solutions'
  },
  {
    icon: CheckCircle,
    title: 'Code Quality',
    description: 'Writing clean, maintainable, and tested code'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Thriving in team environments with clear communication'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed, security, and scalability'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Intro */}
          {/* Left Column - Image & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />

              {/* Content Card */}
              <div className="relative rounded-2xl gradient-border p-4 md:p-8 backdrop-blur-sm bg-card/30">
                {/* FIXED IMAGE CONTAINER:
          Changed aspect-video to a controlled height and aspect ratio.
          Removed flex items-center justify-center which was centering a small image.
      */}
                <div className="relative aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 overflow-hidden mb-8 border border-white/5">
                  <Image
                    src="/ravindr2.png"
                    alt="Ravindra Kumar"
                    fill
                    // 'object-cover' fills the width, 'object-top' ensures your face isn't cut
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle overlay to help the image blend into the dark UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Stats/Location Info */}
                <div className="grid gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 border border-white/5">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs md:text-sm font-mono text-muted-foreground">
                      Current: <span className="text-foreground">Dexkor Private Limited</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 border border-white/5">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs md:text-sm font-mono text-muted-foreground">
                      Location: <span className="text-foreground">Gurugram, India</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <div className="mb-8">
              <span className="text-sm font-medium text-primary mb-2 block">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Building <span className="text-gradient">Digital Solutions</span> That Matter
              </h2>
              <p className="text-lg text-muted-foreground">
                I specialize in creating secure, efficient web applications using modern technologies.
                My focus is on delivering solutions that solve real problems while maintaining
                excellent code quality and user experience.
              </p>
            </div>

            {/* Principles Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-secondary/30 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <principle.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{principle.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}