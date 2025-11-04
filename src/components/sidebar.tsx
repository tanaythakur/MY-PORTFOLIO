import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, FolderOpen, Mail, Palette, Lightbulb } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useLocation, useNavigate } from "react-router-dom"

const navigation = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Experience", path: "/experience", icon: Lightbulb },
  { name: "Contact", path: "/contact", icon: Mail },
]

export function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState(location.pathname)

  useEffect(() => {
    setActiveSection(location.pathname)
  }, [location.pathname])

  const handleNavigation = (path: string) => {
    setActiveSection(path)
    navigate(path)
  }

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 top-1/3 transform -translate-y-1/2 z-50"
    >
      <div className="p-2 ml-5">
        {/* Navigation */}
        <nav className="space-y-3 mb-6">
          {navigation.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="w-10 h-10 flex items-center justify-center transition-all relative group"
              whileHover={{ scale: 1.1, opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
              title={item.name}
            >
              <item.icon 
                className={`h-4 w-4 transition-all ${
                  activeSection === item.path 
                    ? "text-primary scale-110" 
                    : "text-muted-foreground hover:text-primary hover:opacity-80"
                }`} 
              />
              
              {/* Tooltip */}
              <div className="absolute left-full px-2 py-1 bg-background border border-border rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.name}
              </div>
            </motion.button>
          ))}
        </nav>

        {/* Status Indicator */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-2 h-2 bg-green-500 rounded-full mx-auto"
          title="Available for work"
        />
      </div>
    </motion.aside>
  )
}