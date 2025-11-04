import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./animated-background";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center hero-background relative"
    >
      <AnimatedBackground text="DEVELOPER" />

      {/* Small label */}

      <div className="container-width text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm Tanay, a{" "}
            <span className="text-gradient block">creative developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            I bring value to web development projects by merging technical
            expertise with creativity and aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="glass hover:scale-105 transition-transform"
            >
              <Mail className="mr-2 h-5 w-5" />
              <a
                href="mailto:tanaysingh3022@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass hover:scale-105 transition-transform flex"
            >
              <Download className="mr-2 h-5 w-5" />
              <a
                href="https://drive.google.com/file/d/1vuTpXvxTX1geUgJp4bWVV-iUJ9xMJpmn/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/tanaythakur", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tanay-singh-thakur-a12648219/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tanaysingh3022@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="p-4 glass-nav-item hover:scale-110 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 animate-bounce text-text-tertiary" />
        </motion.div>
      </div>
    </section>
  );
}
