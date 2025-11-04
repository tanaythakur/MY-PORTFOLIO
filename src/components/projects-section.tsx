import { motion } from "framer-motion"
import { AnimatedBackground } from "./animated-background"

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center hero-background relative">
      <AnimatedBackground text="WORK" />
      
      {/* Small label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10"
      >
      </motion.div>
      
      <div className="container-width text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            A collection of{" "}
            <span className="text-gradient block">
              my best projects
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}