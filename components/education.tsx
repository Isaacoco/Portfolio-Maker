"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"

export default function Education() {
  const { t } = useLanguage()

  const education = [
    {
      title: t("education.ms2d"),
      period: "2022–2024",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("education.bachelor"),
      period: "2021–2022",
      icon: "🧑‍💻",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: t("education.bts"),
      period: "2019–2021",
      icon: "💻",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: t("education.bac"),
      period: "2017–2019",
      icon: "🏫",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const languages = [
    {
      name: t("languages.french"),
      flag: "🇫🇷",
      level: "100%",
    },
    {
      name: t("languages.english"),
      flag: "🇬🇧",
      level: "85%",
    },
  ]

  return (
    <section className="py-24 px-4 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-12">
              <span className="bg-primary-gradient bg-clip-text text-transparent">{t("education.title")}</span>
            </h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6 p-6 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/30 transition-all duration-300 shadow-card hover:shadow-card-hover group"
                  whileHover={{ scale: 1.02, x: 8 }}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-text font-title font-semibold text-lg">{edu.title}</h3>
                    <p className="text-text-muted font-body text-sm">{edu.period}</p>
                  </div>
                  <div className={`w-2 h-16 bg-gradient-to-b ${edu.color} rounded-full`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-12">
              <span className="bg-primary-gradient bg-clip-text text-transparent">{t("languages.title")}</span>
            </h2>

            <div className="space-y-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="p-8 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 shadow-card"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{lang.flag}</span>
                      <span className="text-text font-title font-semibold text-xl">{lang.name}</span>
                    </div>
                    <span className="text-primary-start font-body font-medium text-lg">{lang.level}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3">
                    <motion.div
                      className="h-3 bg-primary-gradient rounded-full shadow-glow"
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.level }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
