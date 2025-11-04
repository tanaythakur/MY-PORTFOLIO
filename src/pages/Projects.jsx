import { ProjectsSection } from "@/components/projects-section"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"

const Projects = () => {
  return (
    <div className="page-border theme-red">
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Projects Showcase Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="SHOWCASE" />
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6 p-6">
              Featured{" "}
              <span className="text-gradient block">
                projects
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              A collection of my best work showcasing innovative solutions and creative problem-solving across various domains.
            </p>
          </motion.div>
          
          <ProjectsShowcase />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="COLLABORATE" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10"
        >
        </motion.div>
        
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's{" "}
              <span className="text-gradient block">
                collaborate
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in working together? Let's discuss your project and explore how we can create something amazing.
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Projects