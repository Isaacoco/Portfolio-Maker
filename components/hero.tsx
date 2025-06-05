"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { translations } from "@/lib/translations"
import HeroAnimatedBackground from "@/components/hero-animated-background"

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const { t, language } = useLanguage()

  const taglines = translations[language].hero.taglines

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [taglines.length])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient"
    >
      {/* Enhanced Animated Background */}
      <HeroAnimatedBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-title font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="bg-primary-gradient bg-clip-text text-transparent drop-shadow-glow">
              {t("hero.title")}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl lg:text-4xl font-body text-text-secondary mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="h-20 mb-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTagline}
                className="text-3xl md:text-4xl lg:text-5xl font-title font-semibold bg-secondary-gradient bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {taglines[currentTagline]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center px-10 py-4 bg-primary-gradient hover:shadow-glow text-white font-body font-medium rounded-card transition-all duration-300 text-lg shadow-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("hero.cta")}
          </motion.button>

          <motion.div
            className="mt-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="text-text/60 hover:text-primary-start transition-colors duration-300"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ChevronDown size={36} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
