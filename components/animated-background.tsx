"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Generate grid points
  const gridPoints = []
  const spacing = 100
  const cols = Math.ceil(dimensions.width / spacing) + 1
  const rows = Math.ceil(dimensions.height / spacing) + 1

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      gridPoints.push({
        x: i * spacing,
        y: j * spacing,
        id: `${i}-${j}`,
      })
    }
  }

  // Generate floating lines
  const floatingLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * dimensions.width,
    startY: Math.random() * dimensions.height,
    endX: Math.random() * dimensions.width,
    endY: Math.random() * dimensions.height,
    delay: i * 2,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
        style={{ filter: "blur(0.5px)" }}
      >
        {/* Grid dots */}
        {gridPoints.map((point) => (
          <motion.circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r="1"
            fill="rgba(106, 141, 255, 0.15)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connecting lines between nearby dots */}
        {gridPoints.map((point, index) => {
          const nearbyPoints = gridPoints.filter((other, otherIndex) => {
            if (otherIndex <= index) return false
            const distance = Math.sqrt(Math.pow(point.x - other.x, 2) + Math.pow(point.y - other.y, 2))
            return distance <= spacing * 1.5 && Math.random() > 0.7
          })

          return nearbyPoints.map((nearbyPoint) => (
            <motion.line
              key={`${point.id}-${nearbyPoint.id}`}
              x1={point.x}
              y1={point.y}
              x2={nearbyPoint.x}
              y2={nearbyPoint.y}
              stroke="rgba(106, 141, 255, 0.08)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 6,
                ease: "easeInOut",
              }}
            />
          ))
        })}

        {/* Floating animated lines */}
        {floatingLines.map((line) => (
          <motion.line
            key={`floating-${line.id}`}
            x1={line.startX}
            y1={line.startY}
            x2={line.endX}
            y2={line.endY}
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              x1: [line.startX, line.startX + 50, line.startX - 30, line.startX],
              y1: [line.startY, line.startY - 30, line.startY + 20, line.startY],
              x2: [line.endX, line.endX - 40, line.endX + 60, line.endX],
              y2: [line.endY, line.endY + 40, line.endY - 50, line.endY],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(106, 141, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(197, 143, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 144, 104, 0.1)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary-start/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-primary-start/10 rounded-full"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Subtle wave effect */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(106, 141, 255, 0.1) 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
