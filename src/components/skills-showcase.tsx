import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react"

export function SkillsShowcase() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 88, color: "bg-purple-500" },
        { name: "Adobe Creative Suite", level: 82, color: "bg-red-500" },
        { name: "User Research", level: 85, color: "bg-green-500" },
        { name: "Prototyping", level: 90, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-700" },
        { name: "MongoDB", level: 78, color: "bg-green-500" },
        { name: "GraphQL", level: 75, color: "bg-pink-600" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80, color: "bg-blue-500" },
        { name: "Flutter", level: 70, color: "bg-blue-400" },
        { name: "iOS Development", level: 65, color: "bg-gray-800" },
        { name: "Android Development", level: 68, color: "bg-green-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Zap,
      skills: [
        { name: "Docker", level: 85, color: "bg-blue-500" },
        { name: "AWS", level: 80, color: "bg-orange-500" },
        { name: "Git", level: 92, color: "bg-orange-600" },
        { name: "CI/CD", level: 78, color: "bg-purple-600" }
      ]
    },
    {
      title: "Other Technologies",
      icon: Globe,
      skills: [
        { name: "Python", level: 75, color: "bg-yellow-500" },
        { name: "Machine Learning", level: 70, color: "bg-purple-500" },
        { name: "Blockchain", level: 65, color: "bg-orange-600" },
        { name: "Web3", level: 72, color: "bg-blue-600" }
      ]
    }
  ]

  return (
    <div className="scrollable-section">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <category.icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        '--progress-background': skill.color
                      } as React.CSSProperties}
                    />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}