import { AboutSection } from "@/components/about-section"
import { SkillsShowcase } from "@/components/skills-showcase"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Palette, 
  Zap, 
  Database, 
  Layers, 
  Search, 
  Github, 
  MessageSquare, 
  Bot, 
  GitBranch,
  Globe,
  Cpu,
  Smartphone,
  Settings,
  Cloud,
  Monitor,
  MessageCircle
} from "lucide-react"

const About = () => {
  return (
    <div className="page-border theme-blue">
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Showcase Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="SKILLS" />
        
        {/* Floating elements background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-[3.5rem] flex justify-center items-center pt-8">
              Technical{" "}
              <span className="text-gradient block">expertise</span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              A comprehensive range of skills and technologies that enable me to bring creative visions to life.
            </p>
          </motion.div>
          
          {/* Glass Morphism Tabs Navigation */}
          <Tabs defaultValue="techstack" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <TabsList className="glass p-2 border border-white/20 bg-white/5 backdrop-blur-md">
                <TabsTrigger 
                  value="techstack" 
                  className="data-[state=active]:bg-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Tech Stack
                </TabsTrigger>
                <TabsTrigger 
                  value="aitools" 
                  className="data-[state=active]:bg-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  AI Tools
                </TabsTrigger>
                <TabsTrigger 
                  value="collaboration" 
                  className="data-[state=active]:bg-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Collaboration Tools
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Tech Stack Content */}
            <TabsContent value="techstack">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center pb-5"
              >
                <div className="grid grid-cols-1 md:col-start-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl rounded-2xl"
                >
                {[
                  { name: "HTML", category: "Markup", icon: Globe },
                  { name: "CSS", category: "Styling", icon: Palette },
                  { name: "JavaScript", category: "Programming", icon: Code2 },
                  { name: "React JS", category: "Framework", icon: Smartphone },
                  { name: "Redux", category: "State Management", icon: Layers },
                  { name: "RTK Query", category: "Data Fetching", icon: Search },
                  { name: "Radix UI", category: "Components", icon: Layers },
                  { name: "Tailwind CSS", category: "Styling", icon: Palette },
                  { name: "OOPS", category: "Programming", icon: Cpu },
                  { name: "SQL", category: "Database", icon: Database }
                ].map((tech, index ) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="hover-scale"
                  >
                    <Card className="group glass border-white/20 hover:border-primary/30 transition-all duration-500 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/20 rounded-2xl overflow-hidden border-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="p-3 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300"
                          >
                            <tech.icon className="h-6 w-6 text-white drop-shadow-lg" />
                          </motion.div>
                          <div>
                            <CardTitle className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                              {tech.name}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <Badge variant="secondary" className="bg-gradient-to-r from-white/15 to-white/10 text-white border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg">
                          {tech.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* AI Tools Content */}
            <TabsContent value="aitools">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center pb-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
              >
                {[
                  { name: "Cursor", category: "Code Editor", icon: Code2 },
                  { name: "Lovable", category: "Development Platform", icon: Zap },
                  { name: "ChatGPT", category: "AI Assistant", icon: MessageSquare },
                  { name: "Claude", category: "AI Assistant", icon: Bot },
                  { name: "GitHub Copilot", category: "Code Assistant", icon: Github }
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="hover-scale"
                  >
                    <Card className="group glass border-white/20 hover:border-primary/30 transition-all duration-500 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/20 rounded-2xl overflow-hidden border-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="p-3 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300"
                          >
                            <tool.icon className="h-6 w-6 text-white drop-shadow-lg" />
                          </motion.div>
                          <div>
                            <CardTitle className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                              {tool.name}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <Badge variant="secondary" className="bg-gradient-to-r from-white/15 to-white/10 text-white border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg">
                          {tool.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Collaboration Tools Content */}
            <TabsContent value="collaboration">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center pb-5 "
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
              >
                {[
                  { name: "Git", category: "Version Control", icon: GitBranch },
                  { name: "GitHub", category: "Code Repository", icon: Github },
                  { name: "Jira", category: "Project Management", icon: Settings },
                  { name: "Postman", category: "API Testing", icon: Zap },
                  { name: "Vercel", category: "Deployment", icon: Cloud },
                  { name: "Netlify", category: "Deployment", icon: Cloud },
                  { name: "VS Code", category: "Code Editor", icon: Monitor },
                  { name: "Slack", category: "Communication", icon: MessageCircle }
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="hover-scale"
                  >
                    <Card className="group glass border-white/20 hover:border-primary/30 transition-all duration-500 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/20 rounded-2xl overflow-hidden border-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="p-3 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300"
                          >
                            <tool.icon className="h-6 w-6 text-white drop-shadow-lg" />
                          </motion.div>
                          <div>
                            <CardTitle className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                              {tool.name}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <Badge variant="secondary" className="bg-gradient-to-r from-white/15 to-white/10 text-white border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg">
                          {tool.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-background">
        <AnimatedBackground text="CONTACT" />
        
        {/* Floating elements background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
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
    </div>
  )
}

export default About