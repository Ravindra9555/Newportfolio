// src/components/sections/Projects.tsx
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, X, Calendar, Building } from 'lucide-react'
import { projects, type Project} from '../../data/projects'
import ProjectModal from '@/components/sections/ProjectModal'

type Category = 'all' | 'professional' | 'personal'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const categories: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'professional', label: 'Professional', count: projects.filter(p => p.category === 'professional').length },
    { id: 'personal', label: 'Personal', count: projects.filter(p => p.category === 'personal').length },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work across healthcare, mental wellness, and productivity platforms
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-secondary hover:bg-accent'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl gradient-border overflow-hidden bg-card">
                  {/* Project Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {project.company && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Building className="h-3 w-3" />
                            <span className="text-xs text-muted-foreground">
                              {project.company}
                            </span>
                          </div>
                        )}
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary"
                            aria-label="GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all flex items-center justify-center group/btn"
                    >
                      <span className="font-medium mr-2">View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}