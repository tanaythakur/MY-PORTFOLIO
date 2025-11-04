import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Calendar, MapPin, Trophy, Code, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react"

function ExperienceCard({ experience, index, isActive }: { experience: any, index: number, isActive: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex-shrink-0 transition-all duration-500 ${isActive ? 'blur-0 scale-100' : 'blur-sm scale-95'}`}
      style={{ scrollSnapAlign: 'center' }}
    >
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <Card className={`group glass border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl bg-white/5 hover:bg-white/8 shadow-2xl rounded-2xl overflow-hidden border cursor-pointer ${isExpanded ? 'w-[800px] h-auto' : 'w-[800px] h-48'}`}>
          <CollapsibleTrigger className="w-full h-full">
            <CardContent className="p-6 h-full flex items-center justify-between text-left">
              {/* Left Side - Main Info */}
              <div className="flex items-center space-x-6">
                <div className="text-4xl">{experience.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                  <p className="text-white/70 text-lg font-medium">{experience.role}</p>
                  <div className="flex items-center space-x-4 text-white/60 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Type Badge and Expand Icon */}
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-white/10 text-white/80 border-white/20 text-sm px-4 py-2">
                  {experience.type}
                </Badge>
                {isExpanded ? <ChevronUp className="h-6 w-6 text-white/60" /> : <ChevronDown className="h-6 w-6 text-white/60" />}
              </div>
            </CardContent>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <CardContent className="px-6 pb-6 pt-0 space-y-6">
              <div className="h-px bg-white/10"></div>
              
              <p className="text-white/80 leading-relaxed text-lg">
                {experience.description}
              </p>
              
              {/* Achievements */}
              <div>
                <div className="flex items-center mb-4">
                  <Trophy className="h-5 w-5 mr-3 text-white/60" />
                  <span className="text-white/80 font-medium text-lg">Key Achievements</span>
                </div>
                <ul className="space-y-3 grid grid-cols-2 gap-4">
                  {experience.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="text-white/70 flex items-start">
                      <span className="text-white/40 mr-3 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* All Technologies */}
              <div>
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 mr-3 text-white/60" />
                  <span className="text-white/80 font-medium text-lg">Technologies</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech: string) => (
                    <span key={tech} className="px-4 py-2 bg-white/10 text-white/80 rounded-full border border-white/20 hover:bg-white/15 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </motion.div>
  )
}

export function ExperimentsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Codescure Technologies",
      period: "2025 - Present",
      location: "Indore, India",
      type: "Full-time",
      description: "Leading development of cutting-edge web applications using React and modern JavaScript frameworks. Spearheaded UI/UX improvements that increased user engagement by 40%.",
      achievements: [
        "Built responsive web apps serving 100K+ users",
        "Reduced page load times by 60%",
        "Implemented automated testing increasing code coverage to 95%"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Radix UI", "RTK Query", "Redux Toolkit"],
      icon: "💼",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      role: "React Developer",
      company: "Medoc-Health",
      period: "2025",
      location: "Remote",
      type: "Internship",
      description: "Delivered custom web solutions for startups and small businesses. Specialized in creating high-performance websites with modern design principles.",
      achievements: [
        "Completed 25+ successful projects",
        "Maintained 98% client satisfaction rate",
        "Generated $150K+ in revenue",
        "Built e-commerce platforms processing $50K+ monthly"
      ],
      technologies: ["ReactJS", "Tailwind", "JavaScript", "Ant Design", "MySQL"],
      icon: "🚀"
    },
    // {
    //   id: 3,
    //   role: "Frontend Developer",
    //   company: "StartupXYZ",
    //   period: "2020 - 2021",
    //   location: "Austin, TX",
    //   type: "Full-time",
    //   description: "Developed user interfaces for a fast-growing SaaS platform. Collaborated with design and backend teams to create seamless user experiences.",
    //   achievements: [
    //     "Designed component library used by 10+ developers",
    //     "Improved accessibility compliance to WCAG 2.1 AA",
    //     "Optimized bundle size reducing load times by 45%",
    //     "Implemented real-time features using WebSockets"
    //   ],
    //   technologies: ["Vue.js", "Sass", "GraphQL", "Jest", "Cypress"],
    //   icon: "⚡"
    // }
  ]

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.children[0]?.clientWidth || 0
      const scrollLeft = container.scrollLeft
      const newActiveIndex = Math.round(scrollLeft / (cardWidth + 16)) // 16 is gap
      setActiveIndex(newActiveIndex)
    }
  }

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.children[0]?.clientWidth || 0
      const scrollPosition = index * (cardWidth + 16) // 16 is gap
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
      setActiveIndex(index)
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
  
      <div className="w-full">
       {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          
          <button
            onClick={() => scrollToCard(Math.min(experiences.length - 1, activeIndex + 1))}
            disabled={activeIndex === experiences.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </button>

          {/* Experience Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 pb-6 overflow-x-auto scrollbar-hidden px-16"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-6 text-white/60"
          >
            <span className="text-sm">Click cards to expand • Use arrows or dots to navigate</span>
          </motion.div>
        </div>
      </div>

  )
}