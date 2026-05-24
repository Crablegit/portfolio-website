"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:quangminhle2101@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("contact.name")}
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-navy-50 dark:bg-navy-800 border-navy-200 dark:border-navy-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("contact.email")}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-navy-50 dark:bg-navy-800 border-navy-200 dark:border-navy-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("contact.message")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 rounded-md bg-navy-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none resize-none"
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">{t("contact.directContact")}</h3>

            <motion.a
              href="mailto:quangminhle2101@gmail.com"
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 hover:border-emerald-500 transition-colors"
            >
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">quangminhle2101@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:0385498375"
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-50 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 hover:border-emerald-500 transition-colors"
            >
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">038 549 8375</p>
              </div>
            </motion.a>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                © 2025 Le Minh Quang. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
