import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass backdrop-blur-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#hero")}
            className="font-space font-bold text-xl text-gradient hover:scale-105 transition-transform"
          >
            Portfolio
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:inline-flex"
              size="sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}