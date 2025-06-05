"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"

export default function Services() {
  const { t } = useLanguage()
  const [hoveredPack, setHoveredPack] = useState<number | null>(null)

  const packs = [
    {
      title: "Réseaux Sociaux",
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
      hoverContent: "10 visuels animés, 5 stories, bannière design → cohérence visuelle et impact immédiat",
    },
    {
      title: "Vidéo Premium",
      icon: "🎬",
      color: "from-violet-500 to-purple-500",
      hoverContent: "Vidéo 4K + montage dynamique → storytelling professionnel pour Instagram/YouTube",
    },
    {
      title: "Shooting Photo Pro",
      icon: "📸",
      color: "from-amber-500 to-orange-500",
      hoverContent: "2h de shooting pro + 15 photos HD retouchées → qualité et rapidité",
    },
    {
      title: "Site Vitrine Clé en Main",
      icon: "🌐",
      color: "from-green-500 to-emerald-500",
      hoverContent: "5 pages + SEO de base + formulaire → visibilité et efficacité commerciale",
    },
  ]

  const customServices = [
    { name: t("services.businessCards"), icon: "💼" },
    { name: t("services.banners"), icon: "🎨" },
    { name: t("services.presentations"), icon: "📊" },
    { name: t("services.flyers"), icon: "📄" },
    { name: t("services.mockups"), icon: "🖥️" },
    { name: t("services.videoProduction"), icon: "🎥" },
    { name: t("services.photoShooting"), icon: "📷" },
    { name: t("services.productMockups"), icon: "📦" },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-8">
            <span className="bg-primary-gradient bg-clip-text text-transparent">{t("services.title")}</span>
          </h2>
        </motion.div>

        {/* Interactive Packs */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-title font-bold text-white mb-12 text-center"
          >
            {t("services.packs")}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packs.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredPack(index)}
                onMouseLeave={() => setHoveredPack(null)}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-8 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/50 transition-all duration-500 shadow-card hover:shadow-card-hover h-64 flex flex-col items-center justify-center text-center overflow-hidden">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pack.icon}
                  </div>
                  <h4 className="text-xl font-title font-semibold text-text mb-4 group-hover:text-primary-start transition-colors duration-300">
                    {pack.title}
                  </h4>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredPack === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-primary-start/95 to-primary-end/95 backdrop-blur-sm rounded-card flex items-center justify-center p-6"
                      >
                        <p className="text-white font-body text-sm leading-relaxed text-center">{pack.hoverContent}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-title font-bold text-white mb-12 text-center"
          >
            {t("services.custom")}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                className="p-6 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/30 transition-all duration-300 text-center group shadow-card hover:shadow-card-hover"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <p className="text-text-secondary text-sm font-body font-medium leading-relaxed">{service.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
