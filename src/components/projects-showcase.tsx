import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

// Import project images
import authProject from "@/assets/projects/auth-project.jpg"
import weatherProject from "@/assets/projects/weather-project.jpg"
import todoProject from "@/assets/projects/todo-project.jpg"
import portfolioProject from "@/assets/projects/portfolio-project.jpg"
import dashboardProject from "@/assets/projects/dashboard-project.jpg"
import realestateProject from "@/assets/projects/realestate-project.jpg"
import ecommerceProject from "@/assets/projects/ecommerce-project.jpg"
import reartifyProject from "@/assets/projects/reartify-project.jpg"
import ticTacToeProject from "@/assets/projects/tictactoe.jpg"

export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "fullstack", label: "Full Stack" }
  ]

  const projects = [
    {
      id: 1,
      title: "Authentication Page",
      description: "Secure user authentication system with login, registration, password recovery, and multi-factor authentication support.",
      image: authProject,
      category: "web",
      technologies: ["React", "Firebase Auth", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: weatherProject,
      category: "web",
      technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "To-Do List",
      description: "Feature-rich task management application with categories, priorities, deadlines, and team collaboration capabilities.",
      image: todoProject,
      category: "web",
      technologies: ["React", "Local Storage", "Framer Motion", "TypeScript"],
      liveUrl: "https://tanaythakur.github.io/OIBSIP_LEVEL2_TASK3/",
      githubUrl: "",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Portfolio",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      image: portfolioProject,
      category: "web",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization, user management, and performance metrics.",
      image: dashboardProject,
      category: "web",
      technologies: ["ReactJS", "Chart.js", "ReCharts", "Tailwind CSS", "Fetch", "RadixUI", "Forms"],
      liveUrl: "https://effervescent-biscuit-73e91c.netlify.app/",
      githubUrl: "https://github.com/tanaythakur/Admin-s-Dasboard",
      featured: true,
      year: "2024"
    },
    {
      id: 6,
      title: "Real Estate",
      description: "Property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent management.",
      image: realestateProject,
      category: "fullstack",
      technologies: ["ReactJS", "JavaScript", "Tailwind CSS", "Stripe" ,"MongoDB" , "Express.js" ,"Axios" ,"Node.js" , "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2024"
    },
    {
      id: 7,
      title: "E-commerce",
      description: "Full-featured online store with product catalog, shopping cart, payment processing, and order management system.",
      image: ecommerceProject,
      category: "fullstack",
      technologies: ["React", "Node.js", "Redux", "Stripe" , "fetch"],
      liveUrl: "#",
      githubUrl: "https://github.com/tanaythakur/my-shop",
      featured: true,
      year: "2024"
    },
    {
      id: 8,
      title: "Re-Artify",
      description: "Creative platform for artists to showcase and sell digital artwork with NFT integration and community features.",
      image: reartifyProject,
      category: "web",
      technologies: ["React", "Tailwind CSS", "Stripe", "JavaScript"],
      liveUrl: "https://tanaythakur.github.io/RE-ARTIFY/",
      githubUrl: "https://github.com/tanaythakur/RE-ARTIFY",
      featured: false,
      year: "2024"
    },
    {
      id: 9,
      title: "Tic-Tac-Toe",
      description: "Classic Tic-Tac-Toe game built with React, featuring a clean UI and smooth gameplay.",
      image: ticTacToeProject,
      category: "web",
      technologies: ["JavaScript", "Tailwind CSS", "React"],
      liveUrl: "https://tanaythakur.github.io/TIC-TAC-TOE/",
      githubUrl: "https://github.com/tanaythakur/Tic-Tac-Toe",
      featured: false,
      year: "2024"
    }


  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="scrollable-section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="glass hover:scale-105 transition-transform"
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="glass h-full group-hover:scale-[1.02] transition-all duration-500 border-0 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl overflow-hidden">
              <CardHeader className="relative p-0">
                {/* Project Image Area */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-t-lg overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Year Badge */}
                  <motion.div 
                    className="absolute top-2 sm:top-4 left-2 sm:left-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Badge variant="secondary" className="glass bg-background/20 text-foreground border-white/20 backdrop-blur-sm text-xs">
                      {project.year}
                    </Badge>
                  </motion.div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div 
                      className="absolute top-2 sm:top-4 right-2 sm:right-4"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Badge className="bg-gradient-to-r from-yellow-400/90 to-orange-500/90 text-black border-0 shadow-lg text-xs">
                        <span className="hidden sm:inline">⭐ Featured</span>
                        <span className="sm:hidden">⭐</span>
                      </Badge>
                    </motion.div>
                  )}
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Project Title */}
                <div className="p-4 sm:p-6 pb-2 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs bg-background/20 border-primary/30 text-foreground/80 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass bg-background/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 group-hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass bg-background/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 group-hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}