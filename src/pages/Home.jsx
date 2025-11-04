import { HeroSection } from "@/components/hero-section";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/animated-background";

const Home = () => {
  return (
    <div className="page-border theme-green">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="INTRO" />

        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="flex gap-2 justify-center font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6 pt-4">
              Get to know{" "}
              <span className="text-gradient block">the person</span>
            </h2>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Behind every line of code is a passionate developer dedicated to
              crafting exceptional digital experiences.
            </p>
          </motion.div>

          {/* Compact Photo */}
          <div className="flex flex-row items-start justify-center gap-8 mb-8 pt-8 max-w-6xl mx-auto p-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-28 h-28 mt-8 "
            >
              <div className="overflow-hidden rounded-full w-full h-full">
                <img
                  src="/tanay_pic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl"
            >
              <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-4xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/15 dark:hover:bg-black/15 hover:scale-[1.02]">
                <div className="grid gap-6 items-center">
                  <div className="space-y-4 text-left">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl font-bold text-text-primary"
                    >
                      About Me
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-text-secondary leading-relaxed text-sm md:text-base space-y-4"
                    >
                      <p>
                        I’m a passionate and curious front-end developer who
                        loves turning ideas into interactive, user-friendly web
                        experiences. With a strong foundation in React, Redux,
                        and Tailwind CSS, I enjoy solving real-world problems
                        through clean and efficient code.
                      </p>
                      <p>
                        I’m constantly learning and expanding my knowledge
                        toward full-stack development, exploring back-end tools
                        and frameworks to build complete, scalable applications.
                        I believe in writing maintainable code, collaborating
                        through Git, and staying up to date with the latest in
                        tech.
                      </p>
                      <p>
                        Outside of code, I enjoy exploring new tools, following
                        developer communities, and pushing myself to learn
                        beyond my comfort zone. I'm always open to new
                        challenges that help me grow and contribute
                        meaningfully.
                      </p>
                      <p className="text-base font-semibold font-mono">
                        "I don't aim to know it all — I aim to grow through it
                        all."
                        <br /> — Tanay
                      </p>
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2 justify-start"
                    >
                      {["Creative", "Innovative", "Dedicated"].map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="CONTACT" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10"
        ></motion.div>

        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6 pt-4">
              Let's <span className="text-gradient block">connect</span>
            </h2>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to start your next project? Get in touch and let's discuss
              how we can bring your ideas to life.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
