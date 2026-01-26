
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="space-y-20 px-10">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}