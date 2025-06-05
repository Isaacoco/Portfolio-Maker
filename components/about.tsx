"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"

export default function About() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-24 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-16">
            <span className="bg-primary-gradient bg-clip-text text-transparent">{t("about.title")}</span>
          </motion.h2>

          <div className="space-y-8 text-lg md:text-xl font-body text-text-secondary leading-relaxed">
            <motion.p variants={itemVariants} className="text-center max-w-4xl mx-auto">
              {t("about.description")}
            </motion.p>

            <motion.p variants={itemVariants} className="text-center max-w-4xl mx-auto">
              {t("about.description2")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="inline-block p-8 bg-card-gradient backdrop-blur-sm rounded-card border border-white/10 shadow-card"
            >
              <p className="text-primary-start font-body font-semibold text-lg">{t("about.skills")}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
