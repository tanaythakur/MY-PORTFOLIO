import { ContactSection } from "@/components/contact-section"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"

const Contact = () => {
  return (
    <div className="page-border theme-purple">
      {/* Contact Section */}
      <ContactSection />
      
      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="CONNECT" />
       <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6 pt-4">
              Let's{" "}
              <span className="text-gradient block">
                connect
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to start your next project? Get in touch and let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>

      {/* Availability Section */}
      {/* <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="AVAILABLE" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10"
        >
          <span className="text-sm font-medium text-text-tertiary tracking-wider uppercase">
            AVAILABILITY
          </span>
        </motion.div>
        
        <div className="container-width text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Available for{" "}
              <span className="text-gradient block">
                new projects
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Currently accepting new opportunities for freelance work, collaborations, and exciting projects that challenge and inspire.
            </p>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}

export default Contact