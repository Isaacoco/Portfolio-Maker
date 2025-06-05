"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroAnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Generate network nodes
  const networkNodes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: 2 + Math.random() * 4,
    speed: 0.2 + Math.random() * 0.5,
  }))

  // Generate flowing lines
  const flowingLines = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    path: `M${Math.random() * dimensions.width},${Math.random() * dimensions.height} Q${Math.random() * dimensions.width},${Math.random() * dimensions.height} ${Math.random() * dimensions.width},${Math.random() * dimensions.height}`,
    delay: i * 0.5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main SVG Canvas */}
      <svg width={dimensions.width} height={dimensions.height} className="absolute inset-0">
        <defs>
          {/* Gradients */}
          <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(106, 141, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(197, 143, 255, 0.4)" />
          </linearGradient>

          <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 213, 128, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 144, 104, 0.3)" />
          </linearGradient>

          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(106, 141, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(106, 141, 255, 0.2)" />
          </radialGradient>

          {/* Filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated network nodes */}
        {networkNodes.map((node) => (
          <motion.g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="url(#nodeGradient)"
              filter="url(#glow)"
              animate={{
                cx: [node.x, node.x + Math.sin(node.id) * 100, node.x + Math.cos(node.id) * 80, node.x],
                cy: [node.y, node.y + Math.cos(node.id) * 80, node.y + Math.sin(node.id) * 100, node.y],
                opacity: [0.3, 0.8, 0.5, 0.3],
                scale: [1, 1.5, 1.2, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: node.id * 0.5,
                ease: "easeInOut",
              }}
            />

            {/* Node pulse effect */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 3}
              fill="none"
              stroke="rgba(106, 141, 255, 0.3)"
              strokeWidth="1"
              animate={{
                cx: [node.x, node.x + Math.sin(node.id) * 100, node.x + Math.cos(node.id) * 80, node.x],
                cy: [node.y, node.y + Math.cos(node.id) * 80, node.y + Math.sin(node.id) * 100, node.y],
                r: [node.size * 2, node.size * 6, node.size * 4, node.size * 2],
                opacity: [0.6, 0, 0.3, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: node.id * 0.2,
                ease: "easeOut",
              }}
            />
          </motion.g>
        ))}

        {/* Connecting lines between nodes */}
        {networkNodes.map((node, index) => {
          const nearbyNodes = networkNodes.filter((other, otherIndex) => {
            if (otherIndex <= index) return false
            const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
            return distance <= 200 && Math.random() > 0.6
          })

          return nearbyNodes.map((nearbyNode) => (
            <motion.line
              key={`connection-${node.id}-${nearbyNode.id}`}
              x1={node.x}
              y1={node.y}
              x2={nearbyNode.x}
              y2={nearbyNode.y}
              stroke="url(#heroGradient1)"
              strokeWidth="1"
              opacity="0.4"
              animate={{
                opacity: [0.2, 0.6, 0.3, 0.2],
                strokeWidth: [0.5, 2, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))
        })}

        {/* Flowing curved lines */}
        {flowingLines.map((line) => (
          <motion.path
            key={`flow-${line.id}`}
            d={line.path}
            fill="none"
            stroke="url(#heroGradient2)"
            strokeWidth="2"
            opacity="0.5"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Mouse-following interactive element */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="80"
          fill="none"
          stroke="rgba(106, 141, 255, 0.2)"
          strokeWidth="1"
          animate={{
            r: [60, 100, 80],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 && <div className="w-8 h-8 border border-primary-start/30 rotate-45" />}
            {i % 3 === 1 && <div className="w-6 h-6 border border-secondary-start/30 rounded-full" />}
            {i % 3 === 2 && (
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-primary-end/30" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary-start/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Energy waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 rounded-full border border-primary-start/20"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [0, 3, 0],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
