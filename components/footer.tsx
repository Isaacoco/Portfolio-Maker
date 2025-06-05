"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <div className="text-3xl font-title font-bold bg-primary-gradient bg-clip-text text-transparent mb-4">
              IE
            </div>
          </div>
          <p className="text-text-muted font-body">© Isaac El Baze 2025 | {t("footer.copyright")}</p>
        </motion.div>
      </div>
    </footer>
  )
}
