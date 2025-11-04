import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Enhanced floating geometric shapes
const GeometricShape = ({ delay = 0, duration = 20, size = 40, shape = "circle", color = "primary" }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const randomX = Math.random() * 90 + 5
  const randomY = Math.random() * 90 + 5

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-lg rotate-45",
    triangle: "rounded-sm",
    hexagon: "rounded-xl rotate-12"
  }

  return (
    <motion.div
      className={`absolute opacity-30 ${shapeClasses[shape]}`}
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: size,
        height: size,
        background: color === "primary" 
          ? "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%)"
          : "linear-gradient(135deg, hsl(var(--primary-glow)) 0%, hsl(var(--accent)) 100%)",
      }}
      animate={{
        y: [-30, 40, -30],
        x: [-20, 25, -20],
        rotate: [0, 360, 720],
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

// Enhanced floating letters/words with more movement
const FloatingText = ({ text, delay = 0, duration = 25, size = "8xl" }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const randomX = Math.random() * 70 + 15
  const randomY = Math.random() * 70 + 15

  return (
    <motion.div
      className={`absolute opacity-10 font-space text-${size} font-bold text-primary select-none pointer-events-none`}
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        y: [-50, 60, -50],
        x: [-30, 40, -30],
        rotate: [-8, 12, -8],
        opacity: [0.03, 0.2, 0.03],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.div>
  )
}

// Single big moving text that moves from right to left in the center
const MovingText = ({ text = "DEVELOPER" }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="absolute opacity-5 font-space text-[12rem] font-bold text-primary select-none pointer-events-none"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        right: "-30%",
      }}
      animate={{
        x: [0, -(window.innerWidth + 400)],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  )
}

export function AnimatedBackground({ text = "DEVELOPER" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Single Moving Text */}
      <MovingText text={text} />

      {/* Enhanced Gradient Orbs with more movement */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.4, 1.2, 1],
          opacity: [0.1, 0.4, 0.2, 0.1],
          x: [-50, 100, -30, -50],
          y: [-30, 80, -10, -30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary-glow)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1.3, 1, 1.5, 1.3],
          opacity: [0.05, 0.3, 0.1, 0.05],
          x: [30, -120, 60, 30],
          y: [20, -90, 40, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.6, 0.8, 1],
          opacity: [0.1, 0.3, 0.05, 0.1],
          x: [-80, 120, -40, -80],
          y: [40, -100, 60, 40],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Particle-like small elements */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-100, 100, -100],
            x: [-50, 50, -50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}