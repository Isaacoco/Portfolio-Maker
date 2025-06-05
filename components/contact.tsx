"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "isaacelbaze.job2025@gmail.com",
      link: "mailto:isaacelbaze.job2025@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+33 6 52 15 55 68",
      link: "tel:+33652155568",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: t("contact.location"),
      link: "#",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Isaac El Baze",
      link: "https://linkedin.com/in/isaac-el-baze",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-dark-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-8">
            <span className="bg-primary-gradient bg-clip-text text-transparent">{t("contact.title")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-6 p-8 bg-card-gradient backdrop-blur-sm rounded-card border border-white/5 hover:border-primary-start/50 transition-all duration-300 group shadow-card hover:shadow-card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="text-primary-start group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-text font-title font-medium text-lg">{info.title}</p>
                  <p className="text-text-secondary font-body">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-text font-title font-medium mb-3 text-lg">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-card-gradient backdrop-blur-sm border border-white/10 rounded-card text-text placeholder-text-muted focus:outline-none focus:border-primary-start transition-colors duration-300 font-body"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text font-title font-medium mb-3 text-lg">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-card-gradient backdrop-blur-sm border border-white/10 rounded-card text-text placeholder-text-muted focus:outline-none focus:border-primary-start transition-colors duration-300 font-body"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text font-title font-medium mb-3 text-lg">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-card-gradient backdrop-blur-sm border border-white/10 rounded-card text-text placeholder-text-muted focus:outline-none focus:border-primary-start transition-colors duration-300 resize-none font-body"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-primary-gradient hover:shadow-glow text-white font-body font-medium py-4 px-8 rounded-card transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-card"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t("contact.send")}</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
