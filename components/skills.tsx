"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"

export default function Skills() {
  const { t } = useLanguage()

  const developmentSkills = [
    { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
    { name: "PHP", icon: "🐘", color: "from-purple-500 to-indigo-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "MySQL", icon: "🗄️", color: "from-blue-500 to-cyan-500" },
    { name: "HTML/CSS", icon: "🎨", color: "from-pink-500 to-rose-500" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Symfony", icon: "🎼", color: "from-gray-500 to-slate-500" },
    { name: "WordPress", icon: "📝", color: "from-blue-600 to-indigo-600" },
  ]

  const toolsSkills = [
    { name: "Git", icon: "🔀", color: "from-orange-500 to-red-500" },
    { name: "GitHub", icon: "🐙", color: "from-gray-600 to-gray-800" },
    { name: "Trello", icon: "📋", color: "from-blue-500 to-blue-600" },
    { name: "Jira", icon: "🎯", color: "from-blue-600 to-indigo-600" },
    { name: "Figma", icon: "🎨", color: "from-purple-500 to-pink-500" },
    { name: "Postman", icon: "📮", color: "from-orange-500 to-red-500" },
    { name: "VS Code", icon: "💻", color: "from-blue-500 to-cyan-500" },
    { name: "Linux", icon: "🐧", color: "from-yellow-500 to-orange-500" },
    { name: "Sony Vegas Pro", icon: "🎬", color: "from-purple-600 to-indigo-600" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-8">
            <span className="bg-primary-gradient bg-clip-text text-transparent">{t("skills.title")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Development Skills */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-3xl font-title font-bold text-white mb-10 text-center">💻 {t("skills.development")}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {developmentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="p-6 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/50 transition-all duration-300 text-center group shadow-card hover:shadow-card-hover"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-text-secondary font-body font-medium text-sm">{skill.name}</p>
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Methods */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-3xl font-title font-bold text-white mb-10 text-center">🔧 {t("skills.tools")}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="p-6 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/50 transition-all duration-300 text-center group shadow-card hover:shadow-card-hover"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-text-secondary font-body font-medium text-sm">{skill.name}</p>
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
