"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Circles */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary-start/30 to-primary-end/30 blur-xl"
        style={{ top: "10%", left: "10%" }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-secondary-start/40 to-secondary-end/40 blur-lg"
        style={{ top: "60%", right: "15%" }}
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-primary-end/35 to-secondary-start/35 blur-md"
        style={{ top: "30%", right: "30%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating Stars */}
      <motion.svg
        className="absolute w-8 h-8 text-primary-start/60"
        style={{ top: "20%", left: "70%" }}
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>

      <motion.svg
        className="absolute w-6 h-6 text-secondary-start/70"
        style={{ top: "70%", left: "20%" }}
        animate={{
          rotate: [360, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 1,
        }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>

      {/* Geometric Lines */}
      <motion.div
        className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary-start/40 to-transparent"
        style={{ top: "40%", left: "80%" }}
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-24 h-px bg-gradient-to-r from-transparent via-secondary-end/50 to-transparent"
        style={{ top: "80%", left: "60%" }}
        animate={{
          scaleX: [1, 1.8, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />
    </div>
  )
}
