// src/components/sections/Experience.tsx
"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, Users, Code, Shield } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: 'Tecraki Technology Solutions PVT. LTD.',
    period: 'Dec 2023 – Present',
    location: 'Noida, India',
    description: 'Building multi-tenant healthcare platforms and mental wellness applications.',
    projects: [
      {
        name: 'BaelHealth',
        description: 'Multi-tenant healthcare platform with e-prescription module',
        tech: ['React.js', 'TypeScript', 'PostgreSQL', 'Express.js', 'Node.js'],
        achievements: [
          'Designed secure e-prescription module',
          'Implemented role-based access control',
          'Built digital health records management'
        ]
      },
      {
        name: 'Saarthi Sangha',
        description: 'Mental health platform with booking & payment system',
        tech: ['MERN Stack', 'Zustand', 'Razorpay', 'Next.js', 'Shadcn'],
        achievements: [
          'Integrated complete booking system',
          'Implemented secure payment processing',
          'Built admin management dashboard'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'Code Clause',
    period: 'Aug 2023 – Sep 2023',
    location: 'Remote',
    description: 'Developed responsive web applications and learned industry best practices.',
    projects: [
      {
        name: 'Weather Application',
        description: 'Real-time weather web app with external APIs',
        tech: ['React.js', 'REST APIs', 'Tailwind CSS'],
        achievements: [
          'Built responsive UI with real-time data',
          'Implemented location-based weather',
          'Optimized API calls and error handling'
        ]
      }
    ]
  }
]

const achievements = [
  {
    icon: Award,
    title: 'Smart India Hackathon 2022',
    description: 'National-Level Finalist',
    details: 'Led team to final round, demonstrating leadership and rapid prototyping skills'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Project Management',
    details: 'Managed cross-functional teams delivering healthcare solutions'
  },
  {
    icon: Shield,
    title: 'Security Focus',
    description: 'Healthcare Applications',
    details: 'Built HIPAA-compliant features with secure data handling'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            CAREER JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare platforms to mental wellness applications, building solutions that make an impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Timeline */}
          <div className="lg:col-span-2">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative mb-12 pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-4">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-background" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl gradient-border p-6 backdrop-blur-sm">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium">
                          {exp.company}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>

                    {/* Projects */}
                    <div className="space-y-6">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-secondary/30">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                            <button className="p-2 hover:bg-accent rounded-lg">
                              <ExternalLink className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Achievements */}
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-8">Key Achievements</h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="p-6 rounded-2xl gradient-border backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                        <p className="text-primary font-medium mb-2">{achievement.description}</p>
                        <p className="text-sm text-muted-foreground">{achievement.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Education */}
              <div className="mt-12 p-6 rounded-2xl gradient-border backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold">B.Tech in Computer Science</div>
                    <div className="text-sm text-muted-foreground">Bundelkhand University, Jhansi</div>
                    <div className="text-sm">2019 - 2023 • CGPA: 7.8/10</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="font-bold">Intermediate (12th)</div>
                    <div className="text-sm text-muted-foreground">RPJSSMIC, Siddharth Nagar</div>
                    <div className="text-sm">2016 - 2018 • Percentage: 82.6%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}