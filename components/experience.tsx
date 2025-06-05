"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.panam.title"),
      period: t("experience.panam.period"),
      description: t("experience.panam.description"),
      link: "https://panamoptic.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("experience.metal.title"),
      period: t("experience.metal.period"),
      description: t("experience.metal.description"),
      link: "https://metalfermetures.com",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: t("experience.alten.title"),
      period: t("experience.alten.period"),
      description: t("experience.alten.description"),
      link: null,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: t("experience.mdlead.title"),
      period: t("experience.mdlead.period"),
      description: t("experience.mdlead.description"),
      link: null,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("experience.mocit.title"),
      period: t("experience.mocit.period"),
      description: t("experience.mocit.description"),
      link: null,
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-background/95 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-8">
            <span className="bg-primary-gradient bg-clip-text text-transparent">{t("experience.title")}</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="relative p-8 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/30 transition-all duration-500 shadow-card hover:shadow-card-hover">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-l-card`} />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-title font-bold text-text mb-3 group-hover:text-primary-start transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-text-muted font-body font-medium">{exp.period}</p>
                  </div>

                  {exp.link && (
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-start hover:text-primary-end transition-colors duration-300 mt-4 lg:mt-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-body text-sm">Voir le site</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>

                <p className="text-text-secondary font-body leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
