// src/components/sections/Contact.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, FileText } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ravindra.iet.bu@gmail.com',
    href: 'mailto:ravindra.iet.bu@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-9648316865',
    href: 'tel:+919648316865'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Noida, India',
    href: '#'
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/ravindra-kumar'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ravindra-kumar'
  },
  {
    icon: FileText,
    label: 'Resume',
    href: '/resume.pdf'
  }
]

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl gradient-border backdrop-blur-sm group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.title}</div>
                    <div className="font-bold text-lg">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 p-4 rounded-xl gradient-border text-center group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="font-medium">{social.label}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl gradient-border p-8 backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-transparent focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-transparent focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-transparent focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <div className="font-bold">Quick Response</div>
                  <div className="text-sm text-muted-foreground">
                    Typically replies within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}