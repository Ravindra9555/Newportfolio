
// src/components/sections/ProjectModal.tsx
"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Building, CheckCircle } from 'lucide-react'
import { Project } from '../../data/projects'
interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-background shadow-2xl"
            >
              {/* Close Button - Fixed higher Z-index and clear positioning */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-50 p-2.5 rounded-full bg-secondary/80 hover:bg-accent backdrop-blur-md transition-all active:scale-95 border border-white/5"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="p-6 md:p-10">
                {/* Header - Added pr-12 to prevent overlap with X button */}
                <div className="mb-8 pr-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        {project.company && (
                          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
                            <Building className="h-3 w-3" />
                            <span className="text-xs font-bold uppercase tracking-wider">{project.company}</span>
                          </div>
                        )}
                        {project.period && (
                          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span className="text-xs font-medium">{project.period}</span>
                          </div>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        {project.title}
                      </h2>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-accent transition-all font-medium"
                        >
                          <Github className="h-5 w-5" />
                          <span className="hidden sm:inline">Source</span>
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white transition-all font-medium"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {project.longDescription}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Key Features
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-xl bg-secondary/20 border border-white/5 hover:border-primary/20 transition-colors"
                          >
                            <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Sidebar */}
                  <div className="space-y-6">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center group overflow-hidden relative">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                        <div className="text-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                          <div className="text-5xl mb-2">🚀</div>
                          <div className="font-bold text-sm tracking-widest uppercase opacity-50">Preview Available</div>
                        </div>
                    </div>

                    <div className="divide-y divide-white/5 rounded-2xl bg-secondary/10 border border-white/5 overflow-hidden">
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Category</div>
                        <div className="font-semibold capitalize">{project.category}</div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</div>
                        <div className="font-semibold">Full-Stack Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}