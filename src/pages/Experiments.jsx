import { ExperimentsSection } from "@/components/experiments-section"
import { ExperimentsShowcase } from "@/components/experiments-showcase"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"

const Experiments = () => {
  return (
    <div className="page-border theme-yellow">
      {/* Experiments Section */}
      <ExperimentsSection />
      
      {/* Experiments Showcase Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="EXPERIENCE" />
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Professional{" "}
              <span className="text-gradient block">Experience</span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-[7rem] max-w-2xl mx-auto leading-relaxed">
              Journey through my professional experience, showcasing growth, achievements, and the technologies that shaped my career.
            </p>
          </motion.div>
          
          <ExperimentsShowcase />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="EXPERIENCE" />
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
             <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-8 pt-8">
              Let's{" "}
              <span className="text-gradient block">
                Connect
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
               Let's collaborate and explore new possibilities together.
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Experiments